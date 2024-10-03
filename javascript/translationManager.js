// Centralise la gestion des traductions
let currentLanguage = 'fr'; // Langue par défaut
let translations = {};

// Fonction pour charger un fichier JSON
function loadTranslationFile(filePath) {
    return fetch(filePath)
        .then(response => response.json())
        .catch(error => console.error(`Erreur lors du chargement de ${filePath}:`, error));
}

// Mettre à jour le header et le footer (fichier global)
function updateHeaderAndFooter() {
    loadTranslationFile('../Json/header_footer_translation.json')
        .then(data => {
            translations = data;
            document.querySelector('header h1').textContent = translations[currentLanguage].header.title;
            const menuItems = document.querySelectorAll('nav ul li a');
            menuItems[0].textContent = translations[currentLanguage].header.menuItems.home;
            menuItems[1].textContent = translations[currentLanguage].header.menuItems.projects;
            menuItems[2].textContent = translations[currentLanguage].header.menuItems.cv;
            menuItems[3].textContent = translations[currentLanguage].header.menuItems.contact;
            document.querySelector('#language-toggle').textContent = translations[currentLanguage].header.menuItems.languageToggle;

            const footerList = document.querySelectorAll('.footer-list li');
            footerList[0].textContent = translations[currentLanguage].footer.footerList[0].text;
            footerList[1].textContent = translations[currentLanguage].footer.footerList[1].text;
        });
}

// Fonction pour charger dynamiquement un fichier JavaScript spécifique à une page
function loadPageScript(scriptPath, callback) {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptPath;
    scriptElement.onload = callback; // Appelle le callback une fois le script chargé
    document.body.appendChild(scriptElement);
}

// Fonction pour déclencher la traduction des pages spécifiques
function updatePageTranslations() {
    // Charger les fichiers de traduction spécifiques à chaque page
    if (window.location.pathname.includes('main.html')) {
        loadPageScript('../javascript/main_translation.js', () => {
            // Callback pour exécuter la fonction de traduction de la page principale
            if (typeof setMainPageTranslations === 'function') {
                loadTranslationFile('../Json/main_translation.json')
                    .then(data => {
                        translations = data;
                        console.log(translations);
                        setMainPageTranslations(translations, currentLanguage);
                    });
                     // Appelle la fonction après le chargement du JSON
            }
        });
    } else if (window.location.pathname.includes('projets.html')) {
        loadPageScript('../javascript/projets_translation.js', () => {
            // Callback pour exécuter la fonction de traduction des projets
            if (typeof setProjetsPageTranslations === 'function') {
                loadTranslationFile('../Json/projets_translation.json')
                    .then(data => {
                        translations = data;
                        console.log(translations);
                        setProjetsPageTranslations(translations, currentLanguage);
                    }); // Appelle la fonction après le chargement du JSON
            }
        });
    } else if (window.location.pathname.includes('cv.html')) {
        loadPageScript('../javascript/cv_translation.js', () => {
            // Callback pour exécuter la fonction de traduction du CV
            if (typeof setCvPageTranslations === 'function') {
                loadTranslationFile('../Json/cv_translation.json')
                    .then(data => {
                        translations = data;
                        console.log(translations);
                        setCvPageTranslations(translations, currentLanguage);
                    }); // Appelle la fonction après le chargement du JSON
            }
        });
    } else if (window.location.pathname.includes('contact.html')) {
        loadPageScript('../javascript/contact_translation.js', () => {
            // Callback pour exécuter la fonction de traduction du contact
            if (typeof setContactPageTranslations === 'function') {
                loadTranslationFile('../Json/contact_translation.json')
                .then(data => {
                    translations = data;
                    console.log(translations);
                    setContactPageTranslations(translations, currentLanguage);
                }); // Appelle la fonction après le chargement du JSON
            }
        });
    }
}

// Fonction centrale pour changer la langue et appliquer les traductions
function changeLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr'; // Alterne entre FR et EN
    updateHeaderAndFooter(); // Met à jour le header et le footer
    updatePageTranslations(); // Met à jour la page courante
}

// Gestion du bouton de bascule de la langue
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderAndFooter(); // Applique la traduction du header et footer au démarrage
    updatePageTranslations(); // Applique la traduction de la page courante au démarrage

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        changeLanguage(); // Change la langue lors du clic
    });
});
