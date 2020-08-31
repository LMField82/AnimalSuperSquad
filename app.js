const fs = require('fs');
const inquirer = require('inquirer');
const htmlRender = require('./library/htmlRender');

const Alicorn = require('./library/Alicorn');
const Dolphin = require('./library/Dolphin');
const Dragon = require('./library/Dragon');
const Elephant = require('./library/Elephant');
const Hawk = require('./library/Hawk');
const Monkey = require('./library/Monkey');
const Orangutan = require('./library/Orangutan');
const Rat = require('./library/Rat');
const Sloth = require('./library/Sloth');
const Snake = require('./library/Snake');
const Squirrel = require('./library/Squirrel');
const WereWolf = require('./library/WereWolf');
const path = require('path');

const outputPath = path.resolve(__dirname, "output", "squad.html");

const animalSquad = [];

buildSquadMenu = () => {

    createSquad = () => {
        inquirer.prompt([
            {
                message: "You must choose 3 animals for your squad. Choose the animal you want to include:",
                type: "list",
                choices: ["Alicorn", "Dolphin", "Dragon", "Elephant", "Hawk", "Monkey", "Orangutan", "Rat", "Sloth", "Snake", "Squirrel", "WereWolf"],
                name: "animalType"
            }, 
            {
                message: `What is your ${animalType}'s name?`,
                type: "input",
                name: "name"
            },
            {
                message: `What is ${name}'s superpower?`,
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            switch(userChoice.animalType) {
                case "Alicorn":
                    addAlicorn();
                    break;
                case "Dolphin":
                    addDolphin();
                    break;
                case "Dragon":
                    addDragon();
                    break;
                case "Elephant":
                    addElephant();
                    break;
                case "Hawk":
                    addHawk();
                    break;
                case "Monkey":
                    addMonkey();
                    break;
                case "Orangutan":
                    addOrangutan();
                    break;
                case "Rat":
                    addRat();
                    break;
                case "Sloth":
                    addSloth();
                    break;
                case "Snake":
                    addSnake();
                    break;
                case "Squirrel":
                    addSquirrel();
                    break;
                case "WereWolf":
                    addWereWolf();
                    break;
                default:
                    buildSquad();
            }
        });
    }

    const addAlicorn = (userChoice) => {
        const alicorn = new Alicorn (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(alicorn);
        createSquad();
    }

    const addDolphin = (userChoice) => {
        const dolphin = new Dolphin (userChoice.name, userChoice.superpower, strength, intelligence, heart);
        animalSquad.push(dolphin);
        createSquad();
    }

    const addDragon = (userChoice) => {
        const dragon = new Dragon (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(dragon);
        createSquad();
    }

    const addElephant = (userChoice) => {
        const elephant = new Elephant (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(elephant);
        createSquad();
    }

    const addHawk = (userChoice) => {
        const hawk = new Hawk (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(hawk);
        createSquad();
    }

    const addMonkey = (userChoice) => {
        const monkey = new Monkey (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(monkey);
        createSquad();
    }

    const addOrangutan = () => {
        const organutan = new Orangutan (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(organutan);
        createSquad();
    }

    const addRat = () => {
        const rat = new Rat (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(rat);
        createSquad();
    }

    const addSloth = (userChoice) => {
        const sloth = new Sloth (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(sloth);
        createSquad();
    }

    const addSnake = (userChoice) => {
        const snake = new Snake (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(snake);
        createSquad();
    }

    const addSquirrel = (userChoice) => {
        const squirrel = new Squirrel (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(squirrel);
        createSquad();
    }

    const addWereWolf = (userChoice) => {
        const werewolf = new WereWolf (userChoice.name, userChoice.superpower, strength, intelligence, heart)
        animalSquad.push(werewolf);
        createSquad();
    }

    buildSquad = () => {
        fs.writeFileSync(outputPath, htmlRender(animalSquad), "utf8")
    }
}

buildSquadMenu();