// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них.Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from.В этом задании вы научитесь конвертировать коллекции DOM - элементов в массивы и работать с ними.
// Дан код html
//     <
//     div > Element 1 < /div> <
//     div data - active = "true" > Element 2 < /div> <
//     div > Element 3 < /div> <
//     div data - active = "true" > Element 4 < /div>
// Напишите функцию, которая собирает все элементы < div > на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data - active.
// Выведите результат на консоль.

const divElements = Array.from(document.querySelectorAll('div'));

// const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));
const activeDivs = divElements.filter(element => element.dataset.active);

activeDivs.forEach(element => {
    console.log(element);
});