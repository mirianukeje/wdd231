// script.js

// Show last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// Filter functionality
const filterButtons = document.querySelectorAll(".filters button");
const courseCards = document.querySelectorAll(".course-cards .card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    courseCards.forEach((card) => {
      if (filter === "ALL" || card.dataset.type === filter) {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  });
});