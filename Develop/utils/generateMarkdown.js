function generateMarkdown(data) {
  return ` # ${data.title} 
  ${data.description}
  ## License
  This program is licensed under ${data.license}
  ## Dependencies
  '''${data.dependencies}'''
  ## Test
  '''${data.test}'''
  ## What you need to know
  ${data.knowledge}
  ## Contributing
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
