const year = new Date().getFullYear();
const copyright = document.getElementById("copyright");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");
const navLinks = document.querySelectorAll(".primary-nav .nav-links a");
const heroSlider = document.getElementById("hero-slider");
const heroControls = document.querySelectorAll(".hero-control");

if (copyright) {
  copyright.textContent = `© ${year} Maias Supermarkt. Alle rechten voorbehouden.`;
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    });
  });
}

if (heroSlider && heroControls.length) {
  heroControls.forEach((control) => {
    control.addEventListener("click", () => {
      const direction = control.classList.contains("next") ? 1 : -1;
      heroSlider.scrollBy({
        left: direction * heroSlider.clientWidth,
        behavior: "smooth"
      });
    });
  });
}
