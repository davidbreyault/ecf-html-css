const body = document.querySelector("body");
const burgerButton = document.querySelector(".button");
const menu = document.querySelector(".header__navbar");
const links = document.querySelectorAll(".header__navbar a");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("crossed");
	menu.classList.toggle("open");
  menu.classList.contains("open")
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "scroll");

  for(let i = 0; i < links.length; i++) {
    links[i].classList.toggle('slide-links');
    links[i].style.animationDelay = 150 * (i + 1) + 'ms';
  }
});


