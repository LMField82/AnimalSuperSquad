const Animal = require("./Animal");

class Snake extends Animal {
    constructor(name, superpower, intelligence, innatepower) {
        super(name, superpower, intelligence);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Snake";
    }

    getInnatePower() {
        this.intelligence += 30;
        return ("Increases Intelligence By 30 🐍");
    }
}


module.exports = Snake;