import { comments } from "./comments.js"
//2. Создал массив чисел от 1 до 10. Отфильтровал его таким образом, получил массив чисел, начиная с 5.
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
const filtersAnArrayFromFiveToTen = arrayNumbers.filter((number) => {
  return number >= 5
})
console.log(filtersAnArrayFromFiveToTen)
//3. Создал массив строк, относящихся к сущности кухонные приборы. Проверил, есть ли в массиве какая-то определенная сущность.
const kitchenAppliance = [
  "лошка",
  "вилка",
  "нож",
  "поварежка",
  "кастрюля",
  "сковорода",
]
const hasKhife = kitchenAppliance.includes("нож")
console.log(hasKhife)
//4.Написал функцию, которая аргументом будет принимает массив и изменяет его порядок на противоположный. Два вышеуказанных массива с помощью этой функции перевернул.
const reverseArray = (arr) => {
  return arr.reverse()
}
reverseArray(kitchenAppliance)
reverseArray(arrayNumbers)
console.log(arrayNumbers, kitchenAppliance)
//7. Вывел в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const comEmails = comments.filter((user1) =>
  user1.email.includes(".com")
)
console.log(comEmails)
//8. Перебрал массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const updatedComments = comments.map((user) => {
  return {
    ...user,
    postId: user.id <= 5 ? 2 : 1
  };
});
console.log(updatedComments)
//9. Перебрал массив, что бы объекты состояли только из айди и имени
const userNames = updatedComments.map((user) => {
  return {
    id: user.id, name: user.name
  }
});

console.log(userNames)
//10. Перебирал массив, добавил объектам свойство isInvalid и проверил: если длина тела сообщения (body) больше 180 символов - устанавливил true, меньше - false.
const updatedUsers = updatedComments.map((user) => {
  user.isInvalid = user.body.length >= 180;
  return user
});
console.log(updatedUsers)
//11. Почитал про метод массива reduce. Используя его, вывел массив почт и провернул тоже самое с помощью метода map
const emailsFromReduce = comments.reduce((acс, user) => {
  acс.push(user.email)
  return acс
}, [])
console.log(emailsFromReduce)

const userEmails = comments.map((user) => {
  return user.email
})
console.log(userEmails)
//12. Почитал про методы toString(), join() и перебрал массив с задания 11, привел его к строке
const emailsString = userEmails.toString()
console.log(emailsString)

const formattedEmails = userEmails.join(", ")
console.log(formattedEmails)



