// Toggle Mobile menu
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

// Submit form to google sheet
const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqSuxUuaWVxw5jZ7MqH993i4_rXP7T1gwQM5ObI1JOrxbqbBkyFxYGd6vnbstaAw4Rgg/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    
    let requestBody = new FormData(form)

    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        alert('Thank you for Joining our community! We will add you to our WhatsApp group soon', response)
        submitButton.disabled = false
        })
    .catch(error => {
    alert('Error!', error.message)
        submitButton.disabled = false

    }
    )
})


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
