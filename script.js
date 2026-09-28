// =========================
// MENU MOBILE
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fecha o menu ao clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// FORMULÁRIO
// =========================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {
        formMessage.textContent =
            "Preencha todos os campos.";

        return;
    }

    formMessage.textContent =
        `Obrigado, ${name}! Sua mensagem foi preenchida com sucesso.`;

    form.reset();
});


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const elements = document.querySelectorAll(
    ".project-card, .about-card, .skill"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";

    observer.observe(element);

});
