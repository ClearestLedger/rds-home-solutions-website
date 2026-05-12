const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNavLinks = document.querySelectorAll("[data-nav] a");
const serviceCards = document.querySelectorAll(".service-card");
const estimateIntentLinks = document.querySelectorAll("[data-estimate-intent]");
const estimateForm = document.querySelector('form[name="rds-estimate"]');
const projectTypeField = estimateForm?.querySelector('[name="project-type"]');
const messageField = estimateForm?.querySelector('[name="message"]');
const nameField = estimateForm?.querySelector('[name="name"]');

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

estimateIntentLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!estimateForm) return;

    const projectType = link.dataset.projectType;
    const message = link.dataset.message;

    if (projectTypeField && projectType) {
      projectTypeField.value = projectType;
    }

    if (messageField && message && !messageField.value.trim()) {
      messageField.value = message;
    }

    window.setTimeout(() => {
      nameField?.focus({ preventScroll: true });
    }, 450);
  });
});
