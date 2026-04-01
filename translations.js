// ============================================================
//  translations.js — Portfolio RAJAOFERASON Hajatiana
//  Langues : Français (fr) | Anglais (en)
// ============================================================

const translations = {

  // ─────────────────────────────────────────────
  //  FRANÇAIS
  // ─────────────────────────────────────────────
  fr: {
    // Boot screen
    boot_line1: "Initialisation du système... [OK]",
    boot_line2: "Chargement des modules réseau... [OK]",
    boot_line3: "Authentification sécurisée... [OK]",
    boot_line4: "Démarrage du portfolio... [OK]",

    // Navigation
    nav_about:      "À propos",
    nav_skills:     "Compétences",
    nav_projects:   "Projets",
    nav_education:  "Formation",
    nav_contact:    "Contact",

    // Hero
    hero_title:     "// TECHNICIEN SUPPORT IT N2 · RÉSEAUX & SYSTÈMES",
    hero_subtitle:  "Infrastructure · Sécurité · Virtualisation · Supervision",
    hero_stat_months:   "Mois de stage",
    hero_stat_projects: "Projets réalisés",
    hero_stat_tools:    "+ Outils maîtrisés",
    hero_btn_projects:  "Voir mes projets",
    hero_btn_contact:   "Me contacter",

    // About
    section_about:  "À propos",
    about_p1: "Technicien informatique passionné par l'administration réseaux et systèmes, avec une expérience en support IT niveau 2, gestion d'incidents et maintenance d'infrastructure serveur.",
    about_p2: "Compétent dans la configuration réseau, le dépannage, la sécurisation des systèmes Linux/Windows, la virtualisation et le monitoring. À la recherche d'une opportunité pour mettre en œuvre ces compétences dans un environnement professionnel stimulant.",
    about_location:      "Localisation",
    about_location_val:  "Antananarivo, Madagascar",
    about_availability:      "Disponibilité",
    about_availability_val:  "Disponible",
    about_level:     "Niveau",
    about_level_val: "Junior — 1ère expérience",
    about_degree:     "Formation",
    about_degree_val: "Licence L3 Réseaux & Systèmes",
    about_os:         "OS",
    about_os_val:     "Linux (Debian/Ubuntu/Kali) · Windows Server",

    // Skills
    section_skills: "Compétences Techniques",
    skills_virt:    "Virtualisation & OS",
    skills_sec:     "Sécurité & Hardening",
    skills_sup:     "Supervision & Serveurs",
    skills_dev:     "Support & Développement",

    // Projects & Experience
    section_projects: "Projets & Expériences",
    proj1_type:     "Stage IT N2",
    proj1_company:  "Be Ys Outsourcing Services Madagascar",
    proj1_date:     "Juillet 2025 – Janvier 2026 · Antananarivo",
    proj1_desc: [
      "Dépannage logiciel et diagnostic des ordinateurs et serveurs",
      "Support utilisateur N2, gestion des incidents et des tickets via ManageEngine IT Helpdesk",
      "Suivi et résolution des tickets dans les délais SLA définis"
    ],
    proj2_type:  "Mémoire L3 · 2025",
    proj2_title: "Serveur de Sauvegarde Bacula",
    proj2_desc:  "Déploiement d'un serveur de sauvegarde sous Linux avec Bacula Community : installation, configuration des jobs, restauration et planification automatique.",
    proj2_badge1: "↗ Sauvegarde auto",
    proj2_badge2: "↗ Restore testé",
    proj3_type:  "Homelab · 2024",
    proj3_title: "Serveur NAS Local",
    proj3_desc:  "Mise en place d'un serveur NAS en local connecté au réseau local, permettant à plusieurs utilisateurs et appareils d'accéder, stocker et partager des fichiers de façon centralisée via Ethernet ou Wi-Fi.",
    proj3_badge1: "↗ Multi-devices",
    proj3_badge2: "↗ Stockage centralisé",
    proj4_type:  "Sécurité · Homelab · 2024",
    proj4_title: "Hardening Serveurs Linux",
    proj4_desc:  "Politique de durcissement en local incluant l'authentification par clés SSH, la protection anti brute-force via Fail2ban et le filtrage réseau avec UFW.",
    proj4_badge1: "↗ Brute-force bloqué",
    proj4_badge2: "↗ Auth par clés",
    proj5_type:  "Monitoring · Homelab · 2024",
    proj5_title: "Stack Monitoring Grafana/Prometheus",
    proj5_desc:  "Déploiement d'une stack Grafana/Prometheus avec Node Exporter en local : supervision en temps réel des métriques système (CPU, Disque, RAM, Réseau) et dashboards personnalisés.",
    proj5_badge1: "↗ Temps réel",
    proj5_badge2: "↗ Dashboard custom",
    proj6_type:  "SIEM · Homelab · 2024",
    proj6_title: "SIEM Wazuh via Docker",
    proj6_desc:  "Déploiement et configuration d'un SIEM Wazuh via Docker en local : centralisation des événements de sécurité, détection de vulnérabilités CVE, surveillance d'intégrité des fichiers (FIM) et corrélation d'alertes avec le framework MITRE ATT&CK.",
    proj6_badge1: "↗ CVE détecté",
    proj6_badge2: "↗ MITRE corrélé",
    proj7_type:  "Projet Personnel · Web · 2025",
    proj7_title: "Conception de ce Portfolio",
    proj7_desc:  "Conception et développement complet de ce portfolio personnel en HTML5, CSS3, JavaScript et PHP — sans framework : animation Canvas réseau, boot screen, terminal interactif, SVG animés, scroll reveal, barres de compétences, et formulaire de contact sécurisé via PHP natif.",
    proj7_badge1: "↗ 100% Vanilla",
    proj7_badge2: "↗ Responsive",
    proj7_badge3: "↗ Sans framework",

    // Education
    section_education: "Formations & Diplômes",
    edu1_title:  "Licence L3 — Administration Réseaux & Systèmes",
    edu1_school: "CNTEMAD · 2024–2025",
    edu1_badge:  "Obtenu",
    edu2_title:  "Formation Administration Réseaux & Systèmes",
    edu2_school: "Nir'Info Ampefiloha · Mars 2025",
    edu2_badge:  "Obtenu",
    edu3_title:  "Formation Réseaux Informatiques",
    edu3_school: "Nir'Info Ampefiloha · Février 2025",
    edu3_badge:  "Obtenu",
    edu4_title:  "Licence L2 — Informatique",
    edu4_school: "CNTEMAD · 2023–2024",
    edu4_badge:  "Obtenu",
    edu5_title:  "Licence L1 — Informatique",
    edu5_school: "CNTEMAD · 2022–2023",
    edu5_badge:  "Obtenu",
    edu6_title:  "Baccalauréat — Série D",
    edu6_school: "Lycée privé Les Séraphins Itaosy · 2021",
    edu6_badge:  "Obtenu",

    // Contact
    section_contact:  "Me contacter",
    contact_intro:    "Disponible pour un premier emploi ou un stage en administration réseau, systèmes ou cybersécurité à Antananarivo ou à distance.",
    contact_name:     "Nom",
    contact_email:    "Email",
    contact_message:  "Message",
    contact_send:     "Envoyer le message",

    // Form feedback & typing
    form_sending:  "Envoi en cours...",
    form_success:  "✓ Message envoyé avec succès !",
    form_error:    "✗ Erreur lors de l'envoi. Réessayez.",
    form_btn:      "Envoyer le message",
    phrases: [
      "Technicien Support IT N2\nRéseaux & Systèmes",
      "Virtualisation ·\nSupervision · Sécurité",
      "Linux · Windows Server\nDocker · Wazuh · Grafana"
    ],
  },

  // ─────────────────────────────────────────────
  //  ENGLISH
  // ─────────────────────────────────────────────
  en: {
    // Boot screen
    boot_line1: "System initialisation... [OK]",
    boot_line2: "Loading network modules... [OK]",
    boot_line3: "Secure authentication... [OK]",
    boot_line4: "Starting portfolio... [OK]",

    // Navigation
    nav_about:      "About",
    nav_skills:     "Skills",
    nav_projects:   "Projects",
    nav_education:  "Education",
    nav_contact:    "Contact",

    // Hero
    hero_title:     "// IT SUPPORT TECHNICIAN L2 · NETWORKS & SYSTEMS",
    hero_subtitle:  "Infrastructure · Security · Virtualization · Monitoring",
    hero_stat_months:   "Internship Months",
    hero_stat_projects: "Projects Completed",
    hero_stat_tools:    "+ Tools Mastered",
    hero_btn_projects:  "View my projects",
    hero_btn_contact:   "Contact me",

    // About
    section_about:  "About",
    about_p1: "IT technician passionate about network and system administration, with experience in Level 2 IT support, incident management and server infrastructure maintenance.",
    about_p2: "Proficient in network configuration, troubleshooting, Linux/Windows system hardening, virtualization and monitoring. Looking for an opportunity to apply these skills in a stimulating professional environment.",
    about_location:      "Location",
    about_location_val:  "Antananarivo, Madagascar",
    about_availability:      "Availability",
    about_availability_val:  "Available",
    about_level:     "Level",
    about_level_val: "Junior — First experience",
    about_degree:     "Education",
    about_degree_val: "Bachelor's L3 in Networks & Systems",
    about_os:         "OS",
    about_os_val:     "Linux (Debian/Ubuntu/Kali) · Windows Server",

    // Skills
    section_skills: "Technical Skills",
    skills_virt:    "Virtualization & OS",
    skills_sec:     "Security & Hardening",
    skills_sup:     "Monitoring & Servers",
    skills_dev:     "Support & Development",

    // Projects & Experience
    section_projects: "Projects & Experience",
    proj1_type:     "IT Internship L2",
    proj1_company:  "Be Ys Outsourcing Services Madagascar",
    proj1_date:     "July 2025 – January 2026 · Antananarivo",
    proj1_desc: [
      "Software troubleshooting and diagnostics on computers and servers",
      "Level 2 user support, incident and ticket management via ManageEngine IT Helpdesk",
      "Ticket follow-up and resolution within defined SLA timelines"
    ],
    proj2_type:  "Bachelor Thesis · 2025",
    proj2_title: "Bacula Backup Server",
    proj2_desc:  "Deployment of a backup server on Linux using Bacula Community: installation, job configuration, restoration and automated scheduling.",
    proj2_badge1: "↗ Auto backup",
    proj2_badge2: "↗ Restore tested",
    proj3_type:  "Homelab · 2024",
    proj3_title: "Local NAS Server",
    proj3_desc:  "Setup of a local NAS server connected to the home network, enabling multiple users and devices to access, store and share files centrally via Ethernet or Wi-Fi.",
    proj3_badge1: "↗ Multi-devices",
    proj3_badge2: "↗ Centralized storage",
    proj4_type:  "Security · Homelab · 2024",
    proj4_title: "Linux Server Hardening",
    proj4_desc:  "Local hardening policy including SSH key authentication, brute-force protection via Fail2ban and network filtering with UFW.",
    proj4_badge1: "↗ Brute-force blocked",
    proj4_badge2: "↗ Key-based auth",
    proj5_type:  "Monitoring · Homelab · 2024",
    proj5_title: "Grafana/Prometheus Monitoring Stack",
    proj5_desc:  "Local deployment of a Grafana/Prometheus stack with Node Exporter: real-time monitoring of system metrics (CPU, Disk, RAM, Network) and custom dashboards.",
    proj5_badge1: "↗ Real-time",
    proj5_badge2: "↗ Custom dashboard",
    proj6_type:  "SIEM · Homelab · 2024",
    proj6_title: "Wazuh SIEM via Docker",
    proj6_desc:  "Local deployment and configuration of a Wazuh SIEM via Docker: security event centralization, CVE vulnerability detection, File Integrity Monitoring (FIM) and alert correlation with the MITRE ATT&CK framework.",
    proj6_badge1: "↗ CVE detected",
    proj6_badge2: "↗ MITRE correlated",
    proj7_type:  "Personal Project · Web · 2025",
    proj7_title: "Portfolio Design",
    proj7_desc:  "Full design and development of this personal portfolio in HTML5, CSS3, JavaScript and PHP — no framework: network Canvas animation, boot screen, interactive terminal, animated SVGs, scroll reveal, skill bars, and secure contact form via native PHP.",
    proj7_badge1: "↗ 100% Vanilla",
    proj7_badge2: "↗ Responsive",
    proj7_badge3: "↗ No framework",

    // Education
    section_education: "Education & Degrees",
    edu1_title:  "Bachelor's L3 — Network & System Administration",
    edu1_school: "CNTEMAD · 2024–2025",
    edu1_badge:  "Obtained",
    edu2_title:  "Network & System Administration Training",
    edu2_school: "Nir'Info Ampefiloha · March 2025",
    edu2_badge:  "Obtained",
    edu3_title:  "Computer Networking Training",
    edu3_school: "Nir'Info Ampefiloha · February 2025",
    edu3_badge:  "Obtained",
    edu4_title:  "Bachelor's L2 — Computer Science",
    edu4_school: "CNTEMAD · 2023–2024",
    edu4_badge:  "Obtained",
    edu5_title:  "Bachelor's L1 — Computer Science",
    edu5_school: "CNTEMAD · 2022–2023",
    edu5_badge:  "Obtained",
    edu6_title:  "Baccalaureate — Series D",
    edu6_school: "Les Séraphins Itaosy Private High School · 2021",
    edu6_badge:  "Obtained",

    // Contact
    section_contact:  "Contact me",
    contact_intro:    "Available for a first job or internship in network administration, systems or cybersecurity in Antananarivo or remotely.",
    contact_name:     "Name",
    contact_email:    "Email",
    contact_message:  "Message",
    contact_send:     "Send message",

    // Form feedback & typing
    form_sending:  "Sending...",
    form_success:  "✓ Message sent successfully!",
    form_error:    "✗ Error while sending. Please try again.",
    form_btn:      "Send message",
    phrases: [
      "IT Support Technician L2\nNetworks & Systems",
      "Virtualization ·\nMonitoring · Security",
      "Linux · Windows Server\nDocker · Wazuh · Grafana"
    ],
  }
};

// ============================================================
//  MOTEUR DE TRADUCTION
// ============================================================

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;

  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      const val = translations[lang][key];
      // Si la valeur est un tableau, reconstruire les <li> (pour les listes)
      if (Array.isArray(val)) {
        el.innerHTML = val.map(item => `<li>${item}</li>`).join('');
      } else {
        el.textContent = val;
      }
    }
  });

  // Mettre à jour les phrases du typing effect
  window._currentPhrases = translations[lang].phrases;

  // Mettre à jour le bouton du formulaire
  const btnText = document.querySelector('#contact-form .btn-text');
  if (btnText) btnText.textContent = translations[lang].form_btn;

  // Mettre à jour l'aspect actif des boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Attacher les écouteurs d'événements aux boutons de langue
document.addEventListener('DOMContentLoaded', () => {
  // Appliquer la langue sauvegardée au chargement
  applyLang(currentLang);

  // Écouter les clics sur les boutons FR/EN
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) applyLang(lang);
    });
  });
});
