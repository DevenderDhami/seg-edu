window.addEventListener("scroll", function () {
    let topbar = document.querySelector(".topbar");
    let body = document.body;

    if (window.scrollY > 50) {
        topbar.classList.add("fixed-header");
        body.classList.add("fixed-body");
    } else {
        topbar.classList.remove("fixed-header");
        body.classList.remove("fixed-body");
    }
});
