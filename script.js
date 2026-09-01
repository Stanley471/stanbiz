  tailwind.config = {
    theme: {
      extend: {
        colors: {
          paper: '#F7F5F0',
          ink: '#1C2430',
          blue: '#2C5FDB',
          amber: '#E8A33D',
          line: '#C7CDD6',
          linesoft: '#DEE2E8',
        },
        fontFamily: {
          display: ['"Space Grotesk"', 'sans-serif'],
          body: ['"IBM Plex Sans"', 'sans-serif'],
        }
      }
    }
}
  
document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal observer
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );
  elementsToReveal.forEach((el) => revealObserver.observe(el));

  // Mobile Hamburger Toggle Logic
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
      hamburgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
});
