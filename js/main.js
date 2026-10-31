// Small, dependency-free behaviour for the site.
(function () {
  const params = new URLSearchParams(window.location.search);

  // Highlight placeholder text still waiting on real details: index.html?todo
  if (params.has("todo")) {
    document.body.classList.add("show-todo");
  }

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  // Gallery filter
  const filters = document.querySelectorAll(".filter");
  const shots = document.querySelectorAll(".shot");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filters.forEach((b) => b.classList.toggle("is-active", b === btn));
      shots.forEach((s) => {
        s.classList.toggle("is-hidden", cat !== "all" && s.dataset.cat !== cat);
      });
    });
  });

  // Contact form: basic validation. Until a form service is connected
  // (set the form's action attribute), show a friendly message instead.
  const form = document.querySelector(".contact-form");
  if (form) {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      let ok = true;
      form.querySelectorAll("[required]").forEach((input) => {
        const bad = !input.value.trim();
        input.classList.toggle("is-invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) {
        e.preventDefault();
        status.textContent = "Please add your name and phone number.";
        return;
      }
      if (!form.getAttribute("action")) {
        e.preventDefault();
        status.textContent =
          "Thanks! (Demo only: the form isn't connected yet. Please call or email for now.)";
        form.reset();
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
