const menu = document.querySelector(".nav__menu");
const menuToggle = document.querySelector(".nav__toggle");
const menuClose = document.querySelector(".nav__close");
const navLinks = document.querySelectorAll(".nav__link");

const closeMenu = () => menu.classList.remove("show-menu");

menuToggle.addEventListener("click", () => menu.classList.toggle("show-menu"));
menuClose.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active-link"));
    link.classList.add("active-link");
    closeMenu();
  });
});

const header = document.querySelector(".header");
const scrollUp = document.querySelector(".scrollup");

const updateScrollState = () => {
  header.classList.toggle("scroll-header", window.scrollY >= 80);
  scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
};

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

document.querySelectorAll("[data-modal-open]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(`[data-modal="${button.dataset.modalOpen}"]`)
      .classList.add("active-modal");
  });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".services__modal").classList.remove("active-modal");
  });
});

const qualificationButtons = document.querySelectorAll("[data-qualification]");

qualificationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.qualification;
    qualificationButtons.forEach((item) => {
      item.classList.toggle(
        "qualification__active",
        item.dataset.qualification === selected
      );
    });
    document.querySelectorAll("[data-qualification-content]").forEach((content) => {
      content.classList.toggle(
        "qualification__content-active",
        content.dataset.qualificationContent === selected
      );
    });
  });
});

const workFilters = document.querySelectorAll("[data-work-filter]");
const workCards = document.querySelectorAll(".work__card");

workFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.workFilter;
    workFilters.forEach((item) => item.classList.remove("active-work"));
    filter.classList.add("active-work");

    workCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const sendRequest = emailjs.sendForm(
    "service_6sbaaoi",
    "template_cqlwfud",
    contactForm,
    "Q9qeTZ_RQTgWDkPQI"
  );
  contactForm.reset();
  sendRequest.catch((error) => console.error("EmailJS could not send the contact form.", error));
});
