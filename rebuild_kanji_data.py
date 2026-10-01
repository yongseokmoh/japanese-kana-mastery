import json
import urllib.request
import time
from deep_translator import GoogleTranslator
from kana_to_hangul import kana_to_hangul

print("Loading Kanji Data...")
url = "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    raw_kanji_data = json.loads(response.read().decode('utf-8'))

kyoiku = []
joyo_other = []

for kanji, data in raw_kanji_data.items():
    grade = data.get('grade')
    if grade is not None:
        if grade <= 6:
            kyoiku.append((kanji, data))
        elif grade == 8:
            joyo_other.append((kanji, data))

def sort_key(item):
    d = item[1]
    return (d.get('grade', 99), d.get('freq', 99999) or 99999)

kyoiku.sort(key=sort_key)
joyo_other.sort(key=sort_key)
all_joyo = kyoiku + joyo_other
tab1_kanji = all_joyo[:1026]
tab2_kanji = all_joyo[1026:2136]

meanings_to_translate = []
for k, d in all_joyo[:2136]:
    meanings = d.get('meanings', [])
    if meanings:
        meanings_to_translate.append(" / ".join(meanings))
    else:
        meanings_to_translate.append(" ") # Avoid completely empty string which might break batching alignment

print(f"Translating {len(meanings_to_translate)} meanings to Korean...")
translator = GoogleTranslator(source='en', target='ko')

translated_meanings = []
batch_size = 200 # 200 items is well within 5000 characters.

for i in range(0, len(meanings_to_translate), batch_size):
    batch = meanings_to_translate[i:i+batch_size]
    try:
        res = translator.translate_batch(batch)
        translated_meanings.extend(res)
    except Exception as e:
        print(f"Translation error at batch {i}: {e}")
        # fallback to english if error
        translated_meanings.extend(batch)
    
    print(f"Translated {min(i+batch_size, len(meanings_to_translate))}/{len(meanings_to_translate)}")
    time.sleep(5) # Wait 5 seconds between requests to avoid rate limits

print("Translation complete!")

def extract_kanji_info_with_trans(item, trans_mean):
    k, d = item
    on_readings = d.get('readings_on', [])
    kun_readings = d.get('readings_kun', [])
    
    on_list = []
    for r in on_readings:
        on_list.append({'ja': r, 'ko': kana_to_hangul(r)})
    kun_list = []
    for r in kun_readings:
        kun_list.append({'ja': r, 'ko': kana_to_hangul(r)})
        
    return {
        'kanji': k,
        'meaning_ko': trans_mean.strip() if trans_mean else "",
        'on': on_list,
        'kun': kun_list,
        'grade': d.get('grade'),
        'strokes': d.get('strokes')
    }

kanji_db = {'basic': [], 'advanced': []}

idx = 0
for item in tab1_kanji:
    kanji_db['basic'].append(extract_kanji_info_with_trans(item, translated_meanings[idx]))
    idx += 1
for item in tab2_kanji:
    kanji_db['advanced'].append(extract_kanji_info_with_trans(item, translated_meanings[idx]))
    idx += 1

with open('kanji_data.js', 'w', encoding='utf-8') as f:
    f.write('const kanjiData = ' + json.dumps(kanji_db, ensure_ascii=False) + ';')

print("Regenerated kanji_data.js with translations and hangul readings.")
