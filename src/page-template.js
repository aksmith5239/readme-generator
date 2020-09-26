module.exports = templateData => {
    console.log(templateData);

    return `
# Project Title
* badges
## Description
## Table of Contents
*link to Installation
*link to Usage
*link to Contributing
*link to Tests
* link to License
* link to Questions

## Installation
## Usage
## Contributing
## Tests
## License
* This license is covered under the _____ license

## Questions
* For more information contact me at:
* Name: ${templateData.name}
* GitHub: ${templateData.github}

    `;
};

