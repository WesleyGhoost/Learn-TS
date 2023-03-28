let x: number = 20
x = 50
console.log(x)


let user: string = "Rafa"
let favoriteNumber: number = 12
let isProgrammer: boolean = true
console.log(`${user} é um programador, e seu número favorito é ${favoriteNumber}`)


let myArray: number[] = [30, 55, 60]
myArray.pop()
myArray.push(32)
console.log(myArray)


const myObject: {name: string, age: number, isGamer:boolean} = {
    name: "Tiago",
    age: 18,
    isGamer: false
}
console.log(myObject)


let a: number | boolean = 26
if(a === 26) {
    a = false
    console.log(a)
}


type idType = string | number
const userId: idType = 3040
const animalId: idType = "Fred"


enum colorFruits {
    O = "orange",
    R = "red",
    G = "green"
}

enum quantityFruits {
    O = 4,
    A = 5,
    L = 2
}

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
]
console.log(fruits)


function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(2, 5))

function contact(name: string, cellphone: number): string {
    return `His names is ${name} and his cellphone is ${cellphone}`
}
console.log(contact("Moisés", 113435195993 ))

function questionNumber(wrongNumber: number, correctNumber?: number): void {
    if(correctNumber) {
        console.log("Correct!!")
    }
    else {
        console.log("Wrong!!!")
    }
}
questionNumber(2)
questionNumber(2, 7)


interface MathParams {
    n1: number,
    n2: number
}

function multiply(nums: MathParams) {
    return nums.n1 * nums.n2
}

const getNumbers: MathParams = {
    n1: 15,
    n2: 23
}
console.log(multiply(getNumbers))


function sayMyNames<T>(arr: T[]) {
    arr.map((item) => {
        console.log(item)
    })
}
sayMyNames(["Edu", "Duda", "Francio"])


class Games {
    game;
    hoursPlayed;

    constructor(game: string, hoursPlayed: number) {
        this.game = game
        this.hoursPlayed = hoursPlayed
    }

    messageToPlayer() {
        if(this.hoursPlayed > 20) {
            console.log("Viciado!")
        } else {
            console.log("ok...")
        }
    }
} 
let gamePlayed = new Games("God of War", 18)
console.log(gamePlayed)
gamePlayed.messageToPlayer()

class GameData extends Games {
    launchData;

    constructor(game: string, hoursPlayed: number, launchData: number) {
        super(game, hoursPlayed)
        this.launchData = launchData
    }

    messageOfTheRelease() {
        if(this.launchData < 2018) {
            console.log("Esse jogo não é novo...")
        } else if (this.launchData > 2018 && this.launchData < 2022){
            console.log("Não faz tanto tempo que ele lançou, ele ainda é bem moderno")
        } else {
            console.log("Nossa!, esse jogo é super recente!")
        }
    }
}
let secondGamePlayed = new GameData("The Last of Us", 30, 2020)
console.log(secondGamePlayed)
secondGamePlayed.messageToPlayer()
secondGamePlayed.messageOfTheRelease()


const baseParameters = () => {
    return function <T extends{new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@baseParameters()
class Person {
    name;

    constructor(name: string) {
        this.name = name
    }
}
let getName = new Person("Jefé")
console.log(getName)