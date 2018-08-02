var popup = document.querySelector(".search-popup");
var link = document.querySelector(".search-button");

link.addEventListener("click", function(event) {
  event.preventDefault(event);
  popup.classList.add("popup-error");
  popup.classList.toggle("search-popup-show");
});