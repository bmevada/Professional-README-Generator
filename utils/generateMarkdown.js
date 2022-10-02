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
  if (license !== 'None'){
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
  if (license !== 'None'){
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

    // case 'GNU GPLv3 License':
    //   return `This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
    //   This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
    //   You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.`;
  // }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents ${data.tableofcontents}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

# Description 
${data.description}

# Installation 
* Installation instructons are as follows:
${data.install}

# Usage 
${data.use}
${renderLicenseSection(data.license)}

# Contribution 
${data.contribute}

# Testing 
* Tests are as follows:
${data.test}

# Questions 
If you have any questions about this project please contact via email or Github.
email: ${data.email}.
Github: [${data.Username}](${data.Username})

`;
}

module.exports = generateMarkdown;
