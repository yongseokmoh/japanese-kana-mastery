import json
import re

def realistic_hangul_v2(text):
    text = text.replace("JR", "제이아루")
    text = text.replace("TX", "티엑스")
    
    basic = {
        'あ':'아', 'い':'이', 'う':'우', 'え':'에', 'お':'오',
        'か':'카', 'き':'키', 'く':'쿠', 'け':'케', 'こ':'코',
        'さ':'사', 'し':'시', 'す':'스', 'せ':'세', 'そ':'소',
        'た':'타', 'ち':'치', 'つ':'츠', 'て':'테', 'と':'토',
        'な':'나', 'に':'니', 'ぬ':'누', 'ね':'네', 'の':'노',
        'は':'하', 'ひ':'히', 'ふ':'후', 'へ':'헤', 'ほ':'호',
        'ま':'마', 'み':'미', 'む':'무', 'め':'메', 'も':'모',
        'や':'야', 'ゆ':'유', 'よ':'요',
        'ら':'라', 'り':'리', 'る':'루', 'れ':'레', 'ろ':'로',
        'わ':'와', 'を':'오',
        'が':'가', 'ぎ':'기', 'ぐ':'구', 'げ':'게', 'ご':'고',
        'ざ':'자', 'じ':'지', 'ず':'즈', 'ぜ':'제', 'ぞ':'조',
        'だ':'다', 'ぢ':'지', 'づ':'즈', 'で':'데', 'ど':'도',
        'ば':'바', 'び':'비', 'ぶ':'부', 'べ':'베', 'ぼ':'보',
        'ぱ':'파', 'ぴ':'피', 'ぷ':'푸', 'ぺ':'페', 'ぽ':'포',
        'きゃ':'캬', 'きゅ':'큐', 'きょ':'쿄',
        'しゃ':'샤', 'しゅ':'슈', 'しょ':'쇼',
        'ちゃ':'챠', 'ちゅ':'츄', 'ちょ':'쵸',
        'にゃ':'냐', 'にゅ':'뉴', 'にょ':'뇨',
        'ひゃ':'햐', 'ひゅ':'휴', 'ひょ':'효',
        'みゃ':'먀', 'みゅ':'뮤', 'みょ':'묘',
        'りゃ':'랴', 'りゅ':'류', 'りょ':'료',
        'ぎゃ':'갸', 'ぎゅ':'규', 'ぎょ':'교',
        'じゃ':'쟈', 'じゅ':'쥬', 'じょ':'죠',
        'びゃ':'뱌', 'びゅ':'뷰', 'びょ':'뵤',
        'ぴゃ':'퍄', 'ぴゅ':'퓨', 'ぴょ':'표',
        '-': '-', 'ー': '-',
    }

    tokens = []
    i = 0
    keys = sorted(basic.keys(), key=len, reverse=True)
    
    while i < len(text):
        if text[i] == 'ん':
            tokens.append('ん')
            i += 1
            continue
        if text[i] == 'っ' or text[i] == 'ッ':
            tokens.append('っ')
            i += 1
            continue
            
        found = False
        for k in keys:
            if text.startswith(k, i):
                tokens.append(k)
                i += len(k)
                found = True
                break
        if not found:
            tokens.append(text[i])
            i += 1
            
    def get_vowel(kana):
        if kana in ['あ','か','さ','た','な','は','ま','や','ら','わ','が','ざ','だ','ば','ぱ','きゃ','しゃ','ちゃ','にゃ','ひゃ','みゃ','りゃ','ぎゃ','じゃ','びゃ','ぴゃ']: return 'a'
        if kana in ['い','き','し','ち','に','ひ','み','り','ぎ','じ','ぢ','び','ぴ']: return 'i'
        if kana in ['う','く','す','つ','ぬ','ふ','む','ゆ','る','ぐ','ず','づ','ぶ','ぷ','きゅ','しゅ','ちゅ','にゅ','ひゅ','みゅ','りゅ','ぎゅ','じゅ','びゅ','ぴゅ']: return 'u'
        if kana in ['え','け','せ','て','ね','へ','め','れ','げ','ぜ','で','べ','ぺ']: return 'e'
        if kana in ['お','こ','そ','と','の','ほ','も','よ','ろ','を','ご','ぞ','ど','ぼ','ぽ','きょ','しょ','ちょ','にょ','ひょ','みょ','りょ','ぎょ','じょ','びょ','ぴょ']: return 'o'
        return None

    # Detect Long Vowels
    for j in range(len(tokens) - 1):
        v1 = get_vowel(tokens[j])
        if not v1: continue
        
        nxt = tokens[j+1]
        if (v1 == 'o' and nxt == 'う'): tokens[j+1] = 'LONG_우'
        elif (v1 == 'o' and nxt == 'お'): tokens[j+1] = 'LONG_오'
        elif (v1 == 'u' and nxt == 'う'): tokens[j+1] = 'LONG_우'
        elif (v1 == 'e' and nxt == 'い'): tokens[j+1] = 'LONG_이'
        elif (v1 == 'e' and nxt == 'え'): tokens[j+1] = 'LONG_에'
        elif (v1 == 'a' and nxt == 'あ'): tokens[j+1] = 'LONG_아'
        elif (v1 == 'i' and nxt == 'い'): tokens[j+1] = 'LONG_이'
        elif nxt == 'ー': tokens[j+1] = 'LONG_ー'
               
    res = []
    for t in tokens:
        if t.startswith('LONG_'):
            snd = t.split('_')[1]
            res.append(f'<span class="fade">{snd}</span>')
        elif t == 'ん':
            res.append('ㄴ')
        elif t == 'っ':
            res.append('ㅅ')
        elif t in basic:
            res.append(basic[t])
        else:
            res.append(t)
            
    def merge_batchim(prev_str, batchim):
        # We need to find the last pure Hangul character in prev_str.
        # But prev_str might contain HTML (e.g. <span class="fade">우</span>)
        # If it ends with HTML, we can't easily merge. We just append.
        if prev_str.endswith('>'):
            return prev_str + batchim
            
        jong_idx = 4 if batchim == 'ㄴ' else 19
        
        if len(prev_str) == 0: return prev_str + batchim
        last = prev_str[-1]
        code = ord(last)
        if 0xAC00 <= code <= 0xD7A3:
            offset = code - 0xAC00
            if offset % 28 == 0: # No jongseong
                new_char = chr(code + jong_idx)
                return prev_str[:-1] + new_char
        return prev_str + batchim

    final_str = ""
    for r in res:
        if r in ['ㄴ', 'ㅅ'] and len(final_str) > 0:
            final_str = merge_batchim(final_str, r)
        else:
            final_str += r

    # Space formatting for directions
    # If starts with 히가시, 니시, 미나미, 키타 + another character
    # But note it might be 히가시 (just 3 chars). We only split if length > 3
    # Remove HTML tags to count actual text length is complex, but we can use simple string replacement.
    prefixes = ['히가시', '니시', '미나미', '키타']
    for p in prefixes:
        if final_str.startswith(p) and len(re.sub(r'<[^>]+>', '', final_str)) > len(p):
            # Make sure the next character isn't a space already
            if final_str[len(p)] != ' ':
                final_str = final_str[:len(p)] + " " + final_str[len(p):]
                break

    return final_str

