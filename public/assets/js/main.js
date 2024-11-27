document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    const html = document.documentElement;
    const navbar = document.querySelector('.navbar');

    // Verificar si el usuario ya tiene preferencia guardada
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        html.classList.add('dark-mode');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        html.classList.toggle('dark-mode');
        navbar.classList.toggle('navbar-light');
        navbar.classList.toggle('navbar-dark');
        navbar.classList.toggle('bg-light');
        navbar.classList.toggle('bg-dark');

        if (body.classList.contains('dark-mode')) {
            toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Oscuro';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});