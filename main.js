const body = document.querySelector("body");
const mobileNavigation = document.querySelector("nav");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

openMenuButton.addEventListener("click", () => {
    mobileNavigation.dataset.isHidden = false;
    body.classList.add("no-scroll");
})

closeMenuButton.addEventListener("click", () => {
    mobileNavigation.dataset.isHidden = true;
    body.classList.remove("no-scroll");
})