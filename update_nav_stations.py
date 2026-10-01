import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'stations.html' not in content:
        # Insert before dashboard.html
        content = content.replace('<a href="dashboard.html"', '<a href="stations.html" class="nav-item">도쿄전철역</a>\n                <a href="dashboard.html"')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
