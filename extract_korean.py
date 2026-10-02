import re
import json

def extract_text():
    with open(r'C:\Users\yongs\.gemini\antigravity\brain\4a71ca4f-470a-4ef5-ba2f-1928efae3b98\.system_generated\steps\15\content.md', 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # Try to find all JSON-like strings
    matches = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', html)
    with open('output_korean.txt', 'w', encoding='utf-8') as out:
        for m in matches:
            try:
                decoded = m.encode().decode('unicode_escape')
                if len(re.findall(r'[\uac00-\ud7a3]', decoded)) > 10:
                    out.write(decoded + '\n\n')
            except:
                pass

extract_text()
