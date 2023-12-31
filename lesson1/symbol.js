// const symbol = Symbol(); //объявление
// const dogID = Symbol('dog'); //При каждом создании символа, его значение уникально, даже если мы создадим
// //несколько символов с одинаковым описанием
// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');
// //console.log(dog1);
// //console.log(dog2);
// console.log(dog1 == dog2); //false



// const dogID = Symbol('dog');
// alert(dogID) //TypeError:Cannot convert a Symmbol value to a string
// console.log(dogID); //Symbol('dog');

// console.log(dogID.description); //dog можно посмотреть описание

// let id = Symbol('dogID');
// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]); //Жучка



// let id = Symbol('id');
// buddy[id] = 'Бобик'; //Идентификаторы создаются уникальными всегда
// //пробелы которые могут возникнуть, без использования Symbol
// let buddy = { name: 'Тузик' }; //Объявляем в нашем скрипте св-во'id'
// buddy.id = 'Наш идентификатор' //другой скрипт тоже хочет свой Идентификатор...
// buddy.id = 'Их идентификатор' //Ой! св-во перезаписано сторонней библиотекой!


let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон'
}
console.log(buddies);
let newBuddies = {};
Object.assign(newBuddies, buddies); //Object.assign скопирует все св-ва, в то числе, и символьные
buddies.cat = 'Барсик';

console.log(newBuddies);

///------- Symbol.for------------------
//читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); //если символа не существует, он будет создан
//читаем его снова и записываем в другую переменную(возможно, из другого места кода)
let idAgain = Symbol.for("id");

//проверяем: это один и тот же символ
alert(id === idAgain); //true


////-------- Symbol.keyFor----описание символа по идентификатору
//получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

//получаем имя по символу
console.log(Symbol.keyFor(sym)); //name
console.log(Symbol.keyFor(sym2)); //id