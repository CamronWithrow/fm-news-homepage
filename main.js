const body = document.querySelector("body");
const navigation = document.querySelector("nav");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

openMenuButton.addEventListener("click", () => {
    navigation.dataset.isHidden = false;
    body.classList.add("no-scroll");
})

closeMenuButton.addEventListener("click", () => {
    navigation.dataset.isHidden = true;
    body.classList.remove("no-scroll");
})

const mediaQuery = window.matchMedia('(max-width: 50em)');

mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
        document.getElementById("main-img").src = "assets/images/image-web-3-mobile.jpg"
        navigation.dataset.isHidden = true;
    } else {
        document.getElementById("main-img").src = "assets/images/image-web-3-desktop.jpg"
        navigation.dataset.isHidden = false;
    }
});