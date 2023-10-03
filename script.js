function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}
function toggleNav(link) {
  const navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });

  if (link) {
    link.classList.add("active");
  }
}

// Add an event listener to close the navigation menu when a link is clicked
const navToggle = document.querySelector(".toggle");
navToggle.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});
