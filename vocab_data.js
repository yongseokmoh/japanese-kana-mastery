const vocabData = [
  {
    "jp": "毎朝",
    "read": "[마이아사] maiasa",
    "kr": "매일 아침",
    "icon": "☀️"
  },
  {
    "jp": "問題",
    "read": "[몬다이] mondai",
    "kr": "문제",
    "icon": "🙏"
  },
  {
    "jp": "お茶",
    "read": "[오챠] ocha",
    "kr": "녹차",
    "icon": "👋"
  },
  {
    "jp": "黒",
    "read": "[쿠로] kuro",
    "kr": "검정",
    "icon": "⭕"
  },
  {
    "jp": "台所",
    "read": "[다이도코로] daidokoro",
    "kr": "부엌",
    "icon": "❌"
  },
  {
    "jp": "葉書",
    "read": "[하가키] hagaki",
    "kr": "엽서",
    "icon": "🍣"
  },
  {
    "jp": "ペン",
    "read": "[펜] pen",
    "kr": "펜",
    "icon": "🐱"
  },
  {
    "jp": "ニュース",
    "read": "[뉴-스] nyuusu",
    "kr": "뉴스",
    "icon": "🐶"
  },
  {
    "jp": "花瓶",
    "read": "[카빈] kabin",
    "kr": "꽃병",
    "icon": "📚"
  },
  {
    "jp": "フォーク",
    "read": "[포-쿠] fooku",
    "kr": "포크",
    "icon": "🏫"
  },
  {
    "jp": "引く",
    "read": "[히쿠] hiku",
    "kr": "당기다",
    "icon": "📝"
  },
  {
    "jp": "フィルム",
    "read": "[피루무] firumu",
    "kr": "필름 한 롤",
    "icon": "🏃"
  },
  {
    "jp": "磨く",
    "read": "[미가쿠] migaku",
    "kr": "이를 닦다, 광을 내다",
    "icon": "🗣️"
  },
  {
    "jp": "押す",
    "read": "[오스] osu",
    "kr": "밀다, 도장 찍다",
    "icon": "💭"
  },
  {
    "jp": "売る",
    "read": "[우루] uru",
    "kr": "팔다",
    "icon": "🌟"
  },
  {
    "jp": "電気",
    "read": "[뎅키] denki",
    "kr": "전기",
    "icon": "💡"
  },
  {
    "jp": "並ぶ",
    "read": "[나라부] narabu",
    "kr": "줄을 서다",
    "icon": "✅"
  },
  {
    "jp": "病気",
    "read": "[뵤우키] byouki",
    "kr": "병",
    "icon": "🎌"
  },
  {
    "jp": "ポケット",
    "read": "[포켓토] poketto",
    "kr": "주머니",
    "icon": "☀️"
  },
  {
    "jp": "頭",
    "read": "[아타마] atama",
    "kr": "머리",
    "icon": "🙏"
  },
  {
    "jp": "はし",
    "read": "[하시] hashi",
    "kr": "젓가락",
    "icon": "👋"
  },
  {
    "jp": "英語",
    "read": "[에-고] eigo",
    "kr": "영어",
    "icon": "⭕"
  },
  {
    "jp": "家",
    "read": "[이에] ie",
    "kr": "집",
    "icon": "❌"
  },
  {
    "jp": "一月",
    "read": "[이치가츠] ichigatsu",
    "kr": "한 달",
    "icon": "🍣"
  },
  {
    "jp": "暑い",
    "read": "[아츠이] atsui",
    "kr": "뜨거운",
    "icon": "🐱"
  },
  {
    "jp": "遊ぶ",
    "read": "[아소부] asobu",
    "kr": "놀다, 방문하다",
    "icon": "🐶"
  },
  {
    "jp": "取る",
    "read": "[토루] toru",
    "kr": "가져가다",
    "icon": "📚"
  },
  {
    "jp": "九",
    "read": "[큐우] kyuu",
    "kr": "아홉",
    "icon": "🏫"
  },
  {
    "jp": "閉める",
    "read": "[시메루] shimeru",
    "kr": "닫다",
    "icon": "📝"
  },
  {
    "jp": "たいへん",
    "read": "[타이헨] taihen",
    "kr": "매우",
    "icon": "🏃"
  },
  {
    "jp": "奥さん",
    "read": "[오쿠산] okusan",
    "kr": "(존칭) 아내",
    "icon": "🗣️"
  },
  {
    "jp": "作文",
    "read": "[사쿠분] sakubun",
    "kr": "작문, 글쓰기",
    "icon": "💭"
  },
  {
    "jp": "便利",
    "read": "[벤리] benri",
    "kr": "유용한, 편리한",
    "icon": "🌟"
  },
  {
    "jp": "右",
    "read": "[미기] migi",
    "kr": "오른쪽",
    "icon": "💡"
  },
  {
    "jp": "寒い",
    "read": "[사무이] samui",
    "kr": "추운",
    "icon": "✅"
  },
  {
    "jp": "あびる",
    "read": "[아비루] abiru",
    "kr": "목욕하다, 샤워하다",
    "icon": "🎌"
  },
  {
    "jp": "十",
    "read": "[쥬우] juu",
    "kr": "열",
    "icon": "☀️"
  },
  {
    "jp": "中",
    "read": "[나카] naka",
    "kr": "중간",
    "icon": "🙏"
  },
  {
    "jp": "消す",
    "read": "[케스] kesu",
    "kr": "지우다, 전원을 끄다",
    "icon": "👋"
  },
  {
    "jp": "近く",
    "read": "[치카쿠] chikaku",
    "kr": "가까운",
    "icon": "⭕"
  },
  {
    "jp": "七つ",
    "read": "[나나츠] nanatsu",
    "kr": "일곱",
    "icon": "❌"
  },
  {
    "jp": "テープレコーダー",
    "read": "[테-푸레코-다-] teepurekoodaa",
    "kr": "테이프 녹음기",
    "icon": "🍣"
  },
  {
    "jp": "目",
    "read": "[메] me",
    "kr": "눈",
    "icon": "🐱"
  },
  {
    "jp": "空",
    "read": "[소라] sora",
    "kr": "하늘",
    "icon": "🐶"
  },
  {
    "jp": "六日",
    "read": "[무이카] muika",
    "kr": "육일, 그 달의 여섯째 날",
    "icon": "📚"
  },
  {
    "jp": "座る",
    "read": "[스와루] suwaru",
    "kr": "앉다",
    "icon": "🏫"
  },
  {
    "jp": "年",
    "read": "[넨] nen",
    "kr": "년, 해",
    "icon": "📝"
  },
  {
    "jp": "男の子",
    "read": "[오토코노코] otokonoko",
    "kr": "소년",
    "icon": "🏃"
  },
  {
    "jp": "狭い",
    "read": "[세마이] semai",
    "kr": "좁은",
    "icon": "🗣️"
  },
  {
    "jp": "冷蔵庫",
    "read": "[레-조-코] reizouko",
    "kr": "냉장고",
    "icon": "💭"
  },
  {
    "jp": "カメラ",
    "read": "[카메라] kamera",
    "kr": "카메라",
    "icon": "🌟"
  },
  {
    "jp": "玄関",
    "read": "[겡칸] genkan",
    "kr": "입구 홀",
    "icon": "💡"
  },
  {
    "jp": "違う",
    "read": "[치가우] chigau",
    "kr": "다르다",
    "icon": "✅"
  },
  {
    "jp": "危ない",
    "read": "[아부나이] abunai",
    "kr": "위험한",
    "icon": "🎌"
  },
  {
    "jp": "分かる",
    "read": "[와카루] wakaru",
    "kr": "이해되다",
    "icon": "☀️"
  },
  {
    "jp": "言う",
    "read": "[이우] iu",
    "kr": "말하다",
    "icon": "🙏"
  },
  {
    "jp": "飲む",
    "read": "[노무] nomu",
    "kr": "마시다",
    "icon": "👋"
  },
  {
    "jp": "練習",
    "read": "[렌슈우] renshuu",
    "kr": "연습하다",
    "icon": "⭕"
  },
  {
    "jp": "何",
    "read": "[나니] nani",
    "kr": "무엇",
    "icon": "❌"
  },
  {
    "jp": "厚い",
    "read": "[아츠이] atsui",
    "kr": "친절한, 깊은, 두꺼운",
    "icon": "🍣"
  },
  {
    "jp": "毎月",
    "read": "[마이츠키] maitsuki",
    "kr": "매달",
    "icon": "🐱"
  },
  {
    "jp": "閉まる",
    "read": "[시마루] shimaru",
    "kr": "닫다, 닫히다",
    "icon": "🐶"
  },
  {
    "jp": "脱ぐ",
    "read": "[누구] nugu",
    "kr": "옷을 벗다",
    "icon": "📚"
  },
  {
    "jp": "黒い",
    "read": "[쿠로이] kuroi",
    "kr": "검은",
    "icon": "🏫"
  },
  {
    "jp": "登る",
    "read": "[노보루] noboru",
    "kr": "오르다",
    "icon": "📝"
  },
  {
    "jp": "汚い",
    "read": "[키타나이] kitanai",
    "kr": "더러운",
    "icon": "🏃"
  },
  {
    "jp": "雨",
    "read": "[아메] ame",
    "kr": "비",
    "icon": "🗣️"
  },
  {
    "jp": "お皿",
    "read": "[오사라] osara",
    "kr": "접시",
    "icon": "💭"
  },
  {
    "jp": "速い",
    "read": "[하야이] hayai",
    "kr": "빠른",
    "icon": "🌟"
  },
  {
    "jp": "お風呂",
    "read": "[오후로] ofuro",
    "kr": "목욕",
    "icon": "💡"
  },
  {
    "jp": "新しい",
    "read": "[아타라시-] atarashii",
    "kr": "새로운",
    "icon": "✅"
  },
  {
    "jp": "廊下",
    "read": "[로-카] rouka",
    "kr": "복도",
    "icon": "🎌"
  },
  {
    "jp": "茶色",
    "read": "[챠이로] chairo",
    "kr": "갈색",
    "icon": "☀️"
  },
  {
    "jp": "コート",
    "read": "[코-토] kooto",
    "kr": "코트, 테니스 코트",
    "icon": "🙏"
  },
  {
    "jp": "手紙",
    "read": "[테가미] tegami",
    "kr": "편지",
    "icon": "👋"
  },
  {
    "jp": "要る",
    "read": "[이루] iru",
    "kr": "필요하다",
    "icon": "⭕"
  },
  {
    "jp": "こっち",
    "read": "[콧치] kotchi",
    "kr": "이 사람 또는 방법",
    "icon": "❌"
  },
  {
    "jp": "スプーン",
    "read": "[스푸-은] supuun",
    "kr": "숟가락",
    "icon": "🍣"
  },
  {
    "jp": "時々",
    "read": "[토키도키] tokidoki",
    "kr": "가끔",
    "icon": "🐱"
  },
  {
    "jp": "傘",
    "read": "[카사] kasa",
    "kr": "우산",
    "icon": "🐶"
  },
  {
    "jp": "いい / よい",
    "read": "[이- / 요이] ii / yoi",
    "kr": "좋은",
    "icon": "📚"
  },
  {
    "jp": "電話",
    "read": "[덴와] denwa",
    "kr": "전화",
    "icon": "🏫"
  },
  {
    "jp": "勤める",
    "read": "[츠토메루] tsutomeru",
    "kr": "~을 위해 일하다",
    "icon": "📝"
  },
  {
    "jp": "安い",
    "read": "[야스이] yasui",
    "kr": "싼",
    "icon": "🏃"
  },
  {
    "jp": "どう",
    "read": "[도-] dou",
    "kr": "어떻게, 어떤 식으로",
    "icon": "🗣️"
  },
  {
    "jp": "道",
    "read": "[미치] michi",
    "kr": "거리",
    "icon": "💭"
  },
  {
    "jp": "バス",
    "read": "[바스] basu",
    "kr": "버스",
    "icon": "🌟"
  },
  {
    "jp": "クラス",
    "read": "[쿠라스] kurasu",
    "kr": "수업",
    "icon": "💡"
  },
  {
    "jp": "差す",
    "read": "[사스] sasu",
    "kr": "손을 뻗다, 우산을 들다",
    "icon": "✅"
  },
  {
    "jp": "スポーツ",
    "read": "[스포-츠] supootsu",
    "kr": "스포츠",
    "icon": "🎌"
  },
  {
    "jp": "どっち",
    "read": "[돗치] dotchi",
    "kr": "어느",
    "icon": "☀️"
  },
  {
    "jp": "そば",
    "read": "[소바] soba",
    "kr": "가까운, 옆의",
    "icon": "🙏"
  },
  {
    "jp": "新聞",
    "read": "[심분] shinbun",
    "kr": "신문",
    "icon": "👋"
  },
  {
    "jp": "どうして",
    "read": "[도-시테] doushite",
    "kr": "왜",
    "icon": "⭕"
  },
  {
    "jp": "庭",
    "read": "[니와] niwa",
    "kr": "정원",
    "icon": "❌"
  },
  {
    "jp": "大きな",
    "read": "[오-키나] ookina",
    "kr": "큰",
    "icon": "🍣"
  },
  {
    "jp": "辺",
    "read": "[헨] hen",
    "kr": "지역",
    "icon": "🐱"
  },
  {
    "jp": "番号",
    "read": "[방고-] bangou",
    "kr": "숫자",
    "icon": "🐶"
  },
  {
    "jp": "家族",
    "read": "[카조쿠] kazoku",
    "kr": "가족",
    "icon": "📚"
  },
  {
    "jp": "下手",
    "read": "[헤타] heta",
    "kr": "서투른",
    "icon": "🏫"
  },
  {
    "jp": "料理",
    "read": "[료우리] ryouri",
    "kr": "요리",
    "icon": "📝"
  },
  {
    "jp": "カレー",
    "read": "[카레-] karee",
    "kr": "카레",
    "icon": "🏃"
  },
  {
    "jp": "六",
    "read": "[로쿠] roku",
    "kr": "여섯",
    "icon": "🗣️"
  },
  {
    "jp": "今年",
    "read": "[콘넨] konnen",
    "kr": "올해",
    "icon": "💭"
  },
  {
    "jp": "初めて",
    "read": "[하지메테] hajimete",
    "kr": "처음으로",
    "icon": "🌟"
  },
  {
    "jp": "風邪",
    "read": "[카제] kaze",
    "kr": "감기",
    "icon": "💡"
  },
  {
    "jp": "赤い",
    "read": "[아카이] akai",
    "kr": "빨간",
    "icon": "✅"
  },
  {
    "jp": "甘い",
    "read": "[아마이] amai",
    "kr": "달콤한",
    "icon": "🎌"
  },
  {
    "jp": "西",
    "read": "[니시] nishi",
    "kr": "서쪽",
    "icon": "☀️"
  },
  {
    "jp": "毎週",
    "read": "[마이슈우] maishuu",
    "kr": "매주",
    "icon": "🙏"
  },
  {
    "jp": "いつも",
    "read": "[이츠모] itsumo",
    "kr": "항상",
    "icon": "👋"
  },
  {
    "jp": "五つ",
    "read": "[이츠츠] itsutsu",
    "kr": "다섯",
    "icon": "⭕"
  },
  {
    "jp": "建物",
    "read": "[타테모노] tatemono",
    "kr": "건물",
    "icon": "❌"
  },
  {
    "jp": "なる",
    "read": "[나루] naru",
    "kr": "되다",
    "icon": "🍣"
  },
  {
    "jp": "まっすぐ",
    "read": "[맛스구] massugu",
    "kr": "곧장, 직진",
    "icon": "🐱"
  },
  {
    "jp": "作る",
    "read": "[츠쿠루] tsukuru",
    "kr": "만들다",
    "icon": "🐶"
  },
  {
    "jp": "風",
    "read": "[카제] kaze",
    "kr": "바람",
    "icon": "📚"
  },
  {
    "jp": "少し",
    "read": "[스코시] sukoshi",
    "kr": "적은",
    "icon": "🏫"
  },
  {
    "jp": "大学",
    "read": "[다이가쿠] daigaku",
    "kr": "대학교",
    "icon": "📝"
  },
  {
    "jp": "シャツ",
    "read": "[샤츠] shatsu",
    "kr": "셔츠",
    "icon": "🏃"
  },
  {
    "jp": "病院",
    "read": "[뵤우인] byouin",
    "kr": "병원",
    "icon": "🗣️"
  },
  {
    "jp": "会社",
    "read": "[카이샤] kaisha",
    "kr": "회사",
    "icon": "💭"
  },
  {
    "jp": "無くす",
    "read": "[나쿠스] nakusu",
    "kr": "잃다",
    "icon": "🌟"
  },
  {
    "jp": "スリッパ",
    "read": "[스립파] surippa",
    "kr": "슬리퍼",
    "icon": "💡"
  },
  {
    "jp": "地下鉄",
    "read": "[치카테츠] chikatetsu",
    "kr": "지하철",
    "icon": "✅"
  },
  {
    "jp": "ページ",
    "read": "[페-지] peeji",
    "kr": "페이지",
    "icon": "🎌"
  },
  {
    "jp": "曇る",
    "read": "[쿠모루] kumoru",
    "kr": "흐려지다",
    "icon": "☀️"
  },
  {
    "jp": "辞書",
    "read": "[지쇼] jisho",
    "kr": "사전",
    "icon": "🙏"
  },
  {
    "jp": "万年筆",
    "read": "[만넨히츠] mannenhitsu",
    "kr": "만년필",
    "icon": "👋"
  },
  {
    "jp": "海",
    "read": "[우미] umi",
    "kr": "바다",
    "icon": "⭕"
  },
  {
    "jp": "エレベーター",
    "read": "[에레베-타-] erebeetaa",
    "kr": "엘리베이터",
    "icon": "❌"
  },
  {
    "jp": "たぶん",
    "read": "[타분] tabun",
    "kr": "아마",
    "icon": "🍣"
  },
  {
    "jp": "夕方",
    "read": "[유우가타] yuugata",
    "kr": "저녁",
    "icon": "🐱"
  },
  {
    "jp": "東",
    "read": "[히가시] higashi",
    "kr": "동쪽",
    "icon": "🐶"
  },
  {
    "jp": "声",
    "read": "[코에] koe",
    "kr": "목소리",
    "icon": "📚"
  },
  {
    "jp": "撮る",
    "read": "[토루] toru",
    "kr": "사진을 찍다",
    "icon": "🏫"
  },
  {
    "jp": "私",
    "read": "[와타시] watashi",
    "kr": "(겸손) 나",
    "icon": "📝"
  },
  {
    "jp": "両親",
    "read": "[료우신] ryoushin",
    "kr": "부모님 모두",
    "icon": "🏃"
  },
  {
    "jp": "きれい",
    "read": "[키레-] kirei",
    "kr": "예쁜, 깨끗한",
    "icon": "🗣️"
  },
  {
    "jp": "どうぞ",
    "read": "[도-조] douzo",
    "kr": "제발",
    "icon": "💭"
  },
  {
    "jp": "好き",
    "read": "[스키] suki",
    "kr": "마음에 드는",
    "icon": "🌟"
  },
  {
    "jp": "静か",
    "read": "[시즈카] shizuka",
    "kr": "조용한",
    "icon": "💡"
  },
  {
    "jp": "お父さん",
    "read": "[오토-산] otousan",
    "kr": "(존경) 아버지",
    "icon": "✅"
  },
  {
    "jp": "人",
    "read": "[닌] nin",
    "kr": "사람",
    "icon": "🎌"
  },
  {
    "jp": "覚える",
    "read": "[오보에루] oboeru",
    "kr": "기억하다",
    "icon": "☀️"
  },
  {
    "jp": "休み",
    "read": "[야스미] yasumi",
    "kr": "쉬는 날, 휴일",
    "icon": "🙏"
  },
  {
    "jp": "池",
    "read": "[이케] ike",
    "kr": "연못",
    "icon": "👋"
  },
  {
    "jp": "始まる",
    "read": "[하지마루] hajimaru",
    "kr": "시작하다",
    "icon": "⭕"
  },
  {
    "jp": "困る",
    "read": "[코마루] komaru",
    "kr": "걱정하다",
    "icon": "❌"
  },
  {
    "jp": "ほか",
    "read": "[호카] hoka",
    "kr": "다른, 나머지",
    "icon": "🍣"
  },
  {
    "jp": "ちゃわん",
    "read": "[챠완] chawan",
    "kr": "밥",
    "icon": "🐱"
  },
  {
    "jp": "疲れる",
    "read": "[츠카레루] tsukareru",
    "kr": "피곤해지다",
    "icon": "🐶"
  },
  {
    "jp": "掃除",
    "read": "[소-지] souji",
    "kr": "청소하다, 쓸다",
    "icon": "📚"
  },
  {
    "jp": "賑やか",
    "read": "[니기야카] nigiyaka",
    "kr": "번화하다, 바쁘다",
    "icon": "🏫"
  },
  {
    "jp": "一つ",
    "read": "[히토츠] hitotsu",
    "kr": "하나",
    "icon": "📝"
  },
  {
    "jp": "来週",
    "read": "[라이슈우] raishuu",
    "kr": "다음 주",
    "icon": "🏃"
  },
  {
    "jp": "財布",
    "read": "[사이후] saifu",
    "kr": "지갑",
    "icon": "🗣️"
  },
  {
    "jp": "知る",
    "read": "[시루] shiru",
    "kr": "알다",
    "icon": "💭"
  },
  {
    "jp": "教える",
    "read": "[오시에루] oshieru",
    "kr": "가르치다, 말하다",
    "icon": "🌟"
  },
  {
    "jp": "朝御飯",
    "read": "[아사고한] asagohan",
    "kr": "아침",
    "icon": "💡"
  },
  {
    "jp": "飛ぶ",
    "read": "[토부] tobu",
    "kr": "날다, 뛰다",
    "icon": "✅"
  },
  {
    "jp": "言葉",
    "read": "[코토바] kotoba",
    "kr": "단어, 언어",
    "icon": "🎌"
  },
  {
    "jp": "キロ / キログラム",
    "read": "[키로 / 키로구라무] kiro / kiroguramu",
    "kr": "킬로그램",
    "icon": "☀️"
  },
  {
    "jp": "赤",
    "read": "[아카] aka",
    "kr": "빨간색",
    "icon": "🙏"
  },
  {
    "jp": "自分",
    "read": "[지분] jibun",
    "kr": "자신",
    "icon": "👋"
  },
  {
    "jp": "デパート",
    "read": "[데파-토] depaato",
    "kr": "백화점",
    "icon": "⭕"
  },
  {
    "jp": "薄い",
    "read": "[우스이] usui",
    "kr": "마르다, 약하다",
    "icon": "❌"
  },
  {
    "jp": "高い",
    "read": "[타카이] takai",
    "kr": "키 크다, 비싸다",
    "icon": "🍣"
  },
  {
    "jp": "帰る",
    "read": "[카에루] kaeru",
    "kr": "돌아가다",
    "icon": "🐱"
  },
  {
    "jp": "はい",
    "read": "[하이] hai",
    "kr": "네",
    "icon": "🐶"
  },
  {
    "jp": "卵",
    "read": "[타마고] tamago",
    "kr": "계란",
    "icon": "📚"
  },
  {
    "jp": "低い",
    "read": "[히쿠이] hikui",
    "kr": "짧다, 낮다",
    "icon": "🏫"
  },
  {
    "jp": "なぜ",
    "read": "[나제] naze",
    "kr": "왜",
    "icon": "📝"
  },
  {
    "jp": "一日",
    "read": "[츠이타치] tsuitachi",
    "kr": "(1) 어느 날, (2) 월 초",
    "icon": "🏃"
  },
  {
    "jp": "いいえ",
    "read": "[이-에] iie",
    "kr": "아니요",
    "icon": "🗣️"
  },
  {
    "jp": "小さな",
    "read": "[치-사나] chiisana",
    "kr": "조금",
    "icon": "💭"
  },
  {
    "jp": "時間",
    "read": "[지칸] jikan",
    "kr": "시간",
    "icon": "🌟"
  },
  {
    "jp": "上げる",
    "read": "[아게루] ageru",
    "kr": "주다",
    "icon": "💡"
  },
  {
    "jp": "ふろ",
    "read": "[후로] furo",
    "kr": "목욕",
    "icon": "✅"
  },
  {
    "jp": "生徒",
    "read": "[세-토] seito",
    "kr": "학생",
    "icon": "🎌"
  },
  {
    "jp": "レストラン",
    "read": "[레스토란] resutoran",
    "kr": "식당",
    "icon": "☀️"
  },
  {
    "jp": "出す",
    "read": "[다스] dasu",
    "kr": "내놓다",
    "icon": "🙏"
  },
  {
    "jp": "かわいい",
    "read": "[카와이-] kawaii",
    "kr": "귀엽다",
    "icon": "👋"
  },
  {
    "jp": "音楽",
    "read": "[옹가쿠] ongaku",
    "kr": "음악",
    "icon": "⭕"
  },
  {
    "jp": "歌",
    "read": "[우타] uta",
    "kr": "노래",
    "icon": "❌"
  },
  {
    "jp": "いちばん",
    "read": "[이치반] ichiban",
    "kr": "최고, 첫 번째",
    "icon": "🍣"
  },
  {
    "jp": "咲く",
    "read": "[사쿠] saku",
    "kr": "피다",
    "icon": "🐱"
  },
  {
    "jp": "山",
    "read": "[야마] yama",
    "kr": "산",
    "icon": "🐶"
  },
  {
    "jp": "テレビ",
    "read": "[테레비] terebi",
    "kr": "텔레비전",
    "icon": "📚"
  },
  {
    "jp": "授業",
    "read": "[쥬교우] jugyou",
    "kr": "수업, 학습",
    "icon": "🏫"
  },
  {
    "jp": "暖かい",
    "read": "[아타타카이] atatakai",
    "kr": "따뜻하다",
    "icon": "📝"
  },
  {
    "jp": "セーター",
    "read": "[세-타-] seetaa",
    "kr": "스웨터, 점퍼",
    "icon": "🏃"
  },
  {
    "jp": "自転車",
    "read": "[지텐샤] jitensha",
    "kr": "자전거",
    "icon": "🗣️"
  },
  {
    "jp": "ラジカセ / ラジオカセット",
    "read": "[라지카세 / 라지오카셋토] rajikase / rajiokasetto",
    "kr": "라디오 카세트 플레이어",
    "icon": "💭"
  },
  {
    "jp": "つける",
    "read": "[츠케루] tsukeru",
    "kr": "켜다",
    "icon": "🌟"
  },
  {
    "jp": "さ来年",
    "read": "[사라이넨] sarainen",
    "kr": "내후년",
    "icon": "💡"
  },
  {
    "jp": "学校",
    "read": "[각코-] gakkou",
    "kr": "학교",
    "icon": "✅"
  },
  {
    "jp": "いくら",
    "read": "[이쿠라] ikura",
    "kr": "얼마?",
    "icon": "🎌"
  },
  {
    "jp": "四",
    "read": "[시] shi",
    "kr": "넷",
    "icon": "☀️"
  },
  {
    "jp": "入る",
    "read": "[이루] iru",
    "kr": "들어가다, 포함하다",
    "icon": "🙏"
  },
  {
    "jp": "曇り",
    "read": "[쿠모리] kumori",
    "kr": "흐린 날씨",
    "icon": "👋"
  },
  {
    "jp": "外国",
    "read": "[가이코쿠] gaikoku",
    "kr": "외국",
    "icon": "⭕"
  },
  {
    "jp": "温い",
    "read": "[누쿠이] nukui",
    "kr": "미지근한",
    "icon": "❌"
  },
  {
    "jp": "そうして / そして",
    "read": "[소-시테 / 소시테] soushite / soshite",
    "kr": "그리고",
    "icon": "🍣"
  },
  {
    "jp": "どうも",
    "read": "[도-모] doumo",
    "kr": "감사합니다",
    "icon": "🐱"
  },
  {
    "jp": "仕事",
    "read": "[시고토] shigoto",
    "kr": "직업",
    "icon": "🐶"
  },
  {
    "jp": "窓",
    "read": "[마도] mado",
    "kr": "창문",
    "icon": "📚"
  },
  {
    "jp": "晩",
    "read": "[반] ban",
    "kr": "저녁",
    "icon": "🏫"
  },
  {
    "jp": "難しい",
    "read": "[무즈카시-] muzukashii",
    "kr": "어렵다",
    "icon": "📝"
  },
  {
    "jp": "村",
    "read": "[무라] mura",
    "kr": "마을",
    "icon": "🏃"
  },
  {
    "jp": "鉛筆",
    "read": "[엠피츠] enpitsu",
    "kr": "연필",
    "icon": "🗣️"
  },
  {
    "jp": "長い",
    "read": "[나가이] nagai",
    "kr": "길다",
    "icon": "💭"
  },
  {
    "jp": "生まれる",
    "read": "[우마레루] umareru",
    "kr": "태어나다",
    "icon": "🌟"
  },
  {
    "jp": "雑誌",
    "read": "[잣시] zasshi",
    "kr": "잡지",
    "icon": "💡"
  },
  {
    "jp": "国",
    "read": "[쿠니] kuni",
    "kr": "나라",
    "icon": "✅"
  },
  {
    "jp": "おまわりさん",
    "read": "[오마와리산] omawarisan",
    "kr": "경찰을 친근하게 부르는 말",
    "icon": "🎌"
  },
  {
    "jp": "今朝",
    "read": "[케사] kesa",
    "kr": "오늘 아침",
    "icon": "☀️"
  },
  {
    "jp": "晴れる",
    "read": "[하레루] hareru",
    "kr": "맑다",
    "icon": "🙏"
  },
  {
    "jp": "夕飯",
    "read": "[유우한] yuuhan",
    "kr": "저녁 식사",
    "icon": "👋"
  },
  {
    "jp": "一緒",
    "read": "[잇쇼] issho",
    "kr": "함께",
    "icon": "⭕"
  },
  {
    "jp": "どれ",
    "read": "[도레] dore",
    "kr": "어느 것(세 개 이상 중)",
    "icon": "❌"
  },
  {
    "jp": "立つ",
    "read": "[타츠] tatsu",
    "kr": "서다",
    "icon": "🍣"
  },
  {
    "jp": "元気",
    "read": "[겡키] genki",
    "kr": "건강, 활력",
    "icon": "🐱"
  },
  {
    "jp": "天気",
    "read": "[텡키] tenki",
    "kr": "날씨",
    "icon": "🐶"
  },
  {
    "jp": "医者",
    "read": "[이샤] isha",
    "kr": "의사",
    "icon": "📚"
  },
  {
    "jp": "七",
    "read": "[시치] shichi",
    "kr": "일곱",
    "icon": "🏫"
  },
  {
    "jp": "はく",
    "read": "[하쿠] haku",
    "kr": "입다, 바지 등을 신다/입다",
    "icon": "📝"
  },
  {
    "jp": "だんだん",
    "read": "[단단] dandan",
    "kr": "점점",
    "icon": "🏃"
  },
  {
    "jp": "戸",
    "read": "[코] ko",
    "kr": "일본식 문",
    "icon": "🗣️"
  },
  {
    "jp": "ノート",
    "read": "[노-토] nooto",
    "kr": "공책",
    "icon": "💭"
  },
  {
    "jp": "また",
    "read": "[마타] mata",
    "kr": "다시, 그리고",
    "icon": "🌟"
  },
  {
    "jp": "今日",
    "read": "[쿄우] kyou",
    "kr": "오늘",
    "icon": "💡"
  },
  {
    "jp": "とても",
    "read": "[토테모] totemo",
    "kr": "매우",
    "icon": "✅"
  },
  {
    "jp": "一昨年",
    "read": "[잇사쿠넨] issakunen",
    "kr": "재작년",
    "icon": "🎌"
  },
  {
    "jp": "文章",
    "read": "[분쇼우] bunshou",
    "kr": "문장, 글",
    "icon": "☀️"
  },
  {
    "jp": "公園",
    "read": "[코-엔] kouen",
    "kr": "공원",
    "icon": "🙏"
  },
  {
    "jp": "借りる",
    "read": "[카리루] kariru",
    "kr": "빌리다",
    "icon": "👋"
  },
  {
    "jp": "口",
    "read": "[쿠치] kuchi",
    "kr": "입, 구멍",
    "icon": "⭕"
  },
  {
    "jp": "持つ",
    "read": "[모츠] motsu",
    "kr": "잡다",
    "icon": "❌"
  },
  {
    "jp": "上着",
    "read": "[우와기] uwagi",
    "kr": "재킷",
    "icon": "🍣"
  },
  {
    "jp": "秋",
    "read": "[아키] aki",
    "kr": "가을",
    "icon": "🐱"
  },
  {
    "jp": "悪い",
    "read": "[와루이] warui",
    "kr": "나쁘다",
    "icon": "🐶"
  },
  {
    "jp": "青い",
    "read": "[아오이] aoi",
    "kr": "파란색",
    "icon": "📚"
  },
  {
    "jp": "住む",
    "read": "[스무] sumu",
    "kr": "~에 살다",
    "icon": "🏫"
  },
  {
    "jp": "かける",
    "read": "[카케루] kakeru",
    "kr": "전화하다",
    "icon": "📝"
  },
  {
    "jp": "木曜日",
    "read": "[모쿠요우비] mokuyoubi",
    "kr": "목요일",
    "icon": "🏃"
  },
  {
    "jp": "忘れる",
    "read": "[와스레루] wasureru",
    "kr": "잊다",
    "icon": "🗣️"
  },
  {
    "jp": "お手洗い",
    "read": "[오테아라이] otearai",
    "kr": "욕실",
    "icon": "💭"
  },
  {
    "jp": "写真",
    "read": "[샤신] shashin",
    "kr": "사진",
    "icon": "🌟"
  },
  {
    "jp": "ゼロ",
    "read": "[제로] zero",
    "kr": "영",
    "icon": "💡"
  },
  {
    "jp": "いろいろ",
    "read": "[이로이로] iroiro",
    "kr": "다양한",
    "icon": "✅"
  },
  {
    "jp": "もう",
    "read": "[모-] mou",
    "kr": "이미",
    "icon": "🎌"
  },
  {
    "jp": "会う",
    "read": "[아우] au",
    "kr": "만나다",
    "icon": "☀️"
  },
  {
    "jp": "南",
    "read": "[미나미] minami",
    "kr": "남쪽",
    "icon": "🙏"
  },
  {
    "jp": "五日",
    "read": "[이츠카] itsuka",
    "kr": "오일, 다섯째 날",
    "icon": "👋"
  },
  {
    "jp": "着る",
    "read": "[키루] kiru",
    "kr": "어깨에서 아래로 입다",
    "icon": "⭕"
  },
  {
    "jp": "そこ",
    "read": "[소코] soko",
    "kr": "그곳",
    "icon": "❌"
  },
  {
    "jp": "終る",
    "read": "[오와루] owaru",
    "kr": "끝내다",
    "icon": "🍣"
  },
  {
    "jp": "どの",
    "read": "[도노] dono",
    "kr": "어느",
    "icon": "🐱"
  },
  {
    "jp": "読む",
    "read": "[요무] yomu",
    "kr": "읽다",
    "icon": "🐶"
  },
  {
    "jp": "それでは",
    "read": "[소레데하] soredeha",
    "kr": "그런 상황에서",
    "icon": "📚"
  },
  {
    "jp": "来月",
    "read": "[라이게츠] raigetsu",
    "kr": "다음 달",
    "icon": "🏫"
  },
  {
    "jp": "果物",
    "read": "[쿠다모노] kudamono",
    "kr": "과일",
    "icon": "📝"
  },
  {
    "jp": "止まる",
    "read": "[토마루] tomaru",
    "kr": "멈추다",
    "icon": "🏃"
  },
  {
    "jp": "着く",
    "read": "[츠쿠] tsuku",
    "kr": "도착하다",
    "icon": "🗣️"
  },
  {
    "jp": "大好き",
    "read": "[다이스키] daisuki",
    "kr": "아주 좋아하다",
    "icon": "💭"
  },
  {
    "jp": "妹",
    "read": "[이모-토] imouto",
    "kr": "(겸손하게) 여동생",
    "icon": "🌟"
  },
  {
    "jp": "夏",
    "read": "[나츠] natsu",
    "kr": "여름",
    "icon": "💡"
  },
  {
    "jp": "今晩",
    "read": "[콤반] konban",
    "kr": "오늘 저녁",
    "icon": "✅"
  },
  {
    "jp": "塩",
    "read": "[시오] shio",
    "kr": "소금",
    "icon": "🎌"
  },
  {
    "jp": "先週",
    "read": "[센슈우] senshuu",
    "kr": "지난주",
    "icon": "☀️"
  },
  {
    "jp": "欲しい",
    "read": "[호시-] hoshii",
    "kr": "원하다",
    "icon": "🙏"
  },
  {
    "jp": "木",
    "read": "[키] ki",
    "kr": "나무",
    "icon": "👋"
  },
  {
    "jp": "ほんとう",
    "read": "[혼토-] hontou",
    "kr": "진실",
    "icon": "⭕"
  },
  {
    "jp": "薬",
    "read": "[쿠스리] kusuri",
    "kr": "약",
    "icon": "❌"
  },
  {
    "jp": "お菓子",
    "read": "[오카시] okashi",
    "kr": "사탕",
    "icon": "🍣"
  },
  {
    "jp": "金曜日",
    "read": "[킨요우비] kinyoubi",
    "kr": "금요일",
    "icon": "🐱"
  },
  {
    "jp": "まずい",
    "read": "[마즈이] mazui",
    "kr": "불쾌한",
    "icon": "🐶"
  },
  {
    "jp": "お酒",
    "read": "[오사케] osake",
    "kr": "술",
    "icon": "📚"
  },
  {
    "jp": "多い",
    "read": "[오-이] ooi",
    "kr": "많은",
    "icon": "🏫"
  },
  {
    "jp": "動物",
    "read": "[도-부츠] doubutsu",
    "kr": "동물",
    "icon": "📝"
  },
  {
    "jp": "切符",
    "read": "[킵푸] kippu",
    "kr": "표",
    "icon": "🏃"
  },
  {
    "jp": "キロ / キロメートル",
    "read": "[키로 / 키로메-토루] kiro / kiromeetoru",
    "kr": "킬로미터",
    "icon": "🗣️"
  },
  {
    "jp": "呼ぶ",
    "read": "[요부] yobu",
    "kr": "부르다, 초대하다",
    "icon": "💭"
  },
  {
    "jp": "体",
    "read": "[카라다] karada",
    "kr": "몸",
    "icon": "🌟"
  },
  {
    "jp": "ゆっくりと",
    "read": "[육쿠리토] yukkurito",
    "kr": "천천히",
    "icon": "💡"
  },
  {
    "jp": "二日",
    "read": "[후츠카] futsuka",
    "kr": "이틀, 이십일",
    "icon": "✅"
  },
  {
    "jp": "大人",
    "read": "[오토나] otona",
    "kr": "성인",
    "icon": "🎌"
  },
  {
    "jp": "歯",
    "read": "[하] ha",
    "kr": "이",
    "icon": "☀️"
  },
  {
    "jp": "冬",
    "read": "[후유] fuyu",
    "kr": "겨울",
    "icon": "🙏"
  },
  {
    "jp": "所",
    "read": "[토코로] tokoro",
    "kr": "장소",
    "icon": "👋"
  },
  {
    "jp": "吹く",
    "read": "[후쿠] fuku",
    "kr": "불다",
    "icon": "⭕"
  },
  {
    "jp": "足",
    "read": "[아시] ashi",
    "kr": "발, 다리",
    "icon": "❌"
  },
  {
    "jp": "箱",
    "read": "[하코] hako",
    "kr": "상자",
    "icon": "🍣"
  },
  {
    "jp": "八",
    "read": "[하치] hachi",
    "kr": "여덟",
    "icon": "🐱"
  },
  {
    "jp": "朝",
    "read": "[아사] asa",
    "kr": "아침",
    "icon": "🐶"
  },
  {
    "jp": "一昨日",
    "read": "[잇사쿠지츠] issakujitsu",
    "kr": "그저께",
    "icon": "📚"
  },
  {
    "jp": "有名",
    "read": "[유우메-] yuumei",
    "kr": "유명한",
    "icon": "🏫"
  },
  {
    "jp": "二十日",
    "read": "[하츠카] hatsuka",
    "kr": "이십일, 스무 번째",
    "icon": "📝"
  },
  {
    "jp": "近い",
    "read": "[치카이] chikai",
    "kr": "가까운",
    "icon": "🏃"
  },
  {
    "jp": "ください",
    "read": "[쿠다사이] kudasai",
    "kr": "제발",
    "icon": "🗣️"
  },
  {
    "jp": "時計",
    "read": "[토케-] tokei",
    "kr": "시계",
    "icon": "💭"
  },
  {
    "jp": "午後",
    "read": "[고고] gogo",
    "kr": "오후",
    "icon": "🌟"
  },
  {
    "jp": "食べ物",
    "read": "[타베모노] tabemono",
    "kr": "음식",
    "icon": "💡"
  },
  {
    "jp": "降る",
    "read": "[후루] furu",
    "kr": "떨어지다, 예: 비나 눈",
    "icon": "✅"
  },
  {
    "jp": "易しい",
    "read": "[야사시-] yasashii",
    "kr": "쉽다, 간단하다",
    "icon": "🎌"
  },
  {
    "jp": "大使館",
    "read": "[타이시칸] taishikan",
    "kr": "대사관",
    "icon": "☀️"
  },
  {
    "jp": "誰",
    "read": "[다레] dare",
    "kr": "누구",
    "icon": "🙏"
  },
  {
    "jp": "上",
    "read": "[우에] ue",
    "kr": "위에",
    "icon": "👋"
  },
  {
    "jp": "五",
    "read": "[고] go",
    "kr": "다섯",
    "icon": "⭕"
  },
  {
    "jp": "十日",
    "read": "[토-카] touka",
    "kr": "십일, 열째 날",
    "icon": "❌"
  },
  {
    "jp": "どちら",
    "read": "[도치라] dochira",
    "kr": "둘 중 어느 것",
    "icon": "🍣"
  },
  {
    "jp": "プール",
    "read": "[푸-루] puuru",
    "kr": "수영장",
    "icon": "🐱"
  },
  {
    "jp": "小さい",
    "read": "[치-사이] chiisai",
    "kr": "작은",
    "icon": "🐶"
  },
  {
    "jp": "今週",
    "read": "[콘슈우] konshuu",
    "kr": "이번 주",
    "icon": "📚"
  },
  {
    "jp": "肉",
    "read": "[니쿠] niku",
    "kr": "고기",
    "icon": "🏫"
  },
  {
    "jp": "零",
    "read": "[레-] rei",
    "kr": "영",
    "icon": "📝"
  },
  {
    "jp": "豚肉",
    "read": "[부타니쿠] butaniku",
    "kr": "돼지고기",
    "icon": "🏃"
  },
  {
    "jp": "広い",
    "read": "[히로이] hiroi",
    "kr": "넓다",
    "icon": "🗣️"
  },
  {
    "jp": "靴下",
    "read": "[쿠츠시타] kutsushita",
    "kr": "양말",
    "icon": "💭"
  },
  {
    "jp": "一人",
    "read": "[히토리] hitori",
    "kr": "한 사람",
    "icon": "🌟"
  },
  {
    "jp": "かぎ",
    "read": "[카기] kagi",
    "kr": "열쇠",
    "icon": "💡"
  },
  {
    "jp": "向こう",
    "read": "[무코-] mukou",
    "kr": "저기",
    "icon": "✅"
  },
  {
    "jp": "上手",
    "read": "[죠우즈] jouzu",
    "kr": "능숙하다",
    "icon": "🎌"
  },
  {
    "jp": "牛肉",
    "read": "[규우니쿠] gyuuniku",
    "kr": "소고기",
    "icon": "☀️"
  },
  {
    "jp": "話",
    "read": "[하나시] hanashi",
    "kr": "이야기",
    "icon": "🙏"
  },
  {
    "jp": "毎晩",
    "read": "[마이반] maiban",
    "kr": "매일 밤",
    "icon": "👋"
  },
  {
    "jp": "三つ",
    "read": "[밋츠] mittsu",
    "kr": "셋",
    "icon": "⭕"
  },
  {
    "jp": "吸う",
    "read": "[스우] suu",
    "kr": "피우다, 빨다",
    "icon": "❌"
  },
  {
    "jp": "銀行",
    "read": "[깅코-] ginkou",
    "kr": "은행",
    "icon": "🍣"
  },
  {
    "jp": "大切",
    "read": "[타이세츠] taisetsu",
    "kr": "중요하다",
    "icon": "🐱"
  },
  {
    "jp": "学生",
    "read": "[가쿠세-] gakusei",
    "kr": "학생",
    "icon": "🐶"
  },
  {
    "jp": "部屋",
    "read": "[헤야] heya",
    "kr": "방",
    "icon": "📚"
  },
  {
    "jp": "昼御飯",
    "read": "[히루고한] hirugohan",
    "kr": "점심 식사",
    "icon": "🏫"
  },
  {
    "jp": "下",
    "read": "[시타] shita",
    "kr": "아래",
    "icon": "📝"
  },
  {
    "jp": "二つ",
    "read": "[후타츠] futatsu",
    "kr": "둘",
    "icon": "🏃"
  },
  {
    "jp": "百",
    "read": "[햐쿠] hyaku",
    "kr": "백",
    "icon": "🗣️"
  },
  {
    "jp": "地図",
    "read": "[치즈] chizu",
    "kr": "지도",
    "icon": "💭"
  },
  {
    "jp": "八百屋",
    "read": "[야오야] yaoya",
    "kr": "채소 가게",
    "icon": "🌟"
  },
  {
    "jp": "ネクタイ",
    "read": "[네쿠타이] nekutai",
    "kr": "넥타이",
    "icon": "💡"
  },
  {
    "jp": "去年",
    "read": "[쿄넨] kyonen",
    "kr": "작년",
    "icon": "✅"
  },
  {
    "jp": "火曜日",
    "read": "[카요우비] kayoubi",
    "kr": "화요일",
    "icon": "🎌"
  },
  {
    "jp": "乗る",
    "read": "[노루] noru",
    "kr": "타다",
    "icon": "☀️"
  },
  {
    "jp": "弟",
    "read": "[오토-토] otouto",
    "kr": "남동생",
    "icon": "🙏"
  },
  {
    "jp": "あなた",
    "read": "[아나타] anata",
    "kr": "너",
    "icon": "👋"
  },
  {
    "jp": "千",
    "read": "[센] sen",
    "kr": "천",
    "icon": "⭕"
  },
  {
    "jp": "緑",
    "read": "[미도리] midori",
    "kr": "초록색",
    "icon": "❌"
  },
  {
    "jp": "とり肉",
    "read": "[토리니쿠] toriniku",
    "kr": "닭고기",
    "icon": "🍣"
  },
  {
    "jp": "軽い",
    "read": "[카루이] karui",
    "kr": "가볍다",
    "icon": "🐱"
  },
  {
    "jp": "あまり",
    "read": "[아마리] amari",
    "kr": "별로",
    "icon": "🐶"
  },
  {
    "jp": "帽子",
    "read": "[보-시] boushi",
    "kr": "모자",
    "icon": "📚"
  },
  {
    "jp": "丈夫",
    "read": "[죠우부] joubu",
    "kr": "강한, 내구성 있는",
    "icon": "🏫"
  },
  {
    "jp": "入れる",
    "read": "[이레루] ireru",
    "kr": "넣다",
    "icon": "📝"
  },
  {
    "jp": "二十歳",
    "read": "[하타치] hatachi",
    "kr": "20살, 20번째 해",
    "icon": "🏃"
  },
  {
    "jp": "三日",
    "read": "[믹카] mikka",
    "kr": "삼일, 이달의 셋째 날",
    "icon": "🗣️"
  },
  {
    "jp": "遠い",
    "read": "[토-이] tooi",
    "kr": "먼",
    "icon": "💭"
  },
  {
    "jp": "夏休み",
    "read": "[나츠야스미] natsuyasumi",
    "kr": "여름 방학",
    "icon": "🌟"
  },
  {
    "jp": "友達",
    "read": "[토모다치] tomodachi",
    "kr": "친구",
    "icon": "💡"
  },
  {
    "jp": "横",
    "read": "[요코] yoko",
    "kr": "옆, 측면, 너비",
    "icon": "✅"
  },
  {
    "jp": "冷たい",
    "read": "[츠메타이] tsumetai",
    "kr": "차갑게 느껴지는",
    "icon": "🎌"
  },
  {
    "jp": "夜",
    "read": "[요루] yoru",
    "kr": "저녁, 밤",
    "icon": "☀️"
  },
  {
    "jp": "トイレ",
    "read": "[토이레] toire",
    "kr": "화장실",
    "icon": "🙏"
  },
  {
    "jp": "おなか",
    "read": "[오나카] onaka",
    "kr": "배",
    "icon": "👋"
  },
  {
    "jp": "どこ",
    "read": "[도코] doko",
    "kr": "어디",
    "icon": "⭕"
  },
  {
    "jp": "暇",
    "read": "[히마] hima",
    "kr": "자유 시간",
    "icon": "❌"
  },
  {
    "jp": "鳴く",
    "read": "[나쿠] naku",
    "kr": "동물 소리. 짹짹거리다, 포효하다, 개굴거리다 등",
    "icon": "🍣"
  },
  {
    "jp": "隣",
    "read": "[토나리] tonari",
    "kr": "옆집에",
    "icon": "🐱"
  },
  {
    "jp": "先生",
    "read": "[센세-] sensei",
    "kr": "선생님, 의사",
    "icon": "🐶"
  },
  {
    "jp": "出口",
    "read": "[데구치] deguchi",
    "kr": "출구",
    "icon": "📚"
  },
  {
    "jp": "後ろ",
    "read": "[우시로] ushiro",
    "kr": "뒤",
    "icon": "🏫"
  },
  {
    "jp": "先月",
    "read": "[셍게츠] sengetsu",
    "kr": "지난달",
    "icon": "📝"
  },
  {
    "jp": "テープ",
    "read": "[테-푸] teepu",
    "kr": "테이프",
    "icon": "🏃"
  },
  {
    "jp": "お姉さん",
    "read": "[오네에산] oneesan",
    "kr": "(존칭)언니",
    "icon": "🗣️"
  },
  {
    "jp": "じゃ / じゃあ",
    "read": "[쟈 / 쟈아] ja / jaa",
    "kr": "그럼…",
    "icon": "💭"
  },
  {
    "jp": "本",
    "read": "[혼] hon",
    "kr": "책",
    "icon": "🌟"
  },
  {
    "jp": "泳ぐ",
    "read": "[오요구] oyogu",
    "kr": "수영하다",
    "icon": "💡"
  },
  {
    "jp": "灰皿",
    "read": "[하이자라] haizara",
    "kr": "재떨이",
    "icon": "✅"
  },
  {
    "jp": "門",
    "read": "[몬] mon",
    "kr": "문",
    "icon": "🎌"
  },
  {
    "jp": "荷物",
    "read": "[니모츠] nimotsu",
    "kr": "짐",
    "icon": "☀️"
  },
  {
    "jp": "この",
    "read": "[코노] kono",
    "kr": "이것",
    "icon": "🙏"
  },
  {
    "jp": "書く",
    "read": "[카쿠] kaku",
    "kr": "쓰다",
    "icon": "👋"
  },
  {
    "jp": "毎年",
    "read": "[마이토시] maitoshi",
    "kr": "매년",
    "icon": "⭕"
  },
  {
    "jp": "明日",
    "read": "[아시타] ashita",
    "kr": "내일",
    "icon": "❌"
  },
  {
    "jp": "ホテル",
    "read": "[호테루] hoteru",
    "kr": "호텔",
    "icon": "🍣"
  },
  {
    "jp": "降りる",
    "read": "[오리루] oriru",
    "kr": "내리다",
    "icon": "🐱"
  },
  {
    "jp": "重い",
    "read": "[오모이] omoi",
    "kr": "무거운",
    "icon": "🐶"
  },
  {
    "jp": "電車",
    "read": "[덴샤] densha",
    "kr": "전철",
    "icon": "📚"
  },
  {
    "jp": "痛い",
    "read": "[이타이] itai",
    "kr": "고통스러운",
    "icon": "🏫"
  },
  {
    "jp": "話す",
    "read": "[하나스] hanasu",
    "kr": "말하다",
    "icon": "📝"
  },
  {
    "jp": "りっぱ",
    "read": "[립파] rippa",
    "kr": "훌륭한",
    "icon": "🏃"
  },
  {
    "jp": "つまらない",
    "read": "[츠마라나이] tsumaranai",
    "kr": "지루한",
    "icon": "🗣️"
  },
  {
    "jp": "よく",
    "read": "[요쿠] yoku",
    "kr": "자주, 잘",
    "icon": "💭"
  },
  {
    "jp": "嫌",
    "read": "[이야] iya",
    "kr": "불쾌한",
    "icon": "🌟"
  },
  {
    "jp": "宿題",
    "read": "[슈쿠다이] shukudai",
    "kr": "숙제",
    "icon": "💡"
  },
  {
    "jp": "死ぬ",
    "read": "[시누] shinu",
    "kr": "죽다",
    "icon": "✅"
  },
  {
    "jp": "みんな",
    "read": "[민나] minna",
    "kr": "모두",
    "icon": "🎌"
  },
  {
    "jp": "万",
    "read": "[만] man",
    "kr": "만",
    "icon": "☀️"
  },
  {
    "jp": "映画",
    "read": "[에-가] eiga",
    "kr": "영화",
    "icon": "🙏"
  },
  {
    "jp": "遅い",
    "read": "[오소이] osoi",
    "kr": "늦은, 느린",
    "icon": "👋"
  },
  {
    "jp": "耳",
    "read": "[미미] mimi",
    "kr": "귀",
    "icon": "⭕"
  },
  {
    "jp": "かかる",
    "read": "[카카루] kakaru",
    "kr": "시간이나 돈이 걸리다",
    "icon": "❌"
  },
  {
    "jp": "でも",
    "read": "[데모] demo",
    "kr": "하지만",
    "icon": "🍣"
  },
  {
    "jp": "四つ",
    "read": "[요츠] yotsu",
    "kr": "넷",
    "icon": "🐱"
  },
  {
    "jp": "机",
    "read": "[츠쿠에] tsukue",
    "kr": "책상",
    "icon": "🐶"
  },
  {
    "jp": "あっち",
    "read": "[앗치] atchi",
    "kr": "저기에",
    "icon": "📚"
  },
  {
    "jp": "買う",
    "read": "[카우] kau",
    "kr": "사다",
    "icon": "🏫"
  },
  {
    "jp": "開く",
    "read": "[히라쿠] hiraku",
    "kr": "열다, 열리다",
    "icon": "📝"
  },
  {
    "jp": "教室",
    "read": "[쿄우시츠] kyoushitsu",
    "kr": "교실",
    "icon": "🏃"
  },
  {
    "jp": "かばん",
    "read": "[카반] kaban",
    "kr": "가방, 바구니",
    "icon": "🗣️"
  },
  {
    "jp": "マッチ",
    "read": "[맛치] matchi",
    "kr": "성냥",
    "icon": "💭"
  },
  {
    "jp": "短い",
    "read": "[미지카이] mijikai",
    "kr": "짧다",
    "icon": "🌟"
  },
  {
    "jp": "姉",
    "read": "[아네] ane",
    "kr": "(겸손하게) 누나",
    "icon": "💡"
  },
  {
    "jp": "大勢",
    "read": "[오-제-] oozei",
    "kr": "많은 사람",
    "icon": "✅"
  },
  {
    "jp": "開ける",
    "read": "[히라케루] hirakeru",
    "kr": "열다",
    "icon": "🎌"
  },
  {
    "jp": "忙しい",
    "read": "[이소가시-] isogashii",
    "kr": "바쁘다, 짜증나다",
    "icon": "☀️"
  },
  {
    "jp": "おばあさん",
    "read": "[오바-산] obaasan",
    "kr": "할머니, 여성 어르신",
    "icon": "🙏"
  },
  {
    "jp": "店",
    "read": "[미세] mise",
    "kr": "가게",
    "icon": "👋"
  },
  {
    "jp": "ワイシャツ",
    "read": "[와이샤츠] waishatsu",
    "kr": "와이셔츠",
    "icon": "⭕"
  },
  {
    "jp": "北",
    "read": "[키타] kita",
    "kr": "북쪽",
    "icon": "❌"
  },
  {
    "jp": "ラジオ",
    "read": "[라지오] rajio",
    "kr": "라디오",
    "icon": "🍣"
  },
  {
    "jp": "すぐに",
    "read": "[스구니] suguni",
    "kr": "즉시",
    "icon": "🐱"
  },
  {
    "jp": "ハンカチ",
    "read": "[항카치] hankachi",
    "kr": "손수건",
    "icon": "🐶"
  },
  {
    "jp": "いつ",
    "read": "[이츠] itsu",
    "kr": "언제",
    "icon": "📚"
  },
  {
    "jp": "全部",
    "read": "[젬부] zenbu",
    "kr": "모두",
    "icon": "🏫"
  },
  {
    "jp": "橋",
    "read": "[하시] hashi",
    "kr": "다리",
    "icon": "📝"
  },
  {
    "jp": "川 / 河",
    "read": "[카와 / 카와] kawa / kawa",
    "kr": "강",
    "icon": "🏃"
  },
  {
    "jp": "バター",
    "read": "[바타-] bataa",
    "kr": "버터",
    "icon": "🗣️"
  },
  {
    "jp": "もっと",
    "read": "[못토] motto",
    "kr": "더",
    "icon": "💭"
  },
  {
    "jp": "入口",
    "read": "[이리구치] iriguchi",
    "kr": "입구",
    "icon": "🌟"
  },
  {
    "jp": "など",
    "read": "[나도] nado",
    "kr": "등등",
    "icon": "💡"
  },
  {
    "jp": "太い",
    "read": "[후토이] futoi",
    "kr": "뚱뚱하다",
    "icon": "✅"
  },
  {
    "jp": "やる",
    "read": "[야루] yaru",
    "kr": "하다",
    "icon": "🎌"
  },
  {
    "jp": "自動車",
    "read": "[지도-샤] jidousha",
    "kr": "자동차",
    "icon": "☀️"
  },
  {
    "jp": "昼",
    "read": "[히루] hiru",
    "kr": "정오, 낮",
    "icon": "🙏"
  },
  {
    "jp": "色",
    "read": "[이로] iro",
    "kr": "색깔",
    "icon": "👋"
  },
  {
    "jp": "黄色",
    "read": "[키-로] kiiro",
    "kr": "노란색",
    "icon": "⭕"
  },
  {
    "jp": "左",
    "read": "[히다리] hidari",
    "kr": "왼쪽",
    "icon": "❌"
  },
  {
    "jp": "野菜",
    "read": "[야사이] yasai",
    "kr": "채소",
    "icon": "🍣"
  },
  {
    "jp": "シャワー",
    "read": "[샤와-] shawaa",
    "kr": "샤워",
    "icon": "🐱"
  },
  {
    "jp": "散歩",
    "read": "[삼포] sanpo",
    "kr": "산책하다",
    "icon": "🐶"
  },
  {
    "jp": "三",
    "read": "[산] san",
    "kr": "셋",
    "icon": "📚"
  },
  {
    "jp": "消える",
    "read": "[키에루] kieru",
    "kr": "사라지다",
    "icon": "🏫"
  },
  {
    "jp": "映画館",
    "read": "[에-가칸] eigakan",
    "kr": "영화관",
    "icon": "📝"
  },
  {
    "jp": "いす",
    "read": "[이스] isu",
    "kr": "의자",
    "icon": "🏃"
  },
  {
    "jp": "誕生日",
    "read": "[탄죠우비] tanjoubi",
    "kr": "생일",
    "icon": "🗣️"
  },
  {
    "jp": "切る",
    "read": "[키루] kiru",
    "kr": "자르다",
    "icon": "💭"
  },
  {
    "jp": "七日",
    "read": "[나노카] nanoka",
    "kr": "7일, 제7일",
    "icon": "🌟"
  },
  {
    "jp": "洗う",
    "read": "[아라우] arau",
    "kr": "씻다",
    "icon": "💡"
  },
  {
    "jp": "あれ",
    "read": "[아레] are",
    "kr": "저",
    "icon": "✅"
  },
  {
    "jp": "グラム",
    "read": "[구라무] guramu",
    "kr": "그램",
    "icon": "🎌"
  },
  {
    "jp": "習う",
    "read": "[나라우] narau",
    "kr": "배우다",
    "icon": "☀️"
  },
  {
    "jp": "後",
    "read": "[노치] nochi",
    "kr": "나중에",
    "icon": "🙏"
  },
  {
    "jp": "猫",
    "read": "[네코] neko",
    "kr": "고양이",
    "icon": "👋"
  },
  {
    "jp": "図書館",
    "read": "[토쇼칸] toshokan",
    "kr": "도서관",
    "icon": "⭕"
  },
  {
    "jp": "並べる",
    "read": "[나라베루] naraberu",
    "kr": "줄 서다, 세우다",
    "icon": "❌"
  },
  {
    "jp": "しかし",
    "read": "[시카시] shikashi",
    "kr": "그러나",
    "icon": "🍣"
  },
  {
    "jp": "大きい",
    "read": "[오-키-] ookii",
    "kr": "크다",
    "icon": "🐱"
  },
  {
    "jp": "八日",
    "read": "[요우카] youka",
    "kr": "여드레, 여덟째 날",
    "icon": "🐶"
  },
  {
    "jp": "歩く",
    "read": "[아루쿠] aruku",
    "kr": "걷다",
    "icon": "📚"
  },
  {
    "jp": "ズボン",
    "read": "[즈본] zubon",
    "kr": "바지",
    "icon": "🏫"
  },
  {
    "jp": "九日",
    "read": "[코코노카] kokonoka",
    "kr": "아흐레, 아홉째 날",
    "icon": "📝"
  },
  {
    "jp": "そっち",
    "read": "[솟치] sotchi",
    "kr": "저기",
    "icon": "🏃"
  },
  {
    "jp": "たて",
    "read": "[타테] tate",
    "kr": "길이, 높이",
    "icon": "🗣️"
  },
  {
    "jp": "カップ",
    "read": "[캅푸] kappu",
    "kr": "컵",
    "icon": "💭"
  },
  {
    "jp": "あの",
    "read": "[아노] ano",
    "kr": "저쪽",
    "icon": "🌟"
  },
  {
    "jp": "頼む",
    "read": "[타노무] tanomu",
    "kr": "묻다",
    "icon": "💡"
  },
  {
    "jp": "お兄さん",
    "read": "[오니-산] oniisan",
    "kr": "(존칭) 형",
    "icon": "✅"
  },
  {
    "jp": "手",
    "read": "[테] te",
    "kr": "손",
    "icon": "🎌"
  },
  {
    "jp": "ええ",
    "read": "[에에] ee",
    "kr": "예",
    "icon": "☀️"
  },
  {
    "jp": "毎日",
    "read": "[마이니치] mainichi",
    "kr": "매일",
    "icon": "🙏"
  },
  {
    "jp": "花",
    "read": "[하나] hana",
    "kr": "꽃",
    "icon": "👋"
  },
  {
    "jp": "一",
    "read": "[이치] ichi",
    "kr": "하나",
    "icon": "⭕"
  },
  {
    "jp": "居る",
    "read": "[이루] iru",
    "kr": "있다 (사람과 동물에 사용)",
    "icon": "❌"
  },
  {
    "jp": "砂糖",
    "read": "[사토-] satou",
    "kr": "설탕",
    "icon": "🍣"
  },
  {
    "jp": "カレンダー",
    "read": "[카렌다-] karendaa",
    "kr": "달력",
    "icon": "🐱"
  },
  {
    "jp": "今",
    "read": "[이마] ima",
    "kr": "지금",
    "icon": "🐶"
  },
  {
    "jp": "旅行",
    "read": "[료코-] ryokou",
    "kr": "여행하다",
    "icon": "📚"
  },
  {
    "jp": "できる",
    "read": "[데키루] dekiru",
    "kr": "~할 수 있다",
    "icon": "🏫"
  },
  {
    "jp": "春",
    "read": "[하루] haru",
    "kr": "봄",
    "icon": "📝"
  },
  {
    "jp": "する",
    "read": "[스루] suru",
    "kr": "하다",
    "icon": "🏃"
  },
  {
    "jp": "八つ",
    "read": "[야츠] yatsu",
    "kr": "여덟",
    "icon": "🗣️"
  },
  {
    "jp": "町",
    "read": "[마치] machi",
    "kr": "도시",
    "icon": "💭"
  },
  {
    "jp": "渡す",
    "read": "[와타스] watasu",
    "kr": "건네다",
    "icon": "🌟"
  },
  {
    "jp": "青",
    "read": "[아오] ao",
    "kr": "파란색",
    "icon": "💡"
  },
  {
    "jp": "白",
    "read": "[시로] shiro",
    "kr": "흰색",
    "icon": "✅"
  },
  {
    "jp": "ある",
    "read": "[아루] aru",
    "kr": "있다 (무생물에 사용)",
    "icon": "🎌"
  },
  {
    "jp": "ベッド",
    "read": "[벳도] beddo",
    "kr": "침대",
    "icon": "☀️"
  },
  {
    "jp": "水",
    "read": "[미즈] mizu",
    "kr": "물",
    "icon": "🙏"
  },
  {
    "jp": "いくつ",
    "read": "[이쿠츠] ikutsu",
    "kr": "몇?, 몇 살?",
    "icon": "👋"
  },
  {
    "jp": "楽しい",
    "read": "[타노시-] tanoshii",
    "kr": "즐겁다",
    "icon": "⭕"
  },
  {
    "jp": "御飯",
    "read": "[고한] gohan",
    "kr": "밥",
    "icon": "❌"
  },
  {
    "jp": "皆さん",
    "read": "[미나산] minasan",
    "kr": "모두",
    "icon": "🍣"
  },
  {
    "jp": "おいしい",
    "read": "[오이시-] oishii",
    "kr": "맛있다",
    "icon": "🐱"
  },
  {
    "jp": "ペット",
    "read": "[펫토] petto",
    "kr": "애완동물",
    "icon": "🐶"
  },
  {
    "jp": "外",
    "read": "[소토] soto",
    "kr": "밖",
    "icon": "📚"
  },
  {
    "jp": "前",
    "read": "[마에] mae",
    "kr": "전에",
    "icon": "🏫"
  },
  {
    "jp": "来る",
    "read": "[쿠루] kuru",
    "kr": "오다",
    "icon": "📝"
  },
  {
    "jp": "おもしろい",
    "read": "[오모시로이] omoshiroi",
    "kr": "재미있다",
    "icon": "🏃"
  },
  {
    "jp": "貸す",
    "read": "[카스] kasu",
    "kr": "빌려주다",
    "icon": "🗣️"
  },
  {
    "jp": "早い",
    "read": "[하야이] hayai",
    "kr": "이르다",
    "icon": "💭"
  },
  {
    "jp": "弱い",
    "read": "[요와이] yowai",
    "kr": "약한",
    "icon": "🌟"
  },
  {
    "jp": "洗濯",
    "read": "[센타쿠] sentaku",
    "kr": "세탁",
    "icon": "💡"
  },
  {
    "jp": "九つ",
    "read": "[코코노츠] kokonotsu",
    "kr": "아홉",
    "icon": "✅"
  },
  {
    "jp": "来年",
    "read": "[라이넨] rainen",
    "kr": "내년",
    "icon": "🎌"
  },
  {
    "jp": "眼鏡",
    "read": "[메가네] megane",
    "kr": "안경",
    "icon": "☀️"
  },
  {
    "jp": "背",
    "read": "[세] se",
    "kr": "키",
    "icon": "🙏"
  },
  {
    "jp": "水曜日",
    "read": "[스이요우비] suiyoubi",
    "kr": "수요일",
    "icon": "👋"
  },
  {
    "jp": "お金",
    "read": "[오킨] okin",
    "kr": "돈",
    "icon": "⭕"
  },
  {
    "jp": "同じ",
    "read": "[오나지] onaji",
    "kr": "같은",
    "icon": "❌"
  },
  {
    "jp": "弾く",
    "read": "[히쿠] hiku",
    "kr": "피아노를 포함한 현악기 연주를 하다",
    "icon": "🍣"
  },
  {
    "jp": "土曜日",
    "read": "[도요우비] doyoubi",
    "kr": "토요일",
    "icon": "🐱"
  },
  {
    "jp": "階段",
    "read": "[카이단] kaidan",
    "kr": "계단",
    "icon": "🐶"
  },
  {
    "jp": "煩い",
    "read": "[우루사이] urusai",
    "kr": "시끄러운, 귀찮은",
    "icon": "📚"
  },
  {
    "jp": "半分",
    "read": "[함분] hanbun",
    "kr": "30초",
    "icon": "🏫"
  },
  {
    "jp": "背広",
    "read": "[세비로] sebiro",
    "kr": "정장",
    "icon": "📝"
  },
  {
    "jp": "晴れ",
    "read": "[하레] hare",
    "kr": "맑은 날씨",
    "icon": "🏃"
  },
  {
    "jp": "見せる",
    "read": "[미세루] miseru",
    "kr": "보여주다",
    "icon": "🗣️"
  },
  {
    "jp": "飲み物",
    "read": "[노미모노] nomimono",
    "kr": "음료",
    "icon": "💭"
  },
  {
    "jp": "雪",
    "read": "[유키] yuki",
    "kr": "눈",
    "icon": "🌟"
  },
  {
    "jp": "買い物",
    "read": "[카이모노] kaimono",
    "kr": "쇼핑",
    "icon": "💡"
  },
  {
    "jp": "交差点",
    "read": "[코-사텐] kousaten",
    "kr": "교차로",
    "icon": "✅"
  },
  {
    "jp": "駅",
    "read": "[에키] eki",
    "kr": "역",
    "icon": "🎌"
  },
  {
    "jp": "大丈夫",
    "read": "[다이죠우부] daijoubu",
    "kr": "괜찮다",
    "icon": "☀️"
  },
  {
    "jp": "ボールペン",
    "read": "[보-루펜] boorupen",
    "kr": "볼펜",
    "icon": "🙏"
  },
  {
    "jp": "勉強",
    "read": "[벵쿄우] benkyou",
    "kr": "공부하다",
    "icon": "👋"
  },
  {
    "jp": "兄弟",
    "read": "[쿄우다이] kyoudai",
    "kr": "(겸손하게) 형제자매",
    "icon": "⭕"
  },
  {
    "jp": "封筒",
    "read": "[후-토-] fuutou",
    "kr": "봉투",
    "icon": "❌"
  },
  {
    "jp": "レコード",
    "read": "[레코-도] rekoodo",
    "kr": "기록",
    "icon": "🍣"
  },
  {
    "jp": "コーヒー",
    "read": "[코-히-] koohii",
    "kr": "커피",
    "icon": "🐱"
  },
  {
    "jp": "漢字",
    "read": "[칸지] kanji",
    "kr": "한자",
    "icon": "🐶"
  },
  {
    "jp": "喫茶店",
    "read": "[킷사텐] kissaten",
    "kr": "커피 라운지",
    "icon": "📚"
  },
  {
    "jp": "その",
    "read": "[소노] sono",
    "kr": "저",
    "icon": "🏫"
  },
  {
    "jp": "子供",
    "read": "[코도모] kodomo",
    "kr": "아이",
    "icon": "📝"
  },
  {
    "jp": "ちょっと",
    "read": "[춋토] chotto",
    "kr": "다소",
    "icon": "🏃"
  },
  {
    "jp": "女の子",
    "read": "[온나노코] onnanoko",
    "kr": "소녀",
    "icon": "🗣️"
  },
  {
    "jp": "紙",
    "read": "[카미] kami",
    "kr": "종이",
    "icon": "💭"
  },
  {
    "jp": "字引",
    "read": "[지비키] jibiki",
    "kr": "사전",
    "icon": "🌟"
  },
  {
    "jp": "あさって",
    "read": "[아삿테] asatte",
    "kr": "모레",
    "icon": "💡"
  },
  {
    "jp": "嫌い",
    "read": "[키라이] kirai",
    "kr": "싫어하다",
    "icon": "✅"
  },
  {
    "jp": "先",
    "read": "[사키] saki",
    "kr": "미래, 이전",
    "icon": "🎌"
  },
  {
    "jp": "答える",
    "read": "[코타에루] kotaeru",
    "kr": "대답하다",
    "icon": "☀️"
  },
  {
    "jp": "食堂",
    "read": "[쇼쿠도-] shokudou",
    "kr": "식당",
    "icon": "🙏"
  },
  {
    "jp": "テーブル",
    "read": "[테-부루] teeburu",
    "kr": "테이블",
    "icon": "👋"
  },
  {
    "jp": "コピーする",
    "read": "[코피-스루] kopiisuru",
    "kr": "복사하다",
    "icon": "⭕"
  },
  {
    "jp": "働く",
    "read": "[하타라쿠] hataraku",
    "kr": "일하다",
    "icon": "❌"
  },
  {
    "jp": "こんな",
    "read": "[콘나] konna",
    "kr": "그런",
    "icon": "🍣"
  },
  {
    "jp": "たくさん",
    "read": "[타쿠산] takusan",
    "kr": "많은",
    "icon": "🐱"
  },
  {
    "jp": "ドア",
    "read": "[도아] doa",
    "kr": "서양식 문",
    "icon": "🐶"
  },
  {
    "jp": "見る  観る",
    "read": "[미루  미루] miru  miru",
    "kr": "보다, 관람하다",
    "icon": "📚"
  },
  {
    "jp": "交番",
    "read": "[코-반] kouban",
    "kr": "파출소",
    "icon": "🏫"
  },
  {
    "jp": "ナイフ",
    "read": "[나이후] naifu",
    "kr": "칼",
    "icon": "📝"
  },
  {
    "jp": "辛い",
    "read": "[츠라이] tsurai",
    "kr": "매운",
    "icon": "🏃"
  },
  {
    "jp": "洋服",
    "read": "[요우후쿠] youfuku",
    "kr": "양복",
    "icon": "🗣️"
  },
  {
    "jp": "晩御飯",
    "read": "[방고한] bangohan",
    "kr": "저녁 식사",
    "icon": "💭"
  },
  {
    "jp": "車",
    "read": "[쿠루마] kuruma",
    "kr": "자동차, 차량",
    "icon": "🌟"
  },
  {
    "jp": "ちょうど",
    "read": "[쵸우도] choudo",
    "kr": "정확히",
    "icon": "💡"
  },
  {
    "jp": "もう一度",
    "read": "[모-이치도] mouichido",
    "kr": "다시",
    "icon": "✅"
  },
  {
    "jp": "ポスト",
    "read": "[포스토] posuto",
    "kr": "게시물",
    "icon": "🎌"
  },
  {
    "jp": "服",
    "read": "[후쿠] fuku",
    "kr": "옷",
    "icon": "☀️"
  },
  {
    "jp": "メートル",
    "read": "[메-토루] meetoru",
    "kr": "미터",
    "icon": "🙏"
  },
  {
    "jp": "パン",
    "read": "[판] pan",
    "kr": "빵",
    "icon": "👋"
  },
  {
    "jp": "半",
    "read": "[한] han",
    "kr": "절반",
    "icon": "⭕"
  },
  {
    "jp": "若い",
    "read": "[와카이] wakai",
    "kr": "젊은",
    "icon": "❌"
  },
  {
    "jp": "食べる",
    "read": "[타베루] taberu",
    "kr": "먹다",
    "icon": "🍣"
  },
  {
    "jp": "四日",
    "read": "[욕카] yokka",
    "kr": "사흘, 달의 네 번째 날",
    "icon": "🐱"
  },
  {
    "jp": "警官",
    "read": "[케-칸] keikan",
    "kr": "경찰관",
    "icon": "🐶"
  },
  {
    "jp": "伯父 / 叔父",
    "read": "[오지 / 오지] oji / oji",
    "kr": "할아버지, 남성 노인",
    "icon": "📚"
  },
  {
    "jp": "これ",
    "read": "[코레] kore",
    "kr": "이것",
    "icon": "🏫"
  },
  {
    "jp": "アパート",
    "read": "[아파-토] apaato",
    "kr": "아파트",
    "icon": "📝"
  },
  {
    "jp": "鳥",
    "read": "[토리] tori",
    "kr": "새",
    "icon": "🏃"
  },
  {
    "jp": "ここ",
    "read": "[코코] koko",
    "kr": "여기",
    "icon": "🗣️"
  },
  {
    "jp": "方",
    "read": "[호-] hou",
    "kr": "사람, 방식",
    "icon": "💭"
  },
  {
    "jp": "タクシー",
    "read": "[타쿠시-] takushii",
    "kr": "택시",
    "icon": "🌟"
  },
  {
    "jp": "では",
    "read": "[데하] deha",
    "kr": "그것과 함께...",
    "icon": "💡"
  },
  {
    "jp": "しょうゆ",
    "read": "[쇼우유] shouyu",
    "kr": "간장",
    "icon": "✅"
  },
  {
    "jp": "少ない",
    "read": "[스쿠나이] sukunai",
    "kr": "몇몇",
    "icon": "🎌"
  },
  {
    "jp": "白い",
    "read": "[시로이] shiroi",
    "kr": "하얀",
    "icon": "☀️"
  },
  {
    "jp": "待つ",
    "read": "[마츠] matsu",
    "kr": "기다리다",
    "icon": "🙏"
  },
  {
    "jp": "次",
    "read": "[츠기] tsugi",
    "kr": "다음",
    "icon": "👋"
  },
  {
    "jp": "行く",
    "read": "[이쿠] iku",
    "kr": "가다",
    "icon": "⭕"
  },
  {
    "jp": "角",
    "read": "[카쿠] kaku",
    "kr": "모퉁이",
    "icon": "❌"
  },
  {
    "jp": "男",
    "read": "[오토코] otoko",
    "kr": "남자",
    "icon": "🍣"
  },
  {
    "jp": "ギター",
    "read": "[기타-] gitaa",
    "kr": "기타",
    "icon": "🐱"
  },
  {
    "jp": "聞く",
    "read": "[키쿠] kiku",
    "kr": "듣다, 청취하다, 물어보다",
    "icon": "🐶"
  },
  {
    "jp": "走る",
    "read": "[하시루] hashiru",
    "kr": "달리다",
    "icon": "📚"
  },
  {
    "jp": "お母さん",
    "read": "[오카-산] okaasan",
    "kr": "어머니 (존칭)",
    "icon": "🏫"
  },
  {
    "jp": "意味",
    "read": "[이미] imi",
    "kr": "의미",
    "icon": "📝"
  },
  {
    "jp": "物",
    "read": "[모노] mono",
    "kr": "것",
    "icon": "🏃"
  },
  {
    "jp": "強い",
    "read": "[츠요이] tsuyoi",
    "kr": "강한",
    "icon": "🗣️"
  },
  {
    "jp": "魚",
    "read": "[사카나] sakana",
    "kr": "생선",
    "icon": "💭"
  },
  {
    "jp": "切手",
    "read": "[킷테] kitte",
    "kr": "우표",
    "icon": "🌟"
  },
  {
    "jp": "暗い",
    "read": "[쿠라이] kurai",
    "kr": "우울한",
    "icon": "💡"
  },
  {
    "jp": "出る",
    "read": "[데루] deru",
    "kr": "나타나다, 떠나다",
    "icon": "✅"
  },
  {
    "jp": "犬",
    "read": "[이누] inu",
    "kr": "개",
    "icon": "🎌"
  },
  {
    "jp": "女",
    "read": "[온나] onna",
    "kr": "여자",
    "icon": "☀️"
  },
  {
    "jp": "飛行機",
    "read": "[히코-키] hikouki",
    "kr": "비행기",
    "icon": "🙏"
  },
  {
    "jp": "日曜日",
    "read": "[니치요우비] nichiyoubi",
    "kr": "일요일",
    "icon": "👋"
  },
  {
    "jp": "より、ほう",
    "read": "[요리、호-] yori,hou",
    "kr": "비교에 사용됨",
    "icon": "⭕"
  },
  {
    "jp": "午前",
    "read": "[고젠] gozen",
    "kr": "아침",
    "icon": "❌"
  },
  {
    "jp": "名前",
    "read": "[나마에] namae",
    "kr": "이름",
    "icon": "🍣"
  },
  {
    "jp": "丸い / 円い",
    "read": "[마루이 / 마루이] marui / marui",
    "kr": "둥근, 원형의",
    "icon": "🐱"
  },
  {
    "jp": "曲る",
    "read": "[마가루] magaru",
    "kr": "돌리다, 구부리다",
    "icon": "🐶"
  },
  {
    "jp": "鼻",
    "read": "[하나] hana",
    "kr": "코",
    "icon": "📚"
  },
  {
    "jp": "お弁当",
    "read": "[오벤토-] obentou",
    "kr": "도시락",
    "icon": "🏫"
  },
  {
    "jp": "コップ",
    "read": "[콥푸] koppu",
    "kr": "유리컵",
    "icon": "📝"
  },
  {
    "jp": "結婚",
    "read": "[켁콘] kekkon",
    "kr": "결혼",
    "icon": "🏃"
  },
  {
    "jp": "置く",
    "read": "[오쿠] oku",
    "kr": "놓다",
    "icon": "🗣️"
  },
  {
    "jp": "渡る",
    "read": "[와타루] wataru",
    "kr": "건너다",
    "icon": "💭"
  },
  {
    "jp": "伯母さん / 叔母さん",
    "read": "[오바산 / 오바산] obasan / obasan",
    "kr": "이모, 고모, 숙모",
    "icon": "🌟"
  },
  {
    "jp": "それから",
    "read": "[소레카라] sorekara",
    "kr": "그 후에",
    "icon": "💡"
  },
  {
    "jp": "明い",
    "read": "[아카루이] akarui",
    "kr": "밝은",
    "icon": "✅"
  },
  {
    "jp": "家庭",
    "read": "[카테-] katei",
    "kr": "가정",
    "icon": "🎌"
  },
  {
    "jp": "パーティー",
    "read": "[파-티-] paateii",
    "kr": "파티",
    "icon": "☀️"
  },
  {
    "jp": "あちら",
    "read": "[아치라] achira",
    "kr": "저기",
    "icon": "🙏"
  },
  {
    "jp": "スカート",
    "read": "[스카-토] sukaato",
    "kr": "치마",
    "icon": "👋"
  },
  {
    "jp": "靴",
    "read": "[쿠츠] kutsu",
    "kr": "신발",
    "icon": "⭕"
  },
  {
    "jp": "ボタン",
    "read": "[보탄] botan",
    "kr": "단추",
    "icon": "❌"
  },
  {
    "jp": "今月",
    "read": "[콩게츠] kongetsu",
    "kr": "이번 달",
    "icon": "🍣"
  },
  {
    "jp": "返す",
    "read": "[카에스] kaesu",
    "kr": "돌려주다",
    "icon": "🐱"
  },
  {
    "jp": "いかが",
    "read": "[이카가] ikaga",
    "kr": "어떻게",
    "icon": "🐶"
  },
  {
    "jp": "ストーブ",
    "read": "[스토-부] sutoobu",
    "kr": "히터",
    "icon": "📚"
  },
  {
    "jp": "二人",
    "read": "[후타리] futari",
    "kr": "두 사람",
    "icon": "🏫"
  },
  {
    "jp": "起きる",
    "read": "[오키루] okiru",
    "kr": "일어나다",
    "icon": "📝"
  },
  {
    "jp": "さあ",
    "read": "[사-] saa",
    "kr": "글쎄…",
    "icon": "🏃"
  },
  {
    "jp": "あそこ",
    "read": "[아소코] asoko",
    "kr": "저쪽",
    "icon": "🗣️"
  },
  {
    "jp": "古い",
    "read": "[후루이] furui",
    "kr": "오래된 (사람에게 쓰지 않음)",
    "icon": "💭"
  },
  {
    "jp": "黄色い",
    "read": "[키-로이] kiiroi",
    "kr": "노란색",
    "icon": "🌟"
  },
  {
    "jp": "まだ",
    "read": "[마다] mada",
    "kr": "아직",
    "icon": "💡"
  },
  {
    "jp": "歌う",
    "read": "[우타우] utau",
    "kr": "노래하다",
    "icon": "✅"
  },
  {
    "jp": "飴",
    "read": "[아메] ame",
    "kr": "사탕",
    "icon": "🎌"
  },
  {
    "jp": "寝る",
    "read": "[네루] neru",
    "kr": "잠자리에 들다, 자다",
    "icon": "☀️"
  },
  {
    "jp": "それ",
    "read": "[소레] sore",
    "kr": "저",
    "icon": "🙏"
  },
  {
    "jp": "質問",
    "read": "[시츠몬] shitsumon",
    "kr": "질문",
    "icon": "👋"
  },
  {
    "jp": "どなた",
    "read": "[도나타] donata",
    "kr": "누구",
    "icon": "⭕"
  },
  {
    "jp": "牛乳",
    "read": "[규우뉴우] gyuunyuu",
    "kr": "우유",
    "icon": "❌"
  },
  {
    "jp": "二",
    "read": "[니] ni",
    "kr": "둘",
    "icon": "🍣"
  },
  {
    "jp": "紅茶",
    "read": "[코-챠] koucha",
    "kr": "홍차",
    "icon": "🐱"
  },
  {
    "jp": "そちら",
    "read": "[소치라] sochira",
    "kr": "저기",
    "icon": "🐶"
  },
  {
    "jp": "出かける",
    "read": "[데카케루] dekakeru",
    "kr": "외출하다",
    "icon": "📚"
  },
  {
    "jp": "兄",
    "read": "[아니] ani",
    "kr": "(겸손하게) 형",
    "icon": "🏫"
  },
  {
    "jp": "留学生",
    "read": "[류우가쿠세-] ryuugakusei",
    "kr": "유학생",
    "icon": "📝"
  },
  {
    "jp": "月曜日",
    "read": "[게츠요우비] getsuyoubi",
    "kr": "월요일",
    "icon": "🏃"
  },
  {
    "jp": "締める",
    "read": "[시메루] shimeru",
    "kr": "매다",
    "icon": "🗣️"
  },
  {
    "jp": "熱い",
    "read": "[아츠이] atsui",
    "kr": "뜨거운",
    "icon": "💭"
  },
  {
    "jp": "郵便局",
    "read": "[유우빙쿄쿠] yuubinkyoku",
    "kr": "우체국",
    "icon": "🌟"
  },
  {
    "jp": "細い",
    "read": "[코마이] komai",
    "kr": "얇은",
    "icon": "💡"
  },
  {
    "jp": "六つ",
    "read": "[무츠] mutsu",
    "kr": "여섯",
    "icon": "✅"
  },
  {
    "jp": "本棚",
    "read": "[혼다나] hondana",
    "kr": "책장",
    "icon": "🎌"
  },
  {
    "jp": "結構",
    "read": "[켁코-] kekkou",
    "kr": "훌륭한, 충분한",
    "icon": "☀️"
  },
  {
    "jp": "こちら",
    "read": "[코치라] kochira",
    "kr": "이 사람, 이 방식",
    "icon": "🙏"
  },
  {
    "jp": "昨夜",
    "read": "[사쿠야] sakuya",
    "kr": "어젯밤",
    "icon": "👋"
  },
  {
    "jp": "外国人",
    "read": "[가이코쿠진] gaikokujin",
    "kr": "외국인",
    "icon": "⭕"
  },
  {
    "jp": "絵",
    "read": "[에] e",
    "kr": "사진",
    "icon": "❌"
  },
  {
    "jp": "使う",
    "read": "[츠카우] tsukau",
    "kr": "사용하다",
    "icon": "🍣"
  },
  {
    "jp": "休む",
    "read": "[야스무] yasumu",
    "kr": "쉬다",
    "icon": "🐱"
  },
  {
    "jp": "テスト",
    "read": "[테스토] tesuto",
    "kr": "시험",
    "icon": "🐶"
  },
  {
    "jp": "貼る",
    "read": "[하루] haru",
    "kr": "붙이다",
    "icon": "📚"
  },
  {
    "jp": "たばこ",
    "read": "[타바코] tabako",
    "kr": "담배",
    "icon": "🏫"
  },
  {
    "jp": "涼しい",
    "read": "[스즈시-] suzushii",
    "kr": "상쾌한",
    "icon": "📝"
  },
  {
    "jp": "昨日",
    "read": "[키노-] kinou",
    "kr": "어제",
    "icon": "🏃"
  },
  {
    "jp": "せっけん",
    "read": "[섹켄] sekken",
    "kr": "경제",
    "icon": "🗣️"
  },
  {
    "jp": "初め / 始め",
    "read": "[하지메 / 하지메] hajime / hajime",
    "kr": "시작",
    "icon": "💭"
  },
  {
    "jp": "雲",
    "read": "[쿠모] kumo",
    "kr": "구름",
    "icon": "🌟"
  },
  {
    "jp": "サンドイッチ",
    "read": "[산도잇치] sandoitchi",
    "kr": "샌드위치",
    "icon": "💡"
  },
  {
    "jp": "故障",
    "read": "[코쇼우] koshou",
    "kr": "고장나다",
    "icon": "✅"
  },
  {
    "jp": "怖い",
    "read": "[코와이] kowai",
    "kr": "무서운",
    "icon": "🎌"
  },
  {
    "jp": "エスカレーター",
    "read": "[에스카레-타-] esukareetaa",
    "kr": "에스컬레이터",
    "icon": "☀️"
  },
  {
    "jp": "運ぶ",
    "read": "[하코부] hakobu",
    "kr": "운송하다",
    "icon": "🙏"
  },
  {
    "jp": "受ける",
    "read": "[우케루] ukeru",
    "kr": "수업이나 시험을 보다",
    "icon": "👋"
  },
  {
    "jp": "お嬢さん",
    "read": "[오죠우산] ojousan",
    "kr": "아가씨",
    "icon": "⭕"
  },
  {
    "jp": "首",
    "read": "[쿠비] kubi",
    "kr": "목",
    "icon": "❌"
  },
  {
    "jp": "市民",
    "read": "[시민] shimin",
    "kr": "시민",
    "icon": "🍣"
  },
  {
    "jp": "付く",
    "read": "[츠쿠] tsuku",
    "kr": "붙다",
    "icon": "🐱"
  },
  {
    "jp": "すく",
    "read": "[스쿠] suku",
    "kr": "비다",
    "icon": "🐶"
  },
  {
    "jp": "こと",
    "read": "[코토] koto",
    "kr": "것, 일",
    "icon": "📚"
  },
  {
    "jp": "訪ねる",
    "read": "[타즈네루] tazuneru",
    "kr": "방문하다",
    "icon": "🏫"
  },
  {
    "jp": "お祝い",
    "read": "[오이와이] oiwai",
    "kr": "축하",
    "icon": "📝"
  },
  {
    "jp": "一生懸命",
    "read": "[잇쇼우켐메-] isshoukenmei",
    "kr": "최선을 다하여",
    "icon": "🏃"
  },
  {
    "jp": "済む",
    "read": "[스무] sumu",
    "kr": "끝내다",
    "icon": "🗣️"
  },
  {
    "jp": "アメリカ",
    "read": "[아메리카] amerika",
    "kr": "미국",
    "icon": "💭"
  },
  {
    "jp": "復習",
    "read": "[후쿠슈우] fukushuu",
    "kr": "복습",
    "icon": "🌟"
  },
  {
    "jp": "急",
    "read": "[큐우] kyuu",
    "kr": "긴급한, 가파른",
    "icon": "💡"
  },
  {
    "jp": "これから",
    "read": "[코레카라] korekara",
    "kr": "이후에",
    "icon": "✅"
  },
  {
    "jp": "指輪",
    "read": "[유비와] yubiwa",
    "kr": "반지",
    "icon": "🎌"
  },
  {
    "jp": "美しい",
    "read": "[우츠쿠시-] utsukushii",
    "kr": "아름다운",
    "icon": "☀️"
  },
  {
    "jp": "直る",
    "read": "[나오루] naoru",
    "kr": "고정되다, 수리되다",
    "icon": "🙏"
  },
  {
    "jp": "水泳",
    "read": "[스이에-] suiei",
    "kr": "수영",
    "icon": "👋"
  },
  {
    "jp": "真中",
    "read": "[만나카] mannaka",
    "kr": "중간",
    "icon": "⭕"
  },
  {
    "jp": "発音",
    "read": "[하츠온] hatsuon",
    "kr": "발음",
    "icon": "❌"
  },
  {
    "jp": "手伝う",
    "read": "[테츠다우] tetsudau",
    "kr": "돕다",
    "icon": "🍣"
  },
  {
    "jp": "折れる",
    "read": "[오레루] oreru",
    "kr": "부러지다, 접히다",
    "icon": "🐱"
  },
  {
    "jp": "一度",
    "read": "[이치도] ichido",
    "kr": "한 번",
    "icon": "🐶"
  },
  {
    "jp": "高等学校",
    "read": "[코-토-각코-] koutougakkou",
    "kr": "고등학교",
    "icon": "📚"
  },
  {
    "jp": "アルコール",
    "read": "[아루코-루] arukooru",
    "kr": "술",
    "icon": "🏫"
  },
  {
    "jp": "アナウンサー",
    "read": "[아나운사-] anaunsaa",
    "kr": "아나운서",
    "icon": "📝"
  },
  {
    "jp": "最初",
    "read": "[사이쇼] saisho",
    "kr": "시작, 처음",
    "icon": "🏃"
  },
  {
    "jp": "投げる",
    "read": "[나게루] nageru",
    "kr": "던지다, 버리다",
    "icon": "🗣️"
  },
  {
    "jp": "変える",
    "read": "[카에루] kaeru",
    "kr": "바꾸다",
    "icon": "💭"
  },
  {
    "jp": "昼間",
    "read": "[히루마] hiruma",
    "kr": "낮 동안",
    "icon": "🌟"
  },
  {
    "jp": "神社",
    "read": "[진쟈] jinja",
    "kr": "신사",
    "icon": "💡"
  },
  {
    "jp": "食料品",
    "read": "[쇼쿠료우힌] shokuryouhin",
    "kr": "식료품",
    "icon": "✅"
  },
  {
    "jp": "丁寧",
    "read": "[테-네-] teinei",
    "kr": "공손한",
    "icon": "🎌"
  },
  {
    "jp": "規則",
    "read": "[키소쿠] kisoku",
    "kr": "규정",
    "icon": "☀️"
  },
  {
    "jp": "もうすぐ",
    "read": "[모-스구] mousugu",
    "kr": "곧",
    "icon": "🙏"
  },
  {
    "jp": "絹",
    "read": "[키누] kinu",
    "kr": "비단",
    "icon": "👋"
  },
  {
    "jp": "怒る",
    "read": "[이카루] ikaru",
    "kr": "화를 내다",
    "icon": "⭕"
  },
  {
    "jp": "用",
    "read": "[요우] you",
    "kr": "사용하다",
    "icon": "❌"
  },
  {
    "jp": "致す",
    "read": "[이타스] itasu",
    "kr": "(겸양) 하다",
    "icon": "🍣"
  },
  {
    "jp": "海岸",
    "read": "[카이간] kaigan",
    "kr": "해안",
    "icon": "🐱"
  },
  {
    "jp": "経済",
    "read": "[케-자이] keizai",
    "kr": "금융, 경제",
    "icon": "🐶"
  },
  {
    "jp": "以上",
    "read": "[이죠우] ijou",
    "kr": "이상, 이것으로 전부",
    "icon": "📚"
  },
  {
    "jp": "掛ける",
    "read": "[카케루] kakeru",
    "kr": "걸다",
    "icon": "🏫"
  },
  {
    "jp": "届ける",
    "read": "[토도케루] todokeru",
    "kr": "도달하다",
    "icon": "📝"
  },
  {
    "jp": "適当",
    "read": "[테키토-] tekitou",
    "kr": "적합성",
    "icon": "🏃"
  },
  {
    "jp": "祖父",
    "read": "[소후] sofu",
    "kr": "할아버지",
    "icon": "🗣️"
  },
  {
    "jp": "研究室",
    "read": "[켕큐우시츠] kenkyuushitsu",
    "kr": "공부방, 연구실",
    "icon": "💭"
  },
  {
    "jp": "文学",
    "read": "[붕가쿠] bungaku",
    "kr": "문학",
    "icon": "🌟"
  },
  {
    "jp": "生きる",
    "read": "[이키루] ikiru",
    "kr": "살다",
    "icon": "💡"
  },
  {
    "jp": "それほど",
    "read": "[소레호도] sorehodo",
    "kr": "그 정도까지",
    "icon": "✅"
  },
  {
    "jp": "うまい",
    "read": "[우마이] umai",
    "kr": "맛있다",
    "icon": "🎌"
  },
  {
    "jp": "ずいぶん",
    "read": "[즈이분] zuibun",
    "kr": "매우",
    "icon": "☀️"
  },
  {
    "jp": "お・金持ち",
    "read": "[오・카네모치] o・kanemochi",
    "kr": "부자",
    "icon": "🙏"
  },
  {
    "jp": "続く",
    "read": "[츠즈쿠] tsuzuku",
    "kr": "계속되다",
    "icon": "👋"
  },
  {
    "jp": "受付",
    "read": "[우케츠케] uketsuke",
    "kr": "영수증",
    "icon": "⭕"
  },
  {
    "jp": "代わり",
    "read": "[카와리] kawari",
    "kr": "대체, 대용",
    "icon": "❌"
  },
  {
    "jp": "残る",
    "read": "[노코루] nokoru",
    "kr": "남다",
    "icon": "🍣"
  },
  {
    "jp": "世話",
    "read": "[세와] sewa",
    "kr": "돌보다",
    "icon": "🐱"
  },
  {
    "jp": "スーツケース",
    "read": "[스-츠케-스] suutsukeesu",
    "kr": "여행가방",
    "icon": "🐶"
  },
  {
    "jp": "くれる",
    "read": "[쿠레루] kureru",
    "kr": "주다",
    "icon": "📚"
  },
  {
    "jp": "会話",
    "read": "[카이와] kaiwa",
    "kr": "대화",
    "icon": "🏫"
  },
  {
    "jp": "向かう",
    "read": "[무카우] mukau",
    "kr": "직면하다",
    "icon": "📝"
  },
  {
    "jp": "増える",
    "read": "[후에루] fueru",
    "kr": "증가하다",
    "icon": "🏃"
  },
  {
    "jp": "紹介",
    "read": "[쇼우카이] shoukai",
    "kr": "소개",
    "icon": "🗣️"
  },
  {
    "jp": "だから",
    "read": "[다카라] dakara",
    "kr": "그래서, 그러므로",
    "icon": "💭"
  },
  {
    "jp": "季節",
    "read": "[키세츠] kisetsu",
    "kr": "계절",
    "icon": "🌟"
  },
  {
    "jp": "そんなに",
    "read": "[손나니] sonnani",
    "kr": "그렇게, 그 정도",
    "icon": "💡"
  },
  {
    "jp": "このあいだ",
    "read": "[코노아이다] konoaida",
    "kr": "요전, 최근",
    "icon": "✅"
  },
  {
    "jp": "虫",
    "read": "[무시] mushi",
    "kr": "곤충",
    "icon": "🎌"
  },
  {
    "jp": "祖母",
    "read": "[소보] sobo",
    "kr": "할머니",
    "icon": "☀️"
  },
  {
    "jp": "いらっしゃる",
    "read": "[이랏샤루] irassharu",
    "kr": "(존경) 있다, 오다, 가다",
    "icon": "🙏"
  },
  {
    "jp": "変",
    "read": "[헨] hen",
    "kr": "이상한",
    "icon": "👋"
  },
  {
    "jp": "ぶどう",
    "read": "[부도-] budou",
    "kr": "포도",
    "icon": "⭕"
  },
  {
    "jp": "直す",
    "read": "[나오스] naosu",
    "kr": "고치다, 수리하다",
    "icon": "❌"
  },
  {
    "jp": "世界",
    "read": "[세카이] sekai",
    "kr": "세상",
    "icon": "🍣"
  },
  {
    "jp": "食事",
    "read": "[쇼쿠지] shokuji",
    "kr": "식사하다",
    "icon": "🐱"
  },
  {
    "jp": "うそ",
    "read": "[우소] uso",
    "kr": "거짓말",
    "icon": "🐶"
  },
  {
    "jp": "合う",
    "read": "[아우] au",
    "kr": "일치하다",
    "icon": "📚"
  },
  {
    "jp": "小鳥",
    "read": "[코토리] kotori",
    "kr": "작은 새",
    "icon": "🏫"
  },
  {
    "jp": "電報",
    "read": "[뎀포-] denpou",
    "kr": "전보",
    "icon": "📝"
  },
  {
    "jp": "星",
    "read": "[호시] hoshi",
    "kr": "별",
    "icon": "🏃"
  },
  {
    "jp": "申す",
    "read": "[모-스] mousu",
    "kr": "(겸손) 불리다, 말하다",
    "icon": "🗣️"
  },
  {
    "jp": "失敗",
    "read": "[십파이] shippai",
    "kr": "실패, 실수",
    "icon": "💭"
  },
  {
    "jp": "汽車",
    "read": "[키샤] kisha",
    "kr": "증기 기관차",
    "icon": "🌟"
  },
  {
    "jp": "下宿",
    "read": "[게슈쿠] geshuku",
    "kr": "숙소",
    "icon": "💡"
  },
  {
    "jp": "思う",
    "read": "[오모-] omou",
    "kr": "생각하다, 느끼다",
    "icon": "✅"
  },
  {
    "jp": "機会",
    "read": "[키카이] kikai",
    "kr": "기회",
    "icon": "🎌"
  },
  {
    "jp": "皆",
    "read": "[미나] mina",
    "kr": "모두",
    "icon": "☀️"
  },
  {
    "jp": "苦い",
    "read": "[니가이] nigai",
    "kr": "쓰다",
    "icon": "🙏"
  },
  {
    "jp": "特に",
    "read": "[토쿠니] tokuni",
    "kr": "특히, 특히",
    "icon": "👋"
  },
  {
    "jp": "乾く",
    "read": "[카와쿠] kawaku",
    "kr": "마르다",
    "icon": "⭕"
  },
  {
    "jp": "葉",
    "read": "[하] ha",
    "kr": "잎",
    "icon": "❌"
  },
  {
    "jp": "かっこう",
    "read": "[칵코-] kakkou",
    "kr": "외모",
    "icon": "🍣"
  },
  {
    "jp": "昼休み",
    "read": "[히루야스미] hiruyasumi",
    "kr": "점심 시간",
    "icon": "🐱"
  },
  {
    "jp": "以下",
    "read": "[이카] ika",
    "kr": "미만",
    "icon": "🐶"
  },
  {
    "jp": "彼ら",
    "read": "[카레라] karera",
    "kr": "그들",
    "icon": "📚"
  },
  {
    "jp": "寄る",
    "read": "[요루] yoru",
    "kr": "방문하다",
    "icon": "🏫"
  },
  {
    "jp": "字",
    "read": "[지] ji",
    "kr": "성격",
    "icon": "📝"
  },
  {
    "jp": "厳しい",
    "read": "[이카메시-] ikameshii",
    "kr": "엄격하다",
    "icon": "🏃"
  },
  {
    "jp": "優しい",
    "read": "[야사시-] yasashii",
    "kr": "친절하다",
    "icon": "🗣️"
  },
  {
    "jp": "たいてい",
    "read": "[타이테-] taitei",
    "kr": "보통",
    "icon": "💭"
  },
  {
    "jp": "花見",
    "read": "[하나미] hanami",
    "kr": "벚꽃 구경",
    "icon": "🌟"
  },
  {
    "jp": "注射",
    "read": "[츄우샤] chuusha",
    "kr": "주사",
    "icon": "💡"
  },
  {
    "jp": "大分",
    "read": "[오-이타] ooita",
    "kr": "크게",
    "icon": "✅"
  },
  {
    "jp": "ベル",
    "read": "[베루] beru",
    "kr": "종",
    "icon": "🎌"
  },
  {
    "jp": "景色",
    "read": "[케시키] keshiki",
    "kr": "장면, 풍경",
    "icon": "☀️"
  },
  {
    "jp": "しかる",
    "read": "[시카루] shikaru",
    "kr": "특정한",
    "icon": "🙏"
  },
  {
    "jp": "日記",
    "read": "[닉키] nikki",
    "kr": "일기",
    "icon": "👋"
  },
  {
    "jp": "お礼",
    "read": "[오레-] orei",
    "kr": "감사의 표현",
    "icon": "⭕"
  },
  {
    "jp": "集る",
    "read": "[아츠마루] atsumaru",
    "kr": "모이다",
    "icon": "❌"
  },
  {
    "jp": "大体",
    "read": "[다이타이] daitai",
    "kr": "일반적으로",
    "icon": "🍣"
  },
  {
    "jp": "なるほど",
    "read": "[나루호도] naruhodo",
    "kr": "이제 이해하다",
    "icon": "🐱"
  },
  {
    "jp": "公務員",
    "read": "[코-무인] koumuin",
    "kr": "공무원",
    "icon": "🐶"
  },
  {
    "jp": "警察",
    "read": "[케-사츠] keisatsu",
    "kr": "경찰",
    "icon": "📚"
  },
  {
    "jp": "空気",
    "read": "[쿠-키] kuuki",
    "kr": "공기, 분위기",
    "icon": "🏫"
  },
  {
    "jp": "周り",
    "read": "[마와리] mawari",
    "kr": "주변",
    "icon": "📝"
  },
  {
    "jp": "汚れる",
    "read": "[요고레루] yogoreru",
    "kr": "더럽혀지다",
    "icon": "🏃"
  },
  {
    "jp": "約束",
    "read": "[야쿠소쿠] yakusoku",
    "kr": "약속",
    "icon": "🗣️"
  },
  {
    "jp": "砂",
    "read": "[스나] suna",
    "kr": "모래",
    "icon": "💭"
  },
  {
    "jp": "笑う",
    "read": "[와라우] warau",
    "kr": "웃다, 미소 짓다",
    "icon": "🌟"
  },
  {
    "jp": "しっかり",
    "read": "[식카리] shikkari",
    "kr": "확고하게, 꾸준하게",
    "icon": "💡"
  },
  {
    "jp": "住所",
    "read": "[쥬우쇼] juusho",
    "kr": "주소, 거주지",
    "icon": "✅"
  },
  {
    "jp": "すり",
    "read": "[스리] suri",
    "kr": "소매치기",
    "icon": "🎌"
  },
  {
    "jp": "注意",
    "read": "[츄우이] chuui",
    "kr": "주의",
    "icon": "☀️"
  },
  {
    "jp": "仕方",
    "read": "[시카타] shikata",
    "kr": "방법",
    "icon": "🙏"
  },
  {
    "jp": "無理",
    "read": "[무리] muri",
    "kr": "불가능",
    "icon": "👋"
  },
  {
    "jp": "触る",
    "read": "[후루] furu",
    "kr": "만지다",
    "icon": "⭕"
  },
  {
    "jp": "押し入れ",
    "read": "[오시-레] oshiire",
    "kr": "옷장",
    "icon": "❌"
  },
  {
    "jp": "さ来月",
    "read": "[사라이게츠] saraigetsu",
    "kr": "다다음 달",
    "icon": "🍣"
  },
  {
    "jp": "ビル",
    "read": "[비루] biru",
    "kr": "건물이나 계산서",
    "icon": "🐱"
  },
  {
    "jp": "歯医者",
    "read": "[하이샤] haisha",
    "kr": "치과 의사",
    "icon": "🐶"
  },
  {
    "jp": "知らせる",
    "read": "[시라세루] shiraseru",
    "kr": "알리다",
    "icon": "📚"
  },
  {
    "jp": "点",
    "read": "[텐] ten",
    "kr": "점",
    "icon": "🏫"
  },
  {
    "jp": "予定",
    "read": "[요테-] yotei",
    "kr": "배열",
    "icon": "📝"
  },
  {
    "jp": "火事",
    "read": "[카지] kaji",
    "kr": "불",
    "icon": "🏃"
  },
  {
    "jp": "出席",
    "read": "[슛세키] shusseki",
    "kr": "참석하다",
    "icon": "🗣️"
  },
  {
    "jp": "壁",
    "read": "[카베] kabe",
    "kr": "벽",
    "icon": "💭"
  },
  {
    "jp": "植える",
    "read": "[우에루] ueru",
    "kr": "심다, 기르다",
    "icon": "🌟"
  },
  {
    "jp": "生産",
    "read": "[세-산] seisan",
    "kr": "생산하다",
    "icon": "💡"
  },
  {
    "jp": "法律",
    "read": "[호-리츠] houritsu",
    "kr": "법",
    "icon": "✅"
  },
  {
    "jp": "見つかる",
    "read": "[미츠카루] mitsukaru",
    "kr": "발견되다",
    "icon": "🎌"
  },
  {
    "jp": "港",
    "read": "[미나토] minato",
    "kr": "항구",
    "icon": "☀️"
  },
  {
    "jp": "連れる",
    "read": "[츠레루] tsureru",
    "kr": "이끌다",
    "icon": "🙏"
  },
  {
    "jp": "見つける",
    "read": "[미츠케루] mitsukeru",
    "kr": "발견하다",
    "icon": "👋"
  },
  {
    "jp": "辞典",
    "read": "[지텐] jiten",
    "kr": "사전",
    "icon": "⭕"
  },
  {
    "jp": "乗り換える",
    "read": "[노리카에루] norikaeru",
    "kr": "버스나 기차를 갈아타다",
    "icon": "❌"
  },
  {
    "jp": "役に立つ",
    "read": "[야쿠니타츠] yakunitatsu",
    "kr": "도움이 되다",
    "icon": "🍣"
  },
  {
    "jp": "写す",
    "read": "[우츠스] utsusu",
    "kr": "복사하다, 사진 찍다",
    "icon": "🐱"
  },
  {
    "jp": "理由",
    "read": "[리유우] riyuu",
    "kr": "이유",
    "icon": "🐶"
  },
  {
    "jp": "たまに",
    "read": "[타마니] tamani",
    "kr": "가끔",
    "icon": "📚"
  },
  {
    "jp": "プレゼント",
    "read": "[푸레젠토] purezento",
    "kr": "선물, 현재",
    "icon": "🏫"
  },
  {
    "jp": "いっぱい",
    "read": "[입파이] ippai",
    "kr": "가득한",
    "icon": "📝"
  },
  {
    "jp": "運動",
    "read": "[운도-] undou",
    "kr": "운동하다",
    "icon": "🏃"
  },
  {
    "jp": "見える",
    "read": "[미에루] mieru",
    "kr": "보이다",
    "icon": "🗣️"
  },
  {
    "jp": "申し上げる",
    "read": "[모-시아게루] moushiageru",
    "kr": "(겸손하게) 말하다, 전하다",
    "icon": "💭"
  },
  {
    "jp": "冷える",
    "read": "[히에루] hieru",
    "kr": "식다",
    "icon": "🌟"
  },
  {
    "jp": "痩せる",
    "read": "[야세루] yaseru",
    "kr": "날씬해지다",
    "icon": "💡"
  },
  {
    "jp": "屋上",
    "read": "[오쿠죠우] okujou",
    "kr": "옥상",
    "icon": "✅"
  },
  {
    "jp": "ステレオ",
    "read": "[스테레오] sutereo",
    "kr": "스테레오",
    "icon": "🎌"
  },
  {
    "jp": "そう",
    "read": "[소-] sou",
    "kr": "정말",
    "icon": "☀️"
  },
  {
    "jp": "お土産",
    "read": "[오미야게] omiyage",
    "kr": "기념품",
    "icon": "🙏"
  },
  {
    "jp": "泥棒",
    "read": "[도로보-] dorobou",
    "kr": "도둑",
    "icon": "👋"
  },
  {
    "jp": "お祭り",
    "read": "[오마츠리] omatsuri",
    "kr": "축제",
    "icon": "⭕"
  },
  {
    "jp": "浅い",
    "read": "[아사이] asai",
    "kr": "얕은, 피상적인",
    "icon": "❌"
  },
  {
    "jp": "お見舞い",
    "read": "[오미마이] omimai",
    "kr": "문병, 안부",
    "icon": "🍣"
  },
  {
    "jp": "アルバイト",
    "read": "[아루바이토] arubaito",
    "kr": "아르바이트",
    "icon": "🐱"
  },
  {
    "jp": "おつり",
    "read": "[오츠리] otsuri",
    "kr": "거스름돈",
    "icon": "🐶"
  },
  {
    "jp": "輸入",
    "read": "[유뉴우] yunyuu",
    "kr": "수입하다",
    "icon": "📚"
  },
  {
    "jp": "人口",
    "read": "[징코-] jinkou",
    "kr": "인구",
    "icon": "🏫"
  },
  {
    "jp": "興味",
    "read": "[쿄우미] kyoumi",
    "kr": "관심",
    "icon": "📝"
  },
  {
    "jp": "時代",
    "read": "[지다이] jidai",
    "kr": "시대",
    "icon": "🏃"
  },
  {
    "jp": "特急",
    "read": "[톡큐우] tokkyuu",
    "kr": "특급(급행보다 빠른)",
    "icon": "🗣️"
  },
  {
    "jp": "腕",
    "read": "[우데] ude",
    "kr": "팔",
    "icon": "💭"
  },
  {
    "jp": "気分",
    "read": "[키분] kibun",
    "kr": "기분",
    "icon": "🌟"
  },
  {
    "jp": "上る",
    "read": "[노보루] noboru",
    "kr": "오르다",
    "icon": "💡"
  },
  {
    "jp": "いただく",
    "read": "[이타다쿠] itadaku",
    "kr": "(겸손하게) 받다",
    "icon": "✅"
  },
  {
    "jp": "泊まる",
    "read": "[토마루] tomaru",
    "kr": "숙박하다",
    "icon": "🎌"
  },
  {
    "jp": "盗む",
    "read": "[누스무] nusumu",
    "kr": "훔치다",
    "icon": "☀️"
  },
  {
    "jp": "ひげ",
    "read": "[히게] hige",
    "kr": "수염",
    "icon": "🙏"
  },
  {
    "jp": "坂",
    "read": "[사카] saka",
    "kr": "언덕",
    "icon": "👋"
  },
  {
    "jp": "よろしい",
    "read": "[요로시-] yoroshii",
    "kr": "(존칭) 괜찮습니다, 좋습니다",
    "icon": "⭕"
  },
  {
    "jp": "技術",
    "read": "[기쥬츠] gijutsu",
    "kr": "예술, 기술, 기술",
    "icon": "❌"
  },
  {
    "jp": "為",
    "read": "[타메] tame",
    "kr": "~하기 위해",
    "icon": "🍣"
  },
  {
    "jp": "小説",
    "read": "[쇼우세츠] shousetsu",
    "kr": "소설",
    "icon": "🐱"
  },
  {
    "jp": "調べる",
    "read": "[시라베루] shiraberu",
    "kr": "조사하다",
    "icon": "🐶"
  },
  {
    "jp": "趣味",
    "read": "[슈미] shumi",
    "kr": "취미",
    "icon": "📚"
  },
  {
    "jp": "運転手",
    "read": "[운텐슈] untenshu",
    "kr": "운전사",
    "icon": "🏫"
  },
  {
    "jp": "深い",
    "read": "[후카이] fukai",
    "kr": "깊은",
    "icon": "📝"
  },
  {
    "jp": "林",
    "read": "[하야시] hayashi",
    "kr": "숲, 산림관리인",
    "icon": "🏃"
  },
  {
    "jp": "小学校",
    "read": "[쇼우각코-] shougakkou",
    "kr": "초등학교",
    "icon": "🗣️"
  },
  {
    "jp": "まず",
    "read": "[마즈] mazu",
    "kr": "무엇보다 먼저",
    "icon": "💭"
  },
  {
    "jp": "気持ち",
    "read": "[키모치] kimochi",
    "kr": "느낌, 기분",
    "icon": "🌟"
  },
  {
    "jp": "思い出す",
    "read": "[오모이다스] omoidasu",
    "kr": "기억하다",
    "icon": "💡"
  },
  {
    "jp": "留守",
    "read": "[루스] rusu",
    "kr": "결석",
    "icon": "✅"
  },
  {
    "jp": "続ける",
    "read": "[츠즈케루] tsuzukeru",
    "kr": "계속하다",
    "icon": "🎌"
  },
  {
    "jp": "草",
    "read": "[쿠사] kusa",
    "kr": "풀",
    "icon": "☀️"
  },
  {
    "jp": "途中",
    "read": "[토츄우] tochuu",
    "kr": "가는 길에",
    "icon": "🙏"
  },
  {
    "jp": "できるだけ",
    "read": "[데키루다케] dekirudake",
    "kr": "가능한 한",
    "icon": "👋"
  },
  {
    "jp": "お宅",
    "read": "[오타쿠] otaku",
    "kr": "(존댓말) 귀댁",
    "icon": "⭕"
  },
  {
    "jp": "召し上がる",
    "read": "[메시아가루] meshiagaru",
    "kr": "(존댓말) 드시다",
    "icon": "❌"
  },
  {
    "jp": "悲しい",
    "read": "[카나시-] kanashii",
    "kr": "슬픈",
    "icon": "🍣"
  },
  {
    "jp": "子",
    "read": "[코] ko",
    "kr": "아이",
    "icon": "🐱"
  },
  {
    "jp": "運転",
    "read": "[운텐] unten",
    "kr": "운전하다",
    "icon": "🐶"
  },
  {
    "jp": "はっきり",
    "read": "[학키리] hakkiri",
    "kr": "분명히",
    "icon": "📚"
  },
  {
    "jp": "折る",
    "read": "[오루] oru",
    "kr": "부수다, 접다",
    "icon": "🏫"
  },
  {
    "jp": "今度",
    "read": "[콘도] kondo",
    "kr": "지금, 다음 번",
    "icon": "📝"
  },
  {
    "jp": "アフリカ",
    "read": "[아후리카] afurika",
    "kr": "아프리카",
    "icon": "🏃"
  },
  {
    "jp": "壊れる",
    "read": "[코와레루] kowareru",
    "kr": "고장나다",
    "icon": "🗣️"
  },
  {
    "jp": "番組",
    "read": "[방구미] bangumi",
    "kr": "텔레비전이나 라디오 프로그램",
    "icon": "💭"
  },
  {
    "jp": "捕まえる",
    "read": "[츠카마에루] tsukamaeru",
    "kr": "붙잡다",
    "icon": "🌟"
  },
  {
    "jp": "タイプ",
    "read": "[타이푸] taipu",
    "kr": "종류, 스타일",
    "icon": "💡"
  },
  {
    "jp": "毛",
    "read": "[케] ke",
    "kr": "털",
    "icon": "✅"
  },
  {
    "jp": "落る",
    "read": "[오치루] ochiru",
    "kr": "떨어지다",
    "icon": "🎌"
  },
  {
    "jp": "場合",
    "read": "[바-이] baai",
    "kr": "상황",
    "icon": "☀️"
  },
  {
    "jp": "意見",
    "read": "[이켄] iken",
    "kr": "의견",
    "icon": "🙏"
  },
  {
    "jp": "通る",
    "read": "[토-루] touru",
    "kr": "겪다",
    "icon": "👋"
  },
  {
    "jp": "着物",
    "read": "[키모노] kimono",
    "kr": "기모노",
    "icon": "⭕"
  },
  {
    "jp": "森",
    "read": "[모리] mori",
    "kr": "숲",
    "icon": "❌"
  },
  {
    "jp": "市",
    "read": "[시] shi",
    "kr": "도시",
    "icon": "🍣"
  },
  {
    "jp": "ほど",
    "read": "[호도] hodo",
    "kr": "정도",
    "icon": "🐱"
  },
  {
    "jp": "入院",
    "read": "[뉴우인] nyuuin",
    "kr": "입원시키다",
    "icon": "🐶"
  },
  {
    "jp": "カーテン",
    "read": "[카-텐] kaaten",
    "kr": "커튼",
    "icon": "📚"
  },
  {
    "jp": "動く",
    "read": "[우고쿠] ugoku",
    "kr": "움직이다",
    "icon": "🏫"
  },
  {
    "jp": "ぜひ",
    "read": "[제히] zehi",
    "kr": "틀림없이",
    "icon": "📝"
  },
  {
    "jp": "すばらしい",
    "read": "[스바라시-] subarashii",
    "kr": "멋진",
    "icon": "🏃"
  },
  {
    "jp": "参る",
    "read": "[마이루] mairu",
    "kr": "(겸손) 가다, 오다",
    "icon": "🗣️"
  },
  {
    "jp": "ねっしん",
    "read": "[넷신] nesshin",
    "kr": "열의",
    "icon": "💭"
  },
  {
    "jp": "講堂",
    "read": "[코-도-] koudou",
    "kr": "강당",
    "icon": "🌟"
  },
  {
    "jp": "もし",
    "read": "[모시] moshi",
    "kr": "만약",
    "icon": "💡"
  },
  {
    "jp": "ぬれる",
    "read": "[누레루] nureru",
    "kr": "젖다",
    "icon": "✅"
  },
  {
    "jp": "非常に",
    "read": "[히죠우니] hijouni",
    "kr": "극히",
    "icon": "🎌"
  },
  {
    "jp": "文法",
    "read": "[붐포-] bunpou",
    "kr": "문법",
    "icon": "☀️"
  },
  {
    "jp": "表",
    "read": "[오모테] omote",
    "kr": "앞",
    "icon": "🙏"
  },
  {
    "jp": "おっしゃる",
    "read": "[옷샤루] ossharu",
    "kr": "(존경) 말씀하시다",
    "icon": "👋"
  },
  {
    "jp": "西洋",
    "read": "[세-요우] seiyou",
    "kr": "서양 국가들",
    "icon": "⭕"
  },
  {
    "jp": "両方",
    "read": "[료우호-] ryouhou",
    "kr": "양쪽",
    "icon": "❌"
  },
  {
    "jp": "払う",
    "read": "[하라우] harau",
    "kr": "지불하다",
    "icon": "🍣"
  },
  {
    "jp": "地理",
    "read": "[치리] chiri",
    "kr": "지리",
    "icon": "🐱"
  },
  {
    "jp": "あかちゃん",
    "read": "[아카챤] akachan",
    "kr": "유아",
    "icon": "🐶"
  },
  {
    "jp": "似る",
    "read": "[니루] niru",
    "kr": "닮다",
    "icon": "📚"
  },
  {
    "jp": "踊る",
    "read": "[오도루] odoru",
    "kr": "춤추다",
    "icon": "🏫"
  },
  {
    "jp": "うれしい",
    "read": "[우레시-] ureshii",
    "kr": "기쁘다",
    "icon": "📝"
  },
  {
    "jp": "事故",
    "read": "[지코] jiko",
    "kr": "사고",
    "icon": "🏃"
  },
  {
    "jp": "さっき",
    "read": "[삭키] sakki",
    "kr": "얼마 전",
    "icon": "🗣️"
  },
  {
    "jp": "赤ん坊",
    "read": "[아캄보-] akanbou",
    "kr": "아기",
    "icon": "💭"
  },
  {
    "jp": "寂しい",
    "read": "[사비시-] sabishii",
    "kr": "외롭다",
    "icon": "🌟"
  },
  {
    "jp": "複雑",
    "read": "[후쿠자츠] fukuzatsu",
    "kr": "복잡함, 어려움",
    "icon": "💡"
  },
  {
    "jp": "眠る",
    "read": "[네무루] nemuru",
    "kr": "자다",
    "icon": "✅"
  },
  {
    "jp": "近所",
    "read": "[킨죠] kinjo",
    "kr": "이웃",
    "icon": "🎌"
  },
  {
    "jp": "ごみ",
    "read": "[고미] gomi",
    "kr": "쓰레기",
    "icon": "☀️"
  },
  {
    "jp": "例えば",
    "read": "[타토에바] tatoeba",
    "kr": "예를 들어",
    "icon": "🙏"
  },
  {
    "jp": "チェック・する",
    "read": "[치ェ윽쿠・스루] chekku・suru",
    "kr": "확인하다",
    "icon": "👋"
  },
  {
    "jp": "御主人",
    "read": "[고슈진] goshujin",
    "kr": "(존칭) 남편께서",
    "icon": "⭕"
  },
  {
    "jp": "テキスト",
    "read": "[테키스토] tekisuto",
    "kr": "교과서, 텍스트",
    "icon": "❌"
  },
  {
    "jp": "ごちそう",
    "read": "[고치소-] gochisou",
    "kr": "잔치",
    "icon": "🍣"
  },
  {
    "jp": "起す",
    "read": "[오코스] okosu",
    "kr": "깨다",
    "icon": "🐱"
  },
  {
    "jp": "テニス",
    "read": "[테니스] tenisu",
    "kr": "테니스",
    "icon": "🐶"
  },
  {
    "jp": "パソコン",
    "read": "[파소콘] pasokon",
    "kr": "개인용 컴퓨터",
    "icon": "📚"
  },
  {
    "jp": "研究",
    "read": "[켕큐우] kenkyuu",
    "kr": "연구",
    "icon": "🏫"
  },
  {
    "jp": "聞こえる",
    "read": "[키코에루] kikoeru",
    "kr": "들리다",
    "icon": "📝"
  },
  {
    "jp": "間違える",
    "read": "[마치가에루] machigaeru",
    "kr": "실수하다",
    "icon": "🏃"
  },
  {
    "jp": "看護婦",
    "read": "[캉고후] kangofu",
    "kr": "여간호사",
    "icon": "🗣️"
  },
  {
    "jp": "会議室",
    "read": "[카이기시츠] kaigishitsu",
    "kr": "회의실",
    "icon": "💭"
  },
  {
    "jp": "とこや",
    "read": "[토코야] tokoya",
    "kr": "이발사",
    "icon": "🌟"
  },
  {
    "jp": "試合",
    "read": "[시아이] shiai",
    "kr": "경기, 시합",
    "icon": "💡"
  },
  {
    "jp": "止む",
    "read": "[토무] tomu",
    "kr": "멈추다",
    "icon": "✅"
  },
  {
    "jp": "のど",
    "read": "[노도] nodo",
    "kr": "목",
    "icon": "🎌"
  },
  {
    "jp": "戦争",
    "read": "[센소-] sensou",
    "kr": "전쟁",
    "icon": "☀️"
  },
  {
    "jp": "降り出す",
    "read": "[오리다스] oridasu",
    "kr": "비가 오기 시작하다",
    "icon": "🙏"
  },
  {
    "jp": "コンピュータ / コンピューター",
    "read": "[콤퓨-타 / 콤퓨-타-] konpyuuta / konpyuutaa",
    "kr": "컴퓨터",
    "icon": "👋"
  },
  {
    "jp": "盛ん",
    "read": "[사칸] sakan",
    "kr": "인기, 번영",
    "icon": "⭕"
  },
  {
    "jp": "取り替える",
    "read": "[토리카에루] torikaeru",
    "kr": "교환하다",
    "icon": "❌"
  },
  {
    "jp": "支度",
    "read": "[시타쿠] shitaku",
    "kr": "준비하다",
    "icon": "🍣"
  },
  {
    "jp": "社会",
    "read": "[샤카이] shakai",
    "kr": "사회, 공공",
    "icon": "🐱"
  },
  {
    "jp": "沸く",
    "read": "[와쿠] waku",
    "kr": "끓이다, 뜨거워지다, 흥분하다",
    "icon": "🐶"
  },
  {
    "jp": "ちっとも",
    "read": "[칫토모] chittomo",
    "kr": "전혀 (부정 동사와 함께 사용)",
    "icon": "📚"
  },
  {
    "jp": "おかげ",
    "read": "[오카게] okage",
    "kr": "~때문에",
    "icon": "🏫"
  },
  {
    "jp": "ステーキ",
    "read": "[스테-키] suteeki",
    "kr": "스테이크",
    "icon": "📝"
  },
  {
    "jp": "消しゴム",
    "read": "[케시고무] keshigomu",
    "kr": "지우개",
    "icon": "🏃"
  },
  {
    "jp": "遠慮",
    "read": "[엔료] enryo",
    "kr": "조심하다, 삼가다",
    "icon": "🗣️"
  },
  {
    "jp": "工場",
    "read": "[코-죠우] koujou",
    "kr": "공장",
    "icon": "💭"
  },
  {
    "jp": "僕",
    "read": "[보쿠] boku",
    "kr": "나(남성이 사용)",
    "icon": "🌟"
  },
  {
    "jp": "招待",
    "read": "[쇼우타이] shoutai",
    "kr": "초대하다",
    "icon": "💡"
  },
  {
    "jp": "彼",
    "read": "[카레] kare",
    "kr": "그, 남자친구",
    "icon": "✅"
  },
  {
    "jp": "妻",
    "read": "[츠마] tsuma",
    "kr": "(겸손하게) 아내",
    "icon": "🎌"
  },
  {
    "jp": "石",
    "read": "[이시] ishi",
    "kr": "돌",
    "icon": "☀️"
  },
  {
    "jp": "簡単",
    "read": "[칸탄] kantan",
    "kr": "단순한",
    "icon": "🙏"
  },
  {
    "jp": "残念",
    "read": "[잔넨] zannen",
    "kr": "실망",
    "icon": "👋"
  },
  {
    "jp": "血",
    "read": "[치] chi",
    "kr": "피",
    "icon": "⭕"
  },
  {
    "jp": "ピアノ",
    "read": "[피아노] piano",
    "kr": "피아노",
    "icon": "❌"
  },
  {
    "jp": "おかしい",
    "read": "[오카시-] okashii",
    "kr": "이상하거나 웃긴",
    "icon": "🍣"
  },
  {
    "jp": "家内",
    "read": "[카나이] kanai",
    "kr": "주부",
    "icon": "🐱"
  },
  {
    "jp": "試験",
    "read": "[시켄] shiken",
    "kr": "시험",
    "icon": "🐶"
  },
  {
    "jp": "布団",
    "read": "[후톤] futon",
    "kr": "일본식 이불, 이불",
    "icon": "📚"
  },
  {
    "jp": "枝",
    "read": "[에다] eda",
    "kr": "가지, 잔가지",
    "icon": "🏫"
  },
  {
    "jp": "二階建て",
    "read": "[니카이다테테] nikaidatete",
    "kr": "2층짜리",
    "icon": "📝"
  },
  {
    "jp": "大学生",
    "read": "[다이가쿠세-] daigakusei",
    "kr": "대학생",
    "icon": "🏃"
  },
  {
    "jp": "楽む",
    "read": "[타노시무] tanoshimu",
    "kr": "즐기다",
    "icon": "🗣️"
  },
  {
    "jp": "遠く",
    "read": "[토-쿠] tooku",
    "kr": "먼",
    "icon": "💭"
  },
  {
    "jp": "今夜",
    "read": "[콘야] konya",
    "kr": "오늘 밤",
    "icon": "🌟"
  },
  {
    "jp": "決める",
    "read": "[키메루] kimeru",
    "kr": "결정하다",
    "icon": "💡"
  },
  {
    "jp": "なるべく",
    "read": "[나루베쿠] narubeku",
    "kr": "가능한 한 많이",
    "icon": "✅"
  },
  {
    "jp": "引き出す",
    "read": "[히키다스] hikidasu",
    "kr": "철수하다",
    "icon": "🎌"
  },
  {
    "jp": "明日",
    "read": "[아시타] ashita",
    "kr": "내일",
    "icon": "☀️"
  },
  {
    "jp": "割れる",
    "read": "[와레루] wareru",
    "kr": "부수다",
    "icon": "🙏"
  },
  {
    "jp": "田舎",
    "read": "[이나카] inaka",
    "kr": "시골",
    "icon": "👋"
  },
  {
    "jp": "寺",
    "read": "[테라] tera",
    "kr": "사원",
    "icon": "⭕"
  },
  {
    "jp": "釣る",
    "read": "[츠루] tsuru",
    "kr": "낚시하다",
    "icon": "❌"
  },
  {
    "jp": "建てる",
    "read": "[타테루] tateru",
    "kr": "짓다",
    "icon": "🍣"
  },
  {
    "jp": "久しぶり",
    "read": "[히사시부리] hisashiburi",
    "kr": "오랜만에",
    "icon": "🐱"
  },
  {
    "jp": "男性",
    "read": "[단세-] dansei",
    "kr": "남성",
    "icon": "🐶"
  },
  {
    "jp": "割合",
    "read": "[와리아이] wariai",
    "kr": "비율, 퍼센트",
    "icon": "📚"
  },
  {
    "jp": "相談",
    "read": "[소-단] soudan",
    "kr": "논의하다",
    "icon": "🏫"
  },
  {
    "jp": "足す",
    "read": "[타스] tasu",
    "kr": "숫자를 더하다",
    "icon": "📝"
  },
  {
    "jp": "社長",
    "read": "[샤쵸우] shachou",
    "kr": "회사 사장",
    "icon": "🏃"
  },
  {
    "jp": "経験",
    "read": "[케-켄] keiken",
    "kr": "경험하다",
    "icon": "🗣️"
  },
  {
    "jp": "訳",
    "read": "[와케] wake",
    "kr": "의미, 이유",
    "icon": "💭"
  },
  {
    "jp": "足りる",
    "read": "[타리루] tariru",
    "kr": "충분하다",
    "icon": "🌟"
  },
  {
    "jp": "味噌",
    "read": "[미소] miso",
    "kr": "팥, 두유",
    "icon": "💡"
  },
  {
    "jp": "もらう",
    "read": "[모라우] morau",
    "kr": "받다",
    "icon": "✅"
  },
  {
    "jp": "どんどん",
    "read": "[돈돈] dondon",
    "kr": "점점 더",
    "icon": "🎌"
  },
  {
    "jp": "工業",
    "read": "[코-교우] kougyou",
    "kr": "제조업",
    "icon": "☀️"
  },
  {
    "jp": "終わり",
    "read": "[오와리] owari",
    "kr": "끝",
    "icon": "🙏"
  },
  {
    "jp": "いじめる",
    "read": "[이지메루] ijimeru",
    "kr": "놀리다",
    "icon": "👋"
  },
  {
    "jp": "立てる",
    "read": "[타테루] tateru",
    "kr": "세우다",
    "icon": "⭕"
  },
  {
    "jp": "歴史",
    "read": "[레키시] rekishi",
    "kr": "역사",
    "icon": "❌"
  },
  {
    "jp": "おいでになる",
    "read": "[오이데니나루] oideninaru",
    "kr": "(존경) ~이다",
    "icon": "🍣"
  },
  {
    "jp": "うち",
    "read": "[우치] uchi",
    "kr": "내에",
    "icon": "🐱"
  },
  {
    "jp": "それで",
    "read": "[소레데] sorede",
    "kr": "때문에",
    "icon": "🐶"
  },
  {
    "jp": "ワープロ",
    "read": "[와-푸로] waapuro",
    "kr": "워드 프로세서",
    "icon": "📚"
  },
  {
    "jp": "漫画",
    "read": "[망가] manga",
    "kr": "만화",
    "icon": "🏫"
  },
  {
    "jp": "親",
    "read": "[오야] oya",
    "kr": "부모",
    "icon": "📝"
  },
  {
    "jp": "安全",
    "read": "[안젠] anzen",
    "kr": "안전",
    "icon": "🏃"
  },
  {
    "jp": "案内",
    "read": "[안나이] annai",
    "kr": "안내하다",
    "icon": "🗣️"
  },
  {
    "jp": "棚",
    "read": "[타나] tana",
    "kr": "선반",
    "icon": "💭"
  },
  {
    "jp": "不便",
    "read": "[후벤] fuben",
    "kr": "불편",
    "icon": "🌟"
  },
  {
    "jp": "間",
    "read": "[칸] kan",
    "kr": "공간",
    "icon": "💡"
  },
  {
    "jp": "恥ずかしい",
    "read": "[하즈카시-] hazukashii",
    "kr": "부끄러운",
    "icon": "✅"
  },
  {
    "jp": "打つ",
    "read": "[우츠] utsu",
    "kr": "치다",
    "icon": "🎌"
  },
  {
    "jp": "倒れる",
    "read": "[타오레루] taoreru",
    "kr": "고장나다",
    "icon": "☀️"
  },
  {
    "jp": "光",
    "read": "[히카리] hikari",
    "kr": "빛",
    "icon": "🙏"
  },
  {
    "jp": "交通",
    "read": "[코-츠우] koutsuu",
    "kr": "교통",
    "icon": "👋"
  },
  {
    "jp": "やはり / やっぱり",
    "read": "[야하리 / 얍파리] yahari / yappari",
    "kr": "생각한 대로, 확실히",
    "icon": "⭕"
  },
  {
    "jp": "スクリーン",
    "read": "[스쿠리-은] sukuriin",
    "kr": "화면",
    "icon": "❌"
  },
  {
    "jp": "細かい",
    "read": "[코마카이] komakai",
    "kr": "작다, 미세하다",
    "icon": "🍣"
  },
  {
    "jp": "夫",
    "read": "[옷토] otto",
    "kr": "남편",
    "icon": "🐱"
  },
  {
    "jp": "差し上げる",
    "read": "[사시아게루] sashiageru",
    "kr": "주다 (정중하게)",
    "icon": "🐶"
  },
  {
    "jp": "壊す",
    "read": "[코와스] kowasu",
    "kr": "깨다",
    "icon": "📚"
  },
  {
    "jp": "そんな",
    "read": "[손나] sonna",
    "kr": "그런 종류",
    "icon": "🏫"
  },
  {
    "jp": "レジ",
    "read": "[레지] reji",
    "kr": "등록하다",
    "icon": "📝"
  },
  {
    "jp": "戻る",
    "read": "[모도루] modoru",
    "kr": "되돌아가다",
    "icon": "🏃"
  },
  {
    "jp": "国際",
    "read": "[코쿠사이] kokusai",
    "kr": "국제적인",
    "icon": "🗣️"
  },
  {
    "jp": "音",
    "read": "[오토] oto",
    "kr": "소리, 음",
    "icon": "💭"
  },
  {
    "jp": "はず",
    "read": "[하즈] hazu",
    "kr": "그래야 한다",
    "icon": "🌟"
  },
  {
    "jp": "必要",
    "read": "[히츠요우] hitsuyou",
    "kr": "필요",
    "icon": "💡"
  },
  {
    "jp": "産業",
    "read": "[상교우] sangyou",
    "kr": "산업",
    "icon": "✅"
  },
  {
    "jp": "進む",
    "read": "[스스무] susumu",
    "kr": "진보하다",
    "icon": "🎌"
  },
  {
    "jp": "しばらく",
    "read": "[시바라쿠] shibaraku",
    "kr": "잠깐",
    "icon": "☀️"
  },
  {
    "jp": "鏡",
    "read": "[카가미] kagami",
    "kr": "거울",
    "icon": "🙏"
  },
  {
    "jp": "ソフト",
    "read": "[소후토] sofuto",
    "kr": "부드러운",
    "icon": "👋"
  },
  {
    "jp": "ちゃん",
    "read": "[챤] chan",
    "kr": "친근한 여성에게 붙이는 접미사",
    "icon": "⭕"
  },
  {
    "jp": "日",
    "read": "[니치] nichi",
    "kr": "날, 태양",
    "icon": "❌"
  },
  {
    "jp": "珍しい",
    "read": "[메즈라시-] mezurashii",
    "kr": "드문",
    "icon": "🍣"
  },
  {
    "jp": "都合",
    "read": "[츠고-] tsugou",
    "kr": "상황, 편의",
    "icon": "🐱"
  },
  {
    "jp": "忘れ物",
    "read": "[와스레모노] wasuremono",
    "kr": "분실물",
    "icon": "🐶"
  },
  {
    "jp": "驚く",
    "read": "[오도로쿠] odoroku",
    "kr": "놀라다",
    "icon": "📚"
  },
  {
    "jp": "逃げる",
    "read": "[니게루] nigeru",
    "kr": "탈출하다",
    "icon": "🏫"
  },
  {
    "jp": "心",
    "read": "[코코로] kokoro",
    "kr": "핵심, 중심",
    "icon": "📝"
  },
  {
    "jp": "つもり",
    "read": "[츠모리] tsumori",
    "kr": "의도",
    "icon": "🏃"
  },
  {
    "jp": "中学校",
    "read": "[츄우각코-] chuugakkou",
    "kr": "중학교",
    "icon": "🗣️"
  },
  {
    "jp": "隅",
    "read": "[스미] sumi",
    "kr": "구석, 모퉁이",
    "icon": "💭"
  },
  {
    "jp": "開く",
    "read": "[히라쿠] hiraku",
    "kr": "행사를 열다",
    "icon": "🌟"
  },
  {
    "jp": "ジャム",
    "read": "[쟈무] jamu",
    "kr": "잼",
    "icon": "💡"
  },
  {
    "jp": "決る",
    "read": "[키마루] kimaru",
    "kr": "결정되다",
    "icon": "✅"
  },
  {
    "jp": "力",
    "read": "[치카라] chikara",
    "kr": "힘, 체력",
    "icon": "🎌"
  },
  {
    "jp": "ねだん",
    "read": "[네단] nedan",
    "kr": "가격",
    "icon": "☀️"
  },
  {
    "jp": "太る",
    "read": "[후토루] futoru",
    "kr": "살찌다",
    "icon": "🙏"
  },
  {
    "jp": "計画",
    "read": "[케-카쿠] keikaku",
    "kr": "계획하다",
    "icon": "👋"
  },
  {
    "jp": "勝つ",
    "read": "[카츠] katsu",
    "kr": "이기다",
    "icon": "⭕"
  },
  {
    "jp": "眠い",
    "read": "[네무이] nemui",
    "kr": "졸린",
    "icon": "❌"
  },
  {
    "jp": "先輩",
    "read": "[셈파이] senpai",
    "kr": "선배",
    "icon": "🍣"
  },
  {
    "jp": "翻訳",
    "read": "[혼야쿠] honyaku",
    "kr": "번역",
    "icon": "🐱"
  },
  {
    "jp": "女性",
    "read": "[죠세-] josei",
    "kr": "여자",
    "icon": "🐶"
  },
  {
    "jp": "形",
    "read": "[카타치] katachi",
    "kr": "모양",
    "icon": "📚"
  },
  {
    "jp": "ご存じ",
    "read": "[고존지] gozonji",
    "kr": "알기, 지인",
    "icon": "🏫"
  },
  {
    "jp": "あんな",
    "read": "[안나] anna",
    "kr": "그런",
    "icon": "📝"
  },
  {
    "jp": "このごろ",
    "read": "[코노고로] konogoro",
    "kr": "요즘",
    "icon": "🏃"
  },
  {
    "jp": "滑る",
    "read": "[스베루] suberu",
    "kr": "미끄러지다, 미끄럼",
    "icon": "🗣️"
  },
  {
    "jp": "沸かす",
    "read": "[와카스] wakasu",
    "kr": "끓이다, 데우다",
    "icon": "💭"
  },
  {
    "jp": "移る",
    "read": "[우츠루] utsuru",
    "kr": "이사하다, 전근하다",
    "icon": "🌟"
  },
  {
    "jp": "選ぶ",
    "read": "[에라부] erabu",
    "kr": "선택하다",
    "icon": "💡"
  },
  {
    "jp": "高校生",
    "read": "[코-코-세-] koukousei",
    "kr": "고등학생",
    "icon": "✅"
  },
  {
    "jp": "さ来週",
    "read": "[사라이슈우] saraishuu",
    "kr": "다다음 주",
    "icon": "🎌"
  },
  {
    "jp": "うん",
    "read": "[운] un",
    "kr": "(비격식) 응",
    "icon": "☀️"
  },
  {
    "jp": "帰り",
    "read": "[카에리] kaeri",
    "kr": "돌아가다",
    "icon": "🙏"
  },
  {
    "jp": "湯",
    "read": "[유] yu",
    "kr": "뜨거운 물",
    "icon": "👋"
  },
  {
    "jp": "昔",
    "read": "[무카시] mukashi",
    "kr": "옛날, 이전",
    "icon": "⭕"
  },
  {
    "jp": "味",
    "read": "[아지] aji",
    "kr": "맛",
    "icon": "❌"
  },
  {
    "jp": "アジア",
    "read": "[아지아] ajia",
    "kr": "아시아",
    "icon": "🍣"
  },
  {
    "jp": "人形",
    "read": "[닝교우] ningyou",
    "kr": "인형, 조형물",
    "icon": "🐱"
  },
  {
    "jp": "治る",
    "read": "[나오루] naoru",
    "kr": "치료되다, 낫다",
    "icon": "🐶"
  },
  {
    "jp": "自由",
    "read": "[지유우] jiyuu",
    "kr": "자유",
    "icon": "📚"
  },
  {
    "jp": "パート",
    "read": "[파-토] paato",
    "kr": "아르바이트",
    "icon": "🏫"
  },
  {
    "jp": "ガラス",
    "read": "[가라스] garasu",
    "kr": "유리창",
    "icon": "📝"
  },
  {
    "jp": "大事",
    "read": "[다이지] daiji",
    "kr": "중요, 소중한, 심각한 문제",
    "icon": "🏃"
  },
  {
    "jp": "遅れる",
    "read": "[오쿠레루] okureru",
    "kr": "늦다",
    "icon": "🗣️"
  },
  {
    "jp": "会場",
    "read": "[카이죠우] kaijou",
    "kr": "집회장, 모임 장소",
    "icon": "💭"
  },
  {
    "jp": "あげる",
    "read": "[아게루] ageru",
    "kr": "주다",
    "icon": "🌟"
  },
  {
    "jp": "利用",
    "read": "[리요우] riyou",
    "kr": "활용",
    "icon": "💡"
  },
  {
    "jp": "泳ぎ方",
    "read": "[오요기호-] oyogihou",
    "kr": "수영법",
    "icon": "✅"
  },
  {
    "jp": "普通",
    "read": "[후츠우] futsuu",
    "kr": "보통, 또는 모든 역에 정차하는 기차",
    "icon": "🎌"
  },
  {
    "jp": "ガス",
    "read": "[가스] gasu",
    "kr": "휘발유",
    "icon": "☀️"
  },
  {
    "jp": "必ず",
    "read": "[카나라즈] kanarazu",
    "kr": "확실히, 반드시",
    "icon": "🙏"
  },
  {
    "jp": "競争",
    "read": "[쿄우소-] kyousou",
    "kr": "경쟁",
    "icon": "👋"
  },
  {
    "jp": "承知",
    "read": "[쇼우치] shouchi",
    "kr": "동의하다",
    "icon": "⭕"
  },
  {
    "jp": "焼く",
    "read": "[야쿠] yaku",
    "kr": "굽다",
    "icon": "❌"
  },
  {
    "jp": "別",
    "read": "[베츠] betsu",
    "kr": "다른",
    "icon": "🍣"
  },
  {
    "jp": "過ぎる",
    "read": "[스기루] sugiru",
    "kr": "초과하다",
    "icon": "🐱"
  },
  {
    "jp": "連絡",
    "read": "[렌라쿠] renraku",
    "kr": "접촉",
    "icon": "🐶"
  },
  {
    "jp": "すると",
    "read": "[스루토] suruto",
    "kr": "그때",
    "icon": "📚"
  },
  {
    "jp": "暮れる",
    "read": "[쿠레루] kureru",
    "kr": "어두워지다, 끝나다",
    "icon": "🏫"
  },
  {
    "jp": "喜ぶ",
    "read": "[요로코부] yorokobu",
    "kr": "기뻐하다",
    "icon": "📝"
  },
  {
    "jp": "習慣",
    "read": "[슈우칸] shuukan",
    "kr": "관습, 예절",
    "icon": "🏃"
  },
  {
    "jp": "部長",
    "read": "[부쵸우] buchou",
    "kr": "부서장",
    "icon": "🗣️"
  },
  {
    "jp": "祈る",
    "read": "[이노루] inoru",
    "kr": "기도하다",
    "icon": "💭"
  },
  {
    "jp": "水道",
    "read": "[스이도-] suidou",
    "kr": "상수도",
    "icon": "🌟"
  },
  {
    "jp": "とうとう",
    "read": "[토-토-] toutou",
    "kr": "결국, 드디어",
    "icon": "💡"
  },
  {
    "jp": "道具",
    "read": "[도-구] dougu",
    "kr": "도구, 수단",
    "icon": "✅"
  },
  {
    "jp": "ケーキ",
    "read": "[케-키] keeki",
    "kr": "케이크",
    "icon": "🎌"
  },
  {
    "jp": "郊外",
    "read": "[코-가이] kougai",
    "kr": "교외",
    "icon": "☀️"
  },
  {
    "jp": "おもちゃ",
    "read": "[오모챠] omocha",
    "kr": "장난감",
    "icon": "🙏"
  },
  {
    "jp": "最近",
    "read": "[사이킨] saikin",
    "kr": "최신, 요즘",
    "icon": "👋"
  },
  {
    "jp": "もちろん",
    "read": "[모치론] mochiron",
    "kr": "물론",
    "icon": "⭕"
  },
  {
    "jp": "天気予報",
    "read": "[텡키요호-] tenkiyohou",
    "kr": "일기예보",
    "icon": "❌"
  },
  {
    "jp": "乗り物",
    "read": "[노리모노] norimono",
    "kr": "차량",
    "icon": "🍣"
  },
  {
    "jp": "亡くなる",
    "read": "[나쿠나루] nakunaru",
    "kr": "죽다",
    "icon": "🐱"
  },
  {
    "jp": "尋ねる",
    "read": "[타즈네루] tazuneru",
    "kr": "묻다",
    "icon": "🐶"
  },
  {
    "jp": "髪",
    "read": "[카미] kami",
    "kr": "머리카락",
    "icon": "📚"
  },
  {
    "jp": "売り場",
    "read": "[우리바] uriba",
    "kr": "물건을 파는 장소",
    "icon": "🏫"
  },
  {
    "jp": "下着",
    "read": "[시타기] shitagi",
    "kr": "속옷",
    "icon": "📝"
  },
  {
    "jp": "鳴る",
    "read": "[나루] naru",
    "kr": "소리나다",
    "icon": "🏃"
  },
  {
    "jp": "飛行場",
    "read": "[히코-죠우] hikoujou",
    "kr": "공항",
    "icon": "🗣️"
  },
  {
    "jp": "都",
    "read": "[미야코] miyako",
    "kr": "대도시",
    "icon": "💭"
  },
  {
    "jp": "親切",
    "read": "[신세츠] shinsetsu",
    "kr": "친절",
    "icon": "🌟"
  },
  {
    "jp": "政治",
    "read": "[세-지] seiji",
    "kr": "정치, 정부",
    "icon": "💡"
  },
  {
    "jp": "予約",
    "read": "[요야쿠] yoyaku",
    "kr": "예약",
    "icon": "✅"
  },
  {
    "jp": "泣く",
    "read": "[나쿠] naku",
    "kr": "울다",
    "icon": "🎌"
  },
  {
    "jp": "すっと",
    "read": "[슷토] sutto",
    "kr": "곧장, 갑자기",
    "icon": "☀️"
  },
  {
    "jp": "君",
    "read": "[쿤] kun",
    "kr": "(비공식) 너 (남성이 여성에게 사용하는 표현)",
    "icon": "🙏"
  },
  {
    "jp": "娘",
    "read": "[무스메] musume",
    "kr": "(겸손) 딸",
    "icon": "👋"
  },
  {
    "jp": "踏む",
    "read": "[후무] fumu",
    "kr": "밟다",
    "icon": "⭕"
  },
  {
    "jp": "店員",
    "read": "[텐-은] ten'in",
    "kr": "점원",
    "icon": "❌"
  },
  {
    "jp": "通う",
    "read": "[카요우] kayou",
    "kr": "통근하다",
    "icon": "🍣"
  },
  {
    "jp": "彼女",
    "read": "[카노죠] kanojo",
    "kr": "그녀, 여자친구",
    "icon": "🐱"
  },
  {
    "jp": "場所",
    "read": "[바쇼] basho",
    "kr": "위치",
    "icon": "🐶"
  },
  {
    "jp": "木綿",
    "read": "[모멘] momen",
    "kr": "면",
    "icon": "📚"
  },
  {
    "jp": "畳",
    "read": "[타타미] tatami",
    "kr": "일본식 짚 돗자리",
    "icon": "🏫"
  },
  {
    "jp": "裏",
    "read": "[우라] ura",
    "kr": "뒷면",
    "icon": "📝"
  },
  {
    "jp": "びっくり・する",
    "read": "[빅쿠리・스루] bikkuri・suru",
    "kr": "놀라다",
    "icon": "🏃"
  },
  {
    "jp": "地震",
    "read": "[지신] jishin",
    "kr": "지진",
    "icon": "🗣️"
  },
  {
    "jp": "湖",
    "read": "[미즈우미] mizuumi",
    "kr": "호수",
    "icon": "💭"
  },
  {
    "jp": "危険",
    "read": "[키켄] kiken",
    "kr": "위험",
    "icon": "🌟"
  },
  {
    "jp": "出発",
    "read": "[슙파츠] shuppatsu",
    "kr": "출발하다",
    "icon": "💡"
  },
  {
    "jp": "予習",
    "read": "[요슈우] yoshuu",
    "kr": "수업 준비",
    "icon": "✅"
  },
  {
    "jp": "将来",
    "read": "[쇼우라이] shourai",
    "kr": "미래, 전망",
    "icon": "🎌"
  },
  {
    "jp": "遊び",
    "read": "[아소비] asobi",
    "kr": "연극",
    "icon": "☀️"
  },
  {
    "jp": "変わる",
    "read": "[카와루] kawaru",
    "kr": "바꾸다",
    "icon": "🙏"
  },
  {
    "jp": "柔道",
    "read": "[쥬우도-] juudou",
    "kr": "유도",
    "icon": "👋"
  },
  {
    "jp": "説明",
    "read": "[세츠메-] setsumei",
    "kr": "설명",
    "icon": "⭕"
  },
  {
    "jp": "返事",
    "read": "[헨지] henji",
    "kr": "대답",
    "icon": "❌"
  },
  {
    "jp": "特別",
    "read": "[토쿠베츠] tokubetsu",
    "kr": "특별한",
    "icon": "🍣"
  },
  {
    "jp": "下りる",
    "read": "[오리루] oriru",
    "kr": "내리다",
    "icon": "🐱"
  },
  {
    "jp": "暖房",
    "read": "[담보-] danbou",
    "kr": "난방",
    "icon": "🐶"
  },
  {
    "jp": "伝える",
    "read": "[츠타에루] tsutaeru",
    "kr": "보고하다",
    "icon": "📚"
  },
  {
    "jp": "展覧会",
    "read": "[텐랑카이] tenrankai",
    "kr": "전시회",
    "icon": "🏫"
  },
  {
    "jp": "ガソリン",
    "read": "[가소린] gasorin",
    "kr": "휘발유",
    "icon": "📝"
  },
  {
    "jp": "中々",
    "read": "[나카나카] nakanaka",
    "kr": "상당히",
    "icon": "🏃"
  },
  {
    "jp": "糸",
    "read": "[이토] ito",
    "kr": "실",
    "icon": "🗣️"
  },
  {
    "jp": "倍",
    "read": "[바이] bai",
    "kr": "이중",
    "icon": "💭"
  },
  {
    "jp": "課長",
    "read": "[카쵸우] kachou",
    "kr": "부장",
    "icon": "🌟"
  },
  {
    "jp": "見物",
    "read": "[켐부츠] kenbutsu",
    "kr": "관광",
    "icon": "💡"
  },
  {
    "jp": "ガソリンスタンド",
    "read": "[가소린스탄도] gasorinsutando",
    "kr": "주유소",
    "icon": "✅"
  },
  {
    "jp": "席",
    "read": "[세키] seki",
    "kr": "좌석",
    "icon": "🎌"
  },
  {
    "jp": "関係",
    "read": "[캉케-] kankei",
    "kr": "관계",
    "icon": "☀️"
  },
  {
    "jp": "拝見",
    "read": "[하이켄] haiken",
    "kr": "(겸손하게) 보다",
    "icon": "🙏"
  },
  {
    "jp": "台風",
    "read": "[타이후-] taifuu",
    "kr": "태풍",
    "icon": "👋"
  },
  {
    "jp": "片付ける",
    "read": "[카타즈케루] katazukeru",
    "kr": "정리하다",
    "icon": "⭕"
  },
  {
    "jp": "舟",
    "read": "[후네] fune",
    "kr": "배",
    "icon": "❌"
  },
  {
    "jp": "または",
    "read": "[마타하] mataha",
    "kr": "또는, 그렇지 않으면",
    "icon": "🍣"
  },
  {
    "jp": "教育",
    "read": "[쿄우이쿠] kyouiku",
    "kr": "교육",
    "icon": "🐱"
  },
  {
    "jp": "引っ越す",
    "read": "[힉코스] hikkosu",
    "kr": "이사하다",
    "icon": "🐶"
  },
  {
    "jp": "会議",
    "read": "[카이기] kaigi",
    "kr": "회의",
    "icon": "📚"
  },
  {
    "jp": "米",
    "read": "[코메] kome",
    "kr": "쌀",
    "icon": "🏫"
  },
  {
    "jp": "もっとも",
    "read": "[못토모] mottomo",
    "kr": "매우",
    "icon": "📝"
  },
  {
    "jp": "かまう",
    "read": "[카마우] kamau",
    "kr": "신경 쓰다",
    "icon": "🏃"
  },
  {
    "jp": "教会",
    "read": "[쿄우카이] kyoukai",
    "kr": "교회",
    "icon": "🗣️"
  },
  {
    "jp": "落す",
    "read": "[오토스] otosu",
    "kr": "떨어뜨리다",
    "icon": "💭"
  },
  {
    "jp": "まじめ",
    "read": "[마지메] majime",
    "kr": "심각한",
    "icon": "🌟"
  },
  {
    "jp": "謝る",
    "read": "[아야마루] ayamaru",
    "kr": "사과하다",
    "icon": "💡"
  },
  {
    "jp": "におい",
    "read": "[니오이] nioi",
    "kr": "냄새",
    "icon": "✅"
  },
  {
    "jp": "騒ぐ",
    "read": "[사와구] sawagu",
    "kr": "소란을 피우다, 흥분하다",
    "icon": "🎌"
  },
  {
    "jp": "島",
    "read": "[시마] shima",
    "kr": "섬",
    "icon": "☀️"
  },
  {
    "jp": "すっかり",
    "read": "[슥카리] sukkari",
    "kr": "완전히",
    "icon": "🙏"
  },
  {
    "jp": "答",
    "read": "[코타에] kotae",
    "kr": "응답",
    "icon": "👋"
  },
  {
    "jp": "原因",
    "read": "[겐-은] gen'in",
    "kr": "원인, 근원",
    "icon": "⭕"
  },
  {
    "jp": "動物園",
    "read": "[도-부츠엔] doubutsuen",
    "kr": "동물원",
    "icon": "❌"
  },
  {
    "jp": "スーツ",
    "read": "[스-츠] suutsu",
    "kr": "양복",
    "icon": "🍣"
  },
  {
    "jp": "ああ",
    "read": "[아-] aa",
    "kr": "그렇게",
    "icon": "🐱"
  },
  {
    "jp": "最後",
    "read": "[사이고] saigo",
    "kr": "마지막, 끝",
    "icon": "🐶"
  },
  {
    "jp": "うかがう",
    "read": "[우카가우] ukagau",
    "kr": "방문하다",
    "icon": "📚"
  },
  {
    "jp": "ほとんど",
    "read": "[호톤도] hotondo",
    "kr": "대부분",
    "icon": "🏫"
  },
  {
    "jp": "夢",
    "read": "[유메] yume",
    "kr": "꿈",
    "icon": "📝"
  },
  {
    "jp": "つき",
    "read": "[츠키] tsuki",
    "kr": "달",
    "icon": "🏃"
  },
  {
    "jp": "高校",
    "read": "[코-코-] koukou",
    "kr": "고등학교",
    "icon": "🗣️"
  },
  {
    "jp": "気",
    "read": "[키] ki",
    "kr": "정신, 기분",
    "icon": "💭"
  },
  {
    "jp": "正しい",
    "read": "[타다시-] tadashii",
    "kr": "올바른",
    "icon": "🌟"
  },
  {
    "jp": "輸出",
    "read": "[유슈츠] yushutsu",
    "kr": "수출하다",
    "icon": "💡"
  },
  {
    "jp": "文化",
    "read": "[붕카] bunka",
    "kr": "문화",
    "icon": "✅"
  },
  {
    "jp": "だめ",
    "read": "[다메] dame",
    "kr": "좋지 않다",
    "icon": "🎌"
  },
  {
    "jp": "けれど / けれども",
    "read": "[케레도 / 케레도모] keredo / keredomo",
    "kr": "그러나",
    "icon": "☀️"
  },
  {
    "jp": "飾る",
    "read": "[카자루] kazaru",
    "kr": "장식하다",
    "icon": "🙏"
  },
  {
    "jp": "準備",
    "read": "[쥼비] junbi",
    "kr": "준비하다",
    "icon": "👋"
  },
  {
    "jp": "卒業",
    "read": "[소츠교우] sotsugyou",
    "kr": "졸업",
    "icon": "⭕"
  },
  {
    "jp": "間に合う",
    "read": "[마니아우] maniau",
    "kr": "제시간에 맞추다",
    "icon": "❌"
  },
  {
    "jp": "それに",
    "read": "[소레니] soreni",
    "kr": "더욱이",
    "icon": "🍣"
  },
  {
    "jp": "具合",
    "read": "[구아이] guai",
    "kr": "상태, 건강",
    "icon": "🐱"
  },
  {
    "jp": "贈り物",
    "read": "[오쿠리모노] okurimono",
    "kr": "선물",
    "icon": "🐶"
  },
  {
    "jp": "堅 / 硬/固い",
    "read": "[켄 / 코-/카타이] ken / kou/katai",
    "kr": "어려운",
    "icon": "📚"
  },
  {
    "jp": "貿易",
    "read": "[보-에키] boueki",
    "kr": "무역",
    "icon": "🏫"
  },
  {
    "jp": "考える",
    "read": "[캉가에루] kangaeru",
    "kr": "고려하다",
    "icon": "📝"
  },
  {
    "jp": "別れる",
    "read": "[와카레루] wakareru",
    "kr": "분리하다",
    "icon": "🏃"
  },
  {
    "jp": "サラダ",
    "read": "[사라다] sarada",
    "kr": "샐러드",
    "icon": "🗣️"
  },
  {
    "jp": "寝坊",
    "read": "[네보-] nebou",
    "kr": "늦잠 자다",
    "icon": "💭"
  },
  {
    "jp": "科学",
    "read": "[카가쿠] kagaku",
    "kr": "과학",
    "icon": "🌟"
  },
  {
    "jp": "こう",
    "read": "[코-] kou",
    "kr": "이쪽으로",
    "icon": "💡"
  },
  {
    "jp": "光る",
    "read": "[히카루] hikaru",
    "kr": "빛나다, 반짝이다",
    "icon": "✅"
  },
  {
    "jp": "息子",
    "read": "[무스코] musuko",
    "kr": "(겸손하게) 아들",
    "icon": "🎌"
  },
  {
    "jp": "育てる",
    "read": "[소다테루] sodateru",
    "kr": "기르다, 양육하다",
    "icon": "☀️"
  },
  {
    "jp": "きっと",
    "read": "[킷토] kitto",
    "kr": "확실히",
    "icon": "🙏"
  },
  {
    "jp": "空く",
    "read": "[아쿠] aku",
    "kr": "열다, 비다",
    "icon": "👋"
  },
  {
    "jp": "冷房",
    "read": "[레-보-] reibou",
    "kr": "에어컨",
    "icon": "⭕"
  },
  {
    "jp": "コンサート",
    "read": "[콘사-토] konsaato",
    "kr": "콘서트",
    "icon": "❌"
  },
  {
    "jp": "始める",
    "read": "[하지메루] hajimeru",
    "kr": "시작하다",
    "icon": "🍣"
  },
  {
    "jp": "電灯",
    "read": "[덴토-] dentou",
    "kr": "전등",
    "icon": "🐱"
  },
  {
    "jp": "医学",
    "read": "[이가쿠] igaku",
    "kr": "의학",
    "icon": "🐶"
  },
  {
    "jp": "柔らかい",
    "read": "[야와라카이] yawarakai",
    "kr": "부드럽다",
    "icon": "📚"
  },
  {
    "jp": "下げる",
    "read": "[사게루] sageru",
    "kr": "걸다, 내리다, 뒤로 젖히다",
    "icon": "🏫"
  },
  {
    "jp": "校長",
    "read": "[코-쵸우] kouchou",
    "kr": "교장",
    "icon": "📝"
  },
  {
    "jp": "新聞社",
    "read": "[심분샤] shinbunsha",
    "kr": "신문사",
    "icon": "🏃"
  },
  {
    "jp": "ファックス",
    "read": "[팍쿠스] fakkusu",
    "kr": "팩스",
    "icon": "🗣️"
  },
  {
    "jp": "放送",
    "read": "[호-소-] housou",
    "kr": "방송하다",
    "icon": "💭"
  },
  {
    "jp": "やっと",
    "read": "[얏토] yatto",
    "kr": "마침내",
    "icon": "🌟"
  },
  {
    "jp": "オートバイ",
    "read": "[오-토바이] ootobai",
    "kr": "오토바이",
    "icon": "💡"
  },
  {
    "jp": "レポート / リポート",
    "read": "[레포-토 / 리포-토] repooto / ripooto",
    "kr": "보고서",
    "icon": "✅"
  },
  {
    "jp": "心配",
    "read": "[심파이] shinpai",
    "kr": "걱정하다",
    "icon": "🎌"
  },
  {
    "jp": "急行",
    "read": "[큐우코-] kyuukou",
    "kr": "빠른, 특급",
    "icon": "☀️"
  },
  {
    "jp": "拾う",
    "read": "[히로-] hirou",
    "kr": "줍다, 모으다",
    "icon": "🙏"
  },
  {
    "jp": "塗る",
    "read": "[누루] nuru",
    "kr": "칠하다, 회반죽 바르다",
    "icon": "👋"
  },
  {
    "jp": "線",
    "read": "[센] sen",
    "kr": "선, 줄",
    "icon": "⭕"
  },
  {
    "jp": "用意",
    "read": "[요우이] youi",
    "kr": "준비",
    "icon": "❌"
  },
  {
    "jp": "生活",
    "read": "[세-카츠] seikatsu",
    "kr": "살다",
    "icon": "🍣"
  },
  {
    "jp": "退院",
    "read": "[타이-은] taiin",
    "kr": "퇴원하다",
    "icon": "🐱"
  },
  {
    "jp": "けが・する",
    "read": "[케가・스루] kega・suru",
    "kr": "다치다",
    "icon": "🐶"
  },
  {
    "jp": "揺れる",
    "read": "[유레루] yureru",
    "kr": "흔들다, 흔들리다",
    "icon": "📚"
  },
  {
    "jp": "入学",
    "read": "[뉴우가쿠] nyuugaku",
    "kr": "입학하다",
    "icon": "🏫"
  },
  {
    "jp": "数学",
    "read": "[스우가쿠] suugaku",
    "kr": "수학",
    "icon": "📝"
  },
  {
    "jp": "ぜんぜん",
    "read": "[젠젠] zenzen",
    "kr": "전혀 ~않다",
    "icon": "🏃"
  },
  {
    "jp": "急ぐ",
    "read": "[이소구] isogu",
    "kr": "서두르다",
    "icon": "🗣️"
  },
  {
    "jp": "ひどい",
    "read": "[히도이] hidoi",
    "kr": "끔찍하다",
    "icon": "💭"
  },
  {
    "jp": "品物",
    "read": "[시나모노] shinamono",
    "kr": "상품",
    "icon": "🌟"
  },
  {
    "jp": "比べる",
    "read": "[쿠라베루] kuraberu",
    "kr": "비교하다",
    "icon": "💡"
  },
  {
    "jp": "包む",
    "read": "[츠츠무] tsutsumu",
    "kr": "싸다",
    "icon": "✅"
  },
  {
    "jp": "十分",
    "read": "[쥬우분] juubun",
    "kr": "충분하다",
    "icon": "🎌"
  },
  {
    "jp": "ハンドバッグ",
    "read": "[한도밧구] handobaggu",
    "kr": "핸드백",
    "icon": "☀️"
  },
  {
    "jp": "決して",
    "read": "[켓시테] kesshite",
    "kr": "결코 ~않다",
    "icon": "🙏"
  },
  {
    "jp": "無くなる",
    "read": "[나쿠나루] nakunaru",
    "kr": "사라지다, 없어지다",
    "icon": "👋"
  },
  {
    "jp": "用事",
    "read": "[요우지] youji",
    "kr": "할 일",
    "icon": "⭕"
  },
  {
    "jp": "なさる",
    "read": "[나사루] nasaru",
    "kr": "(존경의 의미로) 하다",
    "icon": "❌"
  },
  {
    "jp": "億",
    "read": "[오쿠] oku",
    "kr": "일억",
    "icon": "🍣"
  },
  {
    "jp": "楽しみ",
    "read": "[타노시미] tanoshimi",
    "kr": "기쁨",
    "icon": "🐱"
  },
  {
    "jp": "サンダル",
    "read": "[산다루] sandaru",
    "kr": "샌달",
    "icon": "🐶"
  },
  {
    "jp": "客",
    "read": "[캬쿠] kyaku",
    "kr": "손님, 고객",
    "icon": "📚"
  },
  {
    "jp": "反対",
    "read": "[한타이] hantai",
    "kr": "반대",
    "icon": "🏫"
  },
  {
    "jp": "火",
    "read": "[히] hi",
    "kr": "불, 화재",
    "icon": "📝"
  },
  {
    "jp": "空港",
    "read": "[쿠-코-] kuukou",
    "kr": "공항",
    "icon": "🏃"
  },
  {
    "jp": "慣れる",
    "read": "[나레루] nareru",
    "kr": "익숙해지다",
    "icon": "🗣️"
  },
  {
    "jp": "旅館",
    "read": "[료칸] ryokan",
    "kr": "일본식 호텔",
    "icon": "💭"
  },
  {
    "jp": "噛む",
    "read": "[카무] kamu",
    "kr": "물다, 씹다",
    "icon": "🌟"
  },
  {
    "jp": "漬ける",
    "read": "[츠케루] tsukeru",
    "kr": "담그다",
    "icon": "💡"
  },
  {
    "jp": "踊り",
    "read": "[오도리] odori",
    "kr": "춤",
    "icon": "✅"
  },
  {
    "jp": "講義",
    "read": "[코-기] kougi",
    "kr": "강의",
    "icon": "🎌"
  },
  {
    "jp": "送る",
    "read": "[오쿠루] okuru",
    "kr": "보내다",
    "icon": "☀️"
  },
  {
    "jp": "迎える",
    "read": "[무카에루] mukaeru",
    "kr": "마중 나가다",
    "icon": "🙏"
  },
  {
    "jp": "凄い",
    "read": "[스고이] sugoi",
    "kr": "훌륭한",
    "icon": "👋"
  },
  {
    "jp": "以内",
    "read": "[이나이] inai",
    "kr": "~이내에",
    "icon": "⭕"
  },
  {
    "jp": "探す",
    "read": "[사가스] sagasu",
    "kr": "찾다",
    "icon": "❌"
  },
  {
    "jp": "行う",
    "read": "[오코나우] okonau",
    "kr": "하다",
    "icon": "🍣"
  },
  {
    "jp": "引き出し",
    "read": "[히키다시] hikidashi",
    "kr": "서랍",
    "icon": "🐱"
  },
  {
    "jp": "焼ける",
    "read": "[야케루] yakeru",
    "kr": "타다, 구워지다",
    "icon": "🐶"
  },
  {
    "jp": "けんか・する",
    "read": "[켕카・스루] kenka・suru",
    "kr": "다투다",
    "icon": "📚"
  },
  {
    "jp": "背中",
    "read": "[세나카] senaka",
    "kr": "등",
    "icon": "🏫"
  },
  {
    "jp": "込む",
    "read": "[코무] komu",
    "kr": "붐비다",
    "icon": "📝"
  },
  {
    "jp": "あいさつ・する",
    "read": "[아이사츠・스루] aisatsu・suru",
    "kr": "인사하다",
    "icon": "🏃"
  },
  {
    "jp": "負ける",
    "read": "[마케루] makeru",
    "kr": "잃다",
    "icon": "🗣️"
  },
  {
    "jp": "ごらんになる",
    "read": "[고란니나루] goranninaru",
    "kr": "(존경) 보다",
    "icon": "💭"
  },
  {
    "jp": "事務所",
    "read": "[지무쇼] jimusho",
    "kr": "사무실",
    "icon": "🌟"
  },
  {
    "jp": "そろそろ",
    "read": "[소로소로] sorosoro",
    "kr": "점차, 곧",
    "icon": "💡"
  },
  {
    "jp": "美術館",
    "read": "[비쥬츠칸] bijutsukan",
    "kr": "미술관",
    "icon": "✅"
  },
  {
    "jp": "あ",
    "read": "[아] a",
    "kr": "아",
    "icon": "🎌"
  },
  {
    "jp": "以外",
    "read": "[이가이] igai",
    "kr": "~을 제외하고",
    "icon": "☀️"
  },
  {
    "jp": "じゃま",
    "read": "[쟈마] jama",
    "kr": "방해, 침범",
    "icon": "🙏"
  },
  {
    "jp": "安心",
    "read": "[안신] anshin",
    "kr": "안도",
    "icon": "👋"
  },
  {
    "jp": "集める",
    "read": "[아츠메루] atsumeru",
    "kr": "모으다",
    "icon": "⭕"
  },
  {
    "jp": "捨てる",
    "read": "[스테루] suteru",
    "kr": "버리다",
    "icon": "❌"
  },
  {
    "jp": "駐車場",
    "read": "[츄우샤죠우] chuushajou",
    "kr": "주차장",
    "icon": "🍣"
  },
  {
    "jp": "確か",
    "read": "[타시카] tashika",
    "kr": "확실한",
    "icon": "🐱"
  },
  {
    "jp": "手袋",
    "read": "[테부쿠로] tebukuro",
    "kr": "장갑",
    "icon": "🐶"
  },
  {
    "jp": "熱",
    "read": "[네츠] netsu",
    "kr": "열, 발열",
    "icon": "📚"
  },
  {
    "jp": "指",
    "read": "[유비] yubi",
    "kr": "손가락",
    "icon": "🏫"
  },
  {
    "jp": "止める",
    "read": "[야메루] yameru",
    "kr": "멈추다",
    "icon": "📝"
  },
  {
    "jp": "アクセサリー",
    "read": "[아쿠세사리-] akusesarii",
    "kr": "액세서리",
    "icon": "🏃"
  },
  {
    "jp": "下る",
    "read": "[쿠다루] kudaru",
    "kr": "내리다",
    "icon": "🗣️"
  },
  {
    "jp": "ほめる",
    "read": "[호메루] homeru",
    "kr": "칭찬하다",
    "icon": "💭"
  },
  {
    "jp": "回る",
    "read": "[마와루] mawaru",
    "kr": "돌아다니다",
    "icon": "🌟"
  },
  {
    "jp": "くださる",
    "read": "[쿠다사루] kudasaru",
    "kr": "(존경) 드리다",
    "icon": "💡"
  },
  {
    "jp": "合図",
    "read": "[아이즈] aizu",
    "kr": "신호",
    "icon": "✅"
  },
  {
    "jp": "清潔",
    "read": "[세-케츠] seiketsu",
    "kr": "깨끗한",
    "icon": "🎌"
  },
  {
    "jp": "願い",
    "read": "[네가이] negai",
    "kr": "욕망, 소망, 요청",
    "icon": "☀️"
  },
  {
    "jp": "幕",
    "read": "[마쿠] maku",
    "kr": "커튼, 장식천, 막 (연극)",
    "icon": "🙏"
  },
  {
    "jp": "馬",
    "read": "[우마] uma",
    "kr": "(1) 말, (2) 승진한 장 (장기)",
    "icon": "👋"
  },
  {
    "jp": "除く",
    "read": "[노조쿠] nozoku",
    "kr": "제거하다, 제외하다, 배제하다",
    "icon": "⭕"
  },
  {
    "jp": "香り",
    "read": "[카오리] kaori",
    "kr": "aroma, fragrance, scent, smell",
    "icon": "❌"
  },
  {
    "jp": "歩道",
    "read": "[호도-] hodou",
    "kr": "footpath, walkway, sidewalk",
    "icon": "🍣"
  },
  {
    "jp": "想像",
    "read": "[소-조-] souzou",
    "kr": "imagination, guess",
    "icon": "🐱"
  },
  {
    "jp": "備える",
    "read": "[소나에루] sonaeru",
    "kr": "to furnish, to provide for, to equip, to install",
    "icon": "🐶"
  },
  {
    "jp": "便",
    "read": "[빈] bin",
    "kr": "way, means",
    "icon": "📚"
  },
  {
    "jp": "ライター",
    "read": "[라이타-] raitaa",
    "kr": "lighter, rider, writer",
    "icon": "🏫"
  },
  {
    "jp": "平均",
    "read": "[헤-킨] heikin",
    "kr": "equilibrium, balance, average, mean",
    "icon": "📝"
  },
  {
    "jp": "革",
    "read": "[카와] kawa",
    "kr": "leather",
    "icon": "🏃"
  },
  {
    "jp": "去る",
    "read": "[사루] saru",
    "kr": "to leave, to go away",
    "icon": "🗣️"
  },
  {
    "jp": "礼儀",
    "read": "[레-기] reigi",
    "kr": "manners, courtesy, etiquette",
    "icon": "💭"
  },
  {
    "jp": "意思",
    "read": "[이시] ishi",
    "kr": "intention, purpose",
    "icon": "🌟"
  },
  {
    "jp": "全く",
    "read": "[맛타쿠] mattaku",
    "kr": "really, truly, entirely, completely",
    "icon": "💡"
  },
  {
    "jp": "中央",
    "read": "[츄우오-] chuuou",
    "kr": "centre, central, center, middle",
    "icon": "✅"
  },
  {
    "jp": "歓迎",
    "read": "[캉게-] kangei",
    "kr": "welcome, reception",
    "icon": "🎌"
  },
  {
    "jp": "輸出",
    "read": "[유슈츠] yushutsu",
    "kr": "export",
    "icon": "☀️"
  },
  {
    "jp": "喉",
    "read": "[노도] nodo",
    "kr": "throat",
    "icon": "🙏"
  },
  {
    "jp": "間",
    "read": "[칸] kan",
    "kr": "space, room, time, pause",
    "icon": "👋"
  },
  {
    "jp": "修正",
    "read": "[슈우세-] shuusei",
    "kr": "amendment, correction, revision, modification",
    "icon": "⭕"
  },
  {
    "jp": "記念",
    "read": "[키넨] kinen",
    "kr": "commemoration, memory",
    "icon": "❌"
  },
  {
    "jp": "震える",
    "read": "[후루에루] furueru",
    "kr": "to shiver, to shake, to quake",
    "icon": "🍣"
  },
  {
    "jp": "一家",
    "read": "[익카] ikka",
    "kr": "a house, a home, a family, a household",
    "icon": "🐱"
  },
  {
    "jp": "活動",
    "read": "[카츠도-] katsudou",
    "kr": "action, activity",
    "icon": "🐶"
  },
  {
    "jp": "少年",
    "read": "[쇼우넨] shounen",
    "kr": "boys, juveniles",
    "icon": "📚"
  },
  {
    "jp": "ダンス",
    "read": "[단스] dansu",
    "kr": "dance",
    "icon": "🏫"
  },
  {
    "jp": "違い",
    "read": "[치가이] chigai",
    "kr": "difference, discrepancy",
    "icon": "📝"
  },
  {
    "jp": "週",
    "read": "[슈우] shuu",
    "kr": "week",
    "icon": "🏃"
  },
  {
    "jp": "だが",
    "read": "[다가] daga",
    "kr": "",
    "icon": "🗣️"
  },
  {
    "jp": "適用",
    "read": "[테키요우] tekiyou",
    "kr": "applying",
    "icon": "💭"
  },
  {
    "jp": "刈る",
    "read": "[카루] karu",
    "kr": "to cut (hair), to mow (grass), to harvest",
    "icon": "🌟"
  },
  {
    "jp": "批判",
    "read": "[히한] hihan",
    "kr": "criticism, judgement, comment",
    "icon": "💡"
  },
  {
    "jp": "場",
    "read": "[바] ba",
    "kr": "place, field (physics)",
    "icon": "✅"
  },
  {
    "jp": "何か",
    "read": "[나니카] nanika",
    "kr": "something",
    "icon": "🎌"
  },
  {
    "jp": "利口",
    "read": "[리코-] rikou",
    "kr": "clever, shrewd, bright, sharp, wise, intelligent",
    "icon": "☀️"
  },
  {
    "jp": "ちょうだい",
    "read": "[쵸우다이] choudai",
    "kr": "(1) please do for me (preceded by -te), (2) reception, being given, get",
    "icon": "🙏"
  },
  {
    "jp": "味方",
    "read": "[미카타] mikata",
    "kr": "friend, ally, supporter",
    "icon": "👋"
  },
  {
    "jp": "局",
    "read": "[쿄쿠] kyoku",
    "kr": "court lady, lady in waiting",
    "icon": "⭕"
  },
  {
    "jp": "恋人",
    "read": "[코이비토] koibito",
    "kr": "lover, sweetheart",
    "icon": "❌"
  },
  {
    "jp": "カー",
    "read": "[카-] kaa",
    "kr": "car",
    "icon": "🍣"
  },
  {
    "jp": "軍隊",
    "read": "[군타이] guntai",
    "kr": "army, troops",
    "icon": "🐱"
  },
  {
    "jp": "運",
    "read": "[운] un",
    "kr": "fortune, luck",
    "icon": "🐶"
  },
  {
    "jp": "責任",
    "read": "[세키닌] sekinin",
    "kr": "duty, responsibility",
    "icon": "📚"
  },
  {
    "jp": "両替",
    "read": "[료우가에] ryougae",
    "kr": "change, money exchange",
    "icon": "🏫"
  },
  {
    "jp": "伸びる",
    "read": "[노비루] nobiru",
    "kr": "to stretch, to extend, to make progress, to grow (beard, body height)",
    "icon": "📝"
  },
  {
    "jp": "平和",
    "read": "[헤-와] heiwa",
    "kr": "peace, harmony",
    "icon": "🏃"
  },
  {
    "jp": "サービス",
    "read": "[사-비스] saabisu",
    "kr": "(1) service, support system, (2) goods or services without charge",
    "icon": "🗣️"
  },
  {
    "jp": "伺う",
    "read": "[우카가우] ukagau",
    "kr": "(hon) to visit, to ask, to inquire",
    "icon": "💭"
  },
  {
    "jp": "経由",
    "read": "[케-유] keiyu",
    "kr": "go by the way, via",
    "icon": "🌟"
  },
  {
    "jp": "浴びる",
    "read": "[아비루] abiru",
    "kr": "to bathe, to bask in the sun, to shower",
    "icon": "💡"
  },
  {
    "jp": "売れる",
    "read": "[우레루] ureru",
    "kr": "to be sold",
    "icon": "✅"
  },
  {
    "jp": "国境",
    "read": "[콕쿄우] kokkyou",
    "kr": "national or state border",
    "icon": "🎌"
  },
  {
    "jp": "昼食",
    "read": "[츄우쇼쿠] chuushoku",
    "kr": "lunch, midday meal",
    "icon": "☀️"
  },
  {
    "jp": "クラシック",
    "read": "[쿠라식쿠] kurashikku",
    "kr": "classic(s)",
    "icon": "🙏"
  },
  {
    "jp": "弁当",
    "read": "[벤토-] bentou",
    "kr": "box lunch",
    "icon": "👋"
  },
  {
    "jp": "飽きる",
    "read": "[아키루] akiru",
    "kr": "to get tired of, to lose interest in, to have enough",
    "icon": "⭕"
  },
  {
    "jp": "手間",
    "read": "[테마] tema",
    "kr": "time, labour",
    "icon": "❌"
  },
  {
    "jp": "効く",
    "read": "[키쿠] kiku",
    "kr": "to be effective",
    "icon": "🍣"
  },
  {
    "jp": "逮捕",
    "read": "[타이호] taiho",
    "kr": "arrest, apprehension, capture",
    "icon": "🐱"
  },
  {
    "jp": "批評",
    "read": "[히효우] hihyou",
    "kr": "criticism, review, commentary",
    "icon": "🐶"
  },
  {
    "jp": "のんびり",
    "read": "[놈비리] nonbiri",
    "kr": "carefree, at leisure",
    "icon": "📚"
  },
  {
    "jp": "管",
    "read": "[칸] kan",
    "kr": "pipe, tube",
    "icon": "🏫"
  },
  {
    "jp": "回す",
    "read": "[마와스] mawasu",
    "kr": "to turn, to revolve",
    "icon": "📝"
  },
  {
    "jp": "板",
    "read": "[이타] ita",
    "kr": "board, plank",
    "icon": "🏃"
  },
  {
    "jp": "冒険",
    "read": "[보-켄] bouken",
    "kr": "risk, venture, adventure",
    "icon": "🗣️"
  },
  {
    "jp": "周囲",
    "read": "[슈우이] shuui",
    "kr": "surroundings, circumference, environs",
    "icon": "💭"
  },
  {
    "jp": "わがまま",
    "read": "[와가마마] wagamama",
    "kr": "selfishness, egoism, wilfulness, disobedience, whim",
    "icon": "🌟"
  },
  {
    "jp": "乗客",
    "read": "[죠우캬쿠] joukyaku",
    "kr": "passenger",
    "icon": "💡"
  },
  {
    "jp": "勝ち",
    "read": "[카치] kachi",
    "kr": "win, victory",
    "icon": "✅"
  },
  {
    "jp": "曜日",
    "read": "[요우비] youbi",
    "kr": "day of the week",
    "icon": "🎌"
  },
  {
    "jp": "関心",
    "read": "[칸신] kanshin",
    "kr": "concern, interest",
    "icon": "☀️"
  },
  {
    "jp": "棒",
    "read": "[보-] bou",
    "kr": "pole, rod, stick",
    "icon": "🙏"
  },
  {
    "jp": "更に",
    "read": "[사라니] sarani",
    "kr": "furthermore, again, after all, more and more, moreover",
    "icon": "👋"
  },
  {
    "jp": "いえ",
    "read": "[이에] ie",
    "kr": "TODO same as いいえ?",
    "icon": "⭕"
  },
  {
    "jp": "地球",
    "read": "[치큐우] chikyuu",
    "kr": "the earth",
    "icon": "❌"
  },
  {
    "jp": "担当",
    "read": "[탄토-] tantou",
    "kr": "(in) charge",
    "icon": "🍣"
  },
  {
    "jp": "直",
    "read": "[쵸쿠] choku",
    "kr": "earnestly, immediately, exactly",
    "icon": "🐱"
  },
  {
    "jp": "お昼",
    "read": "[오히루] ohiru",
    "kr": "lunch, noon",
    "icon": "🐶"
  },
  {
    "jp": "建設",
    "read": "[켄세츠] kensetsu",
    "kr": "construction, establishment",
    "icon": "📚"
  },
  {
    "jp": "頬",
    "read": "[호-] hoo",
    "kr": "cheek (of face)",
    "icon": "🏫"
  },
  {
    "jp": "人気",
    "read": "[닝키] ninki",
    "kr": "sign of life",
    "icon": "📝"
  },
  {
    "jp": "消防",
    "read": "[쇼우보-] shoubou",
    "kr": "fire fighting, fire department",
    "icon": "🏃"
  },
  {
    "jp": "やや",
    "read": "[야야] yaya",
    "kr": "a little, partially, somewhat, a short time, a while",
    "icon": "🗣️"
  },
  {
    "jp": "いわゆる",
    "read": "[이와유루] iwayuru",
    "kr": "the so-called, so to speak",
    "icon": "💭"
  },
  {
    "jp": "すてき",
    "read": "[스테키] suteki",
    "kr": "lovely, dreamy, beautiful, great",
    "icon": "🌟"
  },
  {
    "jp": "単に",
    "read": "[탄니] tanni",
    "kr": "simply, merely, only, solely",
    "icon": "💡"
  },
  {
    "jp": "コード",
    "read": "[코-도] koodo",
    "kr": "code, cord, chord",
    "icon": "✅"
  },
  {
    "jp": "値段",
    "read": "[네단] nedan",
    "kr": "price, cost",
    "icon": "🎌"
  },
  {
    "jp": "諦める",
    "read": "[아키라메루] akirameru",
    "kr": "to give up, to abandon",
    "icon": "☀️"
  },
  {
    "jp": "様々",
    "read": "[사마자마] samazama",
    "kr": "varied, various",
    "icon": "🙏"
  },
  {
    "jp": "生地",
    "read": "[키지] kiji",
    "kr": "birthplace",
    "icon": "👋"
  },
  {
    "jp": "欠ける",
    "read": "[카케루] kakeru",
    "kr": "to be lacking",
    "icon": "⭕"
  },
  {
    "jp": "なお",
    "read": "[나오] nao",
    "kr": "straight, mischief, ordinary, common",
    "icon": "❌"
  },
  {
    "jp": "容易",
    "read": "[요우이] youi",
    "kr": "easy, simple, plain",
    "icon": "🍣"
  },
  {
    "jp": "基づく",
    "read": "[모토즈쿠] motozuku",
    "kr": "to be grounded on, to be based on, to be due to, to originate from",
    "icon": "🐱"
  },
  {
    "jp": "事情",
    "read": "[지죠우] jijou",
    "kr": "circumstances, consideration, conditions, situation, reasons",
    "icon": "🐶"
  },
  {
    "jp": "一時",
    "read": "[이치지] ichiji",
    "kr": "moment, time",
    "icon": "📚"
  },
  {
    "jp": "ね",
    "read": "[네] ne",
    "kr": "value, price, cost, worth, merit",
    "icon": "🏫"
  },
  {
    "jp": "文明",
    "read": "[붐메-] bunmei",
    "kr": "civilization, culture",
    "icon": "📝"
  },
  {
    "jp": "貸し",
    "read": "[카시] kashi",
    "kr": "loan, lending",
    "icon": "🏃"
  },
  {
    "jp": "ボール",
    "read": "[보-루] booru",
    "kr": "ball, bowl",
    "icon": "🗣️"
  },
  {
    "jp": "ここ",
    "read": "[코코] koko",
    "kr": "here",
    "icon": "💭"
  },
  {
    "jp": "要するに",
    "read": "[요우스루니] yousuruni",
    "kr": "in a word, after all, the point is .., in short ..",
    "icon": "🌟"
  },
  {
    "jp": "実験",
    "read": "[직켄] jikken",
    "kr": "experiment",
    "icon": "💡"
  },
  {
    "jp": "徹底",
    "read": "[텟테-] tettei",
    "kr": "thoroughness, completeness",
    "icon": "✅"
  },
  {
    "jp": "尊敬",
    "read": "[송케-] sonkei",
    "kr": "respect, esteem, reverence, honour",
    "icon": "🎌"
  },
  {
    "jp": "逆らう",
    "read": "[사카라우] sakarau",
    "kr": "to go against, to oppose, to disobey, to defy",
    "icon": "☀️"
  },
  {
    "jp": "心臓",
    "read": "[신조-] shinzou",
    "kr": "heart",
    "icon": "🙏"
  },
  {
    "jp": "完全",
    "read": "[칸젠] kanzen",
    "kr": "perfection, completeness",
    "icon": "👋"
  },
  {
    "jp": "家具",
    "read": "[카구] kagu",
    "kr": "furniture",
    "icon": "⭕"
  },
  {
    "jp": "試し",
    "read": "[타메시] tameshi",
    "kr": "trial, test",
    "icon": "❌"
  },
  {
    "jp": "才能",
    "read": "[사이노-] sainou",
    "kr": "talent, ability",
    "icon": "🍣"
  },
  {
    "jp": "有効",
    "read": "[유우코-] yuukou",
    "kr": "validity, availability, effectiveness",
    "icon": "🐱"
  },
  {
    "jp": "笑い",
    "read": "[와라이] warai",
    "kr": "laugh, laughter, smile",
    "icon": "🐶"
  },
  {
    "jp": "大家",
    "read": "[오-야] ooya",
    "kr": "rich family, distinguished family",
    "icon": "📚"
  },
  {
    "jp": "貧しい",
    "read": "[마즈시-] mazushii",
    "kr": "poor, needy",
    "icon": "🏫"
  },
  {
    "jp": "突然",
    "read": "[토츠젠] totsuzen",
    "kr": "abruptly, suddenly, unexpectedly, all at once",
    "icon": "📝"
  },
  {
    "jp": "指す",
    "read": "[사스] sasu",
    "kr": "to point, to put up umbrella, to play",
    "icon": "🏃"
  },
  {
    "jp": "券",
    "read": "[켄] ken",
    "kr": "ticket, coupon, bond, certificate",
    "icon": "🗣️"
  },
  {
    "jp": "結ぶ",
    "read": "[무스부] musubu",
    "kr": "to tie, to bind, to link",
    "icon": "💭"
  },
  {
    "jp": "たびたび",
    "read": "[타비타비] tabitabi",
    "kr": "often, repeatedly, frequently",
    "icon": "🌟"
  },
  {
    "jp": "遂に",
    "read": "[츠이니] tsuini",
    "kr": "finally, at last",
    "icon": "💡"
  },
  {
    "jp": "占める",
    "read": "[시메루] shimeru",
    "kr": "(1) to comprise, to account for, to make up (of), (2) to hold, to occupy",
    "icon": "✅"
  },
  {
    "jp": "墓",
    "read": "[하카] haka",
    "kr": "grave, tomb",
    "icon": "🎌"
  },
  {
    "jp": "選択",
    "read": "[센타쿠] sentaku",
    "kr": "selection, choice",
    "icon": "☀️"
  },
  {
    "jp": "気の毒",
    "read": "[키노도쿠] kinodoku",
    "kr": "pitiful, a pity",
    "icon": "🙏"
  },
  {
    "jp": "内",
    "read": "[나이] nai",
    "kr": "inside",
    "icon": "👋"
  },
  {
    "jp": "組",
    "read": "[쿠미] kumi",
    "kr": "class, group, team, set",
    "icon": "⭕"
  },
  {
    "jp": "まさに",
    "read": "[마사니] masani",
    "kr": "correctly, surely",
    "icon": "❌"
  },
  {
    "jp": "任せる",
    "read": "[마카세루] makaseru",
    "kr": "to entrust to another, to leave to",
    "icon": "🍣"
  },
  {
    "jp": "迷子",
    "read": "[마이고] maigo",
    "kr": "lost (stray) child",
    "icon": "🐱"
  },
  {
    "jp": "注目",
    "read": "[츄우모쿠] chuumoku",
    "kr": "notice, attention, observation",
    "icon": "🐶"
  },
  {
    "jp": "方",
    "read": "[호-] hou",
    "kr": "side",
    "icon": "📚"
  },
  {
    "jp": "タイプライター",
    "read": "[타이푸라이타-] taipuraitaa",
    "kr": "typewriter",
    "icon": "🏫"
  },
  {
    "jp": "うなる",
    "read": "[우나루] unaru",
    "kr": "to groan, to moan",
    "icon": "📝"
  },
  {
    "jp": "預ける",
    "read": "[아즈케루] azukeru",
    "kr": "to give into custody, to entrust, to deposit",
    "icon": "🏃"
  },
  {
    "jp": "地区",
    "read": "[치쿠] chiku",
    "kr": "district, section, sector",
    "icon": "🗣️"
  },
  {
    "jp": "人工",
    "read": "[징코-] jinkou",
    "kr": "artificial, manmade, human work, human skill, artificiality",
    "icon": "💭"
  },
  {
    "jp": "火曜",
    "read": "[카요우] kayou",
    "kr": "(abbr) Tuesday",
    "icon": "🌟"
  },
  {
    "jp": "俳優",
    "read": "[하이유우] haiyuu",
    "kr": "actor, actress, player, performer",
    "icon": "💡"
  },
  {
    "jp": "歌手",
    "read": "[카슈] kashu",
    "kr": "singer",
    "icon": "✅"
  },
  {
    "jp": "特徴",
    "read": "[토쿠쵸우] tokuchou",
    "kr": "feature, characteristic",
    "icon": "🎌"
  },
  {
    "jp": "銀",
    "read": "[긴] gin",
    "kr": "(1) silver, silver coin, silver paint",
    "icon": "☀️"
  },
  {
    "jp": "進歩",
    "read": "[심포] shinpo",
    "kr": "progress, development",
    "icon": "🙏"
  },
  {
    "jp": "雰囲気",
    "read": "[훈이키] fun'iki",
    "kr": "atmosphere (e.g. musical), mood, ambience",
    "icon": "👋"
  },
  {
    "jp": "そう",
    "read": "[소-] sou",
    "kr": "so",
    "icon": "⭕"
  },
  {
    "jp": "嫁",
    "read": "[요메] yome",
    "kr": "bride, daughter-in-law",
    "icon": "❌"
  },
  {
    "jp": "次々",
    "read": "[츠기츠기] tsugitsugi",
    "kr": "in succession, one by one",
    "icon": "🍣"
  },
  {
    "jp": "スター",
    "read": "[스타-] sutaa",
    "kr": "star",
    "icon": "🐱"
  },
  {
    "jp": "順",
    "read": "[쥰] jun",
    "kr": "order, turn",
    "icon": "🐶"
  },
  {
    "jp": "承認",
    "read": "[쇼우닌] shounin",
    "kr": "recognition, acknowledgement, approval, consent, agreement",
    "icon": "📚"
  },
  {
    "jp": "向ける",
    "read": "[무케루] mukeru",
    "kr": "to turn towards, to point",
    "icon": "🏫"
  },
  {
    "jp": "豆",
    "read": "[마메] mame",
    "kr": "beans, peas",
    "icon": "📝"
  },
  {
    "jp": "スケート",
    "read": "[스케-토] sukeeto",
    "kr": "skate(s), skating",
    "icon": "🏃"
  },
  {
    "jp": "留める",
    "read": "[토도메루] todomeru",
    "kr": "to fasten, to turn off, to detain",
    "icon": "🗣️"
  },
  {
    "jp": "合格",
    "read": "[고-카쿠] goukaku",
    "kr": "success, passing (e.g. exam), eligibility",
    "icon": "💭"
  },
  {
    "jp": "以前",
    "read": "[이젠] izen",
    "kr": "ago, since, before, previous",
    "icon": "🌟"
  },
  {
    "jp": "筋肉",
    "read": "[킨니쿠] kinniku",
    "kr": "muscle, sinew",
    "icon": "💡"
  },
  {
    "jp": "下",
    "read": "[시타] shita",
    "kr": "under, below, beneath",
    "icon": "✅"
  },
  {
    "jp": "暮らし",
    "read": "[쿠라시] kurashi",
    "kr": "living, livelihood, subsistence, circumstances",
    "icon": "🎌"
  },
  {
    "jp": "パスポート",
    "read": "[파스포-토] pasupooto",
    "kr": "passport",
    "icon": "☀️"
  },
  {
    "jp": "いらいら",
    "read": "[이라이라] iraira",
    "kr": "getting nervous, irritation",
    "icon": "🙏"
  },
  {
    "jp": "方法",
    "read": "[호-호-] houhou",
    "kr": "method, manner, way, means, technique",
    "icon": "👋"
  },
  {
    "jp": "生産",
    "read": "[세-산] seisan",
    "kr": "production, manufacture",
    "icon": "⭕"
  },
  {
    "jp": "居る",
    "read": "[이루] iru",
    "kr": "to be (animate), to be, to exist",
    "icon": "❌"
  },
  {
    "jp": "次第",
    "read": "[시다이] shidai",
    "kr": "(1) order, precedence, (2) circumstances, (3) immediate(ly)",
    "icon": "🍣"
  },
  {
    "jp": "チーム",
    "read": "[치-무] chiimu",
    "kr": "team",
    "icon": "🐱"
  },
  {
    "jp": "通す",
    "read": "[토-스] tousu",
    "kr": "to let pass, to overlook, to continue",
    "icon": "🐶"
  },
  {
    "jp": "それと",
    "read": "[소레토] soreto",
    "kr": "",
    "icon": "📚"
  },
  {
    "jp": "ワイン",
    "read": "[와인] wain",
    "kr": "wine",
    "icon": "🏫"
  },
  {
    "jp": "家事",
    "read": "[카지] kaji",
    "kr": "housework, domestic chores",
    "icon": "📝"
  },
  {
    "jp": "結局",
    "read": "[켁쿄쿠] kekkyoku",
    "kr": "after all, eventually",
    "icon": "🏃"
  },
  {
    "jp": "身長",
    "read": "[신쵸우] shinchou",
    "kr": "height (of body), stature",
    "icon": "🗣️"
  },
  {
    "jp": "流れる",
    "read": "[나가레루] nagareru",
    "kr": "to stream, to flow, to run (ink), to be washed away",
    "icon": "💭"
  },
  {
    "jp": "計画",
    "read": "[케-카쿠] keikaku",
    "kr": "plan, project, schedule, scheme, program",
    "icon": "🌟"
  },
  {
    "jp": "物理",
    "read": "[부츠리] butsuri",
    "kr": "physics",
    "icon": "💡"
  },
  {
    "jp": "ヨーロッパ",
    "read": "[요-롭파] yooroppa",
    "kr": "Europe",
    "icon": "✅"
  },
  {
    "jp": "教授",
    "read": "[쿄우쥬] kyouju",
    "kr": "teaching, instruction, professor",
    "icon": "🎌"
  },
  {
    "jp": "書斎",
    "read": "[쇼사이] shosai",
    "kr": "study",
    "icon": "☀️"
  },
  {
    "jp": "避ける",
    "read": "[사케루] sakeru",
    "kr": "(1) to avoid (physical contact ), (2) to ward off, to avert",
    "icon": "🙏"
  },
  {
    "jp": "飛行",
    "read": "[히코-] hikou",
    "kr": "aviation",
    "icon": "👋"
  },
  {
    "jp": "必死",
    "read": "[힛시] hisshi",
    "kr": "inevitable death, desperation, frantic, inevitable result",
    "icon": "⭕"
  },
  {
    "jp": "カード",
    "read": "[카-도] kaado",
    "kr": "card, curd",
    "icon": "❌"
  },
  {
    "jp": "満足",
    "read": "[만조쿠] manzoku",
    "kr": "satisfaction",
    "icon": "🍣"
  },
  {
    "jp": "誤り",
    "read": "[아야마리] ayamari",
    "kr": "error",
    "icon": "🐱"
  },
  {
    "jp": "釣",
    "read": "[츠리] tsuri",
    "kr": "",
    "icon": "🐶"
  },
  {
    "jp": "奥",
    "read": "[오쿠] oku",
    "kr": "interior, inner part",
    "icon": "📚"
  },
  {
    "jp": "地下",
    "read": "[치카] chika",
    "kr": "basement, underground",
    "icon": "🏫"
  },
  {
    "jp": "文句",
    "read": "[몽쿠] monku",
    "kr": "phrase, complaint",
    "icon": "📝"
  },
  {
    "jp": "食卓",
    "read": "[쇼쿠타쿠] shokutaku",
    "kr": "dining table",
    "icon": "🏃"
  },
  {
    "jp": "情報",
    "read": "[죠우호-] jouhou",
    "kr": "information, (military) intelligence",
    "icon": "🗣️"
  },
  {
    "jp": "泳ぎ",
    "read": "[오요기] oyogi",
    "kr": "swimming",
    "icon": "💭"
  },
  {
    "jp": "泉",
    "read": "[이즈미] izumi",
    "kr": "spring, fountain",
    "icon": "🌟"
  },
  {
    "jp": "観光",
    "read": "[캉코-] kankou",
    "kr": "sightseeing",
    "icon": "💡"
  },
  {
    "jp": "航空",
    "read": "[코-쿠-] koukuu",
    "kr": "aviation, flying",
    "icon": "✅"
  },
  {
    "jp": "嘘",
    "read": "[우소] uso",
    "kr": "lie, falsehood, incorrect fact, inappropriate",
    "icon": "🎌"
  },
  {
    "jp": "日付",
    "read": "[히즈케] hizuke",
    "kr": "date, dating",
    "icon": "☀️"
  },
  {
    "jp": "物語",
    "read": "[모노가타리] monogatari",
    "kr": "tale, story, legend",
    "icon": "🙏"
  },
  {
    "jp": "食品",
    "read": "[쇼쿠힌] shokuhin",
    "kr": "commodity, foodstuff",
    "icon": "👋"
  },
  {
    "jp": "結果",
    "read": "[켁카] kekka",
    "kr": "result, consequence",
    "icon": "⭕"
  },
  {
    "jp": "騒ぎ",
    "read": "[사와기] sawagi",
    "kr": "uproar, disturbance",
    "icon": "❌"
  },
  {
    "jp": "取れる",
    "read": "[토레루] toreru",
    "kr": "to come off, to be taken off, to be removed",
    "icon": "🍣"
  },
  {
    "jp": "語学",
    "read": "[고가쿠] gogaku",
    "kr": "language study",
    "icon": "🐱"
  },
  {
    "jp": "申し訳",
    "read": "[모-시와케] moushiwake",
    "kr": "apology, excuse",
    "icon": "🐶"
  },
  {
    "jp": "孫",
    "read": "[마고] mago",
    "kr": "grandchild",
    "icon": "📚"
  },
  {
    "jp": "肌",
    "read": "[하다] hada",
    "kr": "skin",
    "icon": "🏫"
  },
  {
    "jp": "尤も",
    "read": "[못토모] mottomo",
    "kr": "quite right, plausible, natural, but then, although",
    "icon": "📝"
  },
  {
    "jp": "教師",
    "read": "[쿄우시] kyoushi",
    "kr": "teacher (classroom)",
    "icon": "🏃"
  },
  {
    "jp": "裁判",
    "read": "[사이반] saiban",
    "kr": "trial, judgement",
    "icon": "🗣️"
  },
  {
    "jp": "心配",
    "read": "[심파이] shinpai",
    "kr": "worry, concern, anxiety, care",
    "icon": "💭"
  },
  {
    "jp": "小麦",
    "read": "[코무기] komugi",
    "kr": "wheat",
    "icon": "🌟"
  },
  {
    "jp": "混雑",
    "read": "[콘자츠] konzatsu",
    "kr": "confusion, congestion",
    "icon": "💡"
  },
  {
    "jp": "余り",
    "read": "[아마리] amari",
    "kr": "not very (used as adverb), not much",
    "icon": "✅"
  },
  {
    "jp": "岩",
    "read": "[이와] iwa",
    "kr": "rock, crag",
    "icon": "🎌"
  },
  {
    "jp": "月曜",
    "read": "[게츠요우] getsuyou",
    "kr": "Monday",
    "icon": "☀️"
  },
  {
    "jp": "述べる",
    "read": "[노베루] noberu",
    "kr": "to state, to express, to mention",
    "icon": "🙏"
  },
  {
    "jp": "前進",
    "read": "[젠신] zenshin",
    "kr": "advance, drive, progress",
    "icon": "👋"
  },
  {
    "jp": "資本",
    "read": "[시혼] shihon",
    "kr": "funds, capital",
    "icon": "⭕"
  },
  {
    "jp": "演説",
    "read": "[엔제츠] enzetsu",
    "kr": "speech, address",
    "icon": "❌"
  },
  {
    "jp": "見事",
    "read": "[미고토] migoto",
    "kr": "splendid, magnificent, beautiful, admirable",
    "icon": "🍣"
  },
  {
    "jp": "論じる",
    "read": "[론지루] ronjiru",
    "kr": "to argue, to discuss, to debate",
    "icon": "🐱"
  },
  {
    "jp": "再び",
    "read": "[후타타비] futatabi",
    "kr": "again, once more, a second time",
    "icon": "🐶"
  },
  {
    "jp": "万一",
    "read": "[만이치] man'ichi",
    "kr": "by some chance, by some possibility, if by any chance",
    "icon": "📚"
  },
  {
    "jp": "常に",
    "read": "[츠네니] tsuneni",
    "kr": "always, constantly",
    "icon": "🏫"
  },
  {
    "jp": "プロ",
    "read": "[푸로] puro",
    "kr": "professional",
    "icon": "📝"
  },
  {
    "jp": "飼う",
    "read": "[카우] kau",
    "kr": "to keep, to raise, to feed",
    "icon": "🏃"
  },
  {
    "jp": "狂う",
    "read": "[쿠루-] kuruu",
    "kr": "to go mad, to get out of order",
    "icon": "🗣️"
  },
  {
    "jp": "地平線",
    "read": "[치헤-센] chiheisen",
    "kr": "horizon",
    "icon": "💭"
  },
  {
    "jp": "この",
    "read": "[코노] kono",
    "kr": "this",
    "icon": "🌟"
  },
  {
    "jp": "医師",
    "read": "[이시] ishi",
    "kr": "doctor, physician",
    "icon": "💡"
  },
  {
    "jp": "身体",
    "read": "[신타이] shintai",
    "kr": "the body",
    "icon": "✅"
  },
  {
    "jp": "出版",
    "read": "[슙판] shuppan",
    "kr": "publication",
    "icon": "🎌"
  },
  {
    "jp": "技師",
    "read": "[기시] gishi",
    "kr": "engineer, technician",
    "icon": "☀️"
  },
  {
    "jp": "精々",
    "read": "[세-제-] seizei",
    "kr": "at the most, at best, to the utmost, as much (far) as possible",
    "icon": "🙏"
  },
  {
    "jp": "だから",
    "read": "[다카라] dakara",
    "kr": "so, therefore",
    "icon": "👋"
  },
  {
    "jp": "大抵",
    "read": "[타이테-] taitei",
    "kr": "usually, generally",
    "icon": "⭕"
  },
  {
    "jp": "区別",
    "read": "[쿠베츠] kubetsu",
    "kr": "distinction, differentiation, classification",
    "icon": "❌"
  },
  {
    "jp": "博物館",
    "read": "[하쿠부츠칸] hakubutsukan",
    "kr": "museum",
    "icon": "🍣"
  },
  {
    "jp": "目的",
    "read": "[모쿠테키] mokuteki",
    "kr": "purpose, goal, aim, objective, intention",
    "icon": "🐱"
  },
  {
    "jp": "予算",
    "read": "[요산] yosan",
    "kr": "estimate, budget",
    "icon": "🐶"
  },
  {
    "jp": "我慢",
    "read": "[가만] gaman",
    "kr": "patience, endurance, perseverance",
    "icon": "📚"
  },
  {
    "jp": "底",
    "read": "[소코] soko",
    "kr": "bottom, sole",
    "icon": "🏫"
  },
  {
    "jp": "あと",
    "read": "[아토] ato",
    "kr": "(1) trace, tracks, (2) remains, ruins, (3) scar",
    "icon": "📝"
  },
  {
    "jp": "気候",
    "read": "[키코-] kikou",
    "kr": "climate",
    "icon": "🏃"
  },
  {
    "jp": "恐ろしい",
    "read": "[오소로시-] osoroshii",
    "kr": "terrible, dreadful",
    "icon": "🗣️"
  },
  {
    "jp": "風呂",
    "read": "[후로] furo",
    "kr": "bath",
    "icon": "💭"
  },
  {
    "jp": "今日",
    "read": "[쿄우] kyou",
    "kr": "today, this day",
    "icon": "🌟"
  },
  {
    "jp": "制度",
    "read": "[세-도] seido",
    "kr": "system, institution, organization",
    "icon": "💡"
  },
  {
    "jp": "牛",
    "read": "[우시] ushi",
    "kr": "cattle, cow",
    "icon": "✅"
  },
  {
    "jp": "栄養",
    "read": "[에-요우] eiyou",
    "kr": "nutrition, nourishment",
    "icon": "🎌"
  },
  {
    "jp": "尻",
    "read": "[시리] shiri",
    "kr": "buttocks, bottom",
    "icon": "☀️"
  },
  {
    "jp": "跡",
    "read": "[아토] ato",
    "kr": "(1) trace, tracks, mark, sign, (2) remains, ruins, (3) scar",
    "icon": "🙏"
  },
  {
    "jp": "入場",
    "read": "[뉴우죠우] nyuujou",
    "kr": "entrance, admission, entering",
    "icon": "👋"
  },
  {
    "jp": "唯一",
    "read": "[유이-츠] yuiitsu",
    "kr": "only, sole, unique",
    "icon": "⭕"
  },
  {
    "jp": "幸せ",
    "read": "[시아와세] shiawase",
    "kr": "happiness, good fortune, luck, blessing",
    "icon": "❌"
  },
  {
    "jp": "書類",
    "read": "[쇼루이] shorui",
    "kr": "documents, official papers",
    "icon": "🍣"
  },
  {
    "jp": "だって",
    "read": "[닷테] datte",
    "kr": "but, because, even, also, too",
    "icon": "🐱"
  },
  {
    "jp": "喧嘩",
    "read": "[켕카] kenka",
    "kr": "quarrel, (drunken) brawl, failure",
    "icon": "🐶"
  },
  {
    "jp": "成る",
    "read": "[나루] naru",
    "kr": "to become",
    "icon": "📚"
  },
  {
    "jp": "骨折",
    "read": "[콧세츠] kossetsu",
    "kr": "bone fracture",
    "icon": "🏫"
  },
  {
    "jp": "オーバー",
    "read": "[오-바-] oobaa",
    "kr": "(1) overcoat, (2) over",
    "icon": "📝"
  },
  {
    "jp": "教科書",
    "read": "[쿄우카쇼] kyoukasho",
    "kr": "text book",
    "icon": "🏃"
  },
  {
    "jp": "説",
    "read": "[세츠] setsu",
    "kr": "theory",
    "icon": "🗣️"
  },
  {
    "jp": "相当",
    "read": "[소-토-] soutou",
    "kr": "suitable, fair, tolerable, proper",
    "icon": "💭"
  },
  {
    "jp": "全員",
    "read": "[젠-은] zen'in",
    "kr": "all members (unanimity), all hands, the whole crew",
    "icon": "🌟"
  },
  {
    "jp": "比較",
    "read": "[히카쿠] hikaku",
    "kr": "comparison",
    "icon": "💡"
  },
  {
    "jp": "契約",
    "read": "[케-야쿠] keiyaku",
    "kr": "contract, compact, agreement",
    "icon": "✅"
  },
  {
    "jp": "より",
    "read": "[요리] yori",
    "kr": "twist, ply",
    "icon": "🎌"
  },
  {
    "jp": "気付く",
    "read": "[키즈쿠] kizuku",
    "kr": "to notice, to recognize, to become aware of",
    "icon": "☀️"
  },
  {
    "jp": "鍵",
    "read": "[카기] kagi",
    "kr": "key",
    "icon": "🙏"
  },
  {
    "jp": "しかも",
    "read": "[시카모] shikamo",
    "kr": "moreover, furthermore, nevertheless, and yet",
    "icon": "👋"
  },
  {
    "jp": "解く",
    "read": "[토쿠] toku",
    "kr": "to unfasten",
    "icon": "⭕"
  },
  {
    "jp": "境",
    "read": "[사카이] sakai",
    "kr": "border, boundary, mental state",
    "icon": "❌"
  },
  {
    "jp": "場面",
    "read": "[바멘] bamen",
    "kr": "scene, setting (e.g. of novel)",
    "icon": "🍣"
  },
  {
    "jp": "環境",
    "read": "[캉쿄우] kankyou",
    "kr": "environment, circumstance",
    "icon": "🐱"
  },
  {
    "jp": "気温",
    "read": "[키온] kion",
    "kr": "temperature",
    "icon": "🐶"
  },
  {
    "jp": "実は",
    "read": "[지츠하] jitsuha",
    "kr": "as a matter of fact, by the way",
    "icon": "📚"
  },
  {
    "jp": "物質",
    "read": "[붓시츠] busshitsu",
    "kr": "material, substance",
    "icon": "🏫"
  },
  {
    "jp": "家賃",
    "read": "[야친] yachin",
    "kr": "rent",
    "icon": "📝"
  },
  {
    "jp": "おや",
    "read": "[오야] oya",
    "kr": "parents",
    "icon": "🏃"
  },
  {
    "jp": "回り",
    "read": "[마와리] mawari",
    "kr": "circumference, surroundings, circulation",
    "icon": "🗣️"
  },
  {
    "jp": "全て",
    "read": "[스베테] subete",
    "kr": "all, the whole, entirely, in general, wholly",
    "icon": "💭"
  },
  {
    "jp": "不平",
    "read": "[후헤-] fuhei",
    "kr": "complaint, discontent, dissatisfaction",
    "icon": "🌟"
  },
  {
    "jp": "硬貨",
    "read": "[코-카] kouka",
    "kr": "coin",
    "icon": "💡"
  },
  {
    "jp": "援助",
    "read": "[엔죠] enjo",
    "kr": "assistance, aid, support",
    "icon": "✅"
  },
  {
    "jp": "工場",
    "read": "[코-죠우] koujou",
    "kr": "factory, plant, mill, workshop",
    "icon": "🎌"
  },
  {
    "jp": "偶々",
    "read": "[타마타마] tamatama",
    "kr": "casually, unexpectedly, accidentally, by chance",
    "icon": "☀️"
  },
  {
    "jp": "永久",
    "read": "[에-큐우] eikyuu",
    "kr": "eternity, perpetuity, immortality",
    "icon": "🙏"
  },
  {
    "jp": "需要",
    "read": "[쥬요우] juyou",
    "kr": "demand, request",
    "icon": "👋"
  },
  {
    "jp": "デート",
    "read": "[데-토] deeto",
    "kr": "date, go on a date",
    "icon": "⭕"
  },
  {
    "jp": "あらゆる",
    "read": "[아라유루] arayuru",
    "kr": "all, every",
    "icon": "❌"
  },
  {
    "jp": "立派",
    "read": "[립파] rippa",
    "kr": "splendid, fine, handsome, elegant, imposing, prominent, legal, legitimate",
    "icon": "🍣"
  },
  {
    "jp": "発明",
    "read": "[하츠메-] hatsumei",
    "kr": "invention",
    "icon": "🐱"
  },
  {
    "jp": "火災",
    "read": "[카사이] kasai",
    "kr": "conflagration, fire",
    "icon": "🐶"
  },
  {
    "jp": "酸素",
    "read": "[산소] sanso",
    "kr": "oxygen",
    "icon": "📚"
  },
  {
    "jp": "質",
    "read": "[시츠] shitsu",
    "kr": "quality, nature (of person)",
    "icon": "🏫"
  },
  {
    "jp": "どれ",
    "read": "[도레] dore",
    "kr": "well, now, let me see, which (of three or more)",
    "icon": "📝"
  },
  {
    "jp": "諺",
    "read": "[코토와자] kotowaza",
    "kr": "proverb, maxim",
    "icon": "🏃"
  },
  {
    "jp": "責める",
    "read": "[세메루] semeru",
    "kr": "to condemn, to blame, to criticize",
    "icon": "🗣️"
  },
  {
    "jp": "開始",
    "read": "[카이시] kaishi",
    "kr": "start, commencement, beginning",
    "icon": "💭"
  },
  {
    "jp": "幸い",
    "read": "[사이와이] saiwai",
    "kr": "happiness, blessedness",
    "icon": "🌟"
  },
  {
    "jp": "老い",
    "read": "[오이] oi",
    "kr": "old age, old person, the old, the aged",
    "icon": "💡"
  },
  {
    "jp": "招く",
    "read": "[마네쿠] maneku",
    "kr": "to invite",
    "icon": "✅"
  },
  {
    "jp": "王",
    "read": "[오-] ou",
    "kr": "king, ruler, sovereign, monarch",
    "icon": "🎌"
  },
  {
    "jp": "済ませる",
    "read": "[스마세루] sumaseru",
    "kr": "to be finished",
    "icon": "☀️"
  },
  {
    "jp": "田",
    "read": "[타] ta",
    "kr": "rice field",
    "icon": "🙏"
  },
  {
    "jp": "砂漠",
    "read": "[사바쿠] sabaku",
    "kr": "desert",
    "icon": "👋"
  },
  {
    "jp": "支払",
    "read": "[시하라이] shiharai",
    "kr": "payment",
    "icon": "⭕"
  },
  {
    "jp": "大した",
    "read": "[타이시타] taishita",
    "kr": "considerable, great, important, significant, a big deal",
    "icon": "❌"
  },
  {
    "jp": "繰り返す",
    "read": "[쿠리카에스] kurikaesu",
    "kr": "to repeat, to do something over again",
    "icon": "🍣"
  },
  {
    "jp": "どうしても",
    "read": "[도-시테모] doushitemo",
    "kr": "by all means, at any cost, no matter what",
    "icon": "🐱"
  },
  {
    "jp": "エネルギー",
    "read": "[에네루기-] enerugii",
    "kr": "(n) energy (de: Energie)",
    "icon": "🐶"
  },
  {
    "jp": "頭痛",
    "read": "[즈츠우] zutsuu",
    "kr": "headache",
    "icon": "📚"
  },
  {
    "jp": "どうか",
    "read": "[도-카] douka",
    "kr": "copper coin",
    "icon": "🏫"
  },
  {
    "jp": "彼等",
    "read": "[카레라] karera",
    "kr": "they (usually male)",
    "icon": "📝"
  },
  {
    "jp": "暮らす",
    "read": "[쿠라스] kurasu",
    "kr": "to live, to get along",
    "icon": "🏃"
  },
  {
    "jp": "真っ赤",
    "read": "[막카] makka",
    "kr": "deep red, flushed (of face)",
    "icon": "🗣️"
  },
  {
    "jp": "体温",
    "read": "[타이온] taion",
    "kr": "temperature (body)",
    "icon": "💭"
  },
  {
    "jp": "悪口",
    "read": "[와루쿠치] warukuchi",
    "kr": "abuse, insult, slander, evil speaking",
    "icon": "🌟"
  },
  {
    "jp": "通学",
    "read": "[츠우가쿠] tsuugaku",
    "kr": "commuting to school",
    "icon": "💡"
  },
  {
    "jp": "息",
    "read": "[이키] iki",
    "kr": "breath, tone",
    "icon": "✅"
  },
  {
    "jp": "アイロン",
    "read": "[아이론] airon",
    "kr": "(electric) iron",
    "icon": "🎌"
  },
  {
    "jp": "降ろす",
    "read": "[후로스] furosu",
    "kr": "to take down, to launch, to drop",
    "icon": "☀️"
  },
  {
    "jp": "抵抗",
    "read": "[테-코-] teikou",
    "kr": "electrical resistance, resistance, opposition",
    "icon": "🙏"
  },
  {
    "jp": "ハンサム",
    "read": "[한사무] hansamu",
    "kr": "handsome",
    "icon": "👋"
  },
  {
    "jp": "台",
    "read": "[다이] dai",
    "kr": "stand, rack, table, support",
    "icon": "⭕"
  },
  {
    "jp": "ゲーム",
    "read": "[게-무] geemu",
    "kr": "game",
    "icon": "❌"
  },
  {
    "jp": "同一",
    "read": "[도-이츠] douitsu",
    "kr": "identity, sameness, similarity",
    "icon": "🍣"
  },
  {
    "jp": "唯",
    "read": "[타다] tada",
    "kr": "free of charge, mere, sole, only, usual, common",
    "icon": "🐱"
  },
  {
    "jp": "陸",
    "read": "[리쿠] riku",
    "kr": "six (used in legal documents)",
    "icon": "🐶"
  },
  {
    "jp": "青年",
    "read": "[세-넨] seinen",
    "kr": "youth, young man",
    "icon": "📚"
  },
  {
    "jp": "流す",
    "read": "[나가스] nagasu",
    "kr": "to drain, to float, to shed (blood, tears), to cruise (e.g. taxi)",
    "icon": "🏫"
  },
  {
    "jp": "誤解",
    "read": "[고카이] gokai",
    "kr": "misunderstanding",
    "icon": "📝"
  },
  {
    "jp": "換える",
    "read": "[카에루] kaeru",
    "kr": "to exchange, to interchange, to substitute, to replace",
    "icon": "🏃"
  },
  {
    "jp": "代理",
    "read": "[다이리] dairi",
    "kr": "representation, agency, proxy, deputy, agent",
    "icon": "🗣️"
  },
  {
    "jp": "川",
    "read": "[카와] kawa",
    "kr": "river",
    "icon": "💭"
  },
  {
    "jp": "出会い",
    "read": "[데아이] deai",
    "kr": "meeting, rendezvous, encounter",
    "icon": "🌟"
  },
  {
    "jp": "意外",
    "read": "[이가이] igai",
    "kr": "unexpected, surprising",
    "icon": "💡"
  },
  {
    "jp": "玉",
    "read": "[타마] tama",
    "kr": "ball, sphere, coin",
    "icon": "✅"
  },
  {
    "jp": "愛",
    "read": "[아이] ai",
    "kr": "love",
    "icon": "🎌"
  },
  {
    "jp": "状況",
    "read": "[죠우쿄우] joukyou",
    "kr": "state of affairs, situation, circumstances",
    "icon": "☀️"
  },
  {
    "jp": "風景",
    "read": "[후-케-] fuukei",
    "kr": "scenery",
    "icon": "🙏"
  },
  {
    "jp": "姉妹",
    "read": "[시마이] shimai",
    "kr": "sisters",
    "icon": "👋"
  },
  {
    "jp": "年中",
    "read": "[넨쥬우] nenjuu",
    "kr": "whole year, always, everyday",
    "icon": "⭕"
  },
  {
    "jp": "学習",
    "read": "[가쿠슈우] gakushuu",
    "kr": "study, learning",
    "icon": "❌"
  },
  {
    "jp": "不満",
    "read": "[후만] fuman",
    "kr": "dissatisfaction, displeasure, discontent, complaints, unhappiness",
    "icon": "🍣"
  },
  {
    "jp": "暖かい",
    "read": "[아타타카이] atatakai",
    "kr": "warm, mild",
    "icon": "🐱"
  },
  {
    "jp": "勧める",
    "read": "[스스메루] susumeru",
    "kr": "to recommend, to advise, to encourage, to offer (wine)",
    "icon": "🐶"
  },
  {
    "jp": "閉じる",
    "read": "[토지루] tojiru",
    "kr": "to close (e.g. book, eyes), to shut",
    "icon": "📚"
  },
  {
    "jp": "刑事",
    "read": "[케-지] keiji",
    "kr": "criminal case, (police) detective",
    "icon": "🏫"
  },
  {
    "jp": "動かす",
    "read": "[우고카스] ugokasu",
    "kr": "to move, to shift",
    "icon": "📝"
  },
  {
    "jp": "哀れ",
    "read": "[아와레] aware",
    "kr": "helpless, pity, sorrow, grief",
    "icon": "🏃"
  },
  {
    "jp": "時",
    "read": "[토키] toki",
    "kr": "(1) time, hour, (2) occasion, moment",
    "icon": "🗣️"
  },
  {
    "jp": "夜中",
    "read": "[요나카] yonaka",
    "kr": "midnight, dead of night",
    "icon": "💭"
  },
  {
    "jp": "当時",
    "read": "[토-지] touji",
    "kr": "at that time, in those days",
    "icon": "🌟"
  },
  {
    "jp": "面倒",
    "read": "[멘도-] mendou",
    "kr": "trouble, difficulty, care, attention",
    "icon": "💡"
  },
  {
    "jp": "抜く",
    "read": "[누쿠] nuku",
    "kr": "to extract, to omit, to surpass, to draw out, to unplug",
    "icon": "✅"
  },
  {
    "jp": "基",
    "read": "[모토] moto",
    "kr": "basis",
    "icon": "🎌"
  },
  {
    "jp": "出会う",
    "read": "[데아우] deau",
    "kr": "to meet by chance, to come across, to happen to encounter",
    "icon": "☀️"
  },
  {
    "jp": "明らか",
    "read": "[아키라카] akiraka",
    "kr": "obvious, evident, clear",
    "icon": "🙏"
  },
  {
    "jp": "思い出",
    "read": "[오모이데] omoide",
    "kr": "memories, recollections, reminiscence",
    "icon": "👋"
  },
  {
    "jp": "来",
    "read": "[라이] rai",
    "kr": "for (10 days), next (year)",
    "icon": "⭕"
  },
  {
    "jp": "未来",
    "read": "[미라이] mirai",
    "kr": "future (life, tense)",
    "icon": "❌"
  },
  {
    "jp": "邪魔",
    "read": "[쟈마] jama",
    "kr": "hindrance, intrusion",
    "icon": "🍣"
  },
  {
    "jp": "魚",
    "read": "[사카나] sakana",
    "kr": "fish",
    "icon": "🐱"
  },
  {
    "jp": "ケース",
    "read": "[케-스] keesu",
    "kr": "case",
    "icon": "🐶"
  },
  {
    "jp": "数える",
    "read": "[카조에루] kazoeru",
    "kr": "to count",
    "icon": "📚"
  },
  {
    "jp": "急激",
    "read": "[큐우게키] kyuugeki",
    "kr": "sudden, precipitous, radical",
    "icon": "🏫"
  },
  {
    "jp": "デモ",
    "read": "[데모] demo",
    "kr": "(abbr) demo, demonstration",
    "icon": "📝"
  },
  {
    "jp": "握る",
    "read": "[니기루] nigiru",
    "kr": "to grasp, to seize, to mould sushi",
    "icon": "🏃"
  },
  {
    "jp": "出来事",
    "read": "[데키고토] dekigoto",
    "kr": "incident, affair, happening, event",
    "icon": "🗣️"
  },
  {
    "jp": "結論",
    "read": "[케츠론] ketsuron",
    "kr": "conclusion",
    "icon": "💭"
  },
  {
    "jp": "ママ",
    "read": "[마마] mama",
    "kr": "Mama",
    "icon": "🌟"
  },
  {
    "jp": "土",
    "read": "[츠치] tsuchi",
    "kr": "earth, soil",
    "icon": "💡"
  },
  {
    "jp": "独特",
    "read": "[도쿠토쿠] dokutoku",
    "kr": "peculiarity, uniqueness, characteristic",
    "icon": "✅"
  },
  {
    "jp": "丘",
    "read": "[오카] oka",
    "kr": "hill, height, knoll, rising ground",
    "icon": "🎌"
  },
  {
    "jp": "小包",
    "read": "[코즈츠미] kozutsumi",
    "kr": "parcel, package",
    "icon": "☀️"
  },
  {
    "jp": "重要",
    "read": "[쥬우요우] juuyou",
    "kr": "important, momentous, essential, principal, major",
    "icon": "🙏"
  },
  {
    "jp": "表現",
    "read": "[효우겐] hyougen",
    "kr": "expression, presentation, representation (math)",
    "icon": "👋"
  },
  {
    "jp": "世紀",
    "read": "[세-키] seiki",
    "kr": "century, era",
    "icon": "⭕"
  },
  {
    "jp": "値",
    "read": "[아타이] atai",
    "kr": "value, price, cost",
    "icon": "❌"
  },
  {
    "jp": "オフィス",
    "read": "[오피스] ofisu",
    "kr": "office",
    "icon": "🍣"
  },
  {
    "jp": "喜び",
    "read": "[요로코비] yorokobi",
    "kr": "(a) joy, (a) delight, rapture, pleasure, gratification, rejoicing, congratulations, felicitations",
    "icon": "🐱"
  },
  {
    "jp": "ジェット機",
    "read": "[지ェ읏토키] jiettoki",
    "kr": "jet aeroplane",
    "icon": "🐶"
  },
  {
    "jp": "梅雨",
    "read": "[츠유] tsuyu",
    "kr": "rainy season, rain during the rainy season",
    "icon": "📚"
  },
  {
    "jp": "首相",
    "read": "[슈쇼우] shushou",
    "kr": "Prime Minister",
    "icon": "🏫"
  },
  {
    "jp": "望み",
    "read": "[노조미] nozomi",
    "kr": "wish, desire, (a) hope",
    "icon": "📝"
  },
  {
    "jp": "木曜",
    "read": "[모쿠요우] mokuyou",
    "kr": "Thursday",
    "icon": "🏃"
  },
  {
    "jp": "示す",
    "read": "[시메스] shimesu",
    "kr": "to denote, to show, to point out, to indicate",
    "icon": "🗣️"
  },
  {
    "jp": "書物",
    "read": "[쇼모츠] shomotsu",
    "kr": "books",
    "icon": "💭"
  },
  {
    "jp": "腹",
    "read": "[하라] hara",
    "kr": "abdomen, belly, stomach",
    "icon": "🌟"
  },
  {
    "jp": "現れ",
    "read": "[아라와레] araware",
    "kr": "embodiment, materialization",
    "icon": "💡"
  },
  {
    "jp": "追う",
    "read": "[오-] ou",
    "kr": "to chase, to run after",
    "icon": "✅"
  },
  {
    "jp": "定期",
    "read": "[테-키] teiki",
    "kr": "fixed term",
    "icon": "🎌"
  },
  {
    "jp": "都会",
    "read": "[토카이] tokai",
    "kr": "city",
    "icon": "☀️"
  },
  {
    "jp": "硬い",
    "read": "[카타이] katai",
    "kr": "solid, hard (esp. metal, stone), unpolished writing",
    "icon": "🙏"
  },
  {
    "jp": "年代",
    "read": "[넨다이] nendai",
    "kr": "age, era, period, date",
    "icon": "👋"
  },
  {
    "jp": "正",
    "read": "[세-] sei",
    "kr": "(logical) true, regular",
    "icon": "⭕"
  },
  {
    "jp": "うるさい",
    "read": "[우루사이] urusai",
    "kr": "noisy, loud, fussy",
    "icon": "❌"
  },
  {
    "jp": "表",
    "read": "[오모테] omote",
    "kr": "table (e.g. Tab 1), chart, list",
    "icon": "🍣"
  },
  {
    "jp": "被る",
    "read": "[코-무루] koumuru",
    "kr": "to suffer",
    "icon": "🐱"
  },
  {
    "jp": "ピクニック",
    "read": "[피쿠닉쿠] pikunikku",
    "kr": "picnic",
    "icon": "🐶"
  },
  {
    "jp": "籠",
    "read": "[카고] kago",
    "kr": "basket, cage",
    "icon": "📚"
  },
  {
    "jp": "ところで",
    "read": "[토코로데] tokorode",
    "kr": "by the way, even if, no matter what",
    "icon": "🏫"
  },
  {
    "jp": "ざっと",
    "read": "[잣토] zatto",
    "kr": "roughly, in round numbers",
    "icon": "📝"
  },
  {
    "jp": "付き合い",
    "read": "[츠키아이] tsukiai",
    "kr": "association, socializing, fellowship",
    "icon": "🏃"
  },
  {
    "jp": "植物",
    "read": "[쇼쿠부츠] shokubutsu",
    "kr": "plant, vegetation",
    "icon": "🗣️"
  },
  {
    "jp": "学者",
    "read": "[가쿠샤] gakusha",
    "kr": "scholar",
    "icon": "💭"
  },
  {
    "jp": "気味",
    "read": "[키미] kimi",
    "kr": "-like, -looking, -looked",
    "icon": "🌟"
  },
  {
    "jp": "性",
    "read": "[세-] sei",
    "kr": "sex, gender",
    "icon": "💡"
  },
  {
    "jp": "役",
    "read": "[야쿠] yaku",
    "kr": "use, service, role, position",
    "icon": "✅"
  },
  {
    "jp": "幾ら",
    "read": "[이쿠라] ikura",
    "kr": "how much?, how many?",
    "icon": "🎌"
  },
  {
    "jp": "渋滞",
    "read": "[쥬우타이] juutai",
    "kr": "congestion (e.g. traffic), delay, stagnation",
    "icon": "☀️"
  },
  {
    "jp": "無料",
    "read": "[무료우] muryou",
    "kr": "free, no charge",
    "icon": "🙏"
  },
  {
    "jp": "無し",
    "read": "[나시] nashi",
    "kr": "without",
    "icon": "👋"
  },
  {
    "jp": "怠ける",
    "read": "[나마케루] namakeru",
    "kr": "to be idle, to neglect",
    "icon": "⭕"
  },
  {
    "jp": "随分",
    "read": "[즈이분] zuibun",
    "kr": "extremely",
    "icon": "❌"
  },
  {
    "jp": "離れる",
    "read": "[하나레루] hanareru",
    "kr": "to be separated from, to leave, to go away, to be a long way off",
    "icon": "🍣"
  },
  {
    "jp": "真剣",
    "read": "[싱켄] shinken",
    "kr": "seriousness, earnestness",
    "icon": "🐱"
  },
  {
    "jp": "推薦",
    "read": "[스이센] suisen",
    "kr": "recommendation",
    "icon": "🐶"
  },
  {
    "jp": "優秀",
    "read": "[유우슈우] yuushuu",
    "kr": "superiority, excellence",
    "icon": "📚"
  },
  {
    "jp": "敬意",
    "read": "[케-이] keii",
    "kr": "respect, honour",
    "icon": "🏫"
  },
  {
    "jp": "衣服",
    "read": "[이후쿠] ifuku",
    "kr": "clothes",
    "icon": "📝"
  },
  {
    "jp": "御",
    "read": "[오] o",
    "kr": "honourable",
    "icon": "🏃"
  },
  {
    "jp": "処理",
    "read": "[쇼리] shori",
    "kr": "processing, dealing with, treatment, disposition, disposal",
    "icon": "🗣️"
  },
  {
    "jp": "患者",
    "read": "[칸쟈] kanja",
    "kr": "a patient",
    "icon": "💭"
  },
  {
    "jp": "順調",
    "read": "[쥰쵸우] junchou",
    "kr": "favourable, doing well, O.K., all right",
    "icon": "🌟"
  },
  {
    "jp": "行動",
    "read": "[코-도-] koudou",
    "kr": "action, conduct, behaviour, mobilization",
    "icon": "💡"
  },
  {
    "jp": "演技",
    "read": "[엥기] engi",
    "kr": "acting, performance",
    "icon": "✅"
  },
  {
    "jp": "後",
    "read": "[노치] nochi",
    "kr": "afterwards, since then, in the future",
    "icon": "🎌"
  },
  {
    "jp": "幅",
    "read": "[하바] haba",
    "kr": "width, breadth",
    "icon": "☀️"
  },
  {
    "jp": "生",
    "read": "[나마] nama",
    "kr": "(1) draft (beer), (2) raw, unprocessed",
    "icon": "🙏"
  },
  {
    "jp": "過去",
    "read": "[카코] kako",
    "kr": "the past, bygone days, the previous",
    "icon": "👋"
  },
  {
    "jp": "ソファー",
    "read": "[소파-] sofaa",
    "kr": "sofa, couch",
    "icon": "⭕"
  },
  {
    "jp": "勢い",
    "read": "[이키오이] ikioi",
    "kr": "force, vigor, energy, spirit",
    "icon": "❌"
  },
  {
    "jp": "保証",
    "read": "[호쇼우] hoshou",
    "kr": "guarantee, security, assurance, pledge, warranty",
    "icon": "🍣"
  },
  {
    "jp": "用いる",
    "read": "[모치-루] mochiiru",
    "kr": "to use, to make use of",
    "icon": "🐱"
  },
  {
    "jp": "通り過ぎる",
    "read": "[토-리스기루] tourisugiru",
    "kr": "to pass, to pass through",
    "icon": "🐶"
  },
  {
    "jp": "居間",
    "read": "[이마] ima",
    "kr": "living room (western style)",
    "icon": "📚"
  },
  {
    "jp": "全国",
    "read": "[젱코쿠] zenkoku",
    "kr": "country-wide, nation-wide, whole country, national",
    "icon": "🏫"
  },
  {
    "jp": "微妙",
    "read": "[비묘우] bimyou",
    "kr": "delicate, subtle",
    "icon": "📝"
  },
  {
    "jp": "感じ",
    "read": "[칸지] kanji",
    "kr": "feeling, sense, impression",
    "icon": "🏃"
  },
  {
    "jp": "徹夜",
    "read": "[테츠야] tetsuya",
    "kr": "all night, all night vigil, sleepless night",
    "icon": "🗣️"
  },
  {
    "jp": "価格",
    "read": "[카카쿠] kakaku",
    "kr": "price, value, cost",
    "icon": "💭"
  },
  {
    "jp": "軒",
    "read": "[켄] ken",
    "kr": "eaves",
    "icon": "🌟"
  },
  {
    "jp": "グランド",
    "read": "[구란도] gurando",
    "kr": "gland, grand, (electrical) ground",
    "icon": "💡"
  },
  {
    "jp": "恐れる",
    "read": "[오소레루] osoreru",
    "kr": "to fear, to be afraid of",
    "icon": "✅"
  },
  {
    "jp": "熱帯",
    "read": "[넷타이] nettai",
    "kr": "tropics",
    "icon": "🎌"
  },
  {
    "jp": "セット",
    "read": "[셋토] setto",
    "kr": "set",
    "icon": "☀️"
  },
  {
    "jp": "隠れる",
    "read": "[카쿠레루] kakureru",
    "kr": "to hide, to be hidden, to conceal oneself, to disappear",
    "icon": "🙏"
  },
  {
    "jp": "自身",
    "read": "[지신] jishin",
    "kr": "by oneself, personally",
    "icon": "👋"
  },
  {
    "jp": "対象",
    "read": "[타이쇼우] taishou",
    "kr": "target, object (of worship, study, etc), subject (of taxation, etc)",
    "icon": "⭕"
  },
  {
    "jp": "スープ",
    "read": "[스-푸] suupu",
    "kr": "(Western) soup",
    "icon": "❌"
  },
  {
    "jp": "二十",
    "read": "[니쥬우] nijuu",
    "kr": "20 years old, 20th year",
    "icon": "🍣"
  },
  {
    "jp": "あんまり",
    "read": "[암마리] anmari",
    "kr": "not very, not much, remainder, rest",
    "icon": "🐱"
  },
  {
    "jp": "いち",
    "read": "[이치] ichi",
    "kr": "market, fair",
    "icon": "🐶"
  },
  {
    "jp": "武器",
    "read": "[부키] buki",
    "kr": "weapon, arms, ordinance",
    "icon": "📚"
  },
  {
    "jp": "生じる",
    "read": "[쇼우지루] shoujiru",
    "kr": "to produce, to yield, to result from, to arise, to be generated",
    "icon": "🏫"
  },
  {
    "jp": "膝",
    "read": "[히자] hiza",
    "kr": "knee, lap",
    "icon": "📝"
  },
  {
    "jp": "入院",
    "read": "[뉴우인] nyuuin",
    "kr": "hospitalization",
    "icon": "🏃"
  },
  {
    "jp": "農民",
    "read": "[노-민] noumin",
    "kr": "farmers, peasants",
    "icon": "🗣️"
  },
  {
    "jp": "辺り",
    "read": "[아타리] atari",
    "kr": "vicinity, nearby",
    "icon": "💭"
  },
  {
    "jp": "応じる",
    "read": "[오-지루] oujiru",
    "kr": "to respond, to satisfy, to accept, to comply with, to apply for",
    "icon": "🌟"
  },
  {
    "jp": "パス",
    "read": "[파스] pasu",
    "kr": "path, pass (in games)",
    "icon": "💡"
  },
  {
    "jp": "宅",
    "read": "[타쿠] taku",
    "kr": "house, home, husband",
    "icon": "✅"
  },
  {
    "jp": "戦い",
    "read": "[타타카이] tatakai",
    "kr": "battle, fight, struggle, conflict",
    "icon": "🎌"
  },
  {
    "jp": "ラケット",
    "read": "[라켓토] raketto",
    "kr": "paddle, racket",
    "icon": "☀️"
  },
  {
    "jp": "神経",
    "read": "[싱케-] shinkei",
    "kr": "nerve, sensitivity",
    "icon": "🙏"
  },
  {
    "jp": "エンジン",
    "read": "[엔진] enjin",
    "kr": "engine",
    "icon": "👋"
  },
  {
    "jp": "郵便",
    "read": "[유우빈] yuubin",
    "kr": "mail, postal service",
    "icon": "⭕"
  },
  {
    "jp": "連れ",
    "read": "[츠레] tsure",
    "kr": "companion, company",
    "icon": "❌"
  },
  {
    "jp": "包み",
    "read": "[츠츠미] tsutsumi",
    "kr": "bundle, package, parcel, bale",
    "icon": "🍣"
  },
  {
    "jp": "納得",
    "read": "[낫토쿠] nattoku",
    "kr": "consent, assent, understanding",
    "icon": "🐱"
  },
  {
    "jp": "豊富",
    "read": "[호-후] houfu",
    "kr": "abundance, wealth, plenty, bounty",
    "icon": "🐶"
  },
  {
    "jp": "文",
    "read": "[분] bun",
    "kr": "sentence",
    "icon": "📚"
  },
  {
    "jp": "何とか",
    "read": "[난토카] nantoka",
    "kr": "somehow, anyhow, one way or another",
    "icon": "🏫"
  },
  {
    "jp": "引っ張る",
    "read": "[힙파루] hipparu",
    "kr": "(1) to pull, to draw, to stretch, to drag, (2) to pull the ball (baseball)",
    "icon": "📝"
  },
  {
    "jp": "で",
    "read": "[데] de",
    "kr": "outflow, coming (going) out, graduate (of)",
    "icon": "🏃"
  },
  {
    "jp": "床",
    "read": "[토코] toko",
    "kr": "floor",
    "icon": "🗣️"
  },
  {
    "jp": "存在",
    "read": "[손자이] sonzai",
    "kr": "existence, being",
    "icon": "💭"
  },
  {
    "jp": "囲む",
    "read": "[카코무] kakomu",
    "kr": "to surround, to encircle",
    "icon": "🌟"
  },
  {
    "jp": "料金",
    "read": "[료우킨] ryoukin",
    "kr": "fee, charge, fare",
    "icon": "💡"
  },
  {
    "jp": "用心",
    "read": "[요우진] youjin",
    "kr": "care, precaution, guarding, caution",
    "icon": "✅"
  },
  {
    "jp": "燃える",
    "read": "[모에루] moeru",
    "kr": "to burn",
    "icon": "🎌"
  },
  {
    "jp": "大統領",
    "read": "[다이토-료우] daitouryou",
    "kr": "president, chief executive",
    "icon": "☀️"
  },
  {
    "jp": "適する",
    "read": "[테키스루] tekisuru",
    "kr": "to fit, to suit",
    "icon": "🙏"
  },
  {
    "jp": "正確",
    "read": "[세-카쿠] seikaku",
    "kr": "accurate, punctuality, exactness, authenticity, veracity",
    "icon": "👋"
  },
  {
    "jp": "注文",
    "read": "[츄우몬] chuumon",
    "kr": "order, request",
    "icon": "⭕"
  },
  {
    "jp": "夫婦",
    "read": "[후-후] fuufu",
    "kr": "married couple, husband and wife",
    "icon": "❌"
  },
  {
    "jp": "障害",
    "read": "[쇼우가이] shougai",
    "kr": "obstacle, impediment (fault), damage",
    "icon": "🍣"
  },
  {
    "jp": "演奏",
    "read": "[엔소-] ensou",
    "kr": "musical performance",
    "icon": "🐱"
  },
  {
    "jp": "一番",
    "read": "[이치반] ichiban",
    "kr": "best, first, number one",
    "icon": "🐶"
  },
  {
    "jp": "日本",
    "read": "[닙폰] nippon",
    "kr": "Japan",
    "icon": "📚"
  },
  {
    "jp": "母親",
    "read": "[하하오야] hahaoya",
    "kr": "mother",
    "icon": "🏫"
  },
  {
    "jp": "優勝",
    "read": "[유우쇼우] yuushou",
    "kr": "overall victory, championship",
    "icon": "📝"
  },
  {
    "jp": "誇り",
    "read": "[호코리] hokori",
    "kr": "pride",
    "icon": "🏃"
  },
  {
    "jp": "縦",
    "read": "[타테] tate",
    "kr": "length, height",
    "icon": "🗣️"
  },
  {
    "jp": "端",
    "read": "[하지] haji",
    "kr": "end (e.g. of street), edge, tip, margin, point",
    "icon": "💭"
  },
  {
    "jp": "一般",
    "read": "[입판] ippan",
    "kr": "general, liberal, universal, ordinary, average",
    "icon": "🌟"
  },
  {
    "jp": "費用",
    "read": "[히요우] hiyou",
    "kr": "cost, expense",
    "icon": "💡"
  },
  {
    "jp": "舞台",
    "read": "[부타이] butai",
    "kr": "stage (theatre)",
    "icon": "✅"
  },
  {
    "jp": "クリーム",
    "read": "[쿠리-무] kuriimu",
    "kr": "cream",
    "icon": "🎌"
  },
  {
    "jp": "道路",
    "read": "[도-로] douro",
    "kr": "road, highway",
    "icon": "☀️"
  },
  {
    "jp": "就く",
    "read": "[츠쿠] tsuku",
    "kr": "to settle in (place), to take (seat, position), to study (under teacher)",
    "icon": "🙏"
  },
  {
    "jp": "信頼",
    "read": "[신라이] shinrai",
    "kr": "reliance, trust, confidence",
    "icon": "👋"
  },
  {
    "jp": "可能",
    "read": "[카노-] kanou",
    "kr": "possible, practicable, feasible",
    "icon": "⭕"
  },
  {
    "jp": "できれば",
    "read": "[데키레바] dekireba",
    "kr": "",
    "icon": "❌"
  },
  {
    "jp": "日中",
    "read": "[닛츄우] nitchuu",
    "kr": "daytime, broad daylight",
    "icon": "🍣"
  },
  {
    "jp": "支える",
    "read": "[사사에루] sasaeru",
    "kr": "to be blocked, to choke, to be obstructed",
    "icon": "🐱"
  },
  {
    "jp": "実施",
    "read": "[짓시] jisshi",
    "kr": "enforcement, enact, put into practice, carry out, operation",
    "icon": "🐶"
  },
  {
    "jp": "年齢",
    "read": "[넨레-] nenrei",
    "kr": "age, years",
    "icon": "📚"
  },
  {
    "jp": "評判",
    "read": "[효우반] hyouban",
    "kr": "fame, reputation, popularity, arrant",
    "icon": "🏫"
  },
  {
    "jp": "九",
    "read": "[큐우] kyuu",
    "kr": "nine",
    "icon": "📝"
  },
  {
    "jp": "涙",
    "read": "[나미다] namida",
    "kr": "tear",
    "icon": "🏃"
  },
  {
    "jp": "迎え",
    "read": "[무카에] mukae",
    "kr": "meeting, person sent to pick up an arrival",
    "icon": "🗣️"
  },
  {
    "jp": "たまらない",
    "read": "[타마라나이] tamaranai",
    "kr": "intolerable, unbearable, unendurable",
    "icon": "💭"
  },
  {
    "jp": "記入",
    "read": "[키뉴우] kinyuu",
    "kr": "entry, filling in of forms",
    "icon": "🌟"
  },
  {
    "jp": "欠点",
    "read": "[켓텐] ketten",
    "kr": "faults, defect, weakness",
    "icon": "💡"
  },
  {
    "jp": "角",
    "read": "[카쿠] kaku",
    "kr": "horn",
    "icon": "✅"
  },
  {
    "jp": "本当",
    "read": "[혼토-] hontou",
    "kr": "truth, reality",
    "icon": "🎌"
  },
  {
    "jp": "遠慮",
    "read": "[엔료] enryo",
    "kr": "diffidence, restraint, reserve",
    "icon": "☀️"
  },
  {
    "jp": "積もる",
    "read": "[츠모루] tsumoru",
    "kr": "to pile up",
    "icon": "🙏"
  },
  {
    "jp": "全体",
    "read": "[젠타이] zentai",
    "kr": "whole, entirety, whatever (is the matter)",
    "icon": "👋"
  },
  {
    "jp": "キロ",
    "read": "[키로] kiro",
    "kr": "(abbr) kilo-, kilogram, kilometre, 10^3",
    "icon": "⭕"
  },
  {
    "jp": "迷惑",
    "read": "[메-와쿠] meiwaku",
    "kr": "trouble, bother, annoyance",
    "icon": "❌"
  },
  {
    "jp": "人類",
    "read": "[진루이] jinrui",
    "kr": "mankind, humanity",
    "icon": "🍣"
  },
  {
    "jp": "独り",
    "read": "[히토리] hitori",
    "kr": "alone, unmarried",
    "icon": "🐱"
  },
  {
    "jp": "束",
    "read": "[소쿠] soku",
    "kr": "handbreadth, bundle",
    "icon": "🐶"
  },
  {
    "jp": "具体",
    "read": "[구타이] gutai",
    "kr": "concrete, tangible, material",
    "icon": "📚"
  },
  {
    "jp": "額",
    "read": "[히타이] hitai",
    "kr": "forehead, brow",
    "icon": "🏫"
  },
  {
    "jp": "バン",
    "read": "[반] ban",
    "kr": "bun, van (caravan), VAN (value-added network)",
    "icon": "📝"
  },
  {
    "jp": "濃い",
    "read": "[코이] koi",
    "kr": "thick (as of color, liquid), dense, strong",
    "icon": "🏃"
  },
  {
    "jp": "芸術",
    "read": "[게-쥬츠] geijutsu",
    "kr": "(fine) art, the arts",
    "icon": "🗣️"
  },
  {
    "jp": "市場",
    "read": "[시죠우] shijou",
    "kr": "(the) market (as a concept)",
    "icon": "💭"
  },
  {
    "jp": "トンネル",
    "read": "[톤네루] tonneru",
    "kr": "tunnel",
    "icon": "🌟"
  },
  {
    "jp": "皮",
    "read": "[카와] kawa",
    "kr": "skin, hide, leather, fur, pelt, bark, shell",
    "icon": "💡"
  },
  {
    "jp": "滞在",
    "read": "[타이자이] taizai",
    "kr": "stay, sojourn",
    "icon": "✅"
  },
  {
    "jp": "ノー",
    "read": "[노-] noo",
    "kr": "",
    "icon": "🎌"
  },
  {
    "jp": "じゃあ",
    "read": "[쟈아] jaa",
    "kr": "well, well then",
    "icon": "☀️"
  },
  {
    "jp": "法",
    "read": "[호-] hou",
    "kr": "Act (law: the X Act)",
    "icon": "🙏"
  },
  {
    "jp": "不幸",
    "read": "[후코-] fukou",
    "kr": "unhappiness, sorrow, misfortune, disaster, accident, death",
    "icon": "👋"
  },
  {
    "jp": "愛する",
    "read": "[아이스루] aisuru",
    "kr": "to love",
    "icon": "⭕"
  },
  {
    "jp": "悲しむ",
    "read": "[카나시무] kanashimu",
    "kr": "to be sad, to mourn for, to regret",
    "icon": "❌"
  },
  {
    "jp": "じっと",
    "read": "[짓토] jitto",
    "kr": "fixedly, firmly, patiently, quietly",
    "icon": "🍣"
  },
  {
    "jp": "有能",
    "read": "[유우노-] yuunou",
    "kr": "able, capable, efficient, skill",
    "icon": "🐱"
  },
  {
    "jp": "拍手",
    "read": "[하쿠슈] hakushu",
    "kr": "clapping hands, applause",
    "icon": "🐶"
  },
  {
    "jp": "立場",
    "read": "[타치바] tachiba",
    "kr": "standpoint, position, situation",
    "icon": "📚"
  },
  {
    "jp": "無視",
    "read": "[무시] mushi",
    "kr": "disregard, ignore",
    "icon": "🏫"
  },
  {
    "jp": "立ち上がる",
    "read": "[타치아가루] tachiagaru",
    "kr": "to stand up",
    "icon": "📝"
  },
  {
    "jp": "半ば",
    "read": "[나카바] nakaba",
    "kr": "middle, half, semi, halfway, partly",
    "icon": "🏃"
  },
  {
    "jp": "兎",
    "read": "[우사기] usagi",
    "kr": "rabbit, hare, cony",
    "icon": "🗣️"
  },
  {
    "jp": "おしゃべり",
    "read": "[오샤베리] oshaberi",
    "kr": "chattering, talk, idle talk",
    "icon": "💭"
  },
  {
    "jp": "正午",
    "read": "[쇼우고] shougo",
    "kr": "noon, mid-day",
    "icon": "🌟"
  },
  {
    "jp": "関する",
    "read": "[칸스루] kansuru",
    "kr": "to concern, to be related",
    "icon": "💡"
  },
  {
    "jp": "いつか",
    "read": "[이츠카] itsuka",
    "kr": "sometime, someday, one day",
    "icon": "✅"
  },
  {
    "jp": "仲間",
    "read": "[나카마] nakama",
    "kr": "company, fellow, colleague, associate",
    "icon": "🎌"
  },
  {
    "jp": "級",
    "read": "[큐우] kyuu",
    "kr": "class, grade, rank, school class, grade",
    "icon": "☀️"
  },
  {
    "jp": "感心",
    "read": "[칸신] kanshin",
    "kr": "admiration, Well done!",
    "icon": "🙏"
  },
  {
    "jp": "穴",
    "read": "[아나] ana",
    "kr": "hole",
    "icon": "👋"
  },
  {
    "jp": "ドレス",
    "read": "[도레스] doresu",
    "kr": "dress",
    "icon": "⭕"
  },
  {
    "jp": "便り",
    "read": "[타요리] tayori",
    "kr": "news, tidings, information, correspondence, letter",
    "icon": "❌"
  },
  {
    "jp": "求める",
    "read": "[모토메루] motomeru",
    "kr": "to seek, to request, to demand, to want, to wish for, to search for, to pursue (pleasure), to hunt (a job),",
    "icon": "🍣"
  },
  {
    "jp": "裏切る",
    "read": "[우라기루] uragiru",
    "kr": "to betray, to turn traitor to, to double-cross",
    "icon": "🐱"
  },
  {
    "jp": "日曜",
    "read": "[니치요우] nichiyou",
    "kr": "Sunday",
    "icon": "🐶"
  },
  {
    "jp": "相談",
    "read": "[소-단] soudan",
    "kr": "consultation, discussion",
    "icon": "📚"
  },
  {
    "jp": "生き物",
    "read": "[이키모노] ikimono",
    "kr": "living thing, animal",
    "icon": "🏫"
  },
  {
    "jp": "助手",
    "read": "[죠슈] joshu",
    "kr": "helper, helpmeet, assistant, tutor",
    "icon": "📝"
  },
  {
    "jp": "旧",
    "read": "[큐우] kyuu",
    "kr": "ex-",
    "icon": "🏃"
  },
  {
    "jp": "叫ぶ",
    "read": "[사케부] sakebu",
    "kr": "to shout, to cry",
    "icon": "🗣️"
  },
  {
    "jp": "なぜなら",
    "read": "[나제나라] nazenara",
    "kr": "because",
    "icon": "💭"
  },
  {
    "jp": "金銭",
    "read": "[킨센] kinsen",
    "kr": "money, cash",
    "icon": "🌟"
  },
  {
    "jp": "合計",
    "read": "[고-케-] goukei",
    "kr": "sum total, total amount",
    "icon": "💡"
  },
  {
    "jp": "うがい",
    "read": "[우가이] ugai",
    "kr": "gargle, rinse mouth",
    "icon": "✅"
  },
  {
    "jp": "ゆっくり",
    "read": "[육쿠리] yukkuri",
    "kr": "slowly, at ease",
    "icon": "🎌"
  },
  {
    "jp": "詩人",
    "read": "[시진] shijin",
    "kr": "poet",
    "icon": "☀️"
  },
  {
    "jp": "機械",
    "read": "[키카이] kikai",
    "kr": "machine, mechanism",
    "icon": "🙏"
  },
  {
    "jp": "限界",
    "read": "[겡카이] genkai",
    "kr": "limit, bound",
    "icon": "👋"
  },
  {
    "jp": "縄",
    "read": "[나와] nawa",
    "kr": "rope, hemp",
    "icon": "⭕"
  },
  {
    "jp": "金融",
    "read": "[킨유우] kinyuu",
    "kr": "monetary circulation, credit situation",
    "icon": "❌"
  },
  {
    "jp": "明かり",
    "read": "[아카리] akari",
    "kr": "lamplight, light (in general), brightness",
    "icon": "🍣"
  },
  {
    "jp": "少しも",
    "read": "[스코시모] sukoshimo",
    "kr": "anything of, not one bit",
    "icon": "🐱"
  },
  {
    "jp": "終える",
    "read": "[오에루] oeru",
    "kr": "to finish",
    "icon": "🐶"
  },
  {
    "jp": "頃",
    "read": "[고로] goro",
    "kr": "time, about, toward, approximately (time)",
    "icon": "📚"
  },
  {
    "jp": "冗談",
    "read": "[죠우단] joudan",
    "kr": "jest, joke",
    "icon": "🏫"
  },
  {
    "jp": "正式",
    "read": "[세-시키] seishiki",
    "kr": "due form, official, formality",
    "icon": "📝"
  },
  {
    "jp": "式",
    "read": "[시키] shiki",
    "kr": "equation, formula, ceremony",
    "icon": "🏃"
  },
  {
    "jp": "濠",
    "read": "[호리] hori",
    "kr": "moat",
    "icon": "🗣️"
  },
  {
    "jp": "激しい",
    "read": "[하게시-] hageshii",
    "kr": "violent, vehement, intense",
    "icon": "💭"
  },
  {
    "jp": "損",
    "read": "[손] son",
    "kr": "loss, disadvantage",
    "icon": "🌟"
  },
  {
    "jp": "文字",
    "read": "[모지] moji",
    "kr": "letter (of alphabet), character",
    "icon": "💡"
  },
  {
    "jp": "禁止",
    "read": "[킨시] kinshi",
    "kr": "prohibition, ban",
    "icon": "✅"
  },
  {
    "jp": "きちんと",
    "read": "[키친토] kichinto",
    "kr": "precisely, accurately",
    "icon": "🎌"
  },
  {
    "jp": "茶",
    "read": "[챠] cha",
    "kr": "tea",
    "icon": "☀️"
  },
  {
    "jp": "幸運",
    "read": "[코-운] kouun",
    "kr": "good luck, fortune",
    "icon": "🙏"
  },
  {
    "jp": "振る",
    "read": "[후루] furu",
    "kr": "(1) to wave, to shake, to swing, (2) to sprinkle, (3) to cast (actor), to allocate (work)",
    "icon": "👋"
  },
  {
    "jp": "昨",
    "read": "[사쿠] saku",
    "kr": "last (year), yesterday",
    "icon": "⭕"
  },
  {
    "jp": "注ぐ",
    "read": "[소소구] sosogu",
    "kr": "to pour (into), to irrigate, to pay, to fill, to feed (e.g. a fire)",
    "icon": "❌"
  },
  {
    "jp": "会計",
    "read": "[카이케-] kaikei",
    "kr": "account, finance, accountant",
    "icon": "🍣"
  },
  {
    "jp": "根",
    "read": "[네] ne",
    "kr": "root",
    "icon": "🐱"
  },
  {
    "jp": "温暖",
    "read": "[온단] ondan",
    "kr": "warmth",
    "icon": "🐶"
  },
  {
    "jp": "計",
    "read": "[케-] kei",
    "kr": "plan",
    "icon": "📚"
  },
  {
    "jp": "確実",
    "read": "[카쿠지츠] kakujitsu",
    "kr": "certainty, reliability, soundness",
    "icon": "🏫"
  },
  {
    "jp": "胸",
    "read": "[무네] mune",
    "kr": "breast, chest",
    "icon": "📝"
  },
  {
    "jp": "記憶",
    "read": "[키오쿠] kioku",
    "kr": "memory, recollection, remembrance",
    "icon": "🏃"
  },
  {
    "jp": "建築",
    "read": "[켄치쿠] kenchiku",
    "kr": "construction, architecture",
    "icon": "🗣️"
  },
  {
    "jp": "煙",
    "read": "[케무리] kemuri",
    "kr": "smoke, fumes",
    "icon": "💭"
  },
  {
    "jp": "あるいは",
    "read": "[아루이하] aruiha",
    "kr": "or, possibly",
    "icon": "🌟"
  },
  {
    "jp": "いつでも",
    "read": "[이츠데모] itsudemo",
    "kr": "(at) any time, always, at all times, never (neg)",
    "icon": "💡"
  },
  {
    "jp": "知らせ",
    "read": "[시라세] shirase",
    "kr": "notice",
    "icon": "✅"
  },
  {
    "jp": "いつまでも",
    "read": "[이츠마데모] itsumademo",
    "kr": "forever, for good, eternally, as long as one likes, indefinitely",
    "icon": "🎌"
  },
  {
    "jp": "掲示",
    "read": "[케-지] keiji",
    "kr": "notice, bulletin",
    "icon": "☀️"
  },
  {
    "jp": "刺激",
    "read": "[시게키] shigeki",
    "kr": "stimulus, impetus, incentive",
    "icon": "🙏"
  },
  {
    "jp": "診察",
    "read": "[신사츠] shinsatsu",
    "kr": "medical examination",
    "icon": "👋"
  },
  {
    "jp": "機関",
    "read": "[키칸] kikan",
    "kr": "organ, mechanism, facility, engine",
    "icon": "⭕"
  },
  {
    "jp": "戻す",
    "read": "[모도스] modosu",
    "kr": "to restore, to put back, to return",
    "icon": "❌"
  },
  {
    "jp": "石油",
    "read": "[세키유] sekiyu",
    "kr": "oil, petroleum, kerosene",
    "icon": "🍣"
  },
  {
    "jp": "駄目",
    "read": "[다메] dame",
    "kr": "useless, no good, hopeless",
    "icon": "🐱"
  },
  {
    "jp": "食欲",
    "read": "[쇼쿠요쿠] shokuyoku",
    "kr": "appetite (for food)",
    "icon": "🐶"
  },
  {
    "jp": "抱える",
    "read": "[카카에루] kakaeru",
    "kr": "to hold or carry under or in the arms",
    "icon": "📚"
  },
  {
    "jp": "破産",
    "read": "[하산] hasan",
    "kr": "(personal) bankruptcy",
    "icon": "🏫"
  },
  {
    "jp": "印刷",
    "read": "[인사츠] insatsu",
    "kr": "printing",
    "icon": "📝"
  },
  {
    "jp": "対する",
    "read": "[타이스루] taisuru",
    "kr": "to face, to confront, to oppose",
    "icon": "🏃"
  },
  {
    "jp": "名",
    "read": "[메-] mei",
    "kr": "name, reputation",
    "icon": "🗣️"
  },
  {
    "jp": "見当",
    "read": "[켄토-] kentou",
    "kr": "be found, aim, estimate, guess, approx",
    "icon": "💭"
  },
  {
    "jp": "すると",
    "read": "[스루토] suruto",
    "kr": "thereupon, hereupon",
    "icon": "🌟"
  },
  {
    "jp": "言わば",
    "read": "[이와바] iwaba",
    "kr": "so to speak",
    "icon": "💡"
  },
  {
    "jp": "分ける",
    "read": "[와케루] wakeru",
    "kr": "to divide, to separate",
    "icon": "✅"
  },
  {
    "jp": "象",
    "read": "[조-] zou",
    "kr": "elephant",
    "icon": "🎌"
  },
  {
    "jp": "陽気",
    "read": "[요우키] youki",
    "kr": "season, weather, cheerfulness",
    "icon": "☀️"
  },
  {
    "jp": "許す",
    "read": "[유루스] yurusu",
    "kr": "to permit, to allow, to approve",
    "icon": "🙏"
  },
  {
    "jp": "人種",
    "read": "[진슈] jinshu",
    "kr": "race (of people)",
    "icon": "👋"
  },
  {
    "jp": "縁",
    "read": "[헤리] heri",
    "kr": "a means, e.g. of living",
    "icon": "⭕"
  },
  {
    "jp": "黙る",
    "read": "[다마루] damaru",
    "kr": "to be silent",
    "icon": "❌"
  },
  {
    "jp": "相手",
    "read": "[아이테] aite",
    "kr": "companion, partner, company",
    "icon": "🍣"
  },
  {
    "jp": "決心",
    "read": "[켓신] kesshin",
    "kr": "determination, resolution",
    "icon": "🐱"
  },
  {
    "jp": "愛情",
    "read": "[아이죠우] aijou",
    "kr": "love, affection",
    "icon": "🐶"
  },
  {
    "jp": "幸福",
    "read": "[코-후쿠] koufuku",
    "kr": "happiness, blessedness",
    "icon": "📚"
  },
  {
    "jp": "やがて",
    "read": "[야가테] yagate",
    "kr": "before long, soon, at length",
    "icon": "🏫"
  },
  {
    "jp": "量",
    "read": "[료우] ryou",
    "kr": "quantity, amount, volume, portion (of food)",
    "icon": "📝"
  },
  {
    "jp": "豪華",
    "read": "[고-카] gouka",
    "kr": "wonderful, gorgeous, splendor, pomp, extravagance",
    "icon": "🏃"
  },
  {
    "jp": "有利",
    "read": "[유우리] yuuri",
    "kr": "advantageous, better, profitable, lucrative",
    "icon": "🗣️"
  },
  {
    "jp": "引用",
    "read": "[인요우] inyou",
    "kr": "quotation, citation",
    "icon": "💭"
  },
  {
    "jp": "チーズ",
    "read": "[치-즈] chiizu",
    "kr": "cheese",
    "icon": "🌟"
  },
  {
    "jp": "桜",
    "read": "[사쿠라] sakura",
    "kr": "cherry blossom, cherry tree",
    "icon": "💡"
  },
  {
    "jp": "人込み",
    "read": "[히토고미] hitogomi",
    "kr": "crowd of people",
    "icon": "✅"
  },
  {
    "jp": "仲",
    "read": "[나카] naka",
    "kr": "relation, relationship",
    "icon": "🎌"
  },
  {
    "jp": "論文",
    "read": "[롬분] ronbun",
    "kr": "thesis, essay, treatise, paper",
    "icon": "☀️"
  },
  {
    "jp": "約",
    "read": "[야쿠] yaku",
    "kr": "approximately, about, some",
    "icon": "🙏"
  },
  {
    "jp": "防ぐ",
    "read": "[후세구] fusegu",
    "kr": "to defend (against), to protect, to prevent",
    "icon": "👋"
  },
  {
    "jp": "美人",
    "read": "[비진] bijin",
    "kr": "beautiful person (woman)",
    "icon": "⭕"
  },
  {
    "jp": "ミス",
    "read": "[미스] misu",
    "kr": "miss (mistake, error, failure), Miss",
    "icon": "❌"
  },
  {
    "jp": "予報",
    "read": "[요호-] yohou",
    "kr": "forecast, prediction",
    "icon": "🍣"
  },
  {
    "jp": "毛布",
    "read": "[모-후] moufu",
    "kr": "blanket",
    "icon": "🐱"
  },
  {
    "jp": "賛成",
    "read": "[산세-] sansei",
    "kr": "approval, agreement, support, favour",
    "icon": "🐶"
  },
  {
    "jp": "発見",
    "read": "[학켄] hakken",
    "kr": "discovery, detection, finding",
    "icon": "📚"
  },
  {
    "jp": "素晴らしい",
    "read": "[스바라시-] subarashii",
    "kr": "wonderful, splendid, magnificent",
    "icon": "🏫"
  },
  {
    "jp": "輪",
    "read": "[와] wa",
    "kr": "ring, hoop, circle",
    "icon": "📝"
  },
  {
    "jp": "見舞い",
    "read": "[미마이] mimai",
    "kr": "enquiry, expression of sympathy, expression of concern",
    "icon": "🏃"
  },
  {
    "jp": "巨大",
    "read": "[쿄다이] kyodai",
    "kr": "huge, gigantic, enormous",
    "icon": "🗣️"
  },
  {
    "jp": "苦しい",
    "read": "[쿠루시-] kurushii",
    "kr": "painful, difficult",
    "icon": "💭"
  },
  {
    "jp": "物価",
    "read": "[북카] bukka",
    "kr": "prices of commodities, prices (in general)",
    "icon": "🌟"
  },
  {
    "jp": "語る",
    "read": "[카타루] kataru",
    "kr": "to talk, to tell, to recite",
    "icon": "💡"
  },
  {
    "jp": "沈む",
    "read": "[시즈무] shizumu",
    "kr": "to sink, to feel depressed",
    "icon": "✅"
  },
  {
    "jp": "中学",
    "read": "[츄우가쿠] chuugaku",
    "kr": "middle school, junior high school",
    "icon": "🎌"
  },
  {
    "jp": "盛り",
    "read": "[모리] mori",
    "kr": "helping, serving",
    "icon": "☀️"
  },
  {
    "jp": "実際",
    "read": "[짓사이] jissai",
    "kr": "practical, actual condition, status quo",
    "icon": "🙏"
  },
  {
    "jp": "模様",
    "read": "[모요우] moyou",
    "kr": "pattern, figure, design",
    "icon": "👋"
  },
  {
    "jp": "税",
    "read": "[제-] zei",
    "kr": "",
    "icon": "⭕"
  },
  {
    "jp": "触れる",
    "read": "[후레루] fureru",
    "kr": "to touch, to be touched, to touch on a subject, to feel, to violate (law, copyright, etc.), to perceive, t",
    "icon": "❌"
  },
  {
    "jp": "直ちに",
    "read": "[타다치니] tadachini",
    "kr": "at once, immediately, directly, in person",
    "icon": "🍣"
  },
  {
    "jp": "断る",
    "read": "[코토와루] kotowaru",
    "kr": "to refuse, to decline, to dismiss",
    "icon": "🐱"
  },
  {
    "jp": "何",
    "read": "[나니] nani",
    "kr": "what",
    "icon": "🐶"
  },
  {
    "jp": "経つ",
    "read": "[헤츠] hetsu",
    "kr": "to pass, to lapse",
    "icon": "📚"
  },
  {
    "jp": "張る",
    "read": "[하루] haru",
    "kr": "to stick, to paste",
    "icon": "🏫"
  },
  {
    "jp": "土曜",
    "read": "[도요우] doyou",
    "kr": "Saturday",
    "icon": "📝"
  },
  {
    "jp": "服装",
    "read": "[후쿠소-] fukusou",
    "kr": "garments",
    "icon": "🏃"
  },
  {
    "jp": "塵",
    "read": "[치리] chiri",
    "kr": "dust, dirt",
    "icon": "🗣️"
  },
  {
    "jp": "河",
    "read": "[카와] kawa",
    "kr": "river, stream",
    "icon": "💭"
  },
  {
    "jp": "議会",
    "read": "[기카이] gikai",
    "kr": "Diet, congress, parliament",
    "icon": "🌟"
  },
  {
    "jp": "できる",
    "read": "[데키루] dekiru",
    "kr": "to be able to, to be ready, to occur",
    "icon": "💡"
  },
  {
    "jp": "発表",
    "read": "[합표우] happyou",
    "kr": "announcement, publication",
    "icon": "✅"
  },
  {
    "jp": "勤め",
    "read": "[츠토메] tsutome",
    "kr": "(1) service, duty, business, responsibility, task, (2) Buddhist religious services",
    "icon": "🎌"
  },
  {
    "jp": "影響",
    "read": "[에-쿄우] eikyou",
    "kr": "influence, effect",
    "icon": "☀️"
  },
  {
    "jp": "実行",
    "read": "[직코-] jikkou",
    "kr": "practice, performance, execution (e.g. program), realization",
    "icon": "🙏"
  },
  {
    "jp": "素",
    "read": "[모토] moto",
    "kr": "prime",
    "icon": "👋"
  },
  {
    "jp": "髪の毛",
    "read": "[카미노케] kaminoke",
    "kr": "hair (head)",
    "icon": "⭕"
  },
  {
    "jp": "およそ",
    "read": "[오요소] oyoso",
    "kr": "about, roughly, as a rule, approximately",
    "icon": "❌"
  },
  {
    "jp": "宿",
    "read": "[야도] yado",
    "kr": "inn, lodging",
    "icon": "🍣"
  },
  {
    "jp": "ずっと",
    "read": "[즛토] zutto",
    "kr": "consecutively, throughout, a lot",
    "icon": "🐱"
  },
  {
    "jp": "撃つ",
    "read": "[우츠] utsu",
    "kr": "to attack, to defeat, to destroy",
    "icon": "🐶"
  },
  {
    "jp": "食物",
    "read": "[타베모노] tabemono",
    "kr": "food, foodstuff",
    "icon": "📚"
  },
  {
    "jp": "期待",
    "read": "[키타이] kitai",
    "kr": "expectation, anticipation, hope",
    "icon": "🏫"
  },
  {
    "jp": "健康",
    "read": "[켕코-] kenkou",
    "kr": "health, sound, wholesome",
    "icon": "📝"
  },
  {
    "jp": "インク",
    "read": "[잉쿠] inku",
    "kr": "ink",
    "icon": "🏃"
  },
  {
    "jp": "脇",
    "read": "[와키] waki",
    "kr": "side",
    "icon": "🗣️"
  },
  {
    "jp": "務め",
    "read": "[츠토메] tsutome",
    "kr": "(1) service, duty, (2) Buddhist religious services",
    "icon": "💭"
  },
  {
    "jp": "真似",
    "read": "[마네] mane",
    "kr": "mimicry, imitation, behavior, pretense",
    "icon": "🌟"
  },
  {
    "jp": "銃",
    "read": "[쥬우] juu",
    "kr": "gun",
    "icon": "💡"
  },
  {
    "jp": "心理",
    "read": "[신리] shinri",
    "kr": "mentality",
    "icon": "✅"
  },
  {
    "jp": "代金",
    "read": "[다이킨] daikin",
    "kr": "price, payment, cost, charge",
    "icon": "🎌"
  },
  {
    "jp": "何で",
    "read": "[난데] nande",
    "kr": "Why?, What for?",
    "icon": "☀️"
  },
  {
    "jp": "札",
    "read": "[사츠] satsu",
    "kr": "(1) token, label, (2) ticket, (3) charm",
    "icon": "🙏"
  }
];
