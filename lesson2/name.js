function sayHello() {
    console.log('Hello');
}
console.log(sayHello.name); //выводит имя функции sayHello
console.log(window.name); //выводит имя окна браузера,пустую строку или имя окна, если оно было задано.
console.log(frames[0].name); //выводит имя фрейма, пустую строку или имя фрейма, если онобыло задано
const obj = {};
console.log(obj.name); //выводит значение undefined, т.к. св-во name не былоопределено для объекта
class Rectangle {
    constructor(width, height) {;
        this.width = width;
        this.height = height
    }
}
const rect = new Rectangle(10, 5);
console.log(rect.constructor.name); //выводит имя класса Rectangle через св-во name конструктора объекта