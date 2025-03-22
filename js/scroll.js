document.addEventListener("DOMContentLoaded", function () {
    // Botón de volver arriba
    let scrollButton = document.createElement("button");
    scrollButton.textContent = "↑";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.background = "#b3e0dc";
    scrollButton.style.border = "none";
    scrollButton.style.padding = "8px 12px";
    scrollButton.style.fontSize = "20px";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none";
    scrollButton.style.borderRadius = "50%";

    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
