const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require ("./lib/shapes")


//Setting a class that has methods to render the text/shape in the SVG 
class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
}
// Writing out user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "TEXT : Enter up to 3 characters",
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT COLOR : Enter desired color or hexadecimal number',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'SHAPE COLOR : Enter desired color or hexadecimal number of the shape'
    },
    {
        type: 'list',
        name: 'shape',
        message: ' Choose which shape you would like your logo to be',
        choices: ["Circle", "Square", "Triangle"],
    },
];

// function to write data to file 

