import { productCards } from "./array.js";
//задание 4 получить массив объектов, где ключем является название продукта, а значением - его описание
const catalogData = productCards.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {})
console.log(catalogData)
//задание 5 Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
const cardsCount = Number(prompt("Сколько карточек отобразить? От 1 до 5"))
const productCardtList = document.querySelector(".card-wrapper");
const productCardTemplate = document.querySelector("#productCard-template");

const renderCards = () => {
  if (cardsCount > 5) {
    alert(" только от 1 до 5")
  }
  else {
    productCards.slice(0, cardsCount).forEach(productCard => {
      const productCardClone = productCardTemplate.content.cloneNode(true)
      productCardClone.querySelector(".product-category").textContent = productCard.forSkin
      productCardClone.querySelector(".product-title").textContent = productCard.name
      productCardClone.querySelector(".product-description").textContent = productCard.description
      productCardClone.querySelector(".product-card__img").src = productCard.img
      productCardClone.querySelector(".product-list-item").textContent = productCard.list
      productCardClone.querySelector(".item1").textContent = productCard.item
      productCardClone.querySelector(".item2").textContent = productCard.item2
      productCardClone.querySelector(".item3").textContent = productCard.item3
      productCardClone.querySelector(".product-card_price1").textContent = productCard.price1
      productCardClone.querySelector(".product-card_price2").textContent = productCard.price2
      productCardtList.appendChild(productCardClone)
      console.log(productCardTemplate)
    });
  }
}
renderCards()




