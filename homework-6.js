//№3 объект на основе моих данных
const myData = {
  name: "azamat",
  surname: "teligenov",
  mail: "teligenov00@mail.ru",
  age: 19,
  city: "Омск",
  country: "Россия",
  relationshipStatus: "не женат",
};
//№4 создал объект который хранит данные об автомобиле добавил доб свойство-владелец авто  
const car = {
  nameCar: "merсedes",
  model: "w210",
  Data: "2000",
  color: "black",
  transmission: "АКПП",
}
car.owner = myData 
console.log(car)
//№5 функция принимает объект описаный в задание №4 проверяет есть ли в объекте свойство "максимальная скорость"
const CheckmaxSpeed = (car) => {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 240
  }
}
CheckmaxSpeed(car)
//№6 функция получает первым аргументом объект а вторым аргументом свойство объекта   
const showValue = (x, y) => {
  console.log(x[y])
}
showValue(myData , 'age')
//№7 создал массив содержащий названия продуктов
const products = [
  "хлеб",
  "молоко",
  "чай",
  "сахар",
]
//№8 массив в нем книги и добавил еще одну книгу в конец списка
const books = [
  {
    title: "Три основы",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    year: 1740,
    color: "синяя",
    genre: "Религиозная литература",
  },
  {
    title: "Китаб Ат-Таухид",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    year: 1736,
    color: "черная",
    genre: "Религиозная литература"
  },
  {
    title: "Акида аль-Васатийя",
    author: "Ибн Теймия",
    year: 1298,
    color: "бело-синяя",
    genre: "Религиозная литература"
  }]
books.push({
  title: "Четыре правила",
  author: "Мухаммад ибн Абдуль-Ваххаб",
  year: 1740,
  color: "бело-синяя",
  genre: "Религиозная литература",
})
//№9 создал массив из книг объеденил 2 масива между собой с помощью оператора
const moreBooks = [
  {
    title: "Шесть основ",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    year: 1750,
    color: "черная",
    genre: "Религиозная литература",
  },
  {
    title: "Избранное",
    author: "Адиль аль-Хамдан",
    year: 2013,
    color: "черная",
    genre: "Религиозная литература",
  }
]
const allBooks = [...books, ...moreBooks]
console.log(allBooks)
//№10 Написал функцию, которая принимает массив сущностей с задания №9. Добавил новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги устанавил true или false. 
const rareMarkedBooks = allBooks.map(function (book) {
  return {
    ...book,
    isRare: book.year <= 2000,
  };
})
console.log(rareMarkedBooks)

const neaArrsy = allBooks.find (book => book.author === "Мухаммад ибн Абдуль-Ваххаб", )
console.log(neaArrsy)