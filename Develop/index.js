const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions =[
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

    }];


// function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeFile('README.md', generateMarkdown({...data}));
    })

}

// function call to initialize program
init();

