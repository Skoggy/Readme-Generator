
function generateMarkdown(data) {

  let licenseArray = {
    "Apache license 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "CC0 1.0 Universal Public Domain Dedication": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Boost Software License": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  let licenseBadge = licenseArray[`${data.license}`]

  return `# ${data.title}
 
  ## License
  ${licenseBadge}
  
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
  Any questions can be sent to me at my GitHub or Email.
  ###### [Link To Github](https://github.com/${data.githubUsername})
  ###### [Link To Email](https://github.com/${data.emailAddress})
`;
}

module.exports = generateMarkdown;
