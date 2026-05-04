const burgerEl = document.querySelector(".fa-bars");
      const crossEl = document.querySelector(".fa-x");
      const navEl = document.querySelector(".nav-links");

      burgerEl.addEventListener("click", toggleNav);
      crossEl.addEventListener("click", toggleNav);

      function toggleNav() {
        burgerEl.classList.toggle("active");
        crossEl.classList.toggle("active");
        navEl.classList.toggle("active");
      }