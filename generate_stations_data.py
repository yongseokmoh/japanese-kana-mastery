import urllib.request
import urllib.parse
import json
import time
import pykakasi
from kana_to_hangul import kana_to_hangul

kks = pykakasi.kakasi()

def get_hira(text):
    return "".join([c['hira'] for c in kks.convert(text)])

print("Fetching lines...")
url_lines = "http://express.heartrails.com/api/json?method=getLines&prefecture=" + urllib.parse.quote("東京都")
req = urllib.request.Request(url_lines, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    lines_data = json.loads(response.read().decode('utf-8'))

lines = lines_data['response']['line']

# There are ~90 lines. We don't want to rate limit the API or take forever. Let's just fetch them with a small delay.
db = []

for idx, line in enumerate(lines):
    # removed print
    url_stations = "http://express.heartrails.com/api/json?method=getStations&line=" + urllib.parse.quote(line)
    
    try:
        req_st = urllib.request.Request(url_stations, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_st) as res:
            st_data = json.loads(res.read().decode('utf-8'))
        
        stations = st_data['response']['station']
        
        line_hira = get_hira(line)
        line_ko = kana_to_hangul(line_hira)
        
        st_list = []
        for s in stations:
            # ONLY include stations that are in Tokyo (some lines span multiple prefectures)
            if s['prefecture'] != '東京都':
                continue
                
            st_name = s['name']
            st_hira = get_hira(st_name)
            st_ko = kana_to_hangul(st_hira)
            st_list.append({
                'name': st_name,
                'kana': st_hira,
                'ko': st_ko
            })
            
        if st_list:
            db.append({
                'line_name': line,
                'line_kana': line_hira,
                'line_ko': line_ko,
                'stations': st_list
            })
            
    except Exception as e:
        pass
    
    time.sleep(0.3)

with open('stations_data.js', 'w', encoding='utf-8') as f:
    f.write("const stationsData = " + json.dumps(db, ensure_ascii=False) + ";")

print("Generated stations_data.js with {} lines.".format(len(db)))
