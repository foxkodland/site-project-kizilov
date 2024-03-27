const buttonsExamples = document.querySelectorAll('.section_catalog .buttons button')

buttonsExamples.forEach((btn) => {
    btn.addEventListener("click", function (){

        // удалить у кнопок класс .active
        buttonsExamples.forEach((btn) => {
            btn.classList.remove("active")
        })

        // дать класс active нужной кнопке
        btn.classList.add("active")


        // получить атрибут кноки
        var className = btn.dataset.examples
        // показать/спрятать нужные товары товары
        hidenShowItems(className)

    })
})


function hidenShowItems(group) {
    document.querySelectorAll('.section_catalog .items .card').forEach((card) => {
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