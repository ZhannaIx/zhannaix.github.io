// Данные кейсов
const projectsData = {
    ru: [
        {
            icon: "🎵",
            tags: ["XR Experience", "Unity", "Azure Kinect", "AI Roadmap"],
            title: "XR Conducting System",
            desc: "Концепция и архитектура иммерсивной XR-системы, где жест становится инструментом, а пользователь — дирижёром. От идеи до прототипа, включая жестовую механику, сценарий и AI-стратегию развития.",
            result: "✦ Концепт → прототип",
            role: "Роль: XR Experience Architect, Concept Creator"
        },
        {
            icon: "🏛️",
            tags: ["VR Heritage", "Коммерческий запуск", "Product Owner"],
            title: "VR Замок Кёнигсберг",
            desc: "Полный цикл продуктовой разработки коммерческого VR-опыта: стратегия, архитектура, монетизация. Гибридный пайплайн, синхронный мультиплеер, ROI 150%+ в первый квартал.",
            result: "↑ ROI 150%+",
            role: "Роль: XR Product Owner, Systems Architect"
        },
        {
            icon: "🎨",
            tags: ["GenAI", "Projection Mapping", "Культурный лендмарк"],
            title: "VR/XR Шедевры русских художников",
            desc: "Концептуальная и техническая архитектура городской иммерсивной проекции с GenAI-анимацией полотен. Доктрина «ожившей живописи», 100 000+ зрителей.",
            result: "★ 100k+ зрителей",
            role: "Роль: XR Concept Architect, Cultural Systems Designer"
        },
        {
            icon: "🧠",
            tags: ["AI Avatar", "EdTech", "Digital Health", "IEEE"],
            title: "Адаптивный AI-аватар для EQ",
            desc: "Концепция и архитектура AI-системы эмоционального зеркалирования для детей. Взаимодействие через mimics и self-recognition. Основа для публикации IEEE.",
            result: "✦ Валидация завершена",
            role: "Роль: AI Interaction Architect, Product Owner"
        },
        {
            icon: "🏰",
            tags: ["VR/AR", "Культурное наследие", "Нарративный дизайн"],
            title: "Дом Канта: Загадка разума",
            desc: "Архитектура двухплатформенной иммерсивной системы: VR-квест + AR-гид. Кантианская философия, встроенная в интерактивную механику и пространственный нарратив.",
            result: "✦ Pre-production завершён",
            role: "Роль: XR Concept Architect, Narrative Systems Designer"
        },
        {
            icon: "🎓",
            tags: ["VR Education", "Геймификация", "Product Owner"],
            title: "VR Quest «4 Rooms»",
            desc: "Модульная архитектура VR-оценки знаний. Фреймворк «предмет как комната», геймификация учебных целей. Пилот валидирован.",
            result: "↑ Вовлечённость студентов",
            role: "Роль: XR Product Owner, Gamification Architect"
        }
    ],
    en: [
        {
            icon: "🎵",
            tags: ["XR Experience", "Unity", "Azure Kinect", "AI Roadmap"],
            title: "XR Conducting System",
            desc: "Concept and architecture of an immersive XR system where gesture becomes the instrument and the user is the conductor. From idea to prototype: interaction logic, scenario design, and AI evolution strategy.",
            result: "✦ Concept to prototype",
            role: "Role: XR Experience Architect, Concept Creator"
        },
        {
            icon: "🏛️",
            tags: ["VR Heritage", "Commercial Launch", "Product Owner"],
            title: "VR Königsberg Royal Castle",
            desc: "End-to-end product development of a commercial VR heritage experience: strategy, system architecture, monetization. Hybrid pipeline, synchronous multiplayer, 150%+ ROI in Q1.",
            result: "↑ ROI 150%+",
            role: "Role: XR Product Owner, Systems Architect"
        },
        {
            icon: "🎨",
            tags: ["GenAI", "Projection Mapping", "Cultural Landmark"],
            title: "Masterpieces of Russian Artists",
            desc: "Conceptual and technical architecture for a city-scale immersive projection with GenAI-animated paintings. 'Living Painting' doctrine. 100,000+ visitors.",
            result: "★ 100k+ visitors",
            role: "Role: XR Concept Architect, Cultural Systems Designer"
        },
        {
            icon: "🧠",
            tags: ["AI Avatar", "EdTech", "Digital Health", "IEEE"],
            title: "Adaptive AI Avatar for EQ",
            desc: "Concept and architecture of an AI-driven emotional mirroring system for children. Mimicry-based interaction and self-recognition. Foundation for IEEE publication.",
            result: "✦ Validation complete",
            role: "Role: AI Interaction Architect, Product Owner"
        },
        {
            icon: "🏰",
            tags: ["VR/AR", "Cultural Heritage", "Narrative Design"],
            title: "The House of Kant: A Riddle of Reason",
            desc: "Architecture of a dual-platform immersive system: VR quest + AR city guide. Kantian philosophy embodied into spatial narrative and interactive mechanics.",
            result: "✦ Pre-production complete",
            role: "Role: XR Concept Architect, Narrative Systems Designer"
        },
        {
            icon: "🎓",
            tags: ["VR Education", "Gamification", "Product Owner"],
            title: "VR Quest \"4 Rooms\"",
            desc: "Modular VR assessment architecture. \"Subject-as-Room\" framework, gamified learning objectives. Pilot validated.",
            result: "↑ Student engagement",
            role: "Role: XR Product Owner, Gamification Architect"
        }
    ]
};

let currentLang = 'ru';

// Отрисовка кейсов
function renderProjects(lang) {
    const grid = document.getElementById('workGrid');
    const projects = projectsData[lang];
    
    grid.innerHTML = projects.map(p => `
        <article class="work-card">
            <div class="work-card-image">
                <div class="work-placeholder">
                    <span class="placeholder-icon">${p.icon}</span>
                </div>
            </div>
            <div class="work-card-content">
                <div class="work-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}
                </div>
                <h3 class="work-title">${p.title}</h3>
                <p class="work-description">${p.desc}</p>
                <div class="work-meta">
                    <span class="work-result">${p.result}</span>
                    <span class="work-role">${p.role}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Переключение языка
function switchLang(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-ru][data-en]').forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });
    
    document.querySelectorAll('[data-ru-placeholder][data-en-placeholder]').forEach(el => {
        el.placeholder = lang === 'ru' ? el.dataset.ruPlaceholder : el.dataset.enPlaceholder;
    });
    
    renderProjects(lang);
    localStorage.setItem('lang', lang);
}

// Обработчики языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

// Мобильное меню
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Форма
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const messages = {
        ru: 'Спасибо! Я свяжусь с вами в ближайшее время 🚀',
        en: 'Thank you! I\'ll get back to you soon 🚀'
    };
    alert(messages[currentLang]);
    this.reset();
});

// Анимация карточек
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

setTimeout(() => {
    document.querySelectorAll('.work-card, .detail-block').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}, 100);

// Инициализация
const savedLang = localStorage.getItem('lang') || 'ru';
switchLang(savedLang);
renderProjects(savedLang);
