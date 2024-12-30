document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("LanguageModal");
    const span = document.getElementsByClassName("close")[0];
    const navbar = document.getElementById("navbar");

    // Show the modal and adjust navbar when the button is clicked
    btn.onclick = function () {
        modal.style.display = "block";

    };

    // Hide the modal and reset navbar position when close (x) is clicked
    span.onclick = function () {
        modal.style.display = "none";

    };

    // Hide the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";

        }
    };
});
