const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".menu-overlay");

menuBtn.onclick = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
};

closeBtn.onclick = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
};

overlay.onclick = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
};
