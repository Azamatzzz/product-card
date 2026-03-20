/* замена фона первой карточки */
const recolorFirstCardButton = document.getElementById("repainting-the-first-map");
const firstProductCard = document.querySelector(".product-card")
const blueHashColor = "#0000ff"
recolorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
})
/* замена фона всех карточек */
const greenHashColor = "#00ff44";
const productCards = document.querySelectorAll(".product-card")
const recolorAllCardButton = document.getElementById("repainting-all-first-map");
recolorAllCardButton.addEventListener("click", () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
})
/* переход на Google */
const openGoogleButton = document.getElementById("open-google-button");
openGoogleButton.addEventListener("click", openGoogle);
function openGoogle() {

  const answer = confirm("Вы действительно хотите перейти на сайт Google?")
  console.log(answer);

  if (answer === true) {
    window.open("https://google.com")
  } else {
    console.log("Пользователь отменил переход на Google")
  }
}
/* заголовок в консоли при наведение */
const heading = document.querySelector(".title")
heading.addEventListener("mouseover", () => {
  console.log(heading.innerText);
});
/* кнопка перекрашивается */
let isRed = false;
const greenColor ="#22ff00"
const redHashColor ="#ff0000"
const targetButton = document.getElementById("targetButton")
targetButton.addEventListener("click", () => {
  if (isRed) {
    targetButton.style.backgroundColor = greenColor;
  } else {
    targetButton.style.backgroundColor = redHashColor;
  }
  isRed = !isRed;
})
