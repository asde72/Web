document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("theme-button");
  const body = document.body;

  const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
  };

  themeButton.addEventListener("click", toggleDarkMode);
});
