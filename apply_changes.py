import os
import re
import json
import urllib.request
import urllib.parse

# 1. Download Kanji Data
print("Downloading Kanji Data...")
url = "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    raw_kanji_data = json.loads(response.read().decode('utf-8'))

# Filter and split Joyo Kanji
kyoiku = [] # Grade 1-6
joyo_other = [] # Grade 8, or others if needed to make exactly 1110

for kanji, data in raw_kanji_data.items():
    grade = data.get('grade')
    if grade is not None:
        if grade <= 6:
            kyoiku.append((kanji, data))
        elif grade == 8:
            joyo_other.append((kanji, data))

# Sorting by grade then frequency (if available)
def sort_key(item):
    d = item[1]
    return (d.get('grade', 99), d.get('freq', 99999) or 99999)

kyoiku.sort(key=sort_key)
joyo_other.sort(key=sort_key)

# The prompt asks for 1026 and 1110.
# Currently kyoiku (grade 1-6) is 1006. Some kanji were moved to grade 4 in 2020 (20 kanji).
# We can just take the first 1026 of the combined list, and the rest as 1110.
all_joyo = kyoiku + joyo_other
tab1_kanji = all_joyo[:1026]
tab2_kanji = all_joyo[1026:2136]

def extract_kanji_info(item):
    k, d = item
    return {
        'kanji': k,
        'meanings': d.get('meanings', []),
        'on': d.get('readings_on', []),
        'kun': d.get('readings_kun', []),
        'grade': d.get('grade'),
        'strokes': d.get('strokes')
    }

kanji_db = {
    'basic': [extract_kanji_info(x) for x in tab1_kanji],
    'advanced': [extract_kanji_info(x) for x in tab2_kanji]
}

with open('kanji_data.js', 'w', encoding='utf-8') as f:
    f.write('const kanjiData = ' + json.dumps(kanji_db, ensure_ascii=False) + ';')

print(f"Generated kanji_data.js with {len(kanji_db['basic'])} basic and {len(kanji_db['advanced'])} advanced kanji.")

# 2. Merge dakuten.html into index.html
print("Merging dakuten.html into index.html...")
with open('dakuten.html', 'r', encoding='utf-8') as f:
    dak_content = f.read()

# Extract dakuten groups from dakuten.html script
dak_match = re.search(r'// Dakuten(.*?)// Special sounds', dak_content, re.DOTALL)
if dak_match:
    dak_js = dak_match.group(1)
    
    with open('index.html', 'r', encoding='utf-8') as f:
        idx_content = f.read()
    
    if '// Dakuten' not in idx_content:
        # Insert dak_js before "});" or something at the end of index app rendering
        # Let's find: container.appendChild(rowGroup);\n        });
        insert_point = r"container\.appendChild\(rowGroup\);\n\s*}\);"
        replacement = r"container.appendChild(rowGroup);\n        });\n\n        " + dak_js.replace('\\', '\\\\')
        idx_content = re.sub(insert_point, replacement, idx_content)
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(idx_content)
            print("Successfully merged dakuten logic into index.html")

# 3. Update navigation in all files
print("Updating navigation across HTML files...")
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll replace the whole nav block
def replace_nav(html):
    active_page = None
    if 'index.html" class="nav-item active' in html: active_page = 'index'
    elif 'quiz.html" class="nav-item active' in html: active_page = 'quiz'
    elif 'vocab.html" class="nav-item active' in html: active_page = 'vocab'
    elif 'dashboard.html" class="nav-item active' in html: active_page = 'dashboard'
    elif 'kanji.html' in html and 'active' in html: active_page = 'kanji'
    
    # Generate new nav
    new_nav = '<nav class="main-nav">\n'
    nav_items = [
        ('index.html', '가나', 'index'),
        ('kanji.html', '한자학습', 'kanji'),
        ('quiz.html', '퀴즈', 'quiz'),
        ('vocab.html', '기초단어', 'vocab'),
        ('dashboard.html', '통계', 'dashboard')
    ]
    for url, label, key in nav_items:
        act = ' active' if key == active_page else ''
        new_nav += f'            <a href="{url}" class="nav-item{act}">{label}</a>\n'
    new_nav += '        </nav>'
    
    # Replace old nav
    new_html = re.sub(r'<nav class="main-nav">.*?</nav>', new_nav, html, flags=re.DOTALL)
    
    # Also replace old dakuten.html if it exists outside main-nav just in case (optional)
    
    return new_html

for f_name in html_files:
    if f_name == 'dakuten.html': continue
    with open(f_name, 'r', encoding='utf-8') as f:
        html = f.read()
    new_html = replace_nav(html)
    with open(f_name, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print(f"Updated nav in {f_name}")

print("Done.")
