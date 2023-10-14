class AutoMobile {
    _horsePowers = 0; //Объявление приватного св-ва _horsePowers со значением 0, используя синтаксис приватных полей
    set horsePowers(value) {
        //определение сеттера для св-ва horsePowers
        if (value < 0) throw new Error("Отрицательное кол-во сил"); //проверка, что значение больше или равно 0, иначе выбрасывается исключение
        this._horsePowers = value; //установка значения св-ва _horsePowers
    }
    get horsePowers() {
        //определяет геттера для св-ва horsePowers
        return this._horsePowers; //возвращает значение св-ва _horsePowers
    }
    constructor(power) {
        //определение конструктора класса
        this._horsePowers = power; //установка значения св-ва _horsePowers при создании объекта класса
    }
}
//создаем новую машину
let auto = new AutoMobile(100); //создание нового объекта класса AutoMobile и передача значения 100 в конструктор

//устанавливаем кол-во сил
auto.horsePowers = -10; //установка значения св-ва horsePowers на -10 вызывает исключение"отрицательное кол-во сил"

//а что будет если добавить комментарий для сеттера
auto.horsePowers = 10; //error
//приватные св-ва.Эти св-ва начинаются со знака # и имеют защиту на уровне языка
class AutoMobile {
    #horsePowers = 0;
    set horsePowers(value) {
        if (value < 0) throw new Error("Отрицательное кол-во сил");
        this.#horsePowers = value;
    }
    get horsePowers() {
        return this.#horsePowers;
    }
    constructor(power) {
        this.#horsePowers = power;
    }
}
//создаем новую машину
let auto = new AutoMobile(100);
//устанавливаем кол-во сил через сеттер
auto.horsePowers = 50;
console.log(auto.horsePowers); //50
//устанавливаем кол-во сил напрямую
auto.#horsePowers = 10; //error