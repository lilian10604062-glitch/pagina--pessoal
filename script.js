const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// =========================
// MENU MOBILE
// =========================

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Fecha o menu quando clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

});

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {
    topBtn.classList.add("show");
} else {
    topBtn.classList.remove("show");
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

// =========================
// FORMULÁRIO
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const mensagem = document.getElementById("mensagem").value;

const texto =
    `Olá! Meu nome é ${nome}.%0A%0A` +
    `Meu e-mail: ${email}%0A%0A` +
    `Mensagem:%0A${mensagem}`;

const numeroWhatsApp = "5500000000000";

const url =
    `https://wa.me/${numeroWhatsApp}?text=${texto}`;

window.open(url, "_blank");

});

// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards = document.querySelectorAll(
".project-card, .tech-card, .certificate-card"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

    }

});

}, {
threshold: 0.1
});

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(30px)";
card.style.transition = "0.6s ease";

observer.observe(card);

});