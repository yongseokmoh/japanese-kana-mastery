import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

# First, remove the broken Dakuten injection if it exists, to re-inject properly.
# Actually, the injection was just the logic. Let's see if we can just inject the variables right after `const data = [...];`

dakuten_data_str = """
        const dakutenGroups = [
            { h: ['が','ぎ','ぐ','げ','ご'], k: ['ガ','ギ','グ','ゲ','ゴ'], p: ['가','기','구','게','고'] },
            { h: ['ざ','じ','ず','ぜ','ぞ'], k: ['ザ','ジ','ズ','ゼ','ゾ'], p: ['자(자/쟈)','지(찌/지)','즈(쥬/즈)','제(제/졔)','조(조/죠)'] },
            { h: ['だ','ぢ','づ','で','ど'], k: ['ダ','ヂ','ヅ','デ','ド'], p: ['다','지','즈','데','도'] },
            { h: ['ば','び','ぶ','べ','ぼ'], k: ['バ','ビ','ブ','ベ','ボ'], p: ['바','비','부','베','보'] },
        ];
        const handakutenGroups = [
            { h: ['ぱ','ぴ','ぷ','ぺ','ぽ'], k: ['パ','ピ','プ','ペ','ポ'], p: ['파(빠)','피(삐)','푸(뿌)','페(뻬)','포(뽀)'] },
        ];
        const youonGroups = [
            { h: ['きゃ','きゅ','きょ'], k: ['キャ','キュ','キョ'], p: ['캬(꺄)','큐(뀨)','쿄(꾜)'] },
            { h: ['しゃ','しゅ','しょ'], k: ['シャ','シュ','ショ'], p: ['샤','슈','쇼'] },
            { h: ['ちゃ','ちゅ','ちょ'], k: ['チャ','チュ','チョ'], p: ['차(짜)','추(쭈)','초(쪼)'] },
            { h: ['にゃ','にゅ','にょ'], k: ['ニャ','ニュ','ニョ'], p: ['냐','뉴','뇨'] },
            { h: ['ひゃ','ひゅ','ひょ'], k: ['ヒャ','ヒュ','ヒョ'], p: ['햐','휴','효'] },
            { h: ['みゃ','みゅ','みょ'], k: ['ミャ','ミュ','ミョ'], p: ['먀','뮤','묘'] },
            { h: ['りゃ','りゅ','りょ'], k: ['リャ','リュ','リョ'], p: ['랴','류','료'] },
            { h: ['ぎゃ','ぎゅ','ぎょ'], k: ['ギャ','ギュ','ギョ'], p: ['갸','규','교'] },
            { h: ['じゃ','じゅ','じょ'], k: ['ジャ','ジュ','ジョ'], p: ['자(쟈)','쥬','죠'] },
            { h: ['びゃ','びゅ','びょ'], k: ['ビャ','ビュ','ビョ'], p: ['뱌','뷰','뵤'] },
            { h: ['ぴゃ','ぴゅ','ぴょ'], k: ['ピャ','ピュ','ピョ'], p: ['퍄(뺘)','퓨(쀼)','표(뾰)'] },
        ];
"""

# Check if dakutenGroups is already defined
if "const dakutenGroups" not in idx_content:
    # Insert right after `const data = [ ... ];`
    # Let's find the end of `const data`
    match = re.search(r'const data = \[.*?\];', idx_content, re.DOTALL)
    if match:
        idx_content = idx_content[:match.end()] + "\n" + dakuten_data_str + idx_content[match.end():]
        print("Injected dakuten variables.")

# Since I missed `// Special sounds` logic entirely (it was after `// Special sounds`), let's inject it at the end of the script!
# Wait, let's see if the special sounds logic is in index.html.
if "specials =" not in idx_content:
    specials_js = """
        // Special sounds
        const sectionHeaderSpec = (icon, title, badge, badgeClass, desc) => {
            const el = document.createElement('div');
            el.className = 'section-header';
            el.innerHTML = `
                <div class="section-icon">${icon}</div>
                <div>
                    <div class="section-title">${title}<span class="section-badge ${badgeClass}">${badge}</span></div>
                    <div class="section-desc">${desc}</div>
                </div>`;
            return el;
        };
        app.appendChild(sectionHeaderSpec('✦', '특수 음 (特殊音)', '필수', 'badge-special', '일본어 읽기에 자주 등장하는 특수 발음 표기'));

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
            }
        ];
        
        specials.forEach(s => {
            const card = document.createElement('div');
            card.className = 'special-card';
            
            let html = `
                <div class="special-kana">${s.kana}</div>
                <div class="special-info">
                    <div class="special-title">${s.title}</div>
                    <div class="special-subtitle">${s.subtitle}</div>
                    <div class="special-desc">${s.desc}</div>
                </div>
                <div class="special-examples">
            `;
            s.examples.forEach(ex => {
                html += `
                    <div class="special-example">
                        <span class="ex-kana">${ex.kana}</span>
                        <span class="ex-mean">${ex.mean}</span>
                    </div>
                `;
            });
            html += '</div>';
            card.innerHTML = html;
            app.appendChild(card);
        });
"""
    # Insert before `const state = {`
    state_match = re.search(r'const state = \{', idx_content)
    if state_match:
        idx_content = idx_content[:state_match.start()] + specials_js + "\n        " + idx_content[state_match.start():]
        print("Injected specials logic.")

# Lastly, check if `renderGroup` is defined in index.html.
# In `dak_js`, it called `renderGroup(g, false)`. But wait, did I copy `renderGroup`?
# In `dakuten.html`, `renderGroup` was defined. Let's see if it's in index.html.
if "function renderGroup" not in idx_content:
    renderGroup_js = """
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
"""
    # Insert before `app.appendChild(sectionHeader('゛'`
    header_match = re.search(r'app\.appendChild\(sectionHeader\(\'゛\'', idx_content)
    if header_match:
        idx_content = idx_content[:header_match.start()] + renderGroup_js + "\n        " + idx_content[header_match.start():]
        print("Injected renderGroup function.")

# Wait, `sectionHeader` function is also needed!
if "function sectionHeader(" not in idx_content:
    sectionHeader_js = """
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
"""
    header_match = re.search(r'app\.appendChild\(sectionHeader\(\'゛\'', idx_content)
    if header_match:
        idx_content = idx_content[:header_match.start()] + sectionHeader_js + "\n        " + idx_content[header_match.start():]
        print("Injected sectionHeader function.")


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx_content)

print("index.html fully repaired and pronunciation updated.")