def get_logo_html(line_name):
    # Tokyo Metro
    if "銀座線" in line_name: return '<span class="line-logo" style="background:#FF9500;">G</span>'
    if "丸ノ内線" in line_name: return '<span class="line-logo" style="background:#F62E36;">M</span>'
    if "日比谷線" in line_name: return '<span class="line-logo" style="background:#B5B5AC;">H</span>'
    if "東西線" in line_name: return '<span class="line-logo" style="background:#009BBF;">T</span>'
    if "千代田線" in line_name: return '<span class="line-logo" style="background:#00BB85;">C</span>'
    if "有楽町線" in line_name: return '<span class="line-logo" style="background:#C1A470;">Y</span>'
    if "半蔵門線" in line_name: return '<span class="line-logo" style="background:#8F76D6;">Z</span>'
    if "南北線" in line_name: return '<span class="line-logo" style="background:#00AC9B;">N</span>'
    if "副都心線" in line_name: return '<span class="line-logo" style="background:#9C5E31;">F</span>'
    
    # Toei Subway
    if "浅草線" in line_name: return '<span class="line-logo" style="background:#E85298;">A</span>'
    if "三田線" in line_name: return '<span class="line-logo" style="background:#0079C2;">I</span>'
    if "新宿線" in line_name: return '<span class="line-logo" style="background:#B4CB35;">S</span>'
    if "大江戸線" in line_name: return '<span class="line-logo" style="background:#E95B6B;">E</span>'

    # JR Lines (Generic JR square logo with specific colors)
    if "JR" in line_name:
        color = "#228be6" # Default blue
        if "山手線" in line_name: color = "#80C241"
        elif "中央線" in line_name or "青梅線" in line_name: color = "#F15A22"
        elif "総武線" in line_name: color = "#FFC20E"
        elif "京浜東北" in line_name: color = "#00B4E5"
        elif "埼京線" in line_name: color = "#00AC9A"
        elif "京葉線" in line_name: color = "#C9242B"
        elif "常磐線" in line_name: color = "#00B261"
        elif "湘南新宿" in line_name: color = "#E21F26" # Mixed, but red is one
        return f'<span class="line-logo square" style="background:{color}; font-size:12px;">JR</span>'

    # Keio
    if "京王" in line_name: return '<span class="line-logo square" style="background:#DD0052; font-style:italic;">KO</span>'
    # Odakyu
    if "小田急" in line_name: return '<span class="line-logo square" style="background:#0088CE;">O</span>'
    # Tokyu
    if "東急" in line_name: return '<span class="line-logo square" style="background:#E4002B;">TY</span>'
    # Seibu
    if "西武" in line_name: return '<span class="line-logo square" style="background:#1B3E93;">SI</span>'
    # Tobu
    if "東武" in line_name: return '<span class="line-logo square" style="background:#0068B7;">TJ</span>'
    # Keikyu
    if "京急" in line_name: return '<span class="line-logo square" style="background:#00B3DE;">KK</span>'
    
    return ""

def main():
    with open('stations_data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    json_str = content.replace("const stationsData = ", "").strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
        
    data = json.loads(json_str)
    
    for line in data:
        line['line_ko'] = realistic_hangul_v2(line['line_kana'])
        line['logo_html'] = get_logo_html(line['line_name'])
        for st in line['stations']:
            st['ko'] = realistic_hangul_v2(st['kana'])
            
    with open('stations_data.js', 'w', encoding='utf-8') as f:
        f.write("const stationsData = " + json.dumps(data, ensure_ascii=False) + ";")
        
    print("V2 Pronunciations and Logos updated.")

if __name__ == '__main__':
    main()
