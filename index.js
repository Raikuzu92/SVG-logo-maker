const inquirer = require('inquirer');
const colors = require('colors');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter text for logo (Can only be 3 characters)',
      name: 'logo',
      validate: (input) => input.length === 3 
    },
    {
      type: 'input',
      message: 'Enter a text color',
      name: 'color',
    },
    {
      type: 'list',
      message: 'Select a shape for the logo',
      name: 'shape',
      choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shapeColor',
      },
  ])
.then((response) => {
    // Log the responses to the console
    console.log('Logo text:', response.logo);
    console.log('Text color:', response.color);
    console.log('Shape selected:', response.shape);
    console.log('Shape color:', response.shapeColor)
  })

  let shape;
    
  // Create the appropriate shape object based on the user's selection
  if (response.shape === 'Circle') {
    shape = new CircleSVG(response.color, response.shapeColor, response.logo);
  } else if (response.shape === 'Triangle') {
    shape = new TriangleSVG(response.logo, response.color, response.shapeColor);
  } else if (response.shape === 'Square') {
    shape = new SquareSVG(response.logo, response.color, response.shapeColor);
  } 

  
  


// fs.writeFile(`./examples/test.svg`, svgTest.renderlogo(), err => {
//     if(err) {
//         console.log(err)
//     }}
// )