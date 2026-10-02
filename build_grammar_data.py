import json
import os

# 100 JLPT N5 Verbs
verbs_data = [
    ("会う", "あう", "만나다", 1, "会", "う", "촉음편"),
    ("洗う", "あらう", "씻다", 1, "洗", "う", "촉음편"),
    ("言う", "いう", "말하다", 1, "言", "う", "촉음편"),
    ("歌う", "うたう", "노래하다", 1, "歌", "う", "촉음편"),
    ("買う", "かう", "사다", 1, "買", "う", "촉음편"),
    ("吸う", "すう", "피우다/들이마시다", 1, "吸", "う", "촉음편"),
    ("使う", "つかう", "사용하다", 1, "使", "う", "촉음편"),
    ("払う", "はらう", "지불하다", 1, "払", "う", "촉음편"),
    ("待つ", "まつ", "기다리다", 1, "待", "つ", "촉음편"),
    ("立つ", "たつ", "서다", 1, "立", "つ", "촉음편"),
    ("ある", "ある", "있다(사물)", 1, "あ", "る", "촉음편"),
    ("売る", "うる", "팔다", 1, "売", "る", "촉음편"),
    ("終わる", "おわる", "끝나다", 1, "終わ", "る", "촉음편"),
    ("帰る", "かえる", "돌아가다", 1, "帰", "る", "촉음편"),  # 예외 1그룹
    ("かかる", "かかる", "걸리다", 1, "かか", "る", "촉음편"),
    ("切る", "きる", "자르다", 1, "切", "る", "촉음편"),    # 예외 1그룹
    ("困る", "こまる", "곤란하다", 1, "困", "る", "촉음편"),
    ("閉まる", "しまる", "닫히다", 1, "閉ま", "る", "촉음편"),
    ("知る", "しる", "알다", 1, "知", "る", "촉음편"),    # 예외 1그룹
    ("座る", "すわる", "앉다", 1, "座", "る", "촉음편"),
    ("作る", "つくる", "만들다", 1, "作", "る", "촉음편"),
    ("止まる", "とまる", "멈추다", 1, "止ま", "る", "촉음편"),
    ("取る", "とる", "잡다/집다", 1, "取", "る", "촉음편"),
    ("撮る", "とる", "찍다", 1, "撮", "る", "촉음편"),
    ("なる", "なる", "되다", 1, "な", "る", "촉음편"),
    ("登る", "のぼる", "오르다", 1, "登", "る", "촉음편"),
    ("乗る", "のる", "타다", 1, "乗", "る", "촉음편"),
    ("入る", "はいる", "들어가다", 1, "入", "る", "촉음편"),  # 예외 1그룹
    ("走る", "はしる", "달리다", 1, "走", "る", "촉음편"),  # 예외 1그룹
    ("降る", "ふる", "내리다", 1, "降", "る", "촉음편"),
    ("曲がる", "まがる", "돌다/구부러지다", 1, "曲が", "る", "촉음편"),
    ("やる", "やる", "하다/주다", 1, "や", "る", "촉음편"),
    ("わかる", "わかる", "알다/이해하다", 1, "わか", "る", "촉음편"),
    ("渡る", "わたる", "건너다", 1, "渡", "る", "촉음편"),
    ("遊ぶ", "あそぶ", "놀다", 1, "遊", "ぶ", "비음편"),
    ("呼ぶ", "よぶ", "부르다", 1, "呼", "ぶ", "비음편"),
    ("飲む", "のむ", "마시다", 1, "飲", "む", "비음편"),
    ("休む", "やすむ", "쉬다", 1, "休", "む", "비음편"),
    ("読む", "よむ", "읽다", 1, "読", "む", "비음편"),
    ("死ぬ", "しぬ", "죽다", 1, "死", "ぬ", "비음편"),
    ("開く", "あく", "열리다", 1, "開", "く", "이음편"),
    ("歩く", "あるく", "걷다", 1, "歩", "く", "이음편"),
    ("行く", "いく", "가다", 1, "行", "く", "촉음편(예외)"),
    ("置く", "おく", "두다", 1, "置", "く", "이음편"),
    ("書く", "かく", "쓰다", 1, "書", "く", "이음편"),
    ("聞く", "きく", "듣다", 1, "聞", "く", "이음편"),
    ("咲く", "さく", "피다", 1, "咲", "く", "이음편"),
    ("着く", "つく", "도착하다", 1, "着", "く", "이음편"),
    ("泣く", "なく", "울다", 1, "泣", "く", "이음편"),
    ("鳴く", "なく", "울다(동물)", 1, "鳴", "く", "이음편"),
    ("履く", "はく", "신다", 1, "履", "く", "이음편"),
    ("働く", "はたらく", "일하다", 1, "働", "く", "이음편"),
    ("引く", "ひく", "끌다", 1, "引", "く", "이음편"),
    ("弾く", "ひく", "연주하다", 1, "弾", "く", "이음편"),
    ("吹く", "ふく", "불다", 1, "吹", "く", "이음편"),
    ("磨く", "みがく", "닦다", 1, "磨", "く", "이음편"),
    ("泳ぐ", "およぐ", "헤엄치다", 1, "泳", "ぐ", "이음편"),
    ("脱ぐ", "ぬぐ", "벗다", 1, "脱", "ぐ", "이음편"),
    ("返す", "かえす", "돌려주다", 1, "返", "す", "변화없음"),
    ("貸す", "かす", "빌려주다", 1, "貸", "す", "변화없음"),
    ("消す", "けす", "끄다", 1, "消", "す", "변화없음"),
    ("出す", "だす", "내다", 1, "出", "す", "변화없음"),
    ("直す", "なおす", "고치다", 1, "直", "す", "변화없음"),
    ("話す", "はなす", "이야기하다", 1, "話", "す", "변화없음"),
    ("渡す", "わたす", "건네다", 1, "渡", "す", "변화없음"),
    ("上げる", "あげる", "주다/올리다", 2, "上", "げる", "없음"),
    ("開ける", "あける", "열다", 2, "開", "ける", "없음"),
    ("入れる", "いれる", "넣다", 2, "入", "れる", "없음"),
    ("教える", "おしえる", "가르치다", 2, "教", "える", "없음"),
    ("覚える", "おぼえる", "기억하다", 2, "覚", "える", "없음"),
    ("かける", "かける", "걸다", 2, "か", "ける", "없음"),
    ("消える", "きえる", "꺼지다", 2, "消", "える", "없음"),
    ("閉める", "しめる", "닫다", 2, "閉", "める", "없음"),
    ("食べる", "たべる", "먹다", 2, "食", "べる", "없음"),
    ("疲れる", "つかれる", "지치다", 2, "疲", "れる", "없음"),
    ("出かける", "でかける", "외출하다", 2, "出か", "ける", "없음"),
    ("寝る", "ねる", "자다", 2, "寝", "る", "없음"),
    ("晴れる", "はれる", "맑다", 2, "晴", "れる", "없음"),
    ("見せる", "みせる", "보여주다", 2, "見", "せる", "없음"),
    ("忘れる", "わすれる", "잊다", 2, "忘", "れる", "없음"),
    ("いる", "いる", "있다(사람/동물)", 2, "い", "る", "없음"),
    ("起きる", "おきる", "일어나다", 2, "起", "きる", "없음"),
    ("借りる", "かりる", "빌리다", 2, "借", "りる", "없음"),
    ("着る", "きる", "입다", 2, "着", "る", "없음"),
    ("見る", "みる", "보다", 2, "見", "る", "없음"),
    ("浴びる", "あびる", "뒤집어쓰다/샤워하다", 2, "浴", "びる", "없음"),
    ("降りる", "おりる", "내리다(차에서)", 2, "降", "りる", "없음"),
    ("できる", "できる", "할 수 있다", 2, "でき", "る", "없음"),
    ("来る", "くる", "오다", 3, "来", "る", "없음"),
    ("する", "する", "하다", 3, "す", "る", "없음"),
    ("勉強する", "べんきょうする", "공부하다", 3, "勉強す", "る", "없음"),
    ("練習する", "れんしゅうする", "연습하다", 3, "練習す", "る", "없음"),
    ("買い物する", "かいものする", "쇼핑하다", 3, "買い物す", "る", "없음"),
    ("散歩する", "さんぽする", "산책하다", 3, "散歩す", "る", "없음"),
    ("結婚する", "けっこんする", "결혼하다", 3, "結婚す", "る", "없음"),
    ("料理する", "りょうりする", "요리하다", 3, "料理す", "る", "없음"),
    ("電話する", "でんわする", "전화하다", 3, "電話す", "る", "없음"),
    ("旅行する", "りょこうする", "여행하다", 3, "旅行す", "る", "없음"),
    ("掃除する", "そうじする", "청소하다", 3, "掃除す", "る", "없음"),
    ("洗濯する", "せんたくする", "세탁하다", 3, "洗濯す", "る", "없음")
]

