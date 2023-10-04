//опциональная цепочка вызовов методови оператор нулевого слияния
//объект с информацией  о пользователе
const user = {
    name: 'Jon',
    age: 30,
    adress: {
        city: 'NY ',
        street: '123'
    },
    contacts: {
        email: 'jjj.com',
        phone: '+1123'
    }
};
//опциональная цепочка вызовов методов
const email = user ? .contacts ? .email;
console.log(email); //выводит'jjj.com'
//если значение не определено или равно null или undefined, используетсязначение по умолчанию
const defaultValue = user ? .otherValue ? ? 'default Value';
console.log(defaultValue); //выводит default Value, т.к. св-во otherValue несуществует вобъектеuser
//Опционаоьная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user ? .street ? ? 'Unknown';
console.log(streetName); //выводит'123'т.к. св-во street существует в объекте user.address