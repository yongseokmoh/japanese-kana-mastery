import os
import glob

def update_nav():
    html_files = glob.glob('*.html')
    for f in html_files:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        if 'grammar.html' not in content and 'class="main-nav"' in content:
            content = content.replace('</nav>', '    <a href="grammar.html" class="nav-item">문법</a>\n            </nav>')
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")

update_nav()
