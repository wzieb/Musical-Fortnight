// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license){
//     return '';
//   }else {
//     return ``
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Project Description

${data.Description}

## License

${renderLicenseBadge(data.license)}

## Installation

${data.install}

## Tests

${data.tests}

## Usage

${data.usage}
`;
}

module.exports = generateMarkdown; 

