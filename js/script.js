// Search bar toggle
document.getElementById("search-btn").addEventListener("click", function () {
  document.querySelector(".search-form").classList.toggle("active");
});

// Smooth scroll for navbar links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Smooth scroll to top when logo is clicked
document.querySelector(".logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Carousel control
const carousel = document.getElementById("slide");
const prevBtn = carousel.querySelector(".carousel-control-prev");
const nextBtn = carousel.querySelector(".carousel-control-next");

prevBtn.addEventListener("click", () => {
  $("#slide").carousel("prev");
});

nextBtn.addEventListener("click", () => {
  $("#slide").carousel("next");
});

// Hover effect for feature boxes
const featureBoxes = document.querySelectorAll(".feature-box");

featureBoxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#f0f0f0";
  });

  box.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#fff";
  });
});

// Filter categories by type (example: show only SUVs)
document.querySelectorAll(".category-card").forEach((card) => {
  const categoryTitle = card.querySelector("h5").innerText.toLowerCase();

  // You can filter based on category
  if (categoryTitle.includes("suv")) {
    card.style.display = "block"; // Show SUVs
  } else {
    card.style.display = "none"; // Hide others
  }
});

// Newsletter form validation
document.querySelector(".button").addEventListener("click", function (e) {
  e.preventDefault();
  const emailInput = document.querySelector(".email");
  const emailValue = emailInput.value.trim();

  if (emailValue === "" || !validateEmail(emailValue)) {
    alert("Please enter a valid email.");
  } else {
    alert("Thank you for subscribing!");
    emailInput.value = ""; // Clear input after submission
  }
});

// Simple email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Implement a simple search function that checks titles
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchQuery = searchBox.value.toLowerCase();

  // Example: Search through category names on the categories page
  document.querySelectorAll(".category-card h5").forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchQuery)) {
      item.parentElement.parentElement.style.display = "block";
    } else {
      item.parentElement.parentElement.style.display = "none";
    }
  });
});
