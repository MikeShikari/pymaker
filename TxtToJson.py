import sys
import json



def Convert():
    res = dict()
    acts = list()
    with open(sys.argv[1], 'r') as txt:
        a = [line.strip() for line in txt]
        for line in a:
            if line.startswith('Case'):
                res['Case'] = line.replace(' ', '')[5:]
            elif line.startswith('Url'):
                res['Url'] = line.replace(' ', '')[4:]
            elif line.startswith('Actions'):
                res['Actions'] = acts
            elif line[0].isdigit():
                line = line.replace(' ', '')
                line = line[2:]
                if line[0].isdigit():
                    line = line[1:]
                print (f'ACTION LINE {line}')
                act = dict()
                optDict = dict()
                opts = line[line.find('('):(line.find(')')+1)]
                act['action'] = line[:line.find('(')]
                opts = opts.replace('(', '').replace(')', '')
                print(f'OPTS {opts}')
                if opts != '':
                    for i in opts.split(','):
                        print(i, 'I')
                        e = i.split(':')
                        print(e, 'E')
                        if e[1] == 'default':
                            e[1] = ''
                        if e[1] == 'true':
                            e[1] = True
                        if e[1] == 'false':
                            e[1] = False
                        optDict[e[0]] = e[1]
                
                print(f'OPTDICT {optDict}')
                act = {**act, **optDict}
                acts.append(act)


        # print(a)
        print(res)
    with open(f'{res["Case"]}.json', 'w') as jsonFile:
        json.dump(res,jsonFile)



if __name__ == '__main__':
    Convert()
