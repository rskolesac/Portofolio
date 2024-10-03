
function setProjetsPageTranslations(translations, currentLang) {
    // Traduction du header
    document.querySelector('header h1').textContent = translations[currentLang].project_title;
    // Traduction du contenu principal (projets)
    const projects = translations[currentLang].main.projectContainer;

    // Projet 1
    document.querySelector('#project1 h2').textContent = projects.project1.title;
    document.querySelector('#project1 p').textContent = projects.project1.description;

    // Projet 2
    document.querySelector('#project2 h2').textContent = projects.project2.title;
    document.querySelector('#project2 p').textContent = projects.project2.description;

    // Titre à long terme
    document.querySelector('.projet-long-term').textContent = projects.longTermTitle;

    // Projet 3 entreprnariat
    document.querySelector('#project3 h2').textContent = projects.project3.title;
    document.querySelector('#project3 p').textContent = projects.project3.description;

    // Projet 4 stage
    document.querySelector('#project4 h2').textContent = projects.project4.title;
    document.querySelector('#project4 p').textContent = projects.project4.description;

    // Projet 5 voyage
    document.querySelector('#project5 h2').textContent = projects.project5.title;
    document.querySelector('#project5 p').textContent = projects.project5.description;

    // Traduction du footer
    const footerList = document.querySelectorAll('.footer-list li');
    footerList[0].textContent = translations[currentLang].footer.footerList[0].text;
    footerList[1].textContent = translations[currentLang].footer.footerList[1].text;
}

