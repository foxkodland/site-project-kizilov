const miniatures = document.querySelectorAll('.product-description .miniatures img')
const preview = document.querySelector('.product-description .preview img')


miniatures.forEach((img) => {
    img.addEventListener("click", function () {
        preview.src = img.src
    })
})  