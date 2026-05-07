const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNavLinks = document.querySelectorAll("[data-nav] a");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));

    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      card.hidden = !visible;
    });
  });
});

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
