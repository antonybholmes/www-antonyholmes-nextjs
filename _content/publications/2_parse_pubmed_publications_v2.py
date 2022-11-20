# -*- coding: utf-8 -*-
"""
Created on Fri Jul 31 12:10:51 2020

@author: nt0ny
"""


import frontmatter
import os
from bs4 import BeautifulSoup
import urllib
import collections
import json
import time
import re

max_records = 1000

search_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=xml&term="institute%20for%20cancer%20genetics"&field=affiliation&sort=pub+date&usehistory=y&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'
#fetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={}&retmode=xml&rettype=abstract&WebEnv={}&query_key={}&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'
fetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&rettype=abstract&WebEnv={}&query_key={}&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'

month_map = {'jan': 1,
             'feb': 2,
             'mar': 3,
             'apr': 4,
             'may': 5,
             'jun': 6,
             'jul': 7,
             'aug': 8,
             'sep': 9,
             'oct': 10,
             'nov': 11,
             'dec': 12}


def to_string(root, element='', default=''):
    item = root

    if element != "":
        for e in element.split('.'):
            item = item.find(e)

            if item is None:
                return default

    return item.text.replace('\n', '').replace('\r', '').strip()


def to_month(text):
    if isinstance(text, int):
        return text

    if re.match(r'\d+', text):
        return int(text)

    text = text.lower()

    if text in month_map:
        return month_map[text]
    else:
        return -1


dir = '../people'

people = []

name_map = {}
faculty_map = {}

for file in os.listdir(dir):
    if '.md' not in file:
        continue

    print(file)

    post = frontmatter.load(os.path.join(dir, file))

    print(post)

    search = []

    for t in post['tags']:
        if 'alt-pubmed-author' in t:
            search = t.replace('alt-pubmed-author::', '').split(' ')
            break

    firstName = post['name'].split(' ')[0].lower()
    lastName = post['name'].split(' ')[-1].lower()
    name_map['{} {}'.format(firstName, lastName).lower()] = post['personId']
    name_map['{} {}'.format(firstName[0], lastName).lower()] = post['personId']

    if len(search) > 0:
        name_map['{} {}'.format(
            search[0].lower(), search[1]).lower()] = post['personId']
        name_map['{} {}'.format(search[0][0].lower(),
                                search[1]).lower()] = post['personId']

    is_faculty = 'Faculty' in post['groups'] or 'Associate Members' in post['groups']

    if is_faculty:
        faculty_map['{} {}'.format(
            firstName.lower(), lastName).lower()] = post['personId']
        faculty_map['{} {}'.format(
            firstName[0].lower(), lastName).lower()] = post['personId']

        if len(search) > 0:
            faculty_map['{} {}'.format(
                search[0].lower(), search[1]).lower()] = post['personId']
            faculty_map['{} {}'.format(
                search[0][0].lower(), search[1]).lower()] = post['personId']

    # break


with open('pubmed.xml', 'r', encoding="utf-8") as f:
    fetch_tree = BeautifulSoup(f.read(), 'lxml')

print('Processing...')

all_articles = collections.defaultdict(list)

articles = []
memberArticles = []

titles = set()

for item in fetch_tree.find_all('pubmedarticle'):
    is_cumc = False
    is_icg = False

    tags = ['article']

    id = to_string(item, 'pmid')  # int(item.pmid.string)
    pmcid = ""
    doi = ""

    for iditem in item.articleidlist.find_all('articleid'):
        if iditem['idtype'] == "pmc":
            pmcid = to_string(iditem)

        if iditem['idtype'] == "doi":
            doi = to_string(iditem)

    #journal = fetch_tree.journal.title.string
    journal = to_string(item, 'journal.isoabbreviation').replace(
        '.', '').replace('U S A', 'USA')

    year = int(to_string(item, 'journal.journalissue.pubdate.year', -1))
    month = to_month(to_string(item, 'journal.journalissue.pubdate.month', -1))
    day = int(to_string(item, 'journal.journalissue.pubdate.day', -1))

    if year == -1:
        year = int(to_string(item, 'pubmeddata.history.pubmedpubdate.year', -1))
        month = to_month(
            to_string(item, 'pubmeddata.history.pubmedpubdate.month', -1))
        day = int(to_string(item, 'pubmeddata.history.pubmedpubdate.day', -1))

    if year == -1:
        year = int(to_string(item, 'datecompleted.year', -1))
        month = to_month(to_string(item, 'datecompleted.month', -1))
        day = int(to_string(item, 'datecompleted.day', -1))

    if year == -1:
        year = int(to_string(item, 'daterevised.year', -1))
        month = to_month(to_string(item, 'daterevised.month', -1))
        day = int(to_string(item, 'daterevised.day', -1))

    volume = to_string(item, 'journal.journalissue.volume')
    issue = to_string(item, 'journal.journalissue.issue')

    title = to_string(item, 'article.articletitle')
    title = re.sub(r'\.$', '', title)

    titles.add(title)

    abstract = to_string(item, 'article.abstract.abstracttext')

    pages = to_string(item, 'medlinepgn')

    pages = re.sub(r'\..+', '', pages)

    authors = []
    labs = []
    members = []
    isMember = False

    for author in item.find_all('author'):
        forename = re.sub(r' .+', '', to_string(author, 'forename'))
        lastname = to_string(author, 'lastname')
        initials = to_string(author, 'initials')

        # skip blank authors
        if len(forename) < 2 and len(initials) < 1:
            continue

        name = '{} {}'.format(forename.lower()[0], lastname.lower())

        email = ""

        affiliations = author.find_all('affiliation')

        for affiliation in affiliations:
            if not is_cumc:
                is_cumc = 'columbia university' in affiliation.string.lower()

            if not is_icg:
                is_icg = 'institute for cancer genetics' in affiliation.string.lower() and is_cumc

            # find email addresses
            matcher = re.search(r'([\w\.-]+@[\w\.-]+\w)', affiliation.string)

            if matcher:
                email = matcher.group(1)

        if name in name_map:
            isMember = True

            if name_map[name] not in members:
                members.append(name_map[name])

            if name in faculty_map and faculty_map[name] not in labs:
                labs.append(faculty_map[name])

        # finally use name as reference
        name = '{} {}'.format(lastname, initials)

        authors.append(name)

    if is_cumc:
        tags.append('columbia')

    if is_icg:
        tags.append('icg')

    
    article = {'pmid': id,
                'pmcid': pmcid,
                'doi': doi,
                'title': title,
                'abstract': abstract,
                'authorList': authors,
                'authors': ', '.join(authors),
                'journal': journal,
                'year': year,
                'month': month,
                'day': day,
                'volume': volume,
                'issue': issue,
                'pages': pages,
                'tagList': tags,
                'url': '',
                'labList': labs,
                'peopleList': members}

    if is_cumc or is_icg:
        articles.append(article)

        for member in members:
            all_articles[member].append(article)
    else:
        print('cannot', title)

    isRdf = 'favera' in article['authors'].lower() or 'basso' in article['authors'].lower() or 'pasqualucci' in article['authors'].lower()

    if isRdf and isMember:
        memberArticles.append(article)
   

    # time.sleep(1)
    # break

with open('all.json', 'w') as outfile:
    json.dump(articles, outfile, indent=2)

with open('publications.json', 'w') as outfile:
    json.dump(memberArticles, outfile, indent=2)

# for member in all_articles:
#     os.makedirs(f'../../tmp/publications/{member}/', exist_ok=True)
#     with open(f'../../tmp/publications/{member}/all.json', 'w') as outfile:
#         json.dump(all_articles[member], outfile, indent=2)
