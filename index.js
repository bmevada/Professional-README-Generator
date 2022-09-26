// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to the README document generator");
console.log("A professional README document generator has been created to allow the user to quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
         // Title of the project
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            // validate: userInput => {
            // if (userInput) {
            //     return true;
            // } else {
            //     console.log('Insert tile of the project');
            //     return false;
            // }
        },
        
        //Description of the project
        // {
        //     type: 'input',
        //     name: 'description',
        //     question: 'Provide a short description explaining the what, why and how of your project. 1. What was your motivation?; Why did you build this project? and What problem does it solve?',
            // validate: userInput => {
            //     if (userInput) {
            //         return true;
            //     } else {
            //         console.log('Insert tile of the project');
            //         return false;
            //     }
        // },
        {
            type: 'input',
            name: 'description',
            message:'Provide a short description explaining the backgorund concept of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What was your motivation?',
        },        
        {
            type: 'input',
            name: 'description',
            message: 'Why did you build this project?'
        },        
        {
            type: 'input',
            name: 'description',
            message: 'What problem does it solve?'
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'What are the key features of the application?'
        }, 
        
            //Table of Contents
            // If the README document is expected to be lengthly, a table of contents is addded to make it easier for the user to view the contents of the page

            // Research how to do ol's in markdown 


            //Installation
        {
            type: 'input',
            name: 'How can the user install the application',
            message: 'installation guide'
        },   
            //Usage     
        {
            type: 'input',
            name: 'How can a user test the applciation?',
            message: 'test'
        },  
            //License      
        {
            type: 'list',
            name: 'license',
            message: 'What licences are required for this application?',
            choices: 'Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unilixense',
        },
            //Contributing
        {   type: 'input',
            name: 'Provide details to how contributors can contribute towards this project?',
            message: 'contribute'
        },
            //Tests
        {   type: 'input',
            name: '',
            message: ''
        },

    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
