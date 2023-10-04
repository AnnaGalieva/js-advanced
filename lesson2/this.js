//обычная функция
function regularFunction() {
    console.log(this);
}
//стрелочная функция
const arrowFunction = () => {
    console.log(this);
}
regularFunction(); //выводит контекст выполнения,например,объект window(в браузере)
//или объект global( в Node.js)
arrowFunction(); //выводит котекст выполнения,который был определен во время создания функции(лексический контекст)

//внутри объекта
const obj = {
    regularMethod: function() {
        console.log(this);
    },
    arrowMethod: () => {
        console.log(this);
    }
};
obj.regularMethod(); //выводит объект obj,т.к. метод вызывается на объекте obj
obj.arrowMethod(); //выводит контекст выполнения, в котором была создана стрелочная функция(напр, объкт  window или объект global);


// const result = (a, b) => a + b;
// arr.filter(item => item > 3);