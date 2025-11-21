const navLinks = document.querySelectorAll('ul li a');
const currentPath = window.location.pathname.replace(/\/$/, ""); // strip trailing slash

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href').replace(/\/$/, "");
  console.log(currentPath);
  console.log(linkPath);

  // Mark active if href matches current path OR if it's index.html and path is root
  if (currentPath.includes(linkPath) ||
      (linkPath === "index.html" && (currentPath === "" || currentPath === "/"))) {
    link.parentElement.classList.add('active');
  }
});