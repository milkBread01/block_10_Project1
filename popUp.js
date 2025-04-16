document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Form submitted successfully!");
            window.location.href = "submission.html"; 
        });
    }
});
