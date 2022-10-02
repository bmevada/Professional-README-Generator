// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to the README document generator");
console.log("A professional README document generator has been created to allow the user to quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.")

// TODO: Create an array of questions for user input
const questions = [
    {    //Introduction of the user
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {    //User Email address
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {    //User Github username
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {   // Title of the project
        type: 'input',
        name: 'title',
        message: 'What is the name of your application/project?',
    },
    {   //Description of the application/project
        type: 'input',
        name: 'description',
        question: 'Provide a short description explaining the what, why and how of your applciation/project. 1. What was your motivation?; Why did you build this project? and What problem does it solve?'
    },
    {   //Background
        type: 'input',
        name: 'background',
        message: 'Provide a short description explaining the background concept of your project'
    },
    {   //Installation
        type: 'input',
        name: 'installation',
        message: 'How can the user install the application?'
    },
    {   //Usage 
        type: 'input',
        name: 'usage',
        message: 'How can a user test the application?'
    },
    {   //Tests
        type: 'input',
        name: 'testin',
        message: 'What testing was performed on this project?'
    },
    {   //Github Username
        type: 'input',
        name: 'github',
        message: 'what is your GitHub username?',
    },
    {   //Add email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {   //Add screenshot
        type: 'input',
        name: 'screenshot',
        message: 'Add file pathname to screenshot image',
    },
    {   //URL of deployed application/project
        type: 'input',
        name: 'url',
        message: 'what is the url of the deployed application/project?'
    },
    {    //License 
        type: 'list',
        name: 'license',
        message: 'What licences are required for this application?',
        choices: ['Apache-License-2.0', 'MIT-License', 'Mozilla-Public-License-2.0', 'Boost-Software-License-1.0', 'The-Unilicense'. 'GNU-AGPLv3', 'None']
    },
    {   //Contributing
        type: 'input',
        name: 'contribute',
        message: 'Who are the contributors of this project? And provide details to how contributors can contribute towards this project?'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(processs.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((inquirerResponses)) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses}))
   }
};

// Function call to initialize app
init();
