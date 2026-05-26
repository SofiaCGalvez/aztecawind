/// Codigo para nav version mobile botones abrir y cerrar
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const menu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

openBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.add("hidden");
  });
});

// Codigo navbar al hacer Scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add(
      "bg-gray-950/95",
      "backdrop-blur-md",
      "shadow-lg",
      "shadow-black/40",
    );
  } else {
    navbar.classList.remove(
      "bg-gray-950/95",
      "backdrop-blur-md",
      "shadow-lg",
      "shadow-black/40",
    );
    navbar.classList.add("bg-transparent");
  }
});

// Codigo para ampliar imagenes de la galeria
const galleryLightbox = document.getElementById("gallery-lightbox");
const galleryLightboxImage = document.getElementById("gallery-lightbox-image");
const galleryLightboxClose = document.getElementById("gallery-lightbox-close");
const galleryZoomButtons = document.querySelectorAll(".gallery-zoom-btn");

function openGalleryLightbox(imageSrc, imageAlt) {
  galleryLightboxImage.src = imageSrc;
  galleryLightboxImage.alt = imageAlt;
  galleryLightbox.classList.remove("hidden");
  galleryLightbox.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeGalleryLightbox() {
  galleryLightbox.classList.add("hidden");
  galleryLightbox.classList.remove("flex");
  galleryLightboxImage.src = "";
  galleryLightboxImage.alt = "Vista ampliada";
  document.body.classList.remove("overflow-hidden");
}

galleryZoomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openGalleryLightbox(button.dataset.image, button.dataset.alt);
  });
});

galleryLightboxClose.addEventListener("click", closeGalleryLightbox);

galleryLightbox.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !galleryLightbox.classList.contains("hidden")) {
    closeGalleryLightbox();
  }
});

// Codigo para abrir y cerrar respuestas en FAQ
const faqButtons = document.querySelectorAll(".faq-toggle");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector(".faq-arrow");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (!answer || !arrow) {
      return;
    }

    button.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      answer.style.maxHeight = "0px";
      arrow.classList.remove("rotate-180");
      return;
    }

    answer.style.maxHeight = `${answer.scrollHeight}px`;
    arrow.classList.add("rotate-180");
  });
});
