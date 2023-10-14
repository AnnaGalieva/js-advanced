// установка и получение значения из localStorage
//установка значения в localStorage
localStorage.setItem('username', 'jon');
//получение значения из localStorage
let storedUsername = localStorage.getItem('username');
console.log('значение из localStorage', storedUsername);
//удаление значения из localStorage
localStorage.removeItem('username');
//проверка что значение удалено
let storedUsername2 = localStorage.getItem('username');
console.log('значение из localStorage', storedUsername2);

//установка значений в localStorage
localStorage.setItem('username', 'jon');
localStorage.setItem('isLoggedIn', 'true');
// очистка localStorage'
localStorage.clear();
//проверка что localStorage пустой
console.log('localStorage:', localStorage);
//проверяем есть ли значение счетчика в localStorage
if (localStorage.getItem('conter')) {
    //если значение счетчика уже есть, увелииваем на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    //если значение счетчика не существует устанавливаем его в 1
    localStorage.setItem('counter', 1);
}
//выводим значение счетчика в консоль
console.log('счетчик посещений:', localStorage.getItem('counter'));
//проверяем есть ли значения счетчика в localStorage
let counter = localStorage.getItem('couner') ? parseInt(localStorage.getItem('counter')) : 0;
//щбновляем значение счетчика и сохраняем его в localStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};
//выводимтекущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;
//обработчик события для кнопки увеличить счетчик
document.querySelector('.increment').addEventListener('click',()=>{
    updateCounter();
    document.querySelector('.counter').textContent=counter;
})