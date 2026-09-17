// app.js - Interactividad básica para la Practica DevOps 00

document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset para el header sticky
                behavior: 'smooth'
            });
        });
    });

    // 2. Efecto de aparición (Fade-in) al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 3. Log de bienvenida
    console.log("¡Bienvenido a la PRACTICA DEVOPS 00 de José Alejandro Diaz Delgado!");
});
