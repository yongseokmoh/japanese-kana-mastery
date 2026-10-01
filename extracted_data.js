const dakutenGroups = [
            { h: ['が','ぎ','ぐ','げ','ご'], k: ['ガ','ギ','グ','ゲ','ゴ'], p: ['가','기','구','게','고'] },
            { h: ['ざ','じ','ず','ぜ','ぞ'], k: ['ザ','ジ','ズ','ゼ','ゾ'], p: ['자','지','즈','제','조'] },
            { h: ['だ','ぢ','づ','で','ど'], k: ['ダ','ヂ','ヅ','デ','ド'], p: ['다','지','즈','데','도'] },
            { h: ['ば','び','ぶ','べ','ぼ'], k: ['バ','ビ','ブ','ベ','ボ'], p: ['바','비','부','베','보'] },
        ];
        const handakutenGroups = [
            { h: ['ぱ','ぴ','ぷ','ぺ','ぽ'], k: ['パ','ピ','プ','ペ','ポ'], p: ['파','피','푸','페','포'] },
        ];
        const youonGroups = [
            { h: ['きゃ','きゅ','きょ'], k: ['キャ','キュ','キョ'], p: ['캬','큐','쿄'] },
            { h: ['しゃ','しゅ','しょ'], k: ['シャ','シュ','ショ'], p: ['샤','슈','쇼'] },
            { h: ['ちゃ','ちゅ','ちょ'], k: ['チャ','チュ','チョ'], p: ['차','추','초'] },
            { h: ['にゃ','にゅ','にょ'], k: ['ニャ','ニュ','ニョ'], p: ['냐','뉴','뇨'] },
            { h: ['ひゃ','ひゅ','ひょ'], k: ['ヒャ','ヒュ','ヒョ'], p: ['햐','휴','효'] },
            { h: ['みゃ','みゅ','みょ'], k: ['ミャ','ミュ','ミョ'], p: ['먀','뮤','묘'] },
            { h: ['りゃ','りゅ','りょ'], k: ['リャ','リュ','リョ'], p: ['랴','류','료'] },
            { h: ['ぎゃ','ぎゅ','ぎょ'], k: ['ギャ','ギュ','ギョ'], p: ['갸','규','교'] },
            { h: ['じゃ','じゅ','じょ'], k: ['ジャ','ジュ','ジョ'], p: ['자','쥬','죠'] },
            { h: ['びゃ','びゅ','びょ'], k: ['ビャ','ビュ','ビョ'], p: ['뱌','뷰','뵤'] },
            { h: ['ぴゃ','ぴゅ','ぴょ'], k: ['ピャ','ピュ','ピョ'], p: ['퍄','퓨','표'] },
        ];

        // ===== RENDER =====
        const app = document.getElementById('app');

        function sectionHeader(icon, title, badge, badgeClass, desc) {
            const el = document.createElement('div');
            el.className = 'section-header';
            el.innerHTML = `
                <div class="section-icon">${icon}</div>
                <div>
                    <div class="section-title">${title}<span class="section-badge ${badgeClass}">${badge}</span></div>
                    <div class="section-desc">${desc}</div>
                </div>`;
            return el;
        }

        function renderGroup(group, isYouon) {
            const wrap = document.createElement('div');
            wrap.className = 'row-group';
            ['h','k','p'].forEach((key, idx) => {
                const row = document.createElement('div');
                const typeClass = key === 'h' ? 'hiragana-row' : key === 'k' ? 'katakana-row' : 'pronunciation-row';
                row.className = 'char-row' + (isYouon ? ' col3' : '') + ' ' + typeClass;
                group[key].forEach(char => {
                    const item = document.createElement('div');
                    const colorClass = key === 'h' ? 'hiragana' : key === 'k' ? 'katakana' : 'pronunciation';
                    item.className = char ? `char-item ${isYouon ? 'sm ' : ''}${colorClass}` : 'char-item empty-item';
                    item.textContent = char;
                    if (char && (key === 'h' || key === 'k')) item.onclick = () => playAudio(char);
                    row.appendChild(item);
                });
                wrap.appendChild(row);
            });
            return wrap;
        }

        // Dakuten
        app.appendChild(sectionHeader('゛', '탁음 (濁音)', '탁점', 'badge-dakuten', '청음에 탁점(゛)을 붙여 유성음으로 변환 — か→が, さ→ざ, た→だ, は→ば'));
        dakutenGroups.forEach(g => app.appendChild(renderGroup(g, false)));

        // Handakuten
        app.appendChild(sectionHeader('゜', '반탁음 (半濁音)', '반탁점', 'badge-handakuten', 'は行에 반탁점(゜)을 붙여 파열음 P로 변환 — は→ぱ, ひ→ぴ'));
        handakutenGroups.forEach(g => app.appendChild(renderGroup(g, false)));

        // Youon
        app.appendChild(sectionHeader('ゃ', '요음 (拗音)', '조합음', 'badge-youon', '이단(き・し・ち 등) + 소문자(ゃゅょ) 두 글자 조합으로 한 음절'));
        const youonWrap = document.createElement('div');
        youonWrap.className = 'row-group';
        // Youon: render all groups in one card, each group as 3 rows
        youonGroups.forEach((g, gi) => {
            ['h','k','p'].forEach(key => {
                const row = document.createElement('div');
                const typeClass = key === 'h' ? 'hiragana-row' : key === 'k' ? 'katakana-row' : 'pronunciation-row';
                row.className = 'char-row col3 ' + typeClass;
                if (gi > 0 && key === 'h') row.style.marginTop = '8px';
                g[key].forEach(char => {
                    const item = document.createElement('div');
                    const colorClass = key === 'h' ? 'hiragana' : key === 'k' ? 'katakana' : 'pronunciation';
                    item.className = `char-item sm ${colorClass}`;
                    item.textContent = char;
                    if (key === 'h' || key === 'k') item.onclick = () => playAudio(char);
                    row.appendChild(item);
                });
                youonWrap.appendChild(row);
            });
        });
        app.appendChild(youonWrap);

        // Special sounds
        app.appendChild(sectionHeader('✦', '특수 음 (特殊音)', '필수', 'badge-special', '일본어 읽기에 자주 등장하는 특수 발음 표기'));

        const specials = [
            {
                kana: 'っ / ッ',
                title: '촉음 (促音)',
                subtitle: '작은 っ / ッ — 다음 자음을 짧게 끊어 읽음',
                desc: '다음에 오는 자음을 두 번 발음하듯 잠깐 멈추는 효과입니다. 한국어의 받침 감각과 유사합니다.',
                examples: [
                    { kana: 'きって', mean: '기떼 — 우표 (kitte)' },
                    { kana: 'ざっし', mean: '잣시 — 잡지 (zasshi)' },
                    { kana: 'バッグ', mean: '밧구 — 가방 (baggu)' },
                ]
            },
            {
                kana: 'ー',
                title: '장음 부호 (長音符)',
                subtitle: '카타카나 전용 — 직전 모음을 길게 늘여 읽음',
                desc: '카타카나 단어에서 이전 모음을 길게 늘이는 기호입니다. 히라가나는 모음 자체를 반복합니다 (おかあさん).',
                examples: [
                    { kana: 'コーヒー', mean: '코히 — 커피 (kōhī)' },
                    { kana: 'ケーキ', mean: '케키 — 케이크 (kēki)' },
                    { kana: 'スーパー', mean: '스파 — 슈퍼 (sūpā)' },
                ]
            },
        ];