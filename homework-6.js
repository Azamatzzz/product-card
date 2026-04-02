//3 задан
const informationAboutMe = {
  name: "Азамат",
  surname: "Телигенов",
  mail: "teligenov00@mail.ru",
  age: 19,
  city: "Омск",
  country: "Россия",
  relationshipStatus: "не женат",
};
// 4 зд
const informationAboutTheCar = {
  brand: "лада ваз 2115",
  ReleaseDate: "2010",
  color: "черная",
  transmission: "механическая",
};
informationAboutTheCar.owner = `${informationAboutMe.name} ${informationAboutMe.surname}`
console.log(informationAboutTheCar)
console.log(informationAboutMe)
// 5
function checkMaxSpeed (car) {
  if (! ("maxSpeed" in car)){
    car.maxSpeed= 240;
  }
}
checkMaxSpeed(informationAboutMe);
console.log (informationAboutMe);

