const togglerBtn = document.getElementById("theme-toggler");

togglerBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  // Sabe preferences
  localStorage.setItem("theme", newTheme);

  document.getElementById("theme-moon").style.display =
    newTheme === "light" ? "none" : "block";
  document.getElementById("theme-sun").style.display =
    newTheme === "light" ? "block" : "none";
});
