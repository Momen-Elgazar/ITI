const themeToggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDarkMode ? "☀️" : "🌙";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function updateHeroSection() {
  const heroSection = document.getElementById("hero");
  const now = new Date();
  const hours = now.getHours();
  let greeting = "Welcome to My Personal Website";

  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning! Welcome to My Personal Website";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon! Welcome to My Personal Website";
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good Evening! Welcome to My Personal Website";
  } else {
    greeting = "Good Night! Welcome to My Personal Website";
  }

  heroSection.querySelector("h1").textContent = greeting;
}

updateHeroSection();
