// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return " ";
}

//TODO: Create a function that returns a license link
// If there is no license , return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return " ";
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
    return " ";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  Week 9: Node.js Challenge: Professional README Generator

# Background

${data.background}
   

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License]
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)



# Description 
${data.description}

# Installation 
Installation instructions are as follows:
${data.install}

# Usage 
${data.usage}


${renderLicenseSection(data.license)}

# Contribution 
${data.contribute}

# Testing 
Tests are as follows:
${data.testing}

Link to deployed page: ${data.url} 

# Questions 
If you have any questions about this project please contact via email or Github.

Email: ${data.email}

Github: ${data.username}

`;
}

module.exports = generateMarkdown;
