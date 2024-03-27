
// 1 настройка - какие картинки открывать
const photos = document.querySelectorAll ('.photos .gallery img')






//  добавить в body объект div для фуллскрин просмотра
const fullscreen = document.createElement('div');
fullscreen.innerHTML = '<div class="fullscreen">' +
'<div class="cross">' +
    '<span class="cross__span1"></span>' +
    '<span class="cross__span2"></span>' +
'</div>' +
'<div class="fullscreen_back"></div>'  +
// '<div class="left"><</div>' +
'<img src="" alt="">' +
// '<div class="right">></div>' +
'</div>'
document.body.append(fullscreen);


photos.forEach((photo) => {
    // просто открытие фулскрин при клике на фото
    photo.addEventListener('click', () => {

        // показать экран просмотра
        document.querySelector ('.fullscreen').style.display = 'flex';
        // подставить нужную картинку
        document.querySelector ('.fullscreen img').src = photo.src;
    })
})



document.querySelector ('.fullscreen_back').addEventListener('click', () => {
    document.querySelector ('.fullscreen').style.display = 'none';
})

document.querySelector ('.cross').addEventListener('click', () => {
    document.querySelector ('.fullscreen').style.display = 'none';
})