import json
import re
import pykakasi

KANA_MAP = {
    'あ':'아', 'い':'이', 'う':'우', 'え':'에', 'お':'오',
    'か':'카', 'き':'키', 'く':'쿠', 'け':'케', 'こ':'코',
    'さ':'사', 'し':'시', 'す':'스', 'せ':'세', 'そ':'소',
    'た':'타', 'ち':'치', 'つ':'츠', 'て':'테', 'と':'토',
    'な':'나', 'に':'니', 'ぬ':'누', 'ね':'네', 'の':'노',
    'は':'하', 'ひ':'히', 'ふ':'후', 'へ':'헤', 'ほ':'호',
    'ま':'마', 'み':'미', 'む':'무', 'め':'메', 'も':'모',
    'や':'야', 'ゆ':'유', 'よ':'요',
    'ら':'라', 'り':'리', 'る':'루', 'れ':'레', 'ろ':'로',
    'わ':'와', 'を':'오', 'ん':'응',
    
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

    # Katakana
    'ア':'아', 'イ':'이', 'ウ':'우', 'エ':'에', 'オ':'오',
    'カ':'카', 'キ':'키', 'ク':'쿠', 'ケ':'케', 'コ':'코',
    'サ':'사', 'シ':'시', 'ス':'스', 'セ':'세', 'ソ':'소',
    'タ':'타', 'チ':'치', 'ツ':'츠', 'テ':'테', 'ト':'토',
    'ナ':'나', 'ニ':'니', 'ヌ':'누', 'ネ':'네', 'ノ':'노',
    'ハ':'하', 'ヒ':'히', 'フ':'후', 'ヘ':'헤', 'ホ':'호',
    'マ':'마', 'ミ':'미', 'ム':'무', 'メ':'메', 'モ':'모',
    'ヤ':'야', 'ユ':'유', 'ヨ':'요',
    'ラ':'라', 'リ':'리', 'ル':'루', 'レ':'레', 'ロ':'로',
    'ワ':'와', 'ヲ':'오', 'ン':'응',
    
    'ガ':'가', 'ギ':'기', 'グ':'구', 'ゲ':'게', 'ゴ':'고',
    'ザ':'자', 'ジ':'지', 'ズ':'즈', 'ゼ':'제', 'ゾ':'조',
    'ダ':'다', 'ヂ':'지', 'ヅ':'즈', 'デ':'데', 'ド':'도',
    'バ':'바', 'ビ':'비', 'ブ':'부', 'ベ':'베', 'ボ':'보',
    'パ':'파', 'ピ':'피', 'プ':'푸', 'ペ':'페', 'ポ':'포',

    'キャ':'캬', 'キュ':'큐', 'キョ':'쿄',
    'シャ':'샤', 'シュ':'슈', 'ショ':'쇼',
    'チャ':'챠', 'チュ':'츄', 'チョ':'쵸',
    'ニャ':'냐', 'ニュ':'뉴', 'ニョ':'뇨',
    'ヒャ':'햐', 'ヒュ':'휴', 'ヒョ':'효',
    'ミャ':'먀', 'ミュ':'뮤', 'ミョ':'묘',
    'リャ':'랴', 'リュ':'류', 'リョ':'료',
    
    'ギャ':'갸', 'ギュ':'규', 'ギョ':'교',
    'ジャ':'쟈', 'ジュ':'쥬', 'ジョ':'죠',
    'ビャ':'뱌', 'ビュ':'뷰', 'ビョ':'뵤',
    'ピャ':'퍄', 'ピュ':'퓨', 'ピョ':'표',
    
    'ファ':'파', 'フィ':'피', 'フェ':'페', 'フォ':'포', 'ヴィ':'비', 'ティ':'티', 'ディ':'디', 'ウェ':'웨', 'ウォ':'워', 'ウィ':'위',
    'ー':'-'
}

def add_batchim(hangul_str, batchim_type):
    if not hangul_str: return hangul_str
    last_char = hangul_str[-1]
    
    if '가' <= last_char <= '힣':
        code = ord(last_char) - 0xAC00
        cho = code // (21 * 28)
        jung = (code % (21 * 28)) // 28
        jong = code % 28
        
        if jong == 0:
            if batchim_type == 'n': jong = 4
            elif batchim_type == 'm': jong = 16
            elif batchim_type == 'ng': jong = 21
            elif batchim_type == 'k': jong = 1
            elif batchim_type == 's': jong = 19
            elif batchim_type == 'p': jong = 17
            
            new_code = 0xAC00 + (cho * 21 * 28) + (jung * 28) + jong
            return hangul_str[:-1] + chr(new_code)
            
    if batchim_type == 'n': return hangul_str + '은'
    elif batchim_type == 'm': return hangul_str + '음'
    elif batchim_type == 'ng': return hangul_str + '응'
    elif batchim_type == 'k': return hangul_str + '윽'
    elif batchim_type == 's': return hangul_str + '읏'
    elif batchim_type == 'p': return hangul_str + '읍'
    return hangul_str

def parse_kana_to_hangul(kana_text):
    keys = sorted(KANA_MAP.keys(), key=len, reverse=True)
    
    result = ""
    i = 0
    while i < len(kana_text):
        c = kana_text[i]
        
        # Check ん / ン
        if c == 'ん' or c == 'ン':
            next_char = kana_text[i+1] if i+1 < len(kana_text) else ''
            if next_char and next_char in 'ばびぶべぼぱぴぷぺぽまみむめもバビブベボパピプペポマミムメモ':
                result = add_batchim(result, 'm')
            elif next_char and next_char in 'かがきくけこガギグゲゴカキクケコ':
                result = add_batchim(result, 'ng')
            else:
                result = add_batchim(result, 'n')
            i += 1
            continue
            
        # Check っ / ッ
        if c == 'っ' or c == 'ッ':
            next_char = kana_text[i+1] if i+1 < len(kana_text) else ''
            if next_char and next_char in 'かきくけこカキクケコ':
                result = add_batchim(result, 'k')
            elif next_char and next_char in 'ぱぴぷぺぽパピプペポ':
                result = add_batchim(result, 'p')
            else:
                result = add_batchim(result, 's')
            i += 1
            continue
            
        found = False
        for k in keys:
            if kana_text.startswith(k, i):
                # Apply special hiragana/katakana long vowel rules
                if len(result) > 0:
                    last_jung = (ord(result[-1]) - 0xAC00) % (21 * 28) // 28 if '가' <= result[-1] <= '힣' else -1
                    # last_jung: 0:ㅏ, 4:ㅓ, 8:ㅗ, 13:ㅜ, 18:ㅡ, 20:ㅣ, 5:ㅔ, 1:ㅐ
                    
                    if k in ('い', 'イ') and last_jung == 5: # ㅔ + 이 -> ㅔ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                    if k in ('う', 'ウ') and last_jung == 8: # ㅗ + 우 -> ㅗ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                    if k in ('お', 'オ') and last_jung == 8: # ㅗ + 오 -> ㅗ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                    if k in ('う', 'ウ') and last_jung == 13: # ㅜ + 우 -> ㅜ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                    if k in ('あ', 'ア') and last_jung == 0: # ㅏ + 아 -> ㅏ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                    if k in ('い', 'イ') and last_jung == 20: # ㅣ + 이 -> ㅣ-
                        result += '-'
                        i += len(k)
                        found = True
                        break
                
                result += KANA_MAP[k]
                i += len(k)
                found = True
                break
                
        if not found:
            result += c
            i += 1
            
    return result

kks = pykakasi.kakasi()

with open('vocab_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_text = text.replace('const vocabData = ', '').strip()
if json_text.endswith(';'):
    json_text = json_text[:-1]

data = json.loads(json_text)

for w in data:
    jp = w.get('jp', '')
    conv = kks.convert(jp)
    kana = ''.join([item['kana'] for item in conv])
    romaji = ''.join([item['hepburn'] for item in conv])
    
    hangul = parse_kana_to_hangul(kana)
    
    w['read'] = f"[{hangul}] {romaji}"

with open('vocab_data.js', 'w', encoding='utf-8') as f:
    f.write('const vocabData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')

print("Updated vocab_data.js successfully.")
