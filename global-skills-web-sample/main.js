function transitionBanner() {
    window.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner-intro");
    banner.classList.add("show"); // adds the class after page load
  });
}

transitionBanner();
