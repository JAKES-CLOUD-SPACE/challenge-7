// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === 'None') {
      return '';
    }
    // License badge URLs mapping
    const badges = {
      'MIT': 'https://img.shields.io/badge/license-MIT-blue.svg',
      'GPL 3.0': 'https://img.shields.io/badge/license-GPL%203.0-blue.svg',
      'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
      'BSD 3-Clause': 'https://img.shields.io/badge/license-BSD%203--Clause-blue.svg',
    };
    return `[License Badge](${badges[license]})`;
  }
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license || license === 'None') {
      return '';
    }

    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    };
    return `[License Link](${licenseLinks[license]})`;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'None') {
      return '';
    }
    return `## License
  This project is licensed under the ${license} License. See the(${renderLicenseLink(license)}) for more details.`;
  }


  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach out to me via [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

export default generateMarkdown;

