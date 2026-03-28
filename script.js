/* замена фона первой карточки */
const recolorFirstCardButton = document.getElementById("btn-card-first");
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#0000ff";

recolorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});
/* замена фона всех карточек */
const greenHashColor = "#00ff44";
const productCards = document.querySelectorAll(".product-card");
const recolorAllCardButton = document.getElementById("btn-cards");

recolorAllCardButton.addEventListener("click", () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor);
});

/* переход на Google */
const openGoogleButton = document.getElementById("open-google-button");
openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите перейти на сайт Google?");
  console.log(answer);

  if (answer === true) {
    window.open("https://google.com");
  } else {
    console.log("Пользователь отменил переход на Google");
  }
}

/* заголовок в консоли при наведение */

const heading = document.querySelector(".title");
heading.addEventListener("mouseover", () => {
  console.log(heading.innerText);
});

/* кнопка перекрашивается */
const targetButton = document.getElementById("targetButton");
targetButton.addEventListener("click", () => {
  targetButton.classList.toggle('red-bg');
<<<<<<< HEAD
});
=======
});
>>>>>>> aed0ea57fab6382420a091ce6399018d3ec8c38a
