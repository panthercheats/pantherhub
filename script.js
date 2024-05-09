document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", function() {
    toggleButton.classList.toggle("active");
    });
});
