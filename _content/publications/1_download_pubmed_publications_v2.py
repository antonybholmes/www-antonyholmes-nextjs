# -*- coding: utf-8 -*-
"""
Created on Fri Jul 31 12:10:51 2020

@author: nt0ny
"""


import frontmatter
import os
from bs4 import BeautifulSoup
import urllib.request
import collections
import json
import time
import re

max_records = 1000

search_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=xml&term="institute%20for%20cancer%20genetics"&field=affiliation&sort=pub+date&usehistory=y&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'
#fetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={}&retmode=xml&rettype=abstract&WebEnv={}&query_key={}&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'
fetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&rettype=abstract&WebEnv={}&query_key={}&api_key=fd2a5fb8bbf75480b2371d464d6e7dd95f08'

month_map = {'jan':1, 
             'feb':2, 
             'mar':3, 
             'apr':4, 
             'may':5, 
             'jun':6, 
             'jul':7, 
             'aug':8, 
             'sep':9, 
             'oct':10, 
             'nov':11, 
             'dec':12}

def to_string(root, element, default=''):
    item = root
    
    for e in element.split('.'):
        item = item.find(e)
        
        if item is None:
            return default
        
    return item.text


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
        name_map['{} {}'.format(search[0].lower(), search[1]).lower()] = post['personId']
        name_map['{} {}'.format(search[0][0].lower(), search[1]).lower()] = post['personId']
    
    is_faculty = 'Faculty' in post['groups'] or 'Associate Members' in post['groups']

    
    if is_faculty:
        faculty_map['{} {}'.format(firstName.lower(), lastName).lower()] = post['personId']
        faculty_map['{} {}'.format(firstName[0].lower(), lastName).lower()] = post['personId']
        
        if len(search) > 0:
            faculty_map['{} {}'.format(search[0].lower(), search[1]).lower()] = post['personId']
            faculty_map['{} {}'.format(search[0][0].lower(), search[1]).lower()] = post['personId']
    
    #break



print('Downloading...')

print(search_url)
tree = BeautifulSoup(urllib.request.urlopen(search_url).read(), 'lxml')

webenv = tree.webenv.string
querykey = tree.querykey.string

url = fetch_url.format(webenv, querykey)
    
print(url)
    
fetch_tree = BeautifulSoup(urllib.request.urlopen(url).read(), 'lxml')

with open('pubmed.xml', 'w',  encoding="utf-8") as f:
    f.write(fetch_tree.prettify()) #json.dump(fetch_tree, f, indent=2)