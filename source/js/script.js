var link = document.querySelector(".rate__link, .route__country-empty-select");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close, .modal-calendar__close-btn");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
    }
  }
});

/*
    1. Отловить собитые скрола
    2. Проверить насколько прошел скролл
    2.1 Если скролл > 0 добавляем класс sticky, и заменяем картинки
    2.2 Если скролл = 0 убираем класс sticky, и заменяем картинки
*/

headerElement = window.querySelector('.js-header');

window.addEventListener('scroll', function(event) {
    var scrollY = window.scrollY;

    if (scrollY > 0) {
        console.log('Вниз');
        headerElement.addClass('open');
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
        changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x')
    } else {
        console.log('Норм');
    }
});

changeImagePath(selector, state) {
    document.querySelector(selector).srcset = state;
};

document.querySelector(".js-header-logo-tablet-png").srcset = "img/logo-tablet-" + n + "@1x.png 1x, img/logo-tablet-" + n + "@2x.png 2x";


