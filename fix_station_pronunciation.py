import json
import re

def realistic_hangul(text):
    # This logic takes a hiragana string (which may include JR, etc.)
    # and converts it to a realistic Korean pronunciation.

    # 1. Handle Alphabet prefixes commonly found in Tokyo stations
    text = text.replace("JR", "제이아루")
    text = text.replace("TX", "티엑스")
    
    # 2. Kana to Hangul mapping (realistic)
    # We will do this in passes.
    
    # Let's use a dictionary for basic syllables
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

    # First, handle 'ん' (N)
    # ん followed by specific sounds changes, but in Korean transcription, it is overwhelmingly just "ㄴ" batchim.
    # We can just replace 'ん' with 'ㄴ' and attach it to the previous character!
    # Same for 'っ' (tsu) -> 'ㅅ' batchim.
    # To do this safely, we will map each syllable, then post-process batchim.
    
    # We will tokenize the hiragana
    tokens = []
    i = 0
    # sort keys by length descending
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
            
    # Now we have tokens.
    # Handle long vowels BEFORE converting to Hangul
    # Long vowel rules:
    # 1. 'おう' -> 'おー', 'こう' -> 'こー', etc. (o-row + u)
    # 2. 'おお' -> 'おー' (o-row + o)
    # 3. 'えい' -> 'えー' (e-row + i)
    # 4. 'うう' -> 'うー' (u-row + u)
    # 5. 'ちゅう' -> 'ちゅー', 'しょう' -> 'しょー', etc.
    
    def get_vowel(kana):
        if kana in ['あ','か','さ','た','な','は','ま','や','ら','わ','が','ざ','だ','ば','ぱ','きゃ','しゃ','ちゃ','にゃ','ひゃ','みゃ','りゃ','ぎゃ','じゃ','びゃ','ぴゃ']: return 'a'
        if kana in ['い','き','し','ち','に','ひ','み','り','ぎ','じ','ぢ','び','ぴ']: return 'i'
        if kana in ['う','く','す','つ','ぬ','ふ','む','ゆ','る','ぐ','ず','づ','ぶ','ぷ','きゅ','しゅ','ちゅ','にゅ','ひゅ','みゅ','りゅ','ぎゅ','じゅ','びゅ','ぴゅ']: return 'u'
        if kana in ['え','け','せ','て','ね','へ','め','れ','げ','ぜ','で','べ','ぺ']: return 'e'
        if kana in ['お','こ','そ','と','の','ほ','も','よ','ろ','を','ご','ぞ','ど','ぼ','ぽ','きょ','しょ','ちょ','にょ','ひょ','みょ','りょ','ぎょ','じょ','びょ','ぴょ']: return 'o'
        return None

    for j in range(len(tokens) - 1):
        v1 = get_vowel(tokens[j])
        if not v1: continue
        
        nxt = tokens[j+1]
        if (v1 == 'o' and nxt == 'う') or \
           (v1 == 'o' and nxt == 'お') or \
           (v1 == 'u' and nxt == 'う') or \
           (v1 == 'e' and nxt == 'い') or \
           (v1 == 'e' and nxt == 'え') or \
           (v1 == 'a' and nxt == 'あ') or \
           (v1 == 'i' and nxt == 'い'):
               tokens[j+1] = 'LONG'
               
    # Convert tokens to Hangul strings
    res = []
    for t in tokens:
        if t == 'LONG':
            # We can either drop long vowels or add a dash. In station names, usually dropped.
            # e.g., 제이아루 츄오센.
            # We will just drop it.
            continue
        elif t == 'ん':
            res.append('ㄴ') # Will be merged
        elif t == 'っ':
            res.append('ㅅ') # Will be merged
        elif t in basic:
            res.append(basic[t])
        else:
            res.append(t)
            
    # Now merge batchim ('ㄴ', 'ㅅ') to the previous character
    # Jamo merging logic for Korean
    # chr(0xAC00 + (cho * 21 + jung) * 28 + jong)
    
    def merge_batchim(prev_char, batchim):
        # batchim is 'ㄴ' or 'ㅅ'
        # 'ㄴ' jongseong index is 4
        # 'ㅅ' jongseong index is 19
        jong_idx = 4 if batchim == 'ㄴ' else 19
        
        # Check if prev_char is a hangul syllable with no jongseong
        if len(prev_char) == 0: return prev_char + batchim
        last = prev_char[-1]
        code = ord(last)
        if 0xAC00 <= code <= 0xD7A3:
            offset = code - 0xAC00
            if offset % 28 == 0: # No jongseong
                new_char = chr(code + jong_idx)
                return prev_char[:-1] + new_char
        return prev_char + batchim

    final_str = ""
    for r in res:
        if r in ['ㄴ', 'ㅅ'] and len(final_str) > 0:
            final_str = merge_batchim(final_str, r)
        else:
            final_str += r

    return final_str

def main():
    with open('stations_data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract json
    json_str = content.replace("const stationsData = ", "").strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
        
    data = json.loads(json_str)
    
    for line in data:
        line['line_ko'] = realistic_hangul(line['line_kana'])
        for st in line['stations']:
            st['ko'] = realistic_hangul(st['kana'])
            
    with open('stations_data.js', 'w', encoding='utf-8') as f:
        f.write("const stationsData = " + json.dumps(data, ensure_ascii=False) + ";")
        
    print("Pronunciations updated to realistic Korean.")

if __name__ == '__main__':
    main()
