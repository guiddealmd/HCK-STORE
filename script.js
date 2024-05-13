function toggleMode() {
    var lightMode = document.getElementById('lightMode');
    var darkMode = document.getElementById('darkMode');

    document.body.classList.toggle('dark-mode');

    lightMode.classList.toggle('hidden');
    darkMode.classList.toggle('hidden');
}