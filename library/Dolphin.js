const Animal = require("./Animal");

class Dolphin extends Animal {
    constructor(type, name, superpower, intelligence, innatepower) {
        super(type, name, superpower, intelligence);
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