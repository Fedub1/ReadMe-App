const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateReadMe.js');

const axios = require("axios");
const fs = require('fs');

//function promptUser() {

const questions = [

    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username"
    }, {
        type: "input",
        name: "title",
        message: "Enter the title of your application"
    }, {
        type: "input",
        name: "description",
        message: "Enter a description of your application"
    }, {
        type: "input",
        name: "table of contents",
        message: "Enter an overview of this application"
    }, {
        type: "input",
        name: "installation",
        message: "What steps are required to install this application?"
    }, {
        type: "input",
        name: "usage",
        message: "Please provide instructions for using this application?"
    }, {
        type: "input",
        name: "contributors",
        message: "Enter name(s) of the contributor(s)"
    },{
        type: "input",
        name: "tests",
        message: "Please provide examples of tests and how to run them"
    },
      
    {

        type: "input",
        name: "license",
        message: "Select appropriate License",
        choices: [
            "MIT",
            "APACHE 2.0",
            "ISC",
            "None"
        ],
    },
     {
        type: "input",
        name: "Questions",
        message: "Enter your question(s) here"

    }
];

function init() {

    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        axios.get("https://api.github.com/users/" + responses.user_name)
    .then(response => {
         console.log(responses);
    },
   // function to write README file
   fs.writeFile("README.md", generateReadMe(responses), function(err) {
    if (err) {
        throw err;
    }
})
);
})}
// function call to initialize program
init();
