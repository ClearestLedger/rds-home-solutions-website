const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNavLinks = document.querySelectorAll("[data-nav] a");
const serviceCards = document.querySelectorAll(".service-card");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("nav-open", !expanded);
  });

  siteNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      header.classList.remove("nav-open");
    });
  });
}

serviceCards.forEach((card) => {
  card.addEventListener("toggle", () => {
    if (!card.open) return;

    serviceCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.open = false;
      }
    });
  });
});
