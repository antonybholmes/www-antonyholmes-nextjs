import pandas as pd
import json
import re

pubs = []
pub = None
buffer = ''
bufferMode = ''

with open('medline.txt', 'r') as f:
    for line in f:
        code = line[0:4].strip()
        data = line[6:].strip()

        match code:
            case 'PMID':
                pub = {}
                pubs.append(pub)
                pmid = re.search(r'(\d+)', data).group(1)
                pub['pmid'] = pmid
                pub['authorList'] = []
                pub['year'] = -1
                pub['month'] = -1
                pub['day'] = -1
            case 'PMC':
                pub['pmcid'] = re.search(r'(PMC\d+)', data).group(1)
            case 'AID':
                if '[doi]' in data:
                    pub['doi'] = re.search(r'(10[^ ]+)', data).group(1)
            case 'TI':
                buffer = ''
                bufferMode = 'title'
            case 'JT':
                pub['journal'] = data.replace(
                    'Proceedings of the National Academy of Sciences of the United States of', 'Proceedings of the National Academy of Sciences')
            case 'AU':
                pub['authorList'].append(data)
            case 'DP':
                pub['year'] = int(re.search(r'(\d{4})', data).group(1))
            case 'DEP':
                pub['year'] = int(data[0:4])
                pub['month'] = int(data[4:6])
                pub['day'] = int(data[6:8])
            case 'VI':
                pub['volume'] = data
            case 'AB':
                buffer = ''
                bufferMode = 'abstract'
            case _:
                pass

        if bufferMode:
            if code != '' and buffer != '':
                match bufferMode:
                    case 'title':
                        pub['title'] = buffer.strip().replace('.', '')
                    case 'abstract':
                        pub['abstract'] = buffer.strip()
                    case _:
                        pass

                buffer = ''
                bufferMode = ''
            else:
                buffer += ' ' + data

for pub in pubs:
    pub['authors'] = ', '.join(pub['authorList'])

with open('publications.json', 'w') as f:
    json.dump(pubs, f, indent=2)
