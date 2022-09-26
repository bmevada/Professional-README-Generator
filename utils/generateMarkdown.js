// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0'){
    return '![License: Apache]()'
  }
  if (license === 'MIT License'){
    return '![License: MIT License]()'
  }
  if (license === 'Mozilla Public License 2.0'){
    return '![License: Mozilla Public License 2.0]()'
  }
  if (license === 'Boost Software License 1.0'){
    return '![License: Boost Software License 1.0]()'
  }
  if (license === 'The Unilicense'){
    return '![License: The Unilicense]()'
  }
  if (license === 'GNU AGPLv3'){
    return '![License: GNU AGPLv3]()'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0'){
    return '![License: Apache](https://choosealicense.com/licenses/apache-2.0/)'
  }
  if (license === 'MIT License'){
    return '![License: MIT License](https://choosealicense.com/licenses/mit/)'
  }
  if (license === 'Mozilla Public License 2.0'){
    return '![License: Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  }
  if (license === 'Boost Software License 1.0'){
    return '![License: Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)'
  }
  if (license === 'The Unilicense'){
    return '![License: The Unilicense](https://choosealicense.com/licenses/unlicense/)'
  }
  if (license === 'GNU AGPLv3'){
    return '![License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
