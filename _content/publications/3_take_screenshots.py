# -*- coding: utf-8 -*-
"""
Created on Fri Jul 31 12:10:51 2020

@author: nt0ny
"""


import os
from bs4 import BeautifulSoup
import urllib
import collections
import json
import subprocess
import time

with open('publications.json', 'r') as f:
    pubs = json.load(f)

for i, pub in enumerate(pubs):
    print(pub['doi'])

    subprocess.run(['google-chrome', 
        '--headless', 
        f'--screenshot={i + 1}.png',
        f"https://pubmed.ncbi.nlm.nih.gov/{pub['pmid']}/"])
        #f"https://doi.org/{pub['doi']}"])

    time.sleep(5)

    #break