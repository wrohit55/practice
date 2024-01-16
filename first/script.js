
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
