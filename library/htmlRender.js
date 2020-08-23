const fs = require('fs');
const path = require('path');

const templateDir = path.resolve(__dirname, "../html");
const render = animals => {
    const html= [];
    html.push(animals.filter(animal => animal.get))
}