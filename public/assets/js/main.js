(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const form = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".has-dropdown").forEach((item) => {
    const trigger = item.querySelector(".nav-link-parent");
    if (!trigger) return;

    item.addEventListener("mouseenter", () => trigger.setAttribute("aria-expanded", "true"));
    item.addEventListener("mouseleave", () => trigger.setAttribute("aria-expanded", "false"));
    item.addEventListener("focusin", () => trigger.setAttribute("aria-expanded", "true"));
    item.addEventListener("focusout", (event) => {
      if (!item.contains(event.relatedTarget)) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.querySelectorAll("[data-spotlight]").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mx", event.clientX - rect.left + "px");
      element.style.setProperty("--my", event.clientY - rect.top + "px");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = Math.min(index % 4, 3) * 60 + "ms";
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(String(data.get("project") || "Proje Talebi"));
      const message = encodeURIComponent(
        "Ad Soyad: " +
          String(data.get("name") || "") +
          "\nE-posta: " +
          String(data.get("email") || "") +
          "\n\n" +
          String(data.get("message") || "")
      );
      formStatus.textContent = "Talebiniz e-posta taslağına aktarılıyor.";
      window.location.href = "mailto:iletisim@1imarge.com?subject=" + subject + "&body=" + message;
    });
  }
})();