import json
import pykakasi
import sys
sys.path.append('.')
from kana_to_hangul import kana_to_hangul
from build_grammar_data import conjugation_data, particle_data, pattern_data

kks = pykakasi.kakasi()

def to_kana(text):
    result = kks.convert(text)
    return ''.join([item['hira'] for item in result])

def to_ko(text):
    # Fix particle pronunciation in specific cases if possible, but basic kana_to_hangul is ok
    kana = to_kana(text)
    # Basic particle fixes for common isolated ones, though contextual is hard.
    # Actually, we can just use kana_to_hangul on the kana string.
    hangul = kana_to_hangul(kana)
    # Fix common particle issues in sentences
    hangul = hangul.replace('하 ', '와 ')
    hangul = hangul.replace('오 ', '오 ')
    return hangul

for verb in conjugation_data:
    # Add ko reading for dictionary form
    verb['reading_ko'] = kana_to_hangul(verb['reading'])
    for form_key, form_data in verb['forms'].items():
        val = form_data['value']
        kana = to_kana(val)
        form_data['value_kana'] = kana
        form_data['value_ko'] = kana_to_hangul(kana)

for p in particle_data:
    p['sentence_skeleton_kana'] = to_kana(p['sentence_skeleton'])
    p['sentence_skeleton_ko'] = to_ko(p['sentence_skeleton'])
    
for pat in pattern_data:
    for drill in pat['drill_sentences']:
        drill['full_sentence_kana'] = to_kana(drill['full_sentence'])
        drill['full_sentence_ko'] = to_ko(drill['full_sentence'])

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write("const grammarData = {\n")
    f.write('  "conjugation_data": ' + json.dumps(conjugation_data, ensure_ascii=False, indent=2) + ',\n')
    f.write('  "particle_data": ' + json.dumps(particle_data, ensure_ascii=False, indent=2) + ',\n')
    f.write('  "pattern_data": ' + json.dumps(pattern_data, ensure_ascii=False, indent=2) + '\n')
    f.write("};\n")

print("Augmented grammar_data.js successfully.")
