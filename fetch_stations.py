import urllib.request
import urllib.parse
import json
import time

query = """
SELECT ?station ?stationLabel ?kana WHERE {
  ?station wdt:P31/wdt:P279* wd:Q55488 ;
           wdt:P131* wd:Q1490 ;
           wdt:P1814 ?kana .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "ja". }
}
"""
url = "https://query.wikidata.org/sparql?query=" + urllib.parse.quote(query) + "&format=json"

req = urllib.request.Request(url, headers={'User-Agent': 'Antigravity/1.0 (test)'})
print("Fetching from Wikidata...")
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode('utf-8'))

stations = []
for item in data['results']['bindings']:
    name = item['stationLabel']['value']
    kana = item['kana']['value']
    stations.append({'name': name, 'kana': kana})

with open('tokyo_stations.json', 'w', encoding='utf-8') as f:
    json.dump(stations, f, ensure_ascii=False, indent=2)

print(f"Saved {len(stations)} stations.")
