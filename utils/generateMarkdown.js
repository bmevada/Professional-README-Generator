// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return "";
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
    return "";
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
${renderLicenseLink(data.license)}
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
