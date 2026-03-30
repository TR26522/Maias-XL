const year = new Date().getFullYear();
const copyright = document.getElementById("copyright");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");
const navLinks = document.querySelectorAll(".primary-nav .nav-links a");
const heroSlider = document.getElementById("hero-slider");
const heroControls = document.querySelectorAll(".hero-control");

if (copyright) {
  copyright.textContent = `© ${year} Maias Supermarkt`;
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
  // Start on image 2 so navigation can go from image 2 to image 1.
  window.addEventListener("load", () => {
    if (heroSlider.children.length > 1) {
      heroSlider.scrollLeft = heroSlider.clientWidth;
    }
  }, { once: true });

  heroControls.forEach((control) => {
    control.addEventListener("click", () => {
      const direction = control.classList.contains("next") ? -1 : 1;
      heroSlider.scrollBy({
        left: direction * heroSlider.clientWidth,
        behavior: "smooth"
      });
    });
  });
}
