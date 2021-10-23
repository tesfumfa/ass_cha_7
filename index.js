// Dependencies needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Links questions to README template
const ReadMeTemplate = require("./node.js/ReadMeTemplate");

// Creates a function to write README file
const createFile = util.promisify(fs.writeFile);

//Creates an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use. Include screenshots as needed:'
        },
        {
            type:'input',
            name:'credits',
            message:'List your collaborators, if any. If none, skip or type "N/A":'
        },
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache','MIT', 'Boost Software','The Unlicense']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:'
        },
        {
            type:'input',
            name:'contributing',
            message:'If you would like others to contribute to your app/package, add guidelines for how to do so. If not, skip or type "N/A":'
        },
    ])
};
