//разработать систему регистрации пользователейдля веб приложения
//глобальный объект
const App = {};
//защищенные св-ва класса
class User {
    //защищенное св-во  name
    #_name;
    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
}
//функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        //провекрка введенных данных
        if (!name || !email || !password) {
            throw new Error('не все данные были введены');
        }
        //создание экземпляра класса user
        const user = new User(name);
        //дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        //здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер
        console.log('пользователь успешно зарегестрирован:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error) {
        console.error('ошибка регистрации', error.message);
    } finally {
        console.log('завершение регистрации пользователя');
    }
    //вызов функции регистрации пользователя
    App.registerUser('Jon', 'jjj.com', 'password123');
    App.registerUser('Jane', 'kkk.com', 'password456');

}