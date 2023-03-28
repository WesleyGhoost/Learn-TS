"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 20;
x = 50;
console.log(x);
let user = "Rafa";
let favoriteNumber = 12;
let isProgrammer = true;
console.log(`${user} é um programador, e seu número favorito é ${favoriteNumber}`);
let myArray = [30, 55, 60];
myArray.pop();
myArray.push(32);
console.log(myArray);
const myObject = {
    name: "Tiago",
    age: 18,
    isGamer: false
};
console.log(myObject);
let a = 26;
if (a === 26) {
    a = false;
    console.log(a);
}
const userId = 3040;
const animalId = "Fred";
var colorFruits;
(function (colorFruits) {
    colorFruits["O"] = "orange";
    colorFruits["R"] = "red";
    colorFruits["G"] = "green";
})(colorFruits || (colorFruits = {}));
var quantityFruits;
(function (quantityFruits) {
    quantityFruits[quantityFruits["O"] = 4] = "O";
    quantityFruits[quantityFruits["A"] = 5] = "A";
    quantityFruits[quantityFruits["L"] = 2] = "L";
})(quantityFruits || (quantityFruits = {}));
const fruits = [
    {
        name: "orange",
        color: colorFruits.O,
        quantity: quantityFruits.O
    },
    {
        name: "apple",
        color: colorFruits.R,
        quantity: quantityFruits.A
    },
    {
        name: "lemon",
        color: colorFruits.G,
        quantity: quantityFruits.L
    }
];
console.log(fruits);
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));
function contact(name, cellphone) {
    return `His names is ${name} and his cellphone is ${cellphone}`;
}
console.log(contact("Moisés", 113435195993));
function questionNumber(wrongNumber, correctNumber) {
    if (correctNumber) {
        console.log("Correct!!");
    }
    else {
        console.log("Wrong!!!");
    }
}
questionNumber(2);
questionNumber(2, 7);
function multiply(nums) {
    return nums.n1 * nums.n2;
}
const getNumbers = {
    n1: 15,
    n2: 23
};
console.log(multiply(getNumbers));
function sayMyNames(arr) {
    arr.map((item) => {
        console.log(item);
    });
}
sayMyNames(["Edu", "Duda", "Francio"]);
class Games {
    constructor(game, hoursPlayed) {
        this.game = game;
        this.hoursPlayed = hoursPlayed;
    }
    messageToPlayer() {
        if (this.hoursPlayed > 20) {
            console.log("Viciado!");
        }
        else {
            console.log("ok...");
        }
    }
}
let gamePlayed = new Games("God of War", 18);
console.log(gamePlayed);
gamePlayed.messageToPlayer();
class GameData extends Games {
    constructor(game, hoursPlayed, launchData) {
        super(game, hoursPlayed);
        this.launchData = launchData;
    }
    messageOfTheRelease() {
        if (this.launchData < 2018) {
            console.log("Esse jogo não é novo...");
        }
        else if (this.launchData > 2018 && this.launchData < 2022) {
            console.log("Não faz tanto tempo que ele lançou, ele ainda é bem moderno");
        }
        else {
            console.log("Nossa!, esse jogo é super recente!");
        }
    }
}
let secondGamePlayed = new GameData("The Last of Us", 30, 2020);
console.log(secondGamePlayed);
secondGamePlayed.messageToPlayer();
secondGamePlayed.messageOfTheRelease();
const baseParameters = () => {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
};
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParameters()
], Person);
let getName = new Person("Jefé");
console.log(getName);
