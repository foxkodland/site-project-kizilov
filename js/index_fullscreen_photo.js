
// 1 настройка - какие картинки открывать
const photos = document.querySelectorAll ('.photos__gallery img')




//  добавить в body объект div для фуллскрин просмотра
const fullscreen = document.createElement('div');
fullscreen.innerHTML =     `
    <div class="fullscreen fullscreen--isVisible">
        <div class="fullscreen__cross cross">
            <span class="cross__line"></span>
            <span class="cross__line cross__line--rotate"></span>
        </div>
        <div class="fullscreen__bg"></div>
        <img class="fullscreen__image" src="" alt="" />
        
        <!-- <div class="fullscreen__button left"><</div> -->
        <!-- <div class="fullscreen__button fullscreen__button--right">></div> -->
    </div>
`
document.body.append(fullscreen);


photos.forEach((photo) => {
    // просто открытие фулскрин при клике на фото
    photo.addEventListener('click', () => {

        // показать экран просмотра
        document.querySelector ('.fullscreen').classList.remove("fullscreen--isVisible");
        // подставить нужную картинку
        document.querySelector ('.fullscreen__image').src = photo.src;
    })
})



document.querySelector ('.fullscreen__bg').addEventListener('click', () => {
    document.querySelector ('.fullscreen').classList.add("fullscreen--isVisible");
})

document.querySelector ('.cross').addEventListener('click', () => {
    document.querySelector ('.fullscreen').classList.add("fullscreen--isVisible");
})