const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".button");

/* Ouvrir la modale */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("visible");
    });
});

// Fermer en cliquant à l'extérieur
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("visible");
    }
});