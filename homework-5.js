//задание №3 Создал функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль 
const showWeather = (city,temperature) => {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
};
showWeather("Омске", "+3");
//задание №4 Создал переменную, которая хранит внутри себя скорость света. Создал функцию, которая принимает 1 аргумент - скорость, внутри функции происходит проверка
const SPEED_OF_lIGHT = 299792458;
const verifySpeed = (checSpeed) => {

  if (checSpeed > SPEED_OF_lIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (checSpeed === SPEED_OF_lIGHT) {
    console.log("Скорость света");
  } else {
    console.log("Cубсветовая скорость");}
};    
verifySpeed (299792458);
verifySpeed (300000000);
verifySpeed (100);
//задание №5 Создал переменную №1, которая содержит продукт и переменную №2. Внутри функции происходит проверка:
const product = "iphone17";
const price = 1000;
const buyProduct = (budget) => {

  if (budget >= price)
    console.log(`${product} приобретён. Спасибо за покупку`);
  else {
    const diff = price - budget;
    console.log(`Вам не хватает ${diff}$, пополните баланс`);
  }
}
buyProduct(1000);
buyProduct(888);
//задание №6 Создал 1 функцию и именовал её
function weather () {
console.log("погода в Омске");
};
weather(); 
//задание №7 Создал 3 переменных и именовал их
let mentorsName = "Низам"
const mentorsName2 = "Влад"
var myName = "Азамат"
console.log(`${mentorsName} ${mentorsName2} ${myName}`); 