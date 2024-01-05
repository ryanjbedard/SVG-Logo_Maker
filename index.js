// Packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// Array of questions for user input
const promptUser = () => {return inquirer.prompt ([
    {
      type: 'input',
      message: 'Please enter up to three characters',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What would you like your text color to be?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like to choose?',
      name: 'shape',
      choices: [circle, triangle, square]
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
      },
    ])}
// This function is used to write the SVG file and print text in the command line
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
  );
  }

// function used to generate logo from responses
function generateLogo(data){

}

// function used to initialize app
function init() {
    promptUser()
    .then((responses)=>{
    writeToFile("logo.svg", generateLogo({ ...responses }));
    })
  }  
// Function call to initialize application
init();