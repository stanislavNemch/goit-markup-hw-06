function showForm() {
    document.getElementById("contactForm").classList.add("is-open");
    document.querySelector(".overlay").classList.add("is-open");
}

function hideForm() {
    document.getElementById("contactForm").classList.remove("is-open");
    document.querySelector(".overlay").classList.remove("is-open");
}
