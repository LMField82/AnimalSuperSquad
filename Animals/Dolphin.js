const Animal = require("./Animal");

class Dolphin extends Animal {
    constructor(name, superpower, strength, intelligence, heart, innatepower) {
        super(name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Dolphin";
    }

    getInnatePower() {
        this.intelligence += 50;
        return "Increases Intelligence By 50 🐬";  
    }
}


module.exports = Dolphin;