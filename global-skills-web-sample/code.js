function changeMode() {
    const root = document.querySelector(":root");

    const newTheme = root.className === 'dark-mode' ? 'light-mode' : 'dark-mode';
    root.className = newTheme;
}

const btMode = document.querySelector("#mode-change");

btMode.addEventListener("click", changeMode)
