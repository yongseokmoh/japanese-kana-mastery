import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We will just do targeted string replacements for the `p: [...]` arrays.

replacements = {
    # か행
    "p: ['카', '키', '쿠', '케', '코']": "p: ['카(까)', '키(끼)', '쿠(꾸)', '케(께)', '코(꼬)']",
    # た행
    "p: ['타', '치', '쓰', '테', '토']": "p: ['타(따)', '치(찌)', '쓰(츠/쯔)', '테(떼)', '토(또)']",
    # は행 (for ふ)
    "p: ['하', '히', '후', '헤', '호']": "p: ['하', '히', '후(푸)', '헤', '호']",
    
    # ぱ행 (Pa)
    "p: ['파', '피', '푸', '페', '포']": "p: ['파(빠)', '피(삐)', '푸(뿌)', '페(뻬)', '포(뽀)']",
    
    # 요음 (Youon) - Kya
    "p: ['캬', '큐', '쿄']": "p: ['캬(꺄)', '큐(뀨)', '쿄(꾜)']",
    # Cha
    "p: ['차', '추', '초']": "p: ['차(짜)', '추(쭈)', '초(쪼)']",
    # Pya
    "p: ['퍄', '퓨', '표']": "p: ['퍄(뺘)', '퓨(쀼)', '표(뾰)']",
    
    # ん (N)
    "p: ['응', '', '', '', '']": "p: ['응(ㄴ/ㅁ/ㅇ)', '', '', '', '']"
}

for old, new in replacements.items():
    content = content.replace(old, new)
    
# Let's also check if standard is '챠' instead of '차' for Cha youon.
content = content.replace("p: ['챠', '츄', '쵸']", "p: ['챠(쨔)', '츄(쮸)', '쵸(쬬)']")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pronunciation updated successfully.")
