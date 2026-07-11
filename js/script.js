// Redesign do Portefólio de Simão Rodrigues
// Mantém o projeto em JavaScript puro: traduções, navbar dinâmica,
// animações por scroll e botão de voltar ao topo.

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const toTopButton = document.querySelector(".to-top");
  const languageButtons = document.querySelectorAll(".lang-btn");
  const offcanvasElement = document.querySelector("#offcanvasNavbar");
  const navLinks = document.querySelectorAll(
    ".site-offcanvas .nav-link[href^='#']:not(.dropdown-toggle)",
  );
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      "accessibility.skip": "Skip to main content",
      "page.title": "Simão Rodrigues | Portfolio",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contacts": "Contact",
      "nav.socials": "Socials",
      "nav.languagePt": "Portuguese (Portugal)",
      "nav.languageEn": "English",
      "socials.instagram": "Instagram",
      "socials.linkedin": "LinkedIn",
      "socials.github": "GitHub",
      "hero.kicker": "Personal portfolio",
      "hero.line1": "I am",
      "hero.line2.prefix": "and I am a",
      "hero.line2.role": "Software Developer",
      "hero.description":
        "Computer Engineering and Multimedia student at ISEL, focused on software development, web interfaces and creative solutions with real impact.",
      "hero.projectsBtn": "View projects",
      "hero.contactBtn": "Contact me",
      "hero.available": "Available to collaborate and learn",
      "hero.stats.projects": "Projects",
      "hero.stats.areas": "Technical areas",
      "hero.stats.language": "Languages",
      "about.eyebrow": "Who I am",
      "about.title": "About me",
      "about.location": "Setúbal, Portugal",
      "about.paragraph1":
        "Hello! My name is Simão Rodrigues and I am a second-year student in the Bachelor's degree in Computer Engineering and Multimedia at ISEL. I have a strong interest in software development and in creating creative solutions that have a real impact. This portfolio is my space to share projects, skills, and experiences in the technological field.",
      "about.goal.prefix": "My goal is to continuously grow as a",
      "about.goal.role": "Software Developer",
      "about.goal.suffix":
        "focusing on good programming practices, innovation, and teamwork. I am always motivated to learn new technologies and contribute to challenging projects.",
      "about.cvPrompt":
        "Would you like to learn more about me? Download my CV!",
      "about.badge": "ISEL · CEM",
      "skills.eyebrow": "Technical stack",
      "skills.title": "Skills",
      "skills.subtitle":
        "Which programming languages do I have the most knowledge in?",
      "skills.java":
        "Knowledge in syntax, OOP, and good programming practices for academic and personal projects.",
      "skills.python":
        "Experience in data science projects involving datasets, OOP, and data visualization.",
      "skills.webTitle": "JavaScript",
      "skills.web":
        "Web development using HTML and CSS, also using Bootstrap, DOM manipulation and event handling.",
      "skills.arduino":
        "Development of system prototypes with sensors, LEDs, and microcontrollers.",
      "comp.subtitle": "Other skills:",
      "projects.eyebrow": "Selected work",
      "projects.title": "Projects",
      "projects.subtitle":
        "Main projects and smaller technical experiments developed throughout my academic path.",
      "projects.open": "Open project",
      "projects.audio.title": "Audio Visualization System",
      "projects.audio.desc":
        "Small web project developed in JavaScript, HTML and CSS to explore simple audio visualizations, with direct access to the demo.",
      "projects.workorder.title": "Work Order Management System",
      "projects.workorder.desc":
        "Developed in Java for desktop, including a login screen and a MySQL database.",
      "projects.elections.title": "Portugal Elections Dashboard",
      "projects.elections.desc":
        "2024 Portugal Elections Dashboard implemented in Quarto.",
      "projects.tasks.title": "Personal Task Manager",
      "projects.tasks.desc":
        "Personal task manager in Java for desktop, with a login system implemented in Java Swing.",
      "projects.smart.title": "Task API REST with Spring Boot",
      "projects.smart.desc":
        "REST API for task management, built with Spring Boot and structured in layers. It allows CRUD operations through HTTP endpoints, applying separation of responsibilities between Controller, Service, Repository and DTOs.",
      "contacts.eyebrow": "Let's talk?",
      "contacts.title": "Contact",
      "contacts.subtitle":
        "Whether it is for a project, collaboration, or just to say hi, I would love to connect!",
      "contacts.emailLabel": "Email address",
      "contacts.emailPlaceholder": "name@example.com",
      "contacts.messageLabel": "Message",
      "contacts.send": "Send",
      "footer.copyright": `Copyright © ${currentYear} Simão Rodrigues. All Rights Reserved.`,
    },
    pt: {
      "accessibility.skip": "Saltar para o conteúdo principal",
      "page.title": "Simão Rodrigues | Portefólio",
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.skills": "Competências",
      "nav.projects": "Projetos",
      "nav.contacts": "Contacto",
      "nav.socials": "Redes",
      "nav.languagePt": "Português (Portugal)",
      "nav.languageEn": "Inglês",
      "socials.instagram": "Instagram",
      "socials.linkedin": "LinkedIn",
      "socials.github": "GitHub",
      "hero.kicker": "Portefólio pessoal",
      "hero.line1": "Eu sou o",
      "hero.line2.prefix": "e sou",
      "hero.line2.role": "Desenvolvedor de Software",
      "hero.description":
        "Estudante de Engenharia Informática e Multimédia no ISEL, focado em desenvolvimento de software, interfaces web e soluções criativas com impacto real.",
      "hero.projectsBtn": "Ver projetos",
      "hero.contactBtn": "Contactar",
      "hero.available": "Disponível para colaborar e aprender",
      "hero.stats.projects": "Projetos",
      "hero.stats.areas": "Áreas técnicas",
      "hero.stats.language": "Idiomas",
      "about.eyebrow": "Quem sou",
      "about.title": "Sobre mim",
      "about.location": "Setúbal, Portugal",
      "about.paragraph1":
        "Olá! O meu nome é Simão Rodrigues e sou estudante do segundo ano da Licenciatura em Engenharia Informática e Multimédia no ISEL. Tenho um forte interesse no desenvolvimento de software e em criar soluções criativas com impacto real. Este portefólio é o meu espaço para partilhar projetos, competências e experiências na área tecnológica.",
      "about.goal.prefix": "O meu objetivo é crescer continuamente como",
      "about.goal.role": "Desenvolvedor de Software",
      "about.goal.suffix":
        "focando-me em boas práticas de programação, inovação e trabalho em equipa. Estou sempre motivado para aprender novas tecnologias e contribuir para projetos desafiantes.",
      "about.cvPrompt":
        "Gostaria de saber mais sobre mim? Descarregue o meu CV!",
      "about.badge": "ISEL · LEIM",
      "skills.eyebrow": "Stack técnica",
      "skills.title": "Competências",
      "skills.subtitle":
        "Em que linguagens de programação tenho mais conhecimentos?",
      "skills.java":
        "Conhecimentos de sintaxe, OOP e boas práticas de programação para projetos académicos e pessoais.",
      "skills.python":
        "Experiência em projetos de ciência de dados com datasets, OOP e visualização de dados.",
      "skills.webTitle": "JavaScript",
      "skills.web":
        "Desenvolvimento web com HTML e CSS, e com recurso a Bootstrap, manipulação do DOM e tratamento de eventos.",
      "skills.arduino":
        "Desenvolvimento de protótipos de sistemas com sensores, LEDs e microcontroladores.",
      "comp.subtitle": "Outras competências:",
      "projects.eyebrow": "Trabalho desenvolvido",
      "projects.title": "Projetos",
      "projects.subtitle":
        "Projetos principais e pequenas experiências técnicas desenvolvidas ao longo do meu percurso académico.",
      "projects.open": "Abrir projeto",
      "projects.audio.title": "Sistema de Visualização Áudio",
      "projects.audio.desc":
        "Pequeno projeto web desenvolvido em JavaScript, HTML e CSS para explorar visualizações simples de áudio, com acesso direto à demonstração.",
      "projects.workorder.title": "Sistema de Gestão de Ordens de Trabalho",
      "projects.workorder.desc":
        "Desenvolvido em Java para desktop, incluindo um ecrã de login e uma base de dados MySQL.",
      "projects.elections.title": "Dashboard das Eleições em Portugal",
      "projects.elections.desc":
        "Dashboard das Eleições de 2024 em Portugal implementado em Quarto.",
      "projects.tasks.title": "Gestor de Tarefas Pessoal",
      "projects.tasks.desc":
        "Gestor de tarefas pessoal em Java para desktop, com sistema de login implementado em Java Swing.",
      "projects.smart.title": "API REST de Tarefas com Spring Boot",
      "projects.smart.desc":
        "API REST para gestão de tarefas, construída com Spring Boot e estruturada em camadas. Permite realizar operações CRUD através de endpoints HTTP, aplicando separação de responsabilidades entre Controller, Service, Repository e DTOs.",
      "contacts.eyebrow": "Vamos falar?",
      "contacts.title": "Contacto",
      "contacts.subtitle":
        "Seja para um projeto, colaboração ou apenas para dizer olá!",
      "contacts.emailLabel": "Endereço de email",
      "contacts.emailPlaceholder": "nome@exemplo.com",
      "contacts.messageLabel": "Mensagem",
      "contacts.send": "Enviar",
      "footer.copyright": `Copyright © ${currentYear} Simão Rodrigues. Todos os direitos reservados.`,
    },
  };

  const applyTranslations = (language) => {
    const dictionary = translations[language] || translations.pt;

    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
    document.title = dictionary["page.title"] || document.title;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (key && dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (key && dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });
  };

  const setActiveLanguage = (language) => {
    languageButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === language);
    });
  };

  const updateNavbarState = () => {
    const isScrolled = window.scrollY > 20;
    navbar?.classList.toggle("is-scrolled", isScrolled);
    toTopButton?.classList.toggle("show", window.scrollY > 420);
  };

  const revealElements = () => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));
  };

  const getNavbarOffset = () => {
    const navbarHeight = navbar?.getBoundingClientRect().height || 0;
    return Math.ceil(navbarHeight + 32);
  };

  const scrollToSection = (targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - getNavbarOffset();

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  };

  const closeMobileMenuOnNavigation = () => {
    if (!offcanvasElement || typeof bootstrap === "undefined") return;

    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (window.innerWidth < 992) {
          const targetId = link.getAttribute("href");

          if (targetId && targetId.startsWith("#")) {
            event.preventDefault();
            scrollToSection(targetId);
            history.pushState(null, "", targetId);
          }

          window.setTimeout(() => offcanvas.hide(), 120);
        }
      });
    });

    const dropdownToggle = offcanvasElement.querySelector(".dropdown-toggle");
    dropdownToggle?.addEventListener("click", (event) => {
      if (window.innerWidth < 992) {
        event.stopPropagation();
      }
    });
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.dataset.lang || "pt";
      localStorage.setItem("siteLanguage", selectedLanguage);
      applyTranslations(selectedLanguage);
      setActiveLanguage(selectedLanguage);
    });
  });

  toTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateNavbarState, { passive: true });

  const initialLanguage = localStorage.getItem("siteLanguage") || "pt";
  applyTranslations(initialLanguage);
  setActiveLanguage(initialLanguage);
  updateNavbarState();
  revealElements();
  closeMobileMenuOnNavigation();
});
