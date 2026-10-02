import json
import time
import translators as ts
from kana_to_hangul import kana_to_hangul

def load_data(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

print("Loading data...")
n5 = load_data('n5.json')
n4 = load_data('n4.json')
n3 = load_data('n3.json')

all_words = n5 + n4 + n3
selected_words = all_words[:2000]

print(f"Selected {len(selected_words)} words.")

batch_size = 50
translated_meanings = []

print("Translating meanings...")
for i in range(0, len(selected_words), batch_size):
    batch = selected_words[i:i+batch_size]
    meanings = [w.get('meaning', '').replace('|', ',') for w in batch]
    text_to_translate = " ||| ".join(meanings)
    
    success = False
    retries = 3
    while not success and retries > 0:
        try:
            res = ts.translate_text(text_to_translate, translator='bing', from_language='en', to_language='ko')
            translated = res.split('|||')
            
            # Fallback if split count doesn't match
            if len(translated) != len(batch):
                print(f"Mismatch in batch {i}: expected {len(batch)}, got {len(translated)}. Trying google...")
                res = ts.translate_text(text_to_translate, translator='google', from_language='en', to_language='ko')
                translated = res.split('|||')
                
            if len(translated) != len(batch):
                # If still failing, pad with english
                translated = translated[:len(batch)] + [meanings[k] for k in range(len(translated), len(batch))]
                
            translated_meanings.extend([t.strip() for t in translated])
            success = True
        except Exception as e:
            print(f"Error at batch {i}: {e}")
            retries -= 1
            time.sleep(2)
            
    if not success:
        print(f"Failed to translate batch {i}, using English...")
        translated_meanings.extend(meanings)
        
    print(f"Progress: {min(i+batch_size, len(selected_words))}/{len(selected_words)}")
    time.sleep(0.5)

vocab_list = []
icons = ['☀️', '🙏', '👋', '⭕', '❌', '🍣', '🐱', '🐶', '📚', '🏫', '📝', '🏃', '🗣️', '💭', '🌟', '💡', '✅', '🎌']

for i, w in enumerate(selected_words):
    jp = w.get('word', '')
    if not jp:
        jp = w.get('furigana', '')
    read_kana = w.get('furigana', '')
    kr = translated_meanings[i] if i < len(translated_meanings) else w.get('meaning', '')
    
    kr_read = kana_to_hangul(read_kana)
    romaji = w.get('romaji', '')
    
    icon = icons[i % len(icons)]
    
    vocab_list.append({
        'jp': jp,
        'read': f"{kr_read} ({romaji})",
        'kr': kr,
        'icon': icon
    })

js_content = "const vocabData = " + json.dumps(vocab_list, ensure_ascii=False, indent=2) + ";\n"

with open('vocab_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Created vocab_data.js successfully!")
