// function to generate markdown for README


const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const academic = ""
const GNU = ""
const MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const open = ""


function generateMarkdown(data) {
  return `# ${data.title}
 
  ## License
  ${data.license}
  
  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage Info](#UsageInfo)
  3. [Contributing Guidelines](#ContributingGuidelines)
  4. [Test Instructions](#TestInstructions)
  5. [Questions](#Questions)


  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usageInfo}

  ## Contributing Guidelines
  ${data.contributionGuidelines}

  ## Test Instructions
  ${data.testInstructions}
  
## Questions
  [Link To Github](https://github.com/${data.githubUsername})
  [Link To Email](https://github.com/${data.emailAddress})
`;
}

module.exports = generateMarkdown;
