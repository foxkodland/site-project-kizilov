/*
file: index.html
Скрипт переключает изображения в разделе "фото наших работ"
    - комоды
    - тумбы
    - панно

    
Скрипт получает атрибут кнопки.
прячет все разделы
показывает раздел, у которого тот же data-атрибут, что и атрибут кнопки

*/


const buttonsExamples = document.querySelectorAll('.pagination__button')

buttonsExamples.forEach((btn) => {
    btn.addEventListener("click", function (){
        // получить атрибут кноки
        var galleryGroup = btn.dataset.photos


        // удалить у кнопок класс .active
        buttonsExamples.forEach((btn) => {
            btn.classList.remove("pagination__button--active")
        })

        // дать класс active нужной кнопке
        btn.classList.add("pagination__button--active")

        // спрятать все разделы с фото
        document.querySelectorAll('.photos__gallery').forEach((el) => {
            el.style.display = "none"
        })

        // показать нужный раздел
        document.querySelector(".photos [data-gallery-group='" + galleryGroup + "'").style.display = "flex"
    })
})

