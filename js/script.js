const tarorecModal = $.modal({
  title: "Запись на косультацию",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Ok",
      type: "primary",
      handler() {
        tarorecModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  if (btnType === "tarorec") {
    tarorecModal.setContent(`
    <p class="text-taro">
                  Если у Вас возникло несколько вопросов (в.ч. из разных сфер
                  жизни) мы сможем за час разобрать все интересующие темы.
                </p>
    `);

    tarorecModal.open();
  }
});

const priceModal = $.modal({
  title: "Разбор вашего состония",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "ok",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  if (btnType === "price") {
    priceModal.setContent(`
    <ul>
    Это необходимо для:
    <li>Определить текущее состояние;</li>
    <li>Посмотреть на ваше отношение с окружающим миром;</li>
    <li>Определить Ваши проблемы;</li>
    <li>
      Понять в каком направлении идти, чтобы разрешить трудные
      ситуации;
    </li>
    <li>Понять, подходит ли Вам Таро.</li>
  </ul>
    `);

    priceModal.open();
  }
});

const tarolaxModal = $.modal({
  title: "Консультация по Таро",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "ok",
      type: "primary",
      handler() {
        tarolaxModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  if (btnType === "tarolax") {
    tarolaxModal.setContent(`
    <p class="text-taro">
                  Если у Вас возникло несколько вопросов (в.ч. из разных сфер
                  жизни) мы сможем за час разобрать все интересующие темы.
                </p>
    `);

    tarolaxModal.open();
  }
});

const taroraxModal = $.modal({
  title: "Расклад Таро",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "ok",
      type: "primary",
      handler() {
        taroraxModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  if (btnType === "tarorax") {
    taroraxModal.setContent(`
    <p class="text-taro">
    Вы задаёте 1 вопрос картам, я делаю расклад (запрос может быть
      любой) Фотографирую карты и вместе с ними высылаю рассшифровку
      аудиосообщение в WatsApp Например (какой-то пример):
                </p>
    `);

    taroraxModal.open();
  }
});

// Navs

("use strict");
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// Меню бургер

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Slider

new Swiper(".image-slider", {
  // Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // effect: "slider",

  autoplay: {
    delay: 2500,

    disableOnInteraction: false,
  },
  speed: 800,
  // bullet
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 1020,
  slidesPerView: 1,
  loop: true,

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // effect: "cube",
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 1,
  //   },
  //   992: {
  //     slidesPerView: 1,
  //   },
  // },
});
