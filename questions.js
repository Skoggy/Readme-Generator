const inquirer = require("inquirer");




const questions = [
    {
        type: "input",
        name: "name",
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
        name: "usage-info",
        message: "What is the usage information about your project"
    },
    {
        type: "input",
        name: "contribution-guidelines",
        message: "Please enter your contribution guidelines"
    },
    {
        type: "input",
        name: "test-instructions",
        message: "What are the test instructions for your project"
    },
    {
        type: "checkbox",
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
        name: "github-username",
        message: "Please Enter in your GitHub username"
    },
    {
        type: "input",
        name: "email-address",
        message: "What is your contact Email?"
    },
];