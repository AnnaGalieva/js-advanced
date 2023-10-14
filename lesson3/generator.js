//генератор для генерации последовательности чисел
function* numberGenerator() {
    let number = 1;
    while (true) {
        yield number;
        number++;
    }
}
//создаем экземпляр генератора
const generator = numberGenerator();

//генерируем итератор, который будет возвращать следующее число пр каждом вызове next()
console.log(generator.next().value);//1
console.log(generator.next().value);//2
console.log(generator.next().value);//3
console.log(generator.next().value);//4