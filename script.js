/* =============================================
   PORTFOLIO JS — RAJAOFERASON Hajatiana
   Amélioré : EmailJS, thème, filtres, terminal interactif, compteur
   ============================================= */

// --- Configuration EmailJS (à remplacer par vos identifiants) ---
const EMAILJS_PUBLIC_KEY = 'Rz_D79lidq5JvlOXx';     // https://dashboard.emailjs.com/admin/integration
const EMAILJS_SERVICE_ID  = 'service_hdgqi4a';
const EMAILJS_TEMPLATE_ID = 'template_t4ieobq';

// Initialisation EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// --- Boot Screen ---
window.addEventListener('load', () => {
    const boot = document.getElementById('boot-screen');
    setTimeout(() => {
        boot.style.opacity = '0';
        setTimeout(() => boot.style.display = 'none', 600);
    }, 2900);
});

// --- Network Canvas Background (optimisé) ---
const canvas = document.getElementById('network-bg');
const ctx = canvas.getContext('2d');
let nodes = [];
let animationId;

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

function initNodes() {
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 0.8,
        pulse: Math.random() * Math.PI * 2
    }));
}

function drawNetwork() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const maxDist = 150;

    nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        n.pulse += 0.018;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        const pf = 0.6 + 0.4 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pf, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${0.35 * pf})`;
        ctx.fill();
    });

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(0,212,255,${(1 - dist / maxDist) * 0.2})`;
                ctx.lineWidth = 0.7;
                ctx.stroke();
            }
        }
    }
    animationId = requestAnimationFrame(drawNetwork);
}

resizeCanvas();
initNodes();
drawNetwork();
window.addEventListener('resize', () => { resizeCanvas(); initNodes(); });

// --- Typing Effect (support multi-langues) ---
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function getCurrentPhrases() {
    return (window._currentPhrases && window._currentPhrases.length)
        ? window._currentPhrases
        : [
            "Technicien Support IT N2\nRéseaux & Systèmes",
            "Virtualisation ·\nSupervision · Sécurité",
            "Linux · Windows Server\nDocker · Wazuh · Grafana"
          ];
}

function typeLoop() {
    if (!typedEl) return;
    const phrases = getCurrentPhrases();
    const current = phrases[phraseIdx];
    typedEl.textContent = isDeleting
        ? current.slice(0, charIdx--)
        : current.slice(0, charIdx++);

    if (!isDeleting && charIdx > current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2200);
        return;
    }
    if (isDeleting && charIdx < 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(typeLoop, 500);
        return;
    }
    setTimeout(typeLoop, isDeleting ? 32 : 65);
}
setTimeout(typeLoop, 3300);

// --- Terminal Widget (statique) ---
const termLines = [
    { delay: 3400, html: `<span class="cmd">$ ping -c 3 192.168.1.1</span>` },
    { delay: 3700, html: `<span class="out">PING 192.168.1.1: 56 data bytes</span>` },
    { delay: 3950, html: `<span class="out ok">64 bytes: icmp_seq=0 ttl=64 <span class="val">time=0.6ms</span></span>` },
    { delay: 4200, html: `<span class="out ok">--- 3 packets tx, 3 rcv, <span class="val">0% loss</span> ---</span>` },
    { delay: 4700, html: `<span class="cmd">$ systemctl status wazuh-manager</span>` },
    { delay: 5000, html: `<span class="out ok">● wazuh-manager.service - <span class="val">active (running)</span></span>` },
    { delay: 5200, html: `<span class="out">   Agents connected: <span class="val">3</span> | Alerts today: <span class="val">12</span></span>` },
    { delay: 5800, html: `<span class="cmd">$ docker ps --format "{{.Names}}"</span>` },
    { delay: 6100, html: `<span class="out val">wazuh-manager</span>` },
    { delay: 6250, html: `<span class="out val">grafana</span>` },
    { delay: 6400, html: `<span class="out val">prometheus</span>` },
    { delay: 6900, html: `<span class="cmd">$ tail -n 2 /var/log/fail2ban.log</span>` },
    { delay: 7150, html: `<span class="out warn">WARN: 5 failed SSH from 185.220.x.x</span>` },
    { delay: 7350, html: `<span class="out ok">INFO: 185.220.x.x auto-banned ✓</span>` },
];
const termBody = document.getElementById('terminal-output');
termLines.forEach(({ delay, html }) => {
    setTimeout(() => {
        if (!termBody) return;
        const div = document.createElement('div');
        div.className = 't-line';
        div.innerHTML = html;
        termBody.appendChild(div);
        termBody.scrollTop = termBody.scrollHeight;
    }, delay);
});

