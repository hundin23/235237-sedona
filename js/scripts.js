var hotelSearch = document.querySelector(".recommended .btn");
var popup = document.querySelector(".modal-content");

hotelSearch.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-content-close");
});
