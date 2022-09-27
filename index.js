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
            name: 'background',
            message:'Provide a short description explaining the backgorund concept of your project'
        },
            //Table of Contents
            // If the README document is expected to be lengthly, a table of contents is addded to make it easier for the user to view the contents of the page

            // Research how to do ol's in markdown 

            //Description of the project
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
            message: 'What are the key features of the project?'
        }, 

            //Installation
        {
            type: 'input',
            name: 'nistallation guide',
            message: 'How can the user install the application?'
        },   
            //Usage     
        {
            type: 'input',
            name: 'test',
            message: 'How can a user test the application?'
        },  
        {   //Tests
            type: 'input',
            name: 'testing',
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
        {
            type: 'input',
            name: 'url',
            message: 'what is the url of the deployed application?'

        },
            //License      
        {
            type: 'list',
            name: 'license',
            message: 'What licences are required for this application?',
            choices: 'Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unilicense'. 'GNU AGPLv3', 'No License'
        },
            //Contributing
        {   type: 'input',
            name: 'contribute',
            message: 'Who are the contributors of this project? And provide details to how contributors can contribute towards this project?'
        },
            


    ])

    .then((data) => {

        const readme = generateREADME(data);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        console.log(readme);
    });

    function generateREADME(data) {
        return `
    # ${data.title}
    ${data.background}
    The repository for this application can be found at: ${data.github}
    If you have any questions regarding this application, email: ${data.email} 

    // ${data.table of contents}
    ${data.description}
    ${data.installation}
    ${data.usage}
    ${data.test}  
    ${data.contributors}
     
 
    Below is a screenshot of the application:
    ![${data.title}-screenshot](${data.screenshot})

    `
    }

    function renderLicenseLink(data) {
        const licenseLink = data.license;
        switch (licenseLink) {
            case 'Apache Licence 2.0':
                return 'https://www.apache.org/licenses/LICENSE-2.0';
                break;
    
            case 'MIT License':
                return 'https://opensource.org/licenses/MIT';
                break;

            case 'Mozilla Public License 2.0':
                return 'https://opensource.org/licenses/MPL-2.0';
                break;
            
            case 'Boost Software License 1.0':
                return 'https://www.boost.org/LICENSE_1_0.txt'
                break;

            case 'The Unilicense':
                return 'http://unlicense.org'
                break;
    
            case 'GNU GPLv3 License':
                return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
                break;
                
            case 'no license':
                return "";
                break;
        }
    }


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
