function setContactPageTranslations(translations, currentLang) {
    document.querySelector('h1').textContent = translations[currentLang].main_contact_title;
    document.querySelector('.main-contact h1').textContent = translations[currentLang].main_contact_title;
    document.querySelector('label[for="nom"]').textContent = translations[currentLang].form_name_label;
    document.querySelector('input#nom').placeholder = translations[currentLang].form_name_placeholder;
    document.querySelector('label[for="email"]').textContent = translations[currentLang].form_email_label;
    document.querySelector('input#email').placeholder = translations[currentLang].form_email_placeholder;
    document.querySelector('label[for="message"]').textContent = translations[currentLang].form_message_label;
    document.querySelector('textarea#message').placeholder = translations[currentLang].form_message_placeholder;
    document.querySelector('button[type="submit"]').textContent = translations[currentLang].form_submit_button;

    document.querySelector('.social-media h2').textContent = translations[currentLang].social_media_title;

        // Mettre à jour les réseaux sociaux
    document.querySelectorAll('.social-item h3')[0].textContent = translations[currentLang].social_linkedin_title;
    document.querySelectorAll('.social-item p')[0].textContent = translations[currentLang].social_linkedin_profile;

    document.querySelectorAll('.social-item h3')[1].textContent = translations[currentLang].social_instagram_title;
    document.querySelectorAll('.social-item p')[1].textContent = translations[currentLang].social_instagram_profile;

    document.querySelectorAll('.social-item h3')[2].textContent = translations[currentLang].social_github_title;
    document.querySelectorAll('.social-item p')[2].textContent = translations[currentLang].social_github_profile;

    document.querySelectorAll('.social-item h3')[3].textContent = translations[currentLang].social_phone_title;
    document.querySelectorAll('.social-item p')[3].textContent = translations[currentLang].social_phone_contact;

        // Footer
    document.querySelector('.footer-list li:nth-child(1)').textContent = translations[currentLang].footer_hosted_by;
    document.querySelector('.footer-list li:nth-child(2)').textContent = translations[currentLang].footer_handmade;
}