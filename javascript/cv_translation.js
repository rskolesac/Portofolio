function setCvPageTranslations(translations, currentLanguage) {
    document.querySelector("h1").textContent = translations[currentLanguage].header.cv_title;
    document.querySelector(".cv-download a").textContent = translations[currentLanguage].a;

}
