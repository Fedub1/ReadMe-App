const inquirer = require('inquirer');
const axios = require("axios");
const fs = require('fs');
const util = require('util');

const api = require('./utils/api.js');
const generateReadMe = require('./utils/generateReadMe.js')
//function promptUser() {

// async function main(){
//     console.log(`starting`);
const questions = [


    {
        type: "input",
        name: "user name",
        message: "What is your GitHub username"
    }, {
        type: "input",
        name: "title",
        message: "What is the title for your application"
    }, {
        type: "input",
        name: "description",
        message: "please describe what this project does"
    }, {
        type: "input",
        name: "Table of Contents",
        message: "please provide an overview of the contents of this application"
    }, {
        type: "input",
        name: "installation",
        message: "how can one instatll this app?"
    }, {
        type: "input",
        name: "usage",
        message: "once installed, how can one use this app?"
    }, {

        type: "input",
        name: "license",
        message: "Select the License",
        choices: [
            "MIT",
            "APACHE 2.0",
            "ISC",
            "None"
        ],
        type: "input",
        name: "Contributors",
        message: "please enter the name(S) of the contributor(s)"
    }, {
        type: "input",
        name: "Tests",
        message: "please example the test components"
    }, {
        type: "input",
        name: "Questions",
        message: "please enter question(s)"

    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
}
console.log("Success! Your ReadMe.md file has been generated")



const writeFileAsync = util.promisify(writeToFile);

async function init() {

    try {

        const userResponse = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank your fo ryour responses! Fetching your GitHub data next...");

        const userInfo = await api.getUser(userResponses);
        console.log("Your Github user info: ", userInfo);


        console.log("Generating your ReadMe next....")
        const markdown = generateReadMe(userResponses, userInfo);
        console.log(markdown);


        await writeFileAsync('ExampleReadMe.md', markdown);

    } catch (error) {
        console.log(error);

    }
};

// function call to initialize program
init();
