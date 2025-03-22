// Script para el carrusel
document.addEventListener("DOMContentLoaded", function () {
    const carruselInner = document.querySelector(".carrusel-inner");
    const puntos = document.querySelectorAll(".punto");
    let currentIndex = 0;
    let intervalo;

    // Función para mover el carrusel
    function moverCarrusel(index) {
        const offset = -index * 100;
        carruselInner.style.transform = `translateX(${offset}%)`;
        puntos.forEach((punto, i) => {
            punto.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    // Función para avanzar automáticamente
    function autoPlay() {
        intervalo = setInterval(() => {
            const nextIndex = (currentIndex + 1) % puntos.length;
            moverCarrusel(nextIndex);
        }, 3000); // Cambia de imagen cada 3 segundos
    }

    // Eventos para los puntos
    puntos.forEach((punto, index) => {
        punto.addEventListener("click", () => {
            clearInterval(intervalo); // Detiene el autoplay al hacer clic
            moverCarrusel(index);
            autoPlay(); // Reinicia el autoplay
        });
    });

    // Iniciar autoplay
    autoPlay();
});