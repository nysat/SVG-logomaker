const inquirer = require('inquirer')
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



// function to write data to file 
fs.writeFile("./examples", shape.render(), (err,result) => {
    if (err) throw err;
    console.log ('Logo has been created!')
});

