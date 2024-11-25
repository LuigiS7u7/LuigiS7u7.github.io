// Función para resaltar la página actual en la navegación
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath.split('/').pop()) {
            link.style.backgroundColor = "#555";
            link.style.borderRadius = "5px";
        }
    });
});
