function generateMarkdown(data) {
  let backtick = '```';

  return ` # ${data.title} ${generateBadge(data.license)}
  ${data.description}
  ## Table of Contents
  * [Descrition](#Description)
  * [License](#License)
  * [Installation](#Installation)
  * [Testing](#Testing)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  ## License
  This program is licensed under ${data.license}
  ## Installation
  ${backtick}
  ${data.dependencies}
  ${backtick}
  ## Testing
  ${backtick}
  ${data.test}
  ${backtick}
  ## What you need to know
  ${data.knowledge}
  ## Contributing
  ${data.contribution}
  ## Questions
  Github Username - ${data.username}
`;
}

function generateBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-green)`;
}


module.exports = generateMarkdown;
