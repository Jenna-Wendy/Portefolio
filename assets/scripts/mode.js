document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('dark');
    const lightModeButton = document.getElementById('light');

    darkModeButton.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'dark');
    });

    lightModeButton.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'light');
    });
});