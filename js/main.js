const gallery = [
  {
    france: [
      {
        author: "Марсель Руссо",
        title: "Охота Амура",
        props: "Холст, масло (50х80)",
        price: "14 500 руб",
        url: "images/france/1.jpg",
      },
      {
        author: "Анри Селин",
        title: "Дама с собачкой",
        props: "Акрил, бумага (50х80)",
        price: "16 500 руб",
        url: "images/france/2.jpg",
      },
      {
        author: "Франсуа Дюпон",
        title: "Процедура",
        props: "Цветная литография (40х60)",
        price: "20 000 руб",
        url: "images/france/3.jpg",
      },
      {
        author: "Луи Детуш",
        title: "Роза",
        props: "Бумага, акрил (50х80) ",
        price: "12 000 руб",
        url: "images/france/4.jpg",
      },
      {
        author: "Франсуа Дюпон",
        title: "Птичья трапеза",
        props: "Цветная литография (40х60) ",
        price: "22 500 руб",
        url: "images/france/5.jpg",
      },
      {
        author: "Пьер Моранж",
        title: "Пейзаж с рыбой",
        props: "Цветная литография (40х60) ",
        price: "20 000 руб",
        url: "images/france/6.jpg",
      },
    ],
    england: [
      {
        author: "Пол Смит",
        title: "Дикий зверь",
        props: "Акварель, бумага (50х80) ",
        price: "19 500 руб",
        url: "images/england/1.jpg",
      },
      {
        author: "Джон Уайт",
        title: "Скалистый берег",
        props: "Цветная литография (40х60) ",
        price: "17 500 руб",
        url: "images/england/2.jpg",
      },
      {
        author: "Джим Уотсон",
        title: "Река и горы",
        props: "Акварель, бумага (50х80) ",
        price: "20 500 руб",
        url: "images/england/3.jpg",
      },
      {
        author: "Юджин Зиллион",
        title: "Белый попугай",
        props: "Цветная литография (40х60)  ",
        price: "15 500 руб",
        url: "images/england/4.jpg",
      },
      {
        author: "Эрик Гиллман",
        title: "Ночная рыба",
        props: "Бумага, акрил (50х80) ",
        price: "12 500 руб",
        url: "images/england/5.jpg",
      },
      {
        author: "Альфред Барр",
        title: "Рыжий кот",
        props: "Цветная литография (40х60) ",
        price: "21 000 руб",
        url: "images/england/6.jpg",
      },
    ],
    germany: [
      {
        author: "Курт Вернер",
        title: "Над городом",
        props: "Цветная литография (40х60) ",
        price: "16 000 руб",
        url: "images/germany/1.jpg",
      },
      {
        author: "Макс Рихтер",
        title: "Птенцы",
        props: "Холст, масло (50х80) ",
        price: "14 500 руб",
        url: "images/germany/2.jpg",
      },
      {
        author: "Мартин Майер",
        title: "Среди листьев",
        props: "Цветная литография (40х60) ",
        price: "20 000 руб",
        url: "images/germany/3.jpg",
      },
      {
        author: "Герман Беккер",
        title: "Яркая птица",
        props: "Цветная литография (40х60) ",
        price: "13 000 руб",
        url: "images/germany/4.jpg",
      },
      {
        author: "Вульф Бауэр",
        title: "Дятлы",
        props: "Бумага, акрил (50х80) ",
        price: "20 000 руб",
        url: "images/germany/5.jpg",
      },
      {
        author: "Вальтер Хартманн",
        title: "Большие воды",
        props: "Бумага, акрил (50х80) ",
        price: "23 000 руб",
        url: "images/germany/6.jpg",
      },
    ],
  },
];

const [countries] = gallery;
const { france, egand, germany } = countries;
const burgerButton = document.querySelector(".burger-button");
const body = document.querySelector("body");
const navigation = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".header__link");
const products = document.querySelectorAll(".products__body");
const catalogContainer = document.querySelector(".catalog__menu-buttons");
const galleryContainer = document.querySelector(".products__menu");

function getGalleryByCountry(countryName) {
  return countries[countryName] || [];
}

function renderGallery(paintings) {
  galleryContainer.innerHTML = paintings
    .map(
      (p) => `
      <li class="products__item">
        <article class="products__body">
          <picture>
            <source srcset="${p.url.replace(
              /(\d+)\.jpg$/,
              "mobile-s-$1.jpg"
            )}" media="(max-width:480px)">
            <source srcset="${p.url.replace(
              /(\d+)\.jpg$/,
              "mobile-$1.jpg"
            )}" media="(max-width:576px)">
            <source srcset="${p.url.replace(
              /(\d+)\.jpg$/,
              "tablet-$1.jpg"
            )}" media="(max-width:768px)">
            <img class="products__image" src="${p.url}" alt="${
        p.title
      }" width="310" height="422" loading="lazy">
          </picture>
          <div class="products__content">
            <div class="products__author">${p.author}</div>
            <h3 class="products__title">${p.title}</h3>
            <div class="products__props">${p.props}</div>
            <div class="products__price">${p.price}</div>
            <button class="products__button button">В корзину</button>
          </div>
        </article>
      </li>
    `
    )
    .join("");
}

renderGallery(getGalleryByCountry("france"));

catalogContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".catalog__button");
  if (!button) return;

  catalogContainer.querySelectorAll(".catalog__button").forEach((btn) => {
    btn.classList.remove("catalog__button--active");
  });
  button.classList.add("catalog__button--active");

  const country = button.dataset.country;
  const paintings = getGalleryByCountry(country);
  renderGallery(paintings);
});

burgerButton.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger-button--active");

  body.classList.toggle("stop-scroll");
  navigation.classList.toggle("header__menu--active");
});

menuLinks.forEach((el) => {
  el.addEventListener("click", (event) => {
    body.classList.remove("stop-scroll");
    navigation.classList.remove("header__menu--active");
    burgerButton.classList.remove("burger-button--active");
  });
});
