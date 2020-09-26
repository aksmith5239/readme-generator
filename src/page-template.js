module.exports = templateData => {
console.log(templateData);   

const badgeObj =  {
    Apache: 'https://img.shields.io/badge/license-Apache-orange',
    BSD: 'https://img.shields.io/badge/license-BSD-green',
    GNU:'https://img.shields.io/badge/license-GNU-blue',
    MIT: 'https://img.shields.io/badge/license-MIT-red'
}
// title is project title and badges
// questions username, github link and email address
// project is everything else

    return `
# ${templateData.title}

* badges

## Description
* ${templateData.description}
***
## Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[License](#license)<br>
[Questions](#questions)<br>
***
## Installation
${templateData.installationInstructions}

## Usage
${templateData.usage}

## Contributing
${templateData.contributionGuidelines}

## Tests
${templateData.testInstructions}

## License
This license is covered under the ${templateData.licenses} license
***
## Questions
For more information contact me at:<br>
* Name: ${templateData.name}
* GitHub: ${templateData.repoLink}
* Email Address: ${templateData.email}
    `;
};