conjugation_data = []
for idx, (kanji, reading, meaning, group, stem, suffix, euphonic) in enumerate(verbs_data):
    forms = {}
    if group == 1:
        # te, ta, nai, masu
        if suffix == "う" or suffix == "つ" or suffix == "る":
            if kanji == "行く":
                forms["te"] = {"value": stem + "って", "suffix_changed": "って"}
                forms["ta"] = {"value": stem + "った", "suffix_changed": "った"}
            else:
                forms["te"] = {"value": stem + "って", "suffix_changed": "って"}
                forms["ta"] = {"value": stem + "った", "suffix_changed": "った"}
            if suffix == "う":
                forms["nai"] = {"value": stem + "わない", "suffix_changed": "わない"}
                forms["masu"] = {"value": stem + "います", "suffix_changed": "います"}
            elif suffix == "つ":
                forms["nai"] = {"value": stem + "たない", "suffix_changed": "たない"}
                forms["masu"] = {"value": stem + "ちます", "suffix_changed": "ちます"}
            elif suffix == "る":
                forms["nai"] = {"value": stem + "らない", "suffix_changed": "らない"}
                forms["masu"] = {"value": stem + "ります", "suffix_changed": "ります"}
        elif suffix == "ぶ" or suffix == "む" or suffix == "ぬ":
            forms["te"] = {"value": stem + "んで", "suffix_changed": "んで"}
            forms["ta"] = {"value": stem + "んだ", "suffix_changed": "んだ"}
            if suffix == "ぶ":
                forms["nai"] = {"value": stem + "ばない", "suffix_changed": "ばない"}
                forms["masu"] = {"value": stem + "びます", "suffix_changed": "びます"}
            elif suffix == "む":
                forms["nai"] = {"value": stem + "まない", "suffix_changed": "まない"}
                forms["masu"] = {"value": stem + "みます", "suffix_changed": "みます"}
            elif suffix == "ぬ":
                forms["nai"] = {"value": stem + "なない", "suffix_changed": "なない"}
                forms["masu"] = {"value": stem + "にます", "suffix_changed": "にます"}
        elif suffix == "く":
            if kanji == "行く":
                pass # Already handled above, wait, going back: I handled 'ku' for iku but the if branch is separate. Let me fix the if branch logic.
                forms["te"] = {"value": stem + "って", "suffix_changed": "って"}
                forms["ta"] = {"value": stem + "った", "suffix_changed": "った"}
            else:
                forms["te"] = {"value": stem + "いて", "suffix_changed": "いて"}
                forms["ta"] = {"value": stem + "いた", "suffix_changed": "いた"}
            forms["nai"] = {"value": stem + "かない", "suffix_changed": "かない"}
            forms["masu"] = {"value": stem + "きます", "suffix_changed": "きます"}
        elif suffix == "ぐ":
            forms["te"] = {"value": stem + "いで", "suffix_changed": "いで"}
            forms["ta"] = {"value": stem + "いだ", "suffix_changed": "いだ"}
            forms["nai"] = {"value": stem + "がない", "suffix_changed": "がない"}
            forms["masu"] = {"value": stem + "ぎます", "suffix_changed": "ぎます"}
        elif suffix == "す":
            forms["te"] = {"value": stem + "して", "suffix_changed": "して"}
            forms["ta"] = {"value": stem + "した", "suffix_changed": "した"}
            forms["nai"] = {"value": stem + "さない", "suffix_changed": "さない"}
            forms["masu"] = {"value": stem + "します", "suffix_changed": "します"}
    elif group == 2:
        forms["te"] = {"value": stem + "て", "suffix_changed": "て"}
        forms["ta"] = {"value": stem + "た", "suffix_changed": "た"}
        forms["nai"] = {"value": stem + "ない", "suffix_changed": "ない"}
        forms["masu"] = {"value": stem + "ます", "suffix_changed": "ます"}
    elif group == 3:
        if kanji == "来る":
            forms["te"] = {"value": "来て", "suffix_changed": "て"}
            forms["ta"] = {"value": "来た", "suffix_changed": "た"}
            forms["nai"] = {"value": "来ない", "suffix_changed": "ない"}
            forms["masu"] = {"value": "来ます", "suffix_changed": "ます"}
        else: # する or verbs ending in する
            forms["te"] = {"value": stem + "して", "suffix_changed": "して"}
            forms["ta"] = {"value": stem + "した", "suffix_changed": "した"}
            forms["nai"] = {"value": stem + "しない", "suffix_changed": "しない"}
            forms["masu"] = {"value": stem + "します", "suffix_changed": "します"}

    conjugation_data.append({
        "id": f"v_{idx+1:03d}",
        "dictionary_form": kanji,
        "reading": reading,
        "meaning_ko": meaning,
        "group": group,
        "stem": stem,
        "suffix_default": suffix,
        "euphonic_change_type": euphonic,
        "forms": forms
    })

