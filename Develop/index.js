
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions which take in user input for readme
const questions = [ 
{
    type: 'input',
    message: 'Project title:',
    name: 'title',
},
{
    type: 'input',
    message: 'Project description:',
    name: 'description',
},
{
    type: 'input',
    message: 'Installation:',
    name: 'installation',
},
{
    type: 'input',
    message: 'Usage:',
    name: 'usage',
},
{
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: ["No License", "Apache 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License"]
},
{
    type: 'input',
    message: 'Contributing:',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Tests:',
    name: 'tests',
},
{
    type: 'input',
    message: 'Questions - GitHub Username:',
    name: 'githubUsername',
    
},
{
    type: 'input',
    message: 'Questions - Email Address:',
    name: 'emailAddress',
    
}];

// this function writes a new readme file
function writeReadMe(filename, data){
    fs.writeFile(`${filename}`, data, (err) =>
        err ? console.log(err) : console.log("successfully created README file!")
    )
}

// initialises the prompts for user input
function init(){
    inquirer
        .prompt(questions)
        .then((response) => {
            //generate markdown based on response
            let md = generateMarkdown(response)
            //create new readme file
            writeReadMe(`${response.title}.md`, md)
        })}

// initialises app in command line
init();