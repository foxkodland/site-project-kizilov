const burger = document.querySelector(".burger")
const menu = document.querySelector (".menu")
let visible = false

burger.addEventListener("click", function() {
    if (visible) {
        visible = false;
        burger.classList.remove("burger--active");
        menu.style = "transform: translateX(100%);"
    }
    else {
        visible = true;
        burger.classList.add("burger--active");
        menu.style = "transform: translateX(0);"
    }
})