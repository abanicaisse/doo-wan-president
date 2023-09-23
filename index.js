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

document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
        hamburgerMenu.style.display = "none";

        console.log("a clicked")
    })
})

hamburgerMenu.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)


// Accordion Logic
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



// const acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");

//         /* Toggle between hiding and showing the active panel */
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }
