const fs = require('fs');
const path = require('path');

const templateDir = path.resolve(__dirname, "../html");
const render = animals => {
    const html= [];
    html.push(animals.filter(animal => animal.getAnimal() === "Alicorn")
    .map(alicorn => renderAlicorn(alicorn)));

    html.push(animals.filter(animal => animal.getAnimal() === "Dolphin")
    .map(dolphin => renderDolphin(dolphin)));

    html.push(animals.filter(animal => animal.getAnimal() === "Dragon")
    .map(dragon => renderDragon(dragon)));

    html.push(animals.filter(animal => animal.getAnimal() === "Elephant")
    .map(elephant => renderElephant(elephant)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Hawk")
    .map(hawk => renderHawk(hawk)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Monkey")
    .map(monkey => renderMonkey(monkey)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Orangutan")
    .map(orangutan => renderOrangutan(orangutan)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Rat")
    .map(rat => renderRat(rat)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Sloth")
    .map(sloth => renderSloth(sloth)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Snake")
    .map(snake => renderSnake(snake)));
    
    html.push(animals.filter(animal => animal.getAnimal() === "Squirrel")
    .map(squirrel => renderSquirrel(squirrel)));

    html.push(animals.filter(animal => animal.getAnimal() === "WereWolf")
    .map(werewolf => renderWereWolf(werewolf)));
    
    return renderMain(html.join(""));
}

const renderAlicorn = alicorn => {
    let template = fs.readFileSync(path.resolve(templateDir, "alicorn.html"), "utf8");
    template = replacePlaceholders(template, "name", alicorn.getName());
    template = replacePlaceholders(template, "type", alicorn.getAnimal());
    template = replacePlaceholders(template, "superpower", alicorn.getSuperpower());
    template = replacePlaceholders(template, "strength", alicorn.getStrength());
    template = replacePlaceholders(template, "intelligence", alicorn.getIntelligence());
    template = replacePlaceholders(template, "heart", alicorn.getHeart());
    template = replacePlaceholders(template, "innatepower", alicorn.getInnatePower());
    return template;
}

const renderDolphin = dolphin => {
    let template = fs.readFileSync(path.resolve(templateDir, "dolphin.html"), "utf8");
    template = replacePlaceholders(template, "name", dolphin.getName());
    template = replacePlaceholders(template, "type", dolphin.getAnimal());
    template = replacePlaceholders(template, "superpower", dolphin.getSuperpower());
    template = replacePlaceholders(template, "strength", dolphin.getStrength());
    template = replacePlaceholders(template, "intelligence", dolphin.getIntelligence());
    template = replacePlaceholders(template, "heart", dolphin.getHeart());
    template = replacePlaceholders(template, "innatepower", dolphin.getInnatePower());
    return template;
}

const renderDragon = dragon => {
    let template = fs.readFileSync(path.resolve(templateDir, "dragon.html"), "utf8");
    template = replacePlaceholders(template, "name", dragon.getName());
    template = replacePlaceholders(template, "type", dragon.getAnimal());
    template = replacePlaceholders(template, "superpower", dragon.getSuperpower());
    template = replacePlaceholders(template, "strength", dragon.getStrength());
    template = replacePlaceholders(template, "intelligence", dragon.getIntelligence());
    template = replacePlaceholders(template, "heart", dragon.getHeart());
    template = replacePlaceholders(template, "innatepower", dragon.getInnatePower());
    return template;
}

const renderElephant = elephant => {
    let template = fs.readFileSync(path.resolve(templateDir, "elephant.html"), "utf8");
    template = replacePlaceholders(template, "name", elephant.getName());
    template = replacePlaceholders(template, "type", elephant.getAnimal());
    template = replacePlaceholders(template, "superpower", elephant.getSuperpower());
    template = replacePlaceholders(template, "strength", elephant.getStrength());
    template = replacePlaceholders(template, "intelligence", elephant.getIntelligence());
    template = replacePlaceholders(template, "heart", elephant.getHeart());
    template = replacePlaceholders(template, "innatepower", elephant.getInnatePower());
    return template;
}

const renderHawk = hawk => {
    let template = fs.readFileSync(path.resolve(templateDir, "hawk.html"), "utf8");
    template = replacePlaceholders(template, "name", hawk.getName());
    template = replacePlaceholders(template, "type", hawk.getAnimal());
    template = replacePlaceholders(template, "superpower", hawk.getSuperpower());
    template = replacePlaceholders(template, "strength", hawk.getStrength());
    template = replacePlaceholders(template, "intelligence", hawk.getIntelligence());
    template = replacePlaceholders(template, "heart", hawk.getHeart());
    template = replacePlaceholders(template, "innatepower", hawk.getInnatePower());
    return template;
}

const renderMonkey = monkey => {
    let template = fs.readFileSync(path.resolve(templateDir, "monkey.html"), "utf8");
    template = replacePlaceholders(template, "name", monkey.getName());
    template = replacePlaceholders(template, "type", monkey.getAnimal());
    template = replacePlaceholders(template, "superpower", monkey.getSuperpower());
    template = replacePlaceholders(template, "strength", monkey.getStrength());
    template = replacePlaceholders(template, "intelligence", monkey.getIntelligence());
    template = replacePlaceholders(template, "heart", monkey.getHeart());
    template = replacePlaceholders(template, "innatepower", monkey.getInnatePower());
    return template;
}

const renderOrangutan = orangutan => {
    let template = fs.readFileSync(path.resolve(templateDir, "orangutan.html"), "utf8");
    template = replacePlaceholders(template, "name", orangutan.getName());
    template = replacePlaceholders(template, "type", orangutan.getAnimal());
    template = replacePlaceholders(template, "superpower", orangutan.getSuperpower());
    template = replacePlaceholders(template, "strength", orangutan.getStrength());
    template = replacePlaceholders(template, "intelligence", orangutan.getIntelligence());
    template = replacePlaceholders(template, "heart", orangutan.getHeart());
    template = replacePlaceholders(template, "innatepower", orangutan.getInnatePower());
    return template;
}

const renderRat = rat => {
    let template = fs.readFileSync(path.resolve(templateDir, "rat.html"), "utf8");
    template = replacePlaceholders(template, "name", rat.getName());
    template = replacePlaceholders(template, "type", rat.getAnimal());
    template = replacePlaceholders(template, "superpower", rat.getSuperpower());
    template = replacePlaceholders(template, "strength", rat.getStrength());
    template = replacePlaceholders(template, "intelligence", rat.getIntelligence());
    template = replacePlaceholders(template, "heart", rat.getHeart());
    template = replacePlaceholders(template, "innatepower", rat.getInnatePower());
    return template;
}

const renderSloth = sloth => {
    let template = fs.readFileSync(path.resolve(templateDir, "sloth.html"), "utf8");
    template = replacePlaceholders(template, "name", sloth.getName());
    template = replacePlaceholders(template, "type", sloth.getAnimal());
    template = replacePlaceholders(template, "superpower", sloth.getSuperpower());
    template = replacePlaceholders(template, "strength", sloth.getStrength());
    template = replacePlaceholders(template, "intelligence", sloth.getIntelligence());
    template = replacePlaceholders(template, "heart", sloth.getHeart());
    template = replacePlaceholders(template, "innatepower", sloth.getInnatePower());
    return template;
}

const renderSnake = snake => {
    let template = fs.readFileSync(path.resolve(templateDir, "snake.html"), "utf8");
    template = replacePlaceholders(template, "name", snake.getName());
    template = replacePlaceholders(template, "type", snake.getAnimal());
    template = replacePlaceholders(template, "superpower", snake.getSuperpower());
    template = replacePlaceholders(template, "strength", snake.getStrength());
    template = replacePlaceholders(template, "intelligence", snake.getIntelligence());
    template = replacePlaceholders(template, "heart", snake.getHeart());
    template = replacePlaceholders(template, "innatepower", snake.getInnatePower());
    return template;
}

const renderSquirrel = squirrel => {
    let template = fs.readFileSync(path.resolve(templateDir, "squirrel.html"), "utf8");
    template = replacePlaceholders(template, "name", squirrel.getName());
    template = replacePlaceholders(template, "type", squirrel.getAnimal());
    template = replacePlaceholders(template, "superpower", squirrel.getSuperpower());
    template = replacePlaceholders(template, "strength", squirrel.getStrength());
    template = replacePlaceholders(template, "intelligence", squirrel.getIntelligence());
    template = replacePlaceholders(template, "heart", squirrel.getHeart());
    template = replacePlaceholders(template, "innatepower", squirrel.getInnatePower());
    return template;
}

const renderWereWolf = werewolf => {
    let template = fs.readFileSync(path.resolve(templateDir, "werewolf.html"), "utf8");
    template = replacePlaceholders(template, "name", werewolf.getName());
    template = replacePlaceholders(template, "type", werewolf.getAnimal());
    template = replacePlaceholders(template, "superpower", werewolf.getSuperpower());
    template = replacePlaceholders(template, "strength", werewolf.getStrength());
    template = replacePlaceholders(template, "intelligence", werewolf.getIntelligence());
    template = replacePlaceholders(template, "heart", werewolf.getHeart());
    template = replacePlaceholders(template, "innatepower", werewolf.getInnatePower());
    return template;
}

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf8");
    return replacePlaceholders(template, "squad", html);
}

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp(`{{ ${placeholder} }}`, "gm");
    return template.replace(pattern, value);
}

module.exports = render;