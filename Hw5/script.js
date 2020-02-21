"use strict"

//----First-----

const Account = function(login, email) {
    this.login = login;
    this.email = email;
}

const mango = new Account('Mangozedog', 'mango@dog.woof');

Account.prototype.getInfo = function() {
    console.log(`login: ${this.login}, email: ${this.email}`)
}

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');

poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(Account.prototype.getInfo); // function

//------Second----------

const User = function(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

User.prototype.getInfo2 = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.email} followers`)
}

const mango2 = new User('Mango',2, 20);
  
mango2.getInfo2(); // User Mango is 2 years old and has 20 followers
  
const poly2 = new User('Poly', 3, 17);
  
  poly2.getInfo2(); // User Poly is 3 years old and has 17 followers

//----Third---

const Storage = function(items){
    this.items = items;
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
Storage.prototype.getItems = function(){
    console.log(this.items)
}

Storage.prototype.addItem = function(item){
    this.items.push(item)
    console.log(this.items)
}

Storage.prototype.removeItem = function(item){
    this.items.splice(this.items.indexOf(item), 1)
    console.log(this.items)
}


  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//------Fourth----

const StringBuilder = function(value){
    this._value = value;
}

const builder = new StringBuilder('.');

StringBuilder.prototype.append = function(str){
    this._value = this._value+str;
    return this._value
}


StringBuilder.prototype.prepend = function(str){
    this._value = str + this._value;
    return this._value
}


StringBuilder.prototype.pad = function(str){
    this._value = str+this._value+str;
    return this._value
}


StringBuilder.prototype.value = function(){
    console.log(this._value)
}

builder._value = builder.append('^');
console.log(builder.value()); // '.^'

builder.prepend('^');
console.log(builder.value()); // '^.^'

builder.pad('=');
console.log(builder.value()); // '=^.^='

//------Fifth---

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
  
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor(object1) {
        this._speed = 0;
        this.price = object1.price;
        this._maxSpeed = object1.maxSpeed;
        this._isOn = false;
        this._distance = 0;
    }
    getSpecs(){
        console.log(`
        Speed: ${this._speed}
        Price: ${this._price}
        maxSpeed: ${this._maxSpeed}
        Is on: ${this._isOn}
        Distance: ${this._distance}
        `)
    }
  
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price
    }
    set price(newprice) {
        this._price = newprice;
    }
  
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this._isOn = true;
    }
  
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if(value <= this._maxSpeed){
            this._speed = value;
        }
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if(this._speed - value > 0){
            this._speed = this._speed - value;
        }
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if(this._isOn){
            this._distance = hours * this._speed;
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  mustang.getSpecs();
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  mustang.getSpecs();
  // maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000
  
  console.log(mustang._price); // 2000
  mustang._price = 4000;
  console.log(mustang._price); // 4000