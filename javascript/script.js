// toggle menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        // Ajoute ou retire la classe 'active' pour animer le bouton
        menuToggle.classList.toggle('active');

        if (navbar.style.maxHeight) {
            navbar.style.maxHeight = null; // Ferme le menu
        } else {
            navbar.style.maxHeight = navbar.scrollHeight + "px"; // Ouvre le menu avec la hauteur de son contenu
        }
    });
});





