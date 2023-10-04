try {
    undefined = 1;
} catch {
    console.log('что-то произошло');
} finally {
    console.log('отличный результат');
}
//пример: работа с делением чисел
function divideNumbers(a, b) {
    try {
        const result = a / b; //попытка выполнить деление
        if (isNaN(result)) {
            throw new Error('результат не является числом');
        }
        console.log('результат деления:', result);
    } catch (error) {
        console.error('ощибка деления:', error);
    } finally {
        console.log('Операция деления завершена');
    }
}
divideNumbers(10, 2); //пример корректного деления
divideNumbers(10, 0); //пример деления на 0
//пользовательские ошибки
//создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); //вызов конструктора родительского класса error с переданным сообщением
        this.name = 'CustomError' //установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('значение должно быть числом') //выбрасывание пользовательской ошибки с сообщением
    }
    console.log('валидация успешна');
}
try {
    validateNumber('42'); //проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) { //проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка', error.message); //вывод сообщения об ошибке
        console.log('Тип ошибки', error.name); //вывод имени ошибки
    } else {
        console.error('произошла ошибка', error); //вывод сообщения об ошибке по умолчанию
    }
}