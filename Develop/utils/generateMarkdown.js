

function generateMarkdown(data) {
  let backtick = '```';
  return ` # ${data.title} ${generateBadge(data.license)}
  ${data.description}
  ## License
  This program is licensed under ${data.license}
  ## Dependencies
  ${backtick}
  ${data.dependencies}
  ${backtick}
  ## Test
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
