const hamburgerBtn = document.querySelector("#menu-btn");
const modal = document.querySelector("#modal");

hamburgerBtn.addEventListener("click", function (event) {
  hamburgerBtn.classList.toggle("open");
  modal.classList.toggle("flex");
  modal.classList.toggle("hidden");
});
