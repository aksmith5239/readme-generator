module.exports = templateData => {
// console.log(templateData); 
const {name, repoLink, email, title, description, installation, usage, contribution, test, ...license} = templateData;

if (license.licenses == 'Apache') {
    license.licenses = 'The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.';
} else if (license.licenses == 'BSD') {
    license.licenses = 'BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software.';
} else if (license.licenses == 'GNU') {
    license.licenses = 'The GNU General Public License (GNU GPL or simply GPL) is a series of widely-used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.';
} else if (license.licenses == 'MIT') {
    license.licenses = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT)[5] in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.';
}

    return `
# ${templateData.title}

![github logo](https://img.shields.io/badge/license-${templateData.licenses}-orange.svg)


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
### This license is covered under the ${templateData.licenses} license(s):
* ${license.licenses}
***
## Questions
For more information contact me at:<br>
* Name: ${templateData.name}
* GitHub: ${repoLink}
* Email Address: ${templateData.email}
    `;
};

