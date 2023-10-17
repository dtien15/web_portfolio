const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overLay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overLay.classList.toggle("show");
});

overLay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overLay.classList.toggle("show");
});
