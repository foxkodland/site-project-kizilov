/*
file: index.html
Скрипт переключает изображения в разделе "фото наших работ"
    - комоды
    - тумбы
    - панно

    
Скрипт получает атрибут кнопки.
прячет все разделы
показывает раздел, у которого тот же класс, что и атрибут кнопки

*/


const buttonsExamples = document.querySelectorAll('.photos .buttons button')

buttonsExamples.forEach((btn) => {
    btn.addEventListener("click", function (){
        // получить атрибут кноки
        var className = btn.dataset.photos


        // удалить у кнопок класс .active
        buttonsExamples.forEach((btn) => {
            btn.classList.remove("active")
        })

        // дать класс active нужной кнопке
        btn.classList.add("active")

        // спрятать все разделы с фото
        document.querySelectorAll('.photos .gallery').forEach((el) => {
            el.style.display = "none"
        })

        // показать нужный раздел
        document.querySelector(".photos #" + className).style.display = "flex"
    })
})

