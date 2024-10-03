
function setMainPageTranslations(translations, lang) {
    document.querySelector('h1').textContent = translations[lang].header.main_title;
    document.querySelector('.hero-title').textContent = translations[lang].hero_title;

    // À propos
    document.querySelector('.section-left h2').textContent = translations[lang].about;

    // Parcours scolaire
    document.querySelector('.section-left .block:nth-of-type(1) h3').textContent = translations[lang].school_path;
    document.querySelector('.section-left .block:nth-of-type(1) p').innerHTML = translations[lang].school_description;

    // Mes passions
    document.querySelector('.section-left .block:nth-of-type(2) h3').textContent = translations[lang].hobbies;
    document.querySelector('.section-left .block:nth-of-type(2) p:nth-child(2)').textContent = translations[lang].hobby_description;
    
    // Liste des passions
    document.querySelector('.section-left .block:nth-of-type(2) .passion-list li:nth-child(1)').innerHTML = translations[lang].music + '<br>' + translations[lang].music_description;
    document.querySelector('.section-left .block:nth-of-type(2) .passion-list li:nth-child(2)').innerHTML = translations[lang].sport + '<br>' + translations[lang].sport_description;
    document.querySelector('.section-left .block:nth-of-type(2) .passion-list li:nth-child(3)').innerHTML = translations[lang].technology + '<br>' + translations[lang].technology_description;
    document.querySelector('.section-left .block:nth-of-type(2) .passion-list li:nth-child(4)').innerHTML = translations[lang].reading + '<br>' + translations[lang].reading_description;

    // Mes compétences
    document.querySelector('.section-right h2').textContent = translations[lang].skills;

    // Niveau en langues
    document.querySelector('.section-right .block:nth-of-type(1) h3').textContent = translations[lang].language_level;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(1) span:nth-child(1)').textContent = translations[lang].french;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(1) .stars').textContent = translations[lang].french_stars;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(2) span:nth-child(1)').textContent = translations[lang].english;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(2) .stars').textContent = translations[lang].english_stars;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(3) span:nth-child(1)').textContent = translations[lang].spanish;
    document.querySelector('.section-right .block:nth-of-type(1) .language:nth-of-type(3) .stars').textContent = translations[lang].spanish_stars;

    // Expériences professionnelles
    document.querySelector('.section-right .block:nth-of-type(2) h3').textContent = translations[lang].professional_experience;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(1) strong').textContent = translations[lang].server;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(1) p').textContent = translations[lang].server_description;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(2) strong').textContent = translations[lang].web_developer;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(2) p').textContent = translations[lang].web_developer_description;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(3) strong').textContent = translations[lang].babysitting;
    document.querySelector('.section-right .block:nth-of-type(2) .experience-list li:nth-child(3) p').textContent = translations[lang].babysitting_description;

    // Footer

}