// --- Scroll Reveal ---
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 75);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// --- Skill Bars ---
const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                bar.style.width = bar.dataset.level + '%';
            });
            barObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => barObs.observe(el));

// --- Counter Animation ---
const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.stat-val').forEach(el => {
            const target = parseInt(el.dataset.target);
            let current = 0;
            const step = Math.ceil(target / 38);
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = current;
                if (current >= target) clearInterval(timer);
            }, 40);
        });
        counterObs.unobserve(entry.target);
    });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObs.observe(heroStats);

// --- Navbar shadow ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// --- CTA button ---
document.getElementById('cta')?.addEventListener('click', () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});

// --- Smooth anchor nav ---
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Contact Form avec EmailJS ---
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = translations[currentLang]?.form_sending || 'Envoi...';
    btn.disabled = true;
    feedback.className = '';
    feedback.style.display = 'none';

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            from_name: nom,
            from_email: email,
            message: message,
        });
        feedback.className = 'success';
        feedback.textContent = translations[currentLang]?.form_success || 'Message envoyé !';
        form.reset();
    } catch (error) {
        console.error('EmailJS error:', error);
        feedback.className = 'error';
        feedback.textContent = translations[currentLang]?.form_error || 'Erreur lors de l\'envoi.';
    } finally {
        feedback.style.display = 'block';
        btnText.textContent = translations[currentLang]?.form_btn || 'Envoyer le message';
        btn.disabled = false;
    }
});

// --- Mode clair/sombre ---
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.add('light-mode');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
    });
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
}

// --- Filtres projets ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const expCard = document.querySelector('.exp-card'); // stage card

function filterProjects(category) {
    if (expCard) {
        if (category === 'all' || category === 'stage') expCard.style.display = '';
        else expCard.style.display = 'none';
    }
    projectCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterProjects(filter);
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
// initialisation : tout afficher
filterProjects('all');

// --- Terminal interactif (commandes simulées) ---
const termInput = document.getElementById('term-input');
const termOutputDiv = document.getElementById('term-output-interactive');

const commands = {
    help: () => "Commandes disponibles : help, skills, projects, contact, clear, about, whoami",
    skills: () => "Compétences : Linux, Windows Server, Docker, Wazuh, Grafana, Bacula, Fail2ban, UFW, VMware, Active Directory, GLPI, ManageEngine, HTML/CSS/JS, PHP, Python",
    projects: () => "Projets : Bacula backup, NAS local, Hardening Linux, Grafana/Prometheus, Wazuh SIEM, Portfolio web. Détails dans la section Projets.",
    contact: () => "Email : tianahaja11@gmail.com | Tél : 038 81 963 83",
    about: () => "Technicien Support IT N2, passionné réseaux, systèmes et sécurité. Disponible pour opportunités.",
    whoami: () => "RAJAOFERASON Hajatiana — Support IT & Réseaux",
    clear: () => { termOutputDiv.innerHTML = ''; return ''; }
};

termInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const input = termInput.value.trim();
        if (!input) return;
        // Afficher la commande
        const lineCmd = document.createElement('div');
        lineCmd.className = 't-line';
        lineCmd.innerHTML = `<span class="prompt">hajatiana@portfolio:~$</span> ${input}`;
        termOutputDiv.appendChild(lineCmd);
        // Traiter la commande
        const cmdKey = input.split(' ')[0].toLowerCase();
        let response = commands[cmdKey] ? commands[cmdKey]() : `Commande inconnue : ${input}. Tapez 'help'.`;
        if (response) {
            const lineResp = document.createElement('div');
            lineResp.className = 't-line';
            lineResp.innerHTML = `<span class="out">${response}</span>`;
            termOutputDiv.appendChild(lineResp);
        }
        termOutputDiv.scrollTop = termOutputDiv.scrollHeight;
        termInput.value = '';
    }
});

// --- Compteur de visites (CountAPI) ---
fetch('https://api.countapi.xyz/hit/hajatiana-portfolio/visits')
    .then(res => res.json())
    .then(data => {
        const visitorSpan = document.getElementById('visitor-count');
        if (visitorSpan) visitorSpan.textContent = data.value;
    })
    .catch(err => console.warn('CountAPI error:', err));
