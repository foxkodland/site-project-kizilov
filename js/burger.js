const burger = document.querySelector(".burger")
const menu = document.querySelector ("header nav")
let visible = false

burger.addEventListener("click", function() {
    if (visible) {
        visible = false;
        burger.classList.remove("active");
        menu.style = "transform: translateX(100%);"
    }
    else {
        visible = true;
        burger.classList.add("active");
        menu.style = "transform: translateX(0);"
    }
})