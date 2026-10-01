import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We want to replace the whole <nav class="main-nav">...</nav> block
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extract the current active page
    active_match = re.search(r'<a href="([^"]+)" class="nav-item[^"]*active[^"]*">', content)
    active_file = active_match.group(1) if active_match else None
    
    # New nav structure
    nav_items = [
        ('index.html', '가나'),
        ('kanji.html', '한자'),
        ('quiz.html', '퀴즈'),
        ('vocab.html', '단어'),
        ('stations.html', '전철'),
        ('dashboard.html', '보드')
    ]
    
    new_nav = '<nav class="main-nav">\n'
    for url, label in nav_items:
        active_class = ' active' if url == active_file else ''
        new_nav += f'                <a href="{url}" class="nav-item{active_class}">{label}</a>\n'
    new_nav += '            </nav>'
    
    # Regex replace
    content = re.sub(r'<nav class="main-nav">.*?</nav>', new_nav, content, flags=re.DOTALL)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Updated nav in {f}")
