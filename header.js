const AppHeader = {
    init: function(options) {
        this.title = options.title || document.title;
        
        // Find existing toggles in the page
        const existingToggles = document.getElementById('page-specific-toggles');
        const togglesHtml = existingToggles ? existingToggles.innerHTML : '';
        if (existingToggles) existingToggles.remove();
        
        const isDarkMode = localStorage.getItem('darkMode') === '1';
        if (isDarkMode) document.body.classList.add('dark-mode');

        const navItems = [
            { id: 'index', name: '가나', href: 'index.html' },
            { id: 'kanji', name: '한자', href: 'kanji.html' },
            { id: 'quiz', name: '퀴즈', href: 'quiz.html' },
            { id: 'vocab', name: '단어', href: 'vocab.html' },
            { id: 'stations', name: '전철', href: 'stations.html' },
            { id: 'dashboard', name: '보드', href: 'dashboard.html' },
            { id: 'grammar', name: '문법', href: 'grammar.html' }
        ];

        // Determine active nav
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        let navHtml = '';
        navItems.forEach(item => {
            const isActive = currentPath === item.href ? 'active' : '';
            navHtml += `<a href="${item.href}" class="nav-item ${isActive}">${item.name}</a>`;
        });

        const headerHtml = `
            <div class="unified-header" id="unified-header">
                <div class="uh-top-row">
                    <div class="uh-title">${this.title}</div>
                    <button class="uh-menu-btn" id="uh-menu-btn" onclick="AppHeader.toggleMenu()">
                        <span class="uh-menu-icon">☰</span> 옵션
                    </button>
                </div>
                <div class="uh-collapsible" id="uh-collapsible" style="display: none;">
                    <div class="uh-nav">
                        ${navHtml}
                    </div>
                    ${togglesHtml ? `<div class="uh-toggles">${togglesHtml}</div>` : ''}
                    <div class="uh-footer">
                        <span>v261002 R3</span>
                        <button class="uh-dark-btn" onclick="AppHeader.toggleDarkMode()" id="uh-dark-btn">
                            ${isDarkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        const styleHtml = `
            <style>
                :root {
                    --uh-bg: rgba(255, 255, 255, 0.95);
                    --uh-border: #e9ecef;
                    --uh-text: #343a40;
                    --uh-primary: #4dabf7;
                }
                body.dark-mode {
                    --uh-bg: rgba(30, 30, 30, 0.95);
                    --uh-border: #444;
                    --uh-text: #e0e0e0;
                }
                
                body {
                    padding-top: 70px !important; /* Adjust body padding for thin header */
                }

                .unified-header {
                    position: fixed;
                    top: 0; left: 0; width: 100%;
                    background: var(--uh-bg);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
                    z-index: 1000;
                    font-family: -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif;
                    color: var(--uh-text);
                    transition: all 0.3s ease;
                }

                .uh-top-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 15px;
                    height: 50px;
                    box-sizing: border-box;
                }

                .uh-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--uh-text);
                }

                .uh-menu-btn {
                    background: none;
                    border: 1px solid var(--uh-border);
                    color: var(--uh-text);
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    transition: background 0.2s;
                }
                .uh-menu-btn:hover { background: rgba(128,128,128,0.1); }

                .uh-collapsible {
                    border-top: 1px solid var(--uh-border);
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .uh-nav {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .nav-item {
                    padding: 6px 14px;
                    border-radius: 20px;
                    text-decoration: none;
                    color: var(--uh-text);
                    font-size: 13px;
                    font-weight: 500;
                    background: rgba(128,128,128,0.1);
                    border: 1px solid transparent;
                    transition: all 0.2s;
                }
                .nav-item.active {
                    background: var(--uh-primary);
                    color: white;
                }

                .uh-toggles {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding-top: 10px;
                    border-top: 1px dashed var(--uh-border);
                }
                
                /* Toggles reuse existing button styling from pages */
                .toggle-btn, .tab-btn {
                    background: rgba(128,128,128,0.1);
                    border: 1px solid var(--uh-border);
                    color: var(--uh-text);
                    padding: 8px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .toggle-btn.active, .tab-btn.active {
                    background: var(--uh-primary);
                    color: white;
                    border-color: var(--uh-primary);
                }

                .uh-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 11px;
                    color: #868e96;
                    padding-top: 10px;
                    border-top: 1px solid var(--uh-border);
                }
                
                .uh-dark-btn {
                    background: none; border: none; color: inherit; font-size: 12px; cursor: pointer; padding: 0;
                }
                
                .audio-hint {
                    text-align: center; font-size: 11px; color: #ff6b6b; margin-top: 5px;
                }
            </style>
        `;

        document.head.insertAdjacentHTML('beforeend', styleHtml);
        
        const mountPoint = document.getElementById('app-header-mount');
        if (mountPoint) {
            mountPoint.innerHTML = headerHtml;
        } else {
            document.body.insertAdjacentHTML('afterbegin', headerHtml);
        }
    },
    
    toggleMenu: function() {
        const menu = document.getElementById('uh-collapsible');
        if (menu.style.display === 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    },
    
    toggleDarkMode: function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? '1' : '0');
        const btn = document.getElementById('uh-dark-btn');
        if (btn) btn.textContent = isDark ? '☀️ 라이트 모드' : '🌙 다크 모드';
    }
};
