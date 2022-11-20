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
import boto3
from botocore.exceptions import ClientError
import gzip
import base64
import shutil

# make if non existent
for file in os.listdir('../../src/data/people'):
    if 'mdx' not in file:
        continue
    
    imgfile = file.replace('mdx', 'jpg')
    
    if not os.path.isfile(imgfile):
        print(imgfile)
        shutil.copy('generic.jpg', imgfile)
        

for file in os.listdir():
    if not file.endswith('jpg'):
        continue
    
    with open(file, 'rb') as f:
        d = f.read()
        
    d = base64.b64encode(d)
    
    file = f'{file}.b64'
    
    with open(file, 'wb') as f:
        f.write(d)
        
   

for file in os.listdir():
    if 'jpg' not in file:
        continue
    

    obj = f'api/v5/images/people/{file}'
    
    s3_client = boto3.client('s3')
    
    try:
        response = s3_client.upload_file(file, 'www-columbia-icg-data', obj)
    except ClientError as e:
        logging.error(e)