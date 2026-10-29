// Script de Animações e Tema -->
document.addEventListener('DOMContentLoaded', () => {
    // --- GERENCIADOR DE TEMA (LIGHT/DARK) ---
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlTag = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlTag.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill text-warning fs-5';
        } else {
            themeIcon.className = 'bi bi-moon-stars-fill text-primary fs-5';
        }
    }

    // --- ANIMAÇÃO DE ENTRADA REVELADORA (STAGGER) ---
    const animatedElements = document.querySelectorAll('.animate-fade-up');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 100);
    });
});

// Script para Animação Visual na Eliminação -->
document.addEventListener('DOMContentLoaded', () => {
    const deleteForms = document.querySelectorAll('.form-delete');
    
    deleteForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const taskId = form.getAttribute('data-id');
            const cardWrapper = document.getElementById(`task-${taskId}`);
            
            if (cardWrapper) {
                cardWrapper.classList.add('removing');
            }
        });
    });
});