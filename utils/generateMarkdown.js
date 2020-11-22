// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![project image] (./img/inaction.png)

  ##Table of Contents
  *[Description] (#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Questions](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}
  
  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Questions
  Contact Me:

  Github: [https://github.com/${data.username}](https://github.com/${data.username})
  Email: [${data.email}] (${data.email})
  `;
}

export default generateMarkdown;
