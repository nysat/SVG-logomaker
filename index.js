const inquirer = require ('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require ("./lib/shapes")


// Writing out user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "TEXT : Enter up to 3 characters",
        validate : function (input) {
            if (input.length >= 1 && input.length <=3){
                return true;
            } else {
                return "Please enter only 1-3 characters"
            }
        }
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

//function generating and saving logo 

function generateLogo (answers) {
    const uppercaseText = answers.text.toUpperCase();
    let shape; 
    if (answers.shape === 'Circle'){
        shape = new Circle (answers.textColor, uppercaseText, answers.shapeColor)
    }else if (answers.shape === 'Triangle') {
        shape = new Triangle (answers.textColor, uppercaseText, answers.shapeColor)
    }else if (answers.shape === 'Square') {
        shape = new Square (answers.textColor, uppercaseText, answers.shapeColor)
    }
    return shape;
}
// use inquirer to prompt user for input
inquirer.prompt (questions).then ((answers) => {
    const shape = generateLogo(answers);
    fs.writeFile("./examples/logo.svg", shape.render(), (err,result) => {
    if (err){
        console.log ('Error creating logo')
    } else {
        console.log ('Generated logo.svg')
    } 
})
});
