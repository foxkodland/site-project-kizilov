const miniatures = document.querySelectorAll('.images-preview__miniature')
const preview = document.querySelector('.images-preview__preview-image')


miniatures.forEach((img) => {
    img.addEventListener("click", function () {
        preview.src = img.src
    })
})  