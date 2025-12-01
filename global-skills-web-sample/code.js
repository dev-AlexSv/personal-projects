function changeMode() {
    const root = document.querySelector(":root");

    const newTheme = root.className === 'dark-mode' ? 'light-mode' : 'dark-mode';
    root.className = newTheme;
}

function directHomePage() {
    window.location.href = "main.html";
}

function transitionBanner() {
    window.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner-intro");
    banner.classList.add("show"); // adds the class after page load
  });
}

const btMode = document.querySelector("#mode-change");
const mainLogo = document.getElementById("main-logo");

btMode.addEventListener("click", changeMode)
mainLogo.addEventListener("click", directHomePage);
transitionBanner();




