const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    'What is yout GitHub username?',
    'What is your email address?',
    'What is the title of your project?', 
    'Please provide a short description about your project.',
    'What type of license would you like your project to have?',
    'What command should be run to install dependencies?',
    'What command should be run to run tests?',
    'What does the user need to know about using this repo?',
    'How can the user contribute to the repo?'
];

inquirer
  .prompt([
    {
        type: "input",
        message: "What is yout GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description about your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What type of license would you like your project to have?",
        name: "license",
        choices: [
            'MIT',
            'ISC',
            'Apache license 2.0'
    ]   
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies" 
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test" 
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "knowledge" 
    },
    {
        type: "input",
        message: "How can the user contribute to the repo?",
        name: "contribution" 

        
    }]).then(function(data) {
        console.log(data);
       
        fs.writeFile('README.md', data, (err) => {
            if (err) {
                throw err;
            };
        });
      });
    
    ;

//     const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// function to write README file
function writeFile(fileName, data) {
}


// function to initialize program
function init() {

}

// function call to initialize program
init();

