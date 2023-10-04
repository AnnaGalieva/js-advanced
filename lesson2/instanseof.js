//определение класса animal
class Animal {
    constructor(name) {
        this.name = name;
    }
}
//определение класса dog,который наследуется от класса Animal
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
//создание объектов
const animal = new Animal("Animal");
const dog = new Dog("Dog");

//проверка с помощью instanceof
console.log(animal instanceof Animal); //выводит true,т.к.animal являетс экземпляром класса Animal
console.log(dog instanceof Animal); //выводит true,т.к.dog являетс экземпляром класса Animal(наследуется от animal)
console.log(dog instanceof Dog); //выводит true,т.к.dog являетс экземпляром класса Dog

//проверка на экземпляр родительского класса
console.log(animal instanceof Dog); //выводит false, т.к.animal не является экземпляром класса Dog

//проверка на экземпляр несуществующего класса
console.log(dog instanceof Cat); //выводит false так как класс cat не существует