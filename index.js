// Packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Circle, Triangle, Square} = require('./shapes.js')
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
      choices: ['circle', 'triangle', 'square']
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
  const svgBase = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">`;
  let shapeChoice;

  switch (shape) {
    case 'circle':
      shapeChoice = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeChoice = new Triangle(shapeColor);
      break;
    case 'square':
      shapeChoice = new Square(shapeColor);
      break;
    default:
      console.error('This is not a supported shape');
      return '';
  }

  let svgShape = shapeChoice.render();

  const textSvg = `<text x="100" y="115" font-family="Arial" font-size="40" fill="${textColor}" text-anchor="middle">${title}</text>`;

    return `${baseSvg}${shapeSvg}${textSvg}</svg>`;
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