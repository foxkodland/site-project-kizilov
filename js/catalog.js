const buttonsExamples = document.querySelectorAll('.pagination__button')

buttonsExamples.forEach((btn) => {
    btn.addEventListener("click", function (){

        // удалить у кнопок класс .active
        buttonsExamples.forEach((btn) => {
            btn.classList.remove("pagination__button--active")
        })

        // дать класс active нужной кнопке
        btn.classList.add("pagination__button--active")


        // получить атрибут кноки
        var className = btn.dataset.examples
        // показать/спрятать нужные товары товары
        hidenShowItems(className)

    })
})


function hidenShowItems(group) {
    document.querySelectorAll('.card-medium').forEach((card) => {
        if (card.dataset.catalog_group == group || group == "catalogAll") {
            card.style.display = "flex";
        }
        else {
            card.style.display = "none";
        }
    })
}



// при загрузке страницы сразу открыть нужную группу товаров из hash в url
function goToGroup() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    
    if (hash == "decors") {
        buttonsExamples.forEach((btn) => {
            if (btn.dataset.examples == "catalogDecors") {
                btn.click()
            }
        })
    }
    // location.href = window.location.pathname

}


goToGroup()