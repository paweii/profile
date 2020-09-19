const togglebtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// toggle btn
togglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

// close btn
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// animation

const sr = ScrollReveal({
  origin: "top",
  distance: "200px",
  duration: "2000",
  reset: true,
});

sr.reveal(".textbox", {});
sr.reveal(".social-icon", {});
sr.reveal(".about-container", {});
sr.reveal(".skills-container", {});
sr.reveal(".contact-container", {});
sr.reveal(".footer", {});

AOS.init({
  offset: 200,
  duration: 1500,
});
