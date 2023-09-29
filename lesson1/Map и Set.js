// Методы и свойства: ●new Map()— создаёт коллекцию● map.set(key, value)— записывает по ключу key значение value● map.get(key)— возвращает значение по ключу или undefined, если ключ key
// отсутствует● map.has(key)— возвращает true, если ключ key присутствует в коллекции, иначе
// false● map.delete(key)— удаляет элемент(пару« ключ / значение») по ключу key● map.clear()— очищает коллекцию от всех элементов● map.size— возвращает текущее количество элементов
// let map = new Map();
// map.set("1", "str1"); //строка в качестве ключа
// map.set(1, "num1 "); //цифра как ключ
// map.set(true, "bool1"); //булево значение как ключ

// //помните, обычный оюъект Object приводит ключик строкам?
// //Map сщхраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); //"num1"
// console.log(map.get("1")); //"str1"
// console.log(map.size); //3


// //get set

let map = new Map();
map.set("1", "We")
    .set(1, "likes")
    .set(true, "JS");
console.log(map);


//Перебор коллекции Map

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 20]
]);
console.log(recipeMap);
//перебор по ключам(овощи)
for (let vegeable of recipeMap.keys()) {
    console.log(vegeable); //огурец,помидор,лук
}
//переборпо значениям(числа)
for (let amount of recipeMap.values()) {
    console.log(amount); //500,350,50
    //перебор по элементаам  в формате[ключ,значение]
    for (let entry of recipeMap) { //то же самое, что и recipeMap.entries()
        console.log(entry); //огурец:500 и так далее

        //выполняем функцию для каждой пары(ключ,значение5)
        recipeMap.forEach((value, key, map) => {
            console.log(`${key}:${value}`); //огурец:500 и так далее
        })
    };
}

//Работа с объектами
//Object.entries поможет создать Map:
// let map = new Map(Object.entries(obj));
// //Object.fromEntries поможет создать объект из Map:
// let obj = Object.fromEntries(map);


// ///---------------Set-----------------------

// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Жучка'
// ];
// let uniqueBuddies = new Set(buddies);
// console.log(uniqueBuddies); //мы увидим, что у нас взяли 10косточек, а собачек 6
// //перевести обратно в массив нам поможет уже известный нам метод Array.from:
// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Жучка'
// ];
let uniqueBuddies = new Set(buddies);
let arr = Array.from(uniqueBuddies);
console.log(arr);