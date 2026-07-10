// Funkcja przełączająca tryb
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Zapisanie wyboru w pamięci urządzenia
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
}

// Funkcja "wczytująca" ustawienia przy każdym otwarciu strony
function loadDarkMode() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Wywołaj ładowanie od razu po załadowaniu DOM
document.addEventListener("DOMContentLoaded", loadDarkMode);
