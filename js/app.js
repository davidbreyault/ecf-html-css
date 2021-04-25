// CONSTANTES
const body = document.querySelector("body");
const burgerButton = document.querySelector(".button");
const menu = document.querySelector(".header__navbar");
const links = document.querySelectorAll(".header__navbar a");
const linksNotInHeader = document.querySelectorAll("a:not(header a)");
const buttonsNotInHeader = document.querySelectorAll("button:not(header button)");

// Contrôle la visibilité des éléments focusables
function hideElement() {
    // Si le menu est fermé et que la largeur de la fenêtre est inférieure à 992px
    if (!menu.classList.contains('open') && window.innerWidth < 992) {
        links.forEach((link) => {
            link.classList.add('visibility-hidden');
        })
        linksNotInHeader.forEach((link) => {
            link.classList.remove('visibility-hidden');
        })
        buttonsNotInHeader.forEach((button) => {
            button.classList.remove('visibility-hidden');
        })
    } else {
        links.forEach((link) => {
            link.classList.remove('visibility-hidden');
        })
        linksNotInHeader.forEach((link) => {
            link.classList.add('visibility-hidden');
        })
        buttonsNotInHeader.forEach((button) => {
            button.classList.add('visibility-hidden');
        })
    }
}

burgerButton.addEventListener("click", () => {
    // Gère l'apparence du boutton et le slide du menu
    burgerButton.classList.toggle("crossed");
    menu.classList.toggle("open");
    // Interdit le scroll lorsque le menu est ouvert
    menu.classList.contains("open")
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "scroll");
    // Animation des liens du menu
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("slide-links");
        links[i].style.animationDelay = 120 * (i + 1) + "ms";
    }
    // Contrôle la visibilité des éléments focusables
    hideElement();
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 992 && menu.classList.contains("open")) {
		menu.classList.remove("open");
		burgerButton.classList.remove("crossed");
	}
    hideElement();
});

hideElement();
