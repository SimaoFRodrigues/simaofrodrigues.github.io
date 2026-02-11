document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".to-top");
  const languageButtons = document.querySelectorAll(".lang-btn");

  const translations = {
    en: {
      "page.title": "Simão's Portfolio",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contacts": "Contact",
      "nav.socials": "Socials",
      "nav.languageAria": "Language selector",
      "nav.languagePt": "Portuguese (Portugal)",
      "nav.languageEn": "English",
      "socials.instagram": "Instagram",
      "socials.linkedin": "Linkedin",
      "socials.github": "Github",
      "hero.line1": "I'm",
      "hero.line2.prefix": "and I'm a",
      "hero.line2.role": "Software Developer",
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
      "skills.title": "Skills",
      "skills.subtitle":
        "Which programming languages do I have the most knowledge in?",
      "skills.java":
        "Knowledge in syntax, OOP, and good programming practices for academic and personal projects.",
      "skills.python":
        "Experience in data science projects involving datasets, OOP, and data visualization.",
      "skills.webTitle": "HTML, CSS and JavaScript",
      "skills.web":
        "Web development using Bootstrap, DOM manipulation and event handling.",
      "skills.arduino":
        "Development of system prototypes with sensors, LEDs, and microcontrollers.",
      "projects.title": "Projects",
      "projects.subtitle":
        "Below you can find some of the projects I have worked on, both academic and personal",
      "projects.audio.title": "Audio Visualization System",
      "projects.audio.desc":
        "Web App developed in JavaScript, HTML and CSS, with multiple audio visualizations for your music/voice.",
      "projects.workorder.title": "Work Order Management System",
      "projects.workorder.desc":
        "Developed in Java for desktop, including a Login Screen and a MySQL database",
      "projects.elections.title": "Portugal Elections Dashboard",
      "projects.elections.desc":
        "2024 Portugal Elections Dashboard implemented in Quarto",
      "projects.tasks.title": "Personal Task Manager",
      "projects.tasks.desc":
        "Personal task manager in Java for desktop, with a Login system implemented in Java Swing",
      "projects.smart.title": "Smart Access Control",
      "projects.smart.desc":
        "Simulation of a Smart Access Control system for the Lisbon Metro, implemented in Arduino.",
      "carousel.prev": "Previous",
      "carousel.next": "Next",
      "contacts.title": "Contact",
      "contacts.subtitle":
        "Whether it's for a project, collaboration, or just to say hi, I'd love to connect!",
      "contacts.emailLabel": "Email address",
      "contacts.emailPlaceholder": "name@example.com",
      "contacts.messageLabel": "Message",
      "contacts.send": "Send",
      "footer.copyright":
        "Copyright © 2025 Simão Rodrigues. All Rights Reserved.",
    },
    pt: {
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.skills": "Competências",
      "nav.projects": "Projetos",
      "nav.contacts": "Contacto",
      "nav.socials": "Redes",
      "nav.languagePt": "Português (Portugal)",
      "nav.languageEn": "Inglês",
      "socials.instagram": "Instagram",
      "socials.linkedin": "Linkedin",
      "socials.github": "Github",
      "hero.line1": "Eu sou o",
      "hero.line2.prefix": "e sou",
      "hero.line2.role": "Desenvolvedor de Software",
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
      "skills.title": "Competências",
      "skills.subtitle":
        "Em que linguagens de programação tenho mais conhecimentos?",
      "skills.java":
        "Conhecimentos de sintaxe, OOP e boas práticas de programação para projetos académicos e pessoais.",
      "skills.python":
        "Experiência em projetos de ciência de dados com datasets, OOP e visualização de dados.",
      "skills.webTitle": "HTML, CSS e JavaScript",
      "skills.web":
        "Desenvolvimento web com Bootstrap, manipulação do DOM e tratamento de eventos.",
      "skills.arduino":
        "Desenvolvimento de protótipos de sistemas com sensores, LEDs e microcontroladores.",
      "projects.title": "Projetos",
      "projects.subtitle":
        "Abaixo pode encontrar alguns dos projetos em que trabalhei, tanto académicos como pessoais",
      "projects.audio.title": "Sistema de Visualização Áudio",
      "projects.audio.desc":
        "Aplicação web desenvolvida em JavaScript, HTML e CSS, com várias visualizações de áudio para a sua música/voz.",
      "projects.workorder.title": "Sistema de Gestão de Ordens de Trabalho",
      "projects.workorder.desc":
        "Desenvolvido em Java para desktop, incluindo um ecrã de login e uma base de dados MySQL",
      "projects.elections.title": "Dashboard das Eleições em Portugal",
      "projects.elections.desc":
        "Dashboard das Eleições de 2024 em Portugal implementado em Quarto",
      "projects.tasks.title": "Gestor de Tarefas Pessoal",
      "projects.tasks.desc":
        "Gestor de tarefas pessoal em Java para desktop, com sistema de login implementado em Java Swing",
      "projects.smart.title": "Controlo de Acesso Inteligente",
      "projects.smart.desc":
        "Simulação de um sistema de controlo de acesso inteligente para o Metro de Lisboa, implementado em Arduino.",
      "carousel.prev": "Anterior",
      "carousel.next": "Seguinte",
      "contacts.title": "Contacto",
      "contacts.subtitle":
        "Seja para um projeto, colaboração ou apenas para dizer olá, adoraria conectar-me!",
      "contacts.emailLabel": "Endereço de email",
      "contacts.emailPlaceholder": "nome@exemplo.com",
      "contacts.messageLabel": "Mensagem",
      "contacts.send": "Enviar",
      "footer.copyright":
        "Copyright © 2025 Simão Rodrigues. Todos os direitos reservados.",
    },
  };

  const applyTranslations = (language) => {
    const dictionary = translations[language] || translations.en;

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
      const isActive = button.dataset.lang === language;
      button.classList.toggle("is-active", isActive);
    });
  };

  const storedLanguage = localStorage.getItem("siteLanguage");
  const initialLanguage = storedLanguage || "pt";

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.dataset.lang || "pt";
      localStorage.setItem("siteLanguage", selectedLanguage);
      applyTranslations(selectedLanguage);
      setActiveLanguage(selectedLanguage);
    });
  });

  applyTranslations(initialLanguage);
  setActiveLanguage(initialLanguage);

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