particle_data = [
    {
        "id": "p_001",
        "sentence_skeleton": "私___日本語___分かります。",
        "correct_particles": ["は", "が"],
        "options": [["は", "が"], ["を", "が", "に"]],
        "translation_ko": "저는 일본어를 압니다.",
        "trap_point": {
            "target_slot": 1, # 0-indexed, so 1 is the second slot
            "distractor_l1": "を",
            "explanation": "한국어 해석은 '일본어를'이지만, 分かる(이해하다) 앞에는 대상어 조사 が를 취합니다."
        }
    },
    {
        "id": "p_002",
        "sentence_skeleton": "昨日、友達___会いました。",
        "correct_particles": ["に"],
        "options": [["を", "に", "で"]],
        "translation_ko": "어제, 친구를 만났습니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "を",
            "explanation": "한국어는 '친구를 만나다'라고 하지만, 일본어 会う는 대상에게 다가가는 방향성이 있어 に를 씁니다."
        }
    },
    {
        "id": "p_003",
        "sentence_skeleton": "バス___乗ります。",
        "correct_particles": ["に"],
        "options": [["を", "に", "で"]],
        "translation_ko": "버스를 탑니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "を",
            "explanation": "'버스를 타다'지만 일본어 乗る는 귀착점(도달하는 곳)을 나타내는 に를 사용합니다."
        }
    },
    {
        "id": "p_004",
        "sentence_skeleton": "公園___散歩します。",
        "correct_particles": ["を"],
        "options": [["に", "で", "を"]],
        "translation_ko": "공원에서 산책합니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "で",
            "explanation": "'공원에서'로 해석되지만, 散歩する, 歩く, 飛ぶ와 같은 이동 동사는 통과하는 장소를 나타내는 を를 사용합니다."
        }
    },
    {
        "id": "p_005",
        "sentence_skeleton": "先生___聞きます。",
        "correct_particles": ["に"],
        "options": [["を", "に", "から"]],
        "translation_ko": "선생님에게 묻습니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "から",
            "explanation": "'~에게 묻다'는 질문의 대상을 나타내는 に를 사용합니다."
        }
    },
    {
        "id": "p_006",
        "sentence_skeleton": "山田さん___電話をします。",
        "correct_particles": ["に"],
        "options": [["へ", "に", "と"]],
        "translation_ko": "야마다씨에게 전화를 합니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "へ",
            "explanation": "전화의 대상은 に를 주로 씁니다."
        }
    },
    {
        "id": "p_007",
        "sentence_skeleton": "机の上___本___あります。",
        "correct_particles": ["に", "が"],
        "options": [["で", "に", "へ"], ["は", "を", "が"]],
        "translation_ko": "책상 위에 책이 있습니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "で",
            "explanation": "존재하는 장소를 나타낼 때는 で가 아닌 に를 사용합니다."
        }
    },
    {
        "id": "p_008",
        "sentence_skeleton": "レストラン___食事をします。",
        "correct_particles": ["で"],
        "options": [["に", "で", "を"]],
        "translation_ko": "레스토랑에서 식사를 합니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "に",
            "explanation": "동작(식사)이 일어나는 장소는 에(に)가 아니라 에서(で)를 사용합니다."
        }
    },
    {
        "id": "p_009",
        "sentence_skeleton": "韓国___来ました。",
        "correct_particles": ["から"],
        "options": [["で", "から", "に"]],
        "translation_ko": "한국에서 왔습니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "で",
            "explanation": "출발점/출신을 나타낼 때는 から를 사용합니다."
        }
    },
    {
        "id": "p_010",
        "sentence_skeleton": "部屋___入ります。",
        "correct_particles": ["に"],
        "options": [["を", "に", "へ"]],
        "translation_ko": "방에 들어갑니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "を",
            "explanation": "도달점을 나타내는 に를 씁니다. (방을 들어가다 x)"
        }
    },
    {
        "id": "p_011",
        "sentence_skeleton": "電車___降ります。",
        "correct_particles": ["を"],
        "options": [["から", "で", "を"]],
        "translation_ko": "전철에서 내립니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "で",
            "explanation": "이탈점(내리는 곳)은 を를 사용합니다. (전철을 내리다)"
        }
    },
    {
        "id": "p_012",
        "sentence_skeleton": "病気___学校を休みます。",
        "correct_particles": ["で"],
        "options": [["から", "で", "に"]],
        "translation_ko": "병 때문에 학교를 쉽니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "から",
            "explanation": "원인/이유를 나타내는 명사 뒤에는 で를 씁니다."
        }
    },
    {
        "id": "p_013",
        "sentence_skeleton": "私___犬___好きです。",
        "correct_particles": ["は", "が"],
        "options": [["が", "は"], ["を", "が", "に"]],
        "translation_ko": "저는 개를 좋아합니다.",
        "trap_point": {
            "target_slot": 1,
            "distractor_l1": "を",
            "explanation": "好きだ 앞의 기호 대상은 が를 취합니다."
        }
    },
    {
        "id": "p_014",
        "sentence_skeleton": "週に2回、ジム___行きます。",
        "correct_particles": ["に"],
        "options": [["で", "に", "を"]],
        "translation_ko": "일주일에 2번 짐에(짐을) 갑니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "で",
            "explanation": "목적지가 아닌 도달점/방향에 に를 사용합니다."
        }
    },
    {
        "id": "p_015",
        "sentence_skeleton": "ハサミ___紙を切ります。",
        "correct_particles": ["で"],
        "options": [["を", "に", "で"]],
        "translation_ko": "가위로 종이를 자릅니다.",
        "trap_point": {
            "target_slot": 0,
            "distractor_l1": "を",
            "explanation": "도구/수단을 나타내는 で입니다."
        }
    }
]

