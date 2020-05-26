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
    1. Отловить событие скрола
    2. Проверить насколько прошел скролл
    2.1 Если скролл > 0 добавляем класс sticky, и заменяем картинки
    2.2 Если скролл = 0 убираем класс sticky, и заменяем картинки

var headerElement = document.querySelector(".page-header__wrapper-sticky");
console.log();
changeImagePath(selector, state) {
  document.querySelector("").srcset = state;
  console.log();
};

document.addEventListener("scroll", function() {
  var scrollY = window.scrollY;
  console.log();

  if (scrollY > 0) {
    console.log('Вниз');
    headerElement.classList.add('open');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
} else {
    console.log('Норм');
    headerElement.classList.remove("open");
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
    changeImagePath(".js-header-logo-tablet-png", 'img/logo-desktop-blue@1x.webp, img/logo-desktop-white@2x.webp 2x');
}
});


*/
