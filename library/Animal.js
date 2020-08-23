const fs = require('fs');
const inquirer = require('inquirer');

class Animal {
    constructor(type, name, superpower, strength, intelligence, heart) {
        this.type = type;
        this.name = name;
        this.superpower = superpower;
        this.strength = strength;
        this.intelligence = intelligence;
        this.heart = heart;

        if(!name) {
            throw new Error("Please enter a name for your superpowered animal.");
        }
        
    }

    getName() {
        return this.name;
    }

    getStrength() {
        return this.strength;
    }

    getIntelligence() {
        return this.intelligence;
    }

    getHeart() {
        return this.heart;
    }

    getAnimal() {
        if (this.type === "Alicorn") {
            return console.log(`This animal is a(n) ${this.type}`);
        }
        if (this.type === "Dolphin") {
            return console.log(`This animal is a(n) ${this.type}`);
        }
        if (this.type === "Dragon") {
            return console.log(`This animal is a(n) ${this.type}`);
        }
        if (this.type === "Elephant") {
            return console.log(`This animal is a(n) ${this.type}`);
        }
        if (this.type === "Hawk") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Monkey") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Orangutan") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Rat") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Sloth") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Snake") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "Squirrel") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
        if (this.type === "WereWolf") {
            return console.log(`This animal is a(n) ${this.type}`)
        }
    }

    getSuperpower() {
        if (this.superpower === "Mind Reading") {
            this.strength === 55;
            this.intelligence === 100;
            this.heart === 20;
            return console.log("Superpower is Mind Reading");
        }
        if (this.superpower === "Super Speed") {
            this.strength === 100;
            this.intelligence === 55;
            this.heart === 50;
            return console.log("Superpower is Super Speed");
        }
        if (this.superpower === "Healing Power") {
            this.strength === 45;
            this.intelligence === 75;
            this.heart === 100;
            return console.log("Superpower is Healing Power");
        }
        if (this.superpower === "Invisibility") {
            this.strength === 60;
            this.intelligence === 60;
            this.heart === 60;
            return console.log("Superpower is Invisibility");
        }
        if (this.superpower === "Ability To Fly") {
            this.strength === 100;
            this.intelligence === 65;
            this.heart === 70;
            return console.log("Superpower is Ability To Fly");
        } else {
            return ("Animal");
        }
    }
}


module.exports = Animal;