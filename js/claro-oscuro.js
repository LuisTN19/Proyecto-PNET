document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;

    // Verificar el tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
        toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    // Cambiar el tema al hacer clic en el botón
    toggleButton.addEventListener("click", function () {
        const isDark = body.getAttribute("data-theme") === "dark";
        body.setAttribute("data-theme", isDark ? "light" : "dark");
        toggleButton.textContent = isDark ? "🌙" : "☀️";
        localStorage.setItem("theme", isDark ? "light" : "dark");
    });
});