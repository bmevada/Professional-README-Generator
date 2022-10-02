// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === 'Apache 2.0'){
  //   return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  // }
  // if (license === 'MIT License'){
  //   return '![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  // }
  // if (license === 'Mozilla Public License 2.0'){
  //   return '![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  // }
  // if (license === 'Boost Software License 1.0'){
  //   return '![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  // }
  // if (license === 'The Unilicense'){
  //   return '![License: The Unilicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  // }
  // if (license === 'GNU AGPLv3'){
  //   return '![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  // }
  if (license !== 'None') {
    return `![Github]('https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license === 'Apache 2.0'){
  //   return '![License: Apache](https://www.apache.org/licenses/LICENSE-2.0)'
  // }
  // if (license === 'MIT License'){
  //   return '![License: MIT License](https://choosealicense.com/licenses/mit/)'
  // }
  // if (license === 'Mozilla Public License 2.0'){
  //   return '![License: Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  // }
  // if (license === 'Boost Software License 1.0'){
  //   return '![License: Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)'
  // }
  // if (license === 'The Unilicense'){
  //   return '![License: The Unilicense](https://choosealicense.com/licenses/unlicense/)'
  // }
  // if (license === 'GNU AGPLv3'){
  //   return '![License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)'
  // }
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // switch (license) {
  if (license !== 'None') {
    return `## License
      license used is ${license}.`
  }
  else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  # Background
  *${data.background} 
  *Link to deployed page: ${data.url} 

## Table of Contents 
- [Background] (#background)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)



# Description 
${data.description}

# Installation 
Installation instructions are as follows:
${data.installation}

# Usage 
${data.usage}

# Licensing
The following licenses are required for the application/project:
*${(data.license)}

# Contribution 
${data.contribute}

# Testing 
Tests are as follows:
${data.testing}

# Questions 
If you have any questions about this project please contact via email or Github.
Email: ${data.email}.
Github: ${data.username}

`;
}

module.exports = generateMarkdown;
