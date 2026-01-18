const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = toggleBtn.querySelector("i");

function updateIcon(isDark) {
  if (isDark) {
    themeIcon.classList.replace("fa-circle-half-stroke", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-circle-half-stroke");
  }
}

// Initial Theme Check
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  updateIcon(true);
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcon(isDark);
});

// Preloader, Scroll Progress, and ScrollSpy
window.addEventListener("load", () => {
  document.getElementById("preloader").style.opacity = "0";
  document.getElementById("preloader").style.visibility = "hidden";
  if (typeof AOS !== 'undefined') AOS.refresh();
});

window.onscroll = function() {
  // Progress Bar
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("scrollProgress").style.width = (winScroll / height) * 100 + "%";

  // ScrollSpy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
};
// Preloader & Scroll Progress Logic
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});

// Existing Progress Bar and Back to Top logic stays below...

window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
}
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Use scrollY for modern browsers, pageYOffset for older ones
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 300) {
    backToTop.style.display = "flex";
    // Short delay to allow display:flex to register before changing opacity
    setTimeout(() => { backToTop.style.opacity = "1"; }, 10);
  } else {
    backToTop.style.opacity = "0";
    setTimeout(() => { backToTop.style.display = "none"; }, 300);
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Hide preloader when page is fully loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  
  // Re-trigger AOS animations once loader is gone
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
// ScrollSpy Logic
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // We check if the scroll position is within the section (with a 100px offset)
    if (pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});