pattern_data = [
    {"id": "pat_001", "pattern_name": "〜たい", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하고 싶다", "drill_sentences": [{"base_verb": "食べる", "verb_target_form": "食べ", "full_sentence": "寿司を食べたいです。"}]},
    {"id": "pat_002", "pattern_name": "〜てもいい", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해도 된다", "drill_sentences": [{"base_verb": "座る", "verb_target_form": "座って", "full_sentence": "ここに座ってもいいですか。"}]},
    {"id": "pat_003", "pattern_name": "〜てはいけない", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해서는 안 된다", "drill_sentences": [{"base_verb": "入る", "verb_target_form": "入って", "full_sentence": "入ってはいけません。"}]},
    {"id": "pat_004", "pattern_name": "〜たことがある", "connection_rule": {"preceding_pos": "Verb", "required_form": "ta-form"}, "translation_ko": "~한 적이 있다", "drill_sentences": [{"base_verb": "行く", "verb_target_form": "行った", "full_sentence": "日本に行ったことがあります。"}]},
    {"id": "pat_005", "pattern_name": "〜ないでください", "connection_rule": {"preceding_pos": "Verb", "required_form": "nai-form"}, "translation_ko": "~하지 말아주세요", "drill_sentences": [{"base_verb": "忘れる", "verb_target_form": "忘れない", "full_sentence": "忘れないでください。"}]},
    {"id": "pat_006", "pattern_name": "〜なければならない", "connection_rule": {"preceding_pos": "Verb", "required_form": "nai-form"}, "translation_ko": "~하지 않으면 안 된다", "drill_sentences": [{"base_verb": "帰る", "verb_target_form": "帰ら", "full_sentence": "帰らなければなりません。"}]},
    {"id": "pat_007", "pattern_name": "〜ましょう", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~합시다", "drill_sentences": [{"base_verb": "休む", "verb_target_form": "休み", "full_sentence": "少し休みましょう。"}]},
    {"id": "pat_008", "pattern_name": "〜ませんか", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하지 않겠습니까?", "drill_sentences": [{"base_verb": "飲む", "verb_target_form": "飲み", "full_sentence": "お茶を飲みませんか。"}]},
    {"id": "pat_009", "pattern_name": "〜ことができる", "connection_rule": {"preceding_pos": "Verb", "required_form": "dictionary-form"}, "translation_ko": "~할 수 있다", "drill_sentences": [{"base_verb": "泳ぐ", "verb_target_form": "泳ぐ", "full_sentence": "泳ぐことができます。"}]},
    {"id": "pat_010", "pattern_name": "〜つもりだ", "connection_rule": {"preceding_pos": "Verb", "required_form": "dictionary-form"}, "translation_ko": "~할 작정이다", "drill_sentences": [{"base_verb": "買う", "verb_target_form": "買う", "full_sentence": "車を買うつもりです。"}]},
    {"id": "pat_011", "pattern_name": "〜前に", "connection_rule": {"preceding_pos": "Verb", "required_form": "dictionary-form"}, "translation_ko": "~하기 전에", "drill_sentences": [{"base_verb": "寝る", "verb_target_form": "寝る", "full_sentence": "寝る前に本を読みます。"}]},
    {"id": "pat_012", "pattern_name": "〜後で", "connection_rule": {"preceding_pos": "Verb", "required_form": "ta-form"}, "translation_ko": "~한 후에", "drill_sentences": [{"base_verb": "食べる", "verb_target_form": "食べた", "full_sentence": "食べた後で薬を飲みます。"}]},
    {"id": "pat_013", "pattern_name": "〜ている", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~하고 있다", "drill_sentences": [{"base_verb": "待つ", "verb_target_form": "待って", "full_sentence": "友達を待っています。"}]},
    {"id": "pat_014", "pattern_name": "〜てから", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~하고 나서", "drill_sentences": [{"base_verb": "洗う", "verb_target_form": "洗って", "full_sentence": "手を洗ってから食べます。"}]},
    {"id": "pat_015", "pattern_name": "〜たり〜たりする", "connection_rule": {"preceding_pos": "Verb", "required_form": "ta-form"}, "translation_ko": "~하기도 하고 ~하기도 한다", "drill_sentences": [{"base_verb": "飲む", "verb_target_form": "飲んだ", "full_sentence": "飲んだり食べたりします。"}]},
    {"id": "pat_016", "pattern_name": "〜ほうがいい", "connection_rule": {"preceding_pos": "Verb", "required_form": "ta-form"}, "translation_ko": "~하는 편이 좋다", "drill_sentences": [{"base_verb": "行く", "verb_target_form": "行った", "full_sentence": "病院に行ったほうがいいですよ。"}]},
    {"id": "pat_017", "pattern_name": "〜ないほうがいい", "connection_rule": {"preceding_pos": "Verb", "required_form": "nai-form"}, "translation_ko": "~하지 않는 편이 좋다", "drill_sentences": [{"base_verb": "無理する", "verb_target_form": "無理しない", "full_sentence": "無理しないほうがいいです。"}]},
    {"id": "pat_018", "pattern_name": "〜でしょう", "connection_rule": {"preceding_pos": "Verb", "required_form": "dictionary-form"}, "translation_ko": "~이겠죠/할 것입니다", "drill_sentences": [{"base_verb": "降る", "verb_target_form": "降る", "full_sentence": "明日は雨が降るでしょう。"}]},
    {"id": "pat_019", "pattern_name": "〜かもしれません", "connection_rule": {"preceding_pos": "Verb", "required_form": "dictionary-form"}, "translation_ko": "~일지도 모릅니다", "drill_sentences": [{"base_verb": "遅れる", "verb_target_form": "遅れる", "full_sentence": "バスが遅れるかもしれません。"}]},
    {"id": "pat_020", "pattern_name": "〜すぎます", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "너무 ~하다", "drill_sentences": [{"base_verb": "飲む", "verb_target_form": "飲み", "full_sentence": "お酒を飲みすぎました。"}]},
    {"id": "pat_021", "pattern_name": "〜やすい", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하기 쉽다", "drill_sentences": [{"base_verb": "使う", "verb_target_form": "使い", "full_sentence": "このペンは使いやすいです。"}]},
    {"id": "pat_022", "pattern_name": "〜にくい", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하기 어렵다", "drill_sentences": [{"base_verb": "歩く", "verb_target_form": "歩き", "full_sentence": "この靴は歩きにくいです。"}]},
    {"id": "pat_023", "pattern_name": "〜に行く", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하러 가다", "drill_sentences": [{"base_verb": "遊ぶ", "verb_target_form": "遊び", "full_sentence": "公園へ遊びに行きます。"}]},
    {"id": "pat_024", "pattern_name": "〜てください", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 주세요", "drill_sentences": [{"base_verb": "待つ", "verb_target_form": "待って", "full_sentence": "少し待ってください。"}]},
    {"id": "pat_025", "pattern_name": "〜ながら", "connection_rule": {"preceding_pos": "Verb", "required_form": "masu-stem"}, "translation_ko": "~하면서", "drill_sentences": [{"base_verb": "聞く", "verb_target_form": "聞き", "full_sentence": "音楽を聞きながら勉強します。"}]},
    {"id": "pat_026", "pattern_name": "〜てあげる", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 주다 (내가 남에게)", "drill_sentences": [{"base_verb": "手伝う", "verb_target_form": "手伝って", "full_sentence": "友達を手伝ってあげます。"}]},
    {"id": "pat_027", "pattern_name": "〜てもらう", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 받다 (남이 내게)", "drill_sentences": [{"base_verb": "教える", "verb_target_form": "教えて", "full_sentence": "先生に教えてもらいます。"}]},
    {"id": "pat_028", "pattern_name": "〜てくれる", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 주다 (남이 내게)", "drill_sentences": [{"base_verb": "買う", "verb_target_form": "買って", "full_sentence": "母が買ってくれました。"}]},
    {"id": "pat_029", "pattern_name": "〜てみる", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 보다", "drill_sentences": [{"base_verb": "食べる", "verb_target_form": "食べて", "full_sentence": "これを食べてみます。"}]},
    {"id": "pat_030", "pattern_name": "〜てしまう", "connection_rule": {"preceding_pos": "Verb", "required_form": "te-form"}, "translation_ko": "~해 버리다", "drill_sentences": [{"base_verb": "忘れる", "verb_target_form": "忘れて", "full_sentence": "宿題を忘れてしまいました。"}]}
]

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write("const grammarData = {\n")
    f.write('  "conjugation_data": ' + json.dumps(conjugation_data, ensure_ascii=False, indent=2) + ',\n')
    f.write('  "particle_data": ' + json.dumps(particle_data, ensure_ascii=False, indent=2) + ',\n')
    f.write('  "pattern_data": ' + json.dumps(pattern_data, ensure_ascii=False, indent=2) + '\n')
    f.write("};\n")

print("Generated grammar_data.js successfully.")
