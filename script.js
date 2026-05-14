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
const benefitTrack = document.querySelector("[data-benefit-track]");
const benefitPrev = document.querySelector("[data-benefit-prev]");
const benefitNext = document.querySelector("[data-benefit-next]");
const assistant = document.querySelector("[data-assistant]");
const assistantToggle = document.querySelector("[data-assistant-toggle]");
const assistantPanel = document.querySelector("[data-assistant-panel]");
const assistantClose = document.querySelector("[data-assistant-close]");
const assistantThread = document.querySelector("[data-assistant-thread]");
const assistantReplyButtons = document.querySelectorAll("[data-assistant-reply]");
const assistantForm = document.querySelector("[data-assistant-form]");
const assistantInput = document.querySelector("[data-assistant-input]");

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

const scrollBenefits = (direction = 1) => {
  if (!benefitTrack) return;

  const firstCard = benefitTrack.querySelector(".benefit-card");
  if (!firstCard) return;

  const gap = Number.parseFloat(getComputedStyle(benefitTrack).columnGap) || 16;
  const distance = firstCard.getBoundingClientRect().width + gap;
  const maxScroll = benefitTrack.scrollWidth - benefitTrack.clientWidth;
  const nextLeft = benefitTrack.scrollLeft + distance * direction;

  benefitTrack.scrollTo({
    left: nextLeft > maxScroll - 8 ? 0 : Math.max(0, nextLeft),
    behavior: "smooth",
  });
};

benefitPrev?.addEventListener("click", () => scrollBenefits(-1));
benefitNext?.addEventListener("click", () => scrollBenefits(1));

if (benefitTrack && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  let benefitTimer = window.setInterval(() => scrollBenefits(1), 5200);

  const pauseBenefits = () => {
    window.clearInterval(benefitTimer);
  };

  const resumeBenefits = () => {
    window.clearInterval(benefitTimer);
    benefitTimer = window.setInterval(() => scrollBenefits(1), 5200);
  };

  benefitTrack.addEventListener("pointerenter", pauseBenefits);
  benefitTrack.addEventListener("pointerleave", resumeBenefits);
  benefitTrack.addEventListener("focusin", pauseBenefits);
  benefitTrack.addEventListener("focusout", resumeBenefits);
}

const setAssistantOpen = (isOpen) => {
  if (!assistant || !assistantToggle || !assistantPanel) return;

  assistant.classList.toggle("is-open", isOpen);
  assistantToggle.setAttribute("aria-expanded", String(isOpen));
  assistantPanel.hidden = !isOpen;
};

assistantToggle?.addEventListener("click", () => {
  const isOpen = assistantToggle.getAttribute("aria-expanded") === "true";
  setAssistantOpen(!isOpen);
});

assistantClose?.addEventListener("click", () => setAssistantOpen(false));

const assistantResponses = {
  services:
    "RDS provides exterior painting, interior painting, outdoor wood staining and exterior finishes, remodeling support, commercial painting, and general home improvement finish work. The best next step is a free estimate so the team can review the project scope and surfaces.",
  financing:
    "Flexible financing options may be available for qualified homeowners. Approval, terms, and available options depend on the financing provider and project details, so RDS can discuss the next step during your estimate.",
  wood:
    "Yes. RDS handles outdoor wood stain and exterior finish work for details such as doors, gates, fences, panels, stairs, and outdoor living features. Recommendations depend on the wood condition, finish goals, prep needs, and exposure.",
  estimate:
    "To request an estimate, share the property location, the service you need, and a few details about the project. You can use the estimate form below or call Danielle at 941-258-5639 or Rafael at 941-960-6598.",
  call:
    "You can call Danielle at 941-258-5639 for scheduling and estimate coordination, or Rafael at 941-960-6598 for project questions and oversight.",
  general:
    "Thanks for the question. RDS can give the most helpful recommendation after reviewing the service type, surface condition, prep needs, project scope, timing, and finish goals. For a clear next step, request a free estimate or call the team directly.",
};

const addAssistantMessage = (message) => {
  if (!assistantThread) return;

  const response = document.createElement("p");
  response.className = "ask-rds-message ask-rds-response";
  response.textContent = message;
  assistantThread.append(response);
  assistantThread.scrollTop = assistantThread.scrollHeight;
};

assistantReplyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const responseKey = button.dataset.assistantReply || "general";
    addAssistantMessage(assistantResponses[responseKey] || assistantResponses.general);
  });
});

assistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = assistantInput?.value.trim().toLowerCase() || "";
  const responseKey = question.includes("financ")
    ? "financing"
    : question.includes("wood") || question.includes("stain")
      ? "wood"
      : question.includes("call") || question.includes("phone")
        ? "call"
        : question.includes("estimate") || question.includes("quote")
          ? "estimate"
          : question.includes("paint") || question.includes("remodel") || question.includes("commercial")
            ? "services"
            : "general";

  addAssistantMessage(assistantResponses[responseKey]);

  if (assistantInput) {
    assistantInput.value = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setAssistantOpen(false);
  }
});

assistantPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setAssistantOpen(false));
});
