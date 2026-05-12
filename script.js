const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNavLinks = document.querySelectorAll("[data-nav] a");
const serviceCards = document.querySelectorAll(".service-card");
const categoryTabs = document.querySelectorAll("[data-category-tab]");
const categoryPanel = document.querySelector(".category-panel");
const categoryImage = document.querySelector("[data-category-image]");
const categoryLabel = document.querySelector("[data-category-label]");
const categoryTitle = document.querySelector("[data-category-title]");
const categoryDescription = document.querySelector("[data-category-description]");
const categoryLink = document.querySelector("[data-category-link]");
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

const activateCategoryTab = (tab) => {
  if (!tab || !categoryPanel || !categoryImage || !categoryLabel || !categoryTitle || !categoryDescription) return;

  categoryTabs.forEach((otherTab) => {
    const isActive = otherTab === tab;
    otherTab.classList.toggle("is-active", isActive);
    otherTab.setAttribute("aria-selected", String(isActive));
  });

  categoryPanel.setAttribute("aria-labelledby", tab.id);
  categoryImage.src = tab.dataset.image;
  categoryImage.alt = tab.dataset.alt;
  categoryLabel.textContent = tab.dataset.label;
  categoryTitle.textContent = tab.dataset.title;
  categoryDescription.textContent = tab.dataset.description;

  if (categoryLink) {
    categoryLink.textContent = tab.dataset.linkLabel || "View Projects";
  }
};

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateCategoryTab(tab));

  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const tabs = Array.from(categoryTabs);
    const currentIndex = tabs.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = tabs[(currentIndex + direction + tabs.length) % tabs.length];
    nextTab.focus();
    activateCategoryTab(nextTab);
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
