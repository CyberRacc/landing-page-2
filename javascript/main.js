const hover = document.querySelector(".sign-up");

hover.addEventListener("mouseover", function (e) {
    console.log(e);
    hover.classList.add(".sign-up-hover");
});