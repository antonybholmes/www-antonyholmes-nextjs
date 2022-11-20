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
from PIL import Image

for i in range(1, 21):
  im = Image.open(f"{i}.png")
  
  # Size of the image in pixels (size of original image)
  # (This is not mandatory)
  width, height = im.size
  
  # Setting the points for cropped image
  left = 0
  top = 350
  right = 770
  bottom = 600
  
  # Cropped image of above dimension
  # (It will not change original image)
  im1 = im.crop((left, top, right, bottom))
  
  # Shows the image in image viewer
  im1.save(f'{i}_cropped.png')