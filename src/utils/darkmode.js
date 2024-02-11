const darkMode = () => {
  //Togglebtn that stays on the chosen theme even if page is reloaded
  //Looks for the key/value saved in local storage and adapts after it

  //Selectors
  const themeToggleBtn = document.querySelectorAll("#theme-toggle");

  //State
  const theme = localStorage.getItem("theme");

  //On mount, something that happens when page first loads
  theme && document.body.classList.add(theme);

  //Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
      localStorage.setItem("theme", "lightmode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  //Events
  themeToggleBtn.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
