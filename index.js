const hamburgerMenu = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector(".navigation");
const navigation = document.querySelector(".navigation");

const openMenu = () => {
    if (!hamburgerMenu) return
    hamburgerMenu.style.display = "none";
    navigation.style.display = "grid";
}

const closeMenu = () => {
    if (!closeMenuBtn) return
    navigation.style.display = "none"
    hamburgerMenu.style.display = "grid"
}

if (window.screen.width >= "800px") {
    hamburgerMenu.style.display = none;
    nav
}

hamburgerMenu.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)
