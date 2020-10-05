const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe what your project does?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions"
        },
        {
            type: "input",
            name: "usageInfo",
            message: "What is the usage information about your project"
        },
        {
            type: "input",
            name: "contributionGuidelines",
            message: "Please enter your contribution guidelines"
        },
        {
            type: "input",
            name: "testInstructions",
            message: "What are the test instructions for your project"
        },
        {
            type: "list",
            message: "Which license type would you like to use",
            name: "license",
            choices: [
                "Apache license 2.0",
                "Academic Free License v3.0",
                "GNU General Public License v3.0",
                "MIT",
                "Open Software License 3.0"
            ]
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Please Enter in your GitHub username"
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is your contact Email?"
        },
    ])
}

var generateMarkdown = require('./utils/generateMarkdown');

async function init() {
    console.log("its working")
    try {
        const data = await promptUser();

        const markdown = await generateMarkdown(data);

        await writeFileAsync("README.md", markdown);

        console.log("Successfully wrote your Readme file")
    } catch (err) {
        console.log(err);
    }
}
// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
init();
