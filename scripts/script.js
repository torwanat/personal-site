const root = document.documentElement;

(function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const toggleIcon = document.getElementById("theme-icon");

  function updateToggleIcon() {
    const isDark = root.getAttribute("data-theme") === "dark";
    toggleIcon.src = isDark ? "assets/light-mode.svg" : "assets/dark-mode.svg";
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  updateToggleIcon();

  toggle.addEventListener("click", () => {
    const currentTheme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateToggleIcon();
  });
});