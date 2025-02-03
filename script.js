document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    // Agregar efecto de activación en el menú
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".nav-links .active")?.classList.remove("active");
            this.classList.add("active");
        });
    });

    // Efecto de aparición en secciones al hacer scroll
    const sections = document.querySelectorAll("section");
    
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Llamar para las secciones visibles al cargar la página

    // Formulario de contacto con mejor feedback
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("form-message");

            if (name === "" || email === "" || message === "") {
                formMessage.textContent = "Por favor, completa todos los campos.";
                formMessage.style.color = "red";
            } else {
                formMessage.textContent = "¡Mensaje enviado con éxito!";
                formMessage.style.color = "green";
                formMessage.style.fontWeight = "bold";

                setTimeout(() => {
                    formMessage.textContent = "";
                }, 3000);

                contactForm.reset();
            }
        });
    }
});
