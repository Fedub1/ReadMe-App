// function to generate markdown for README
function generateReadMe(userResponses, userInfo) {
  
  let draftToC = ` ## Table of Contents`;

  if (userResponses.installation !== '') {draftToC += `
  * [Installation](#installation)` };
  
  if (userResponses.usage !== '') {draftToC += `
  *[Usage](#usage)`};
  
  if (userResponses.contributing !== '') {draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') {draftToC += `
  * [Tests](#tests)` };
  
let draftReadMe =
`# ${userResponses.title}

## Description
  ${userResponses.description}
  `
  draftReadMe += draftToC;

  draftReadMe +=`
  *[License](license)`;
  
  if (userResponses.installation !== ''){

    draftReadMe +=
    
    `

  ## Installation 

  ${userResponses.installation}`

  };

   if (userResponses.usage !== ''){

    draftReadMe +=
    
    `

  ## Usage

  ${userResponses.usage}`

  };
  if (userResponses.contributing !== ''){

    
    `

  ## Contributing 

  ${userResponses.contributing}`

  };
  if (userResponses.tests !== ''){

    draftReadMe +=
    
    `
  ## Tests 

  ${userResponses.tests}`

  };

  draftReadMe +=
  `
## License
${userResponses.license}
`;

let draftDev =
`

---
  ## Questions?
  ![Developer Profile Picture]($userInfo.avatar_url})

  Contact me with any questions:

  Github: [@${userInfo.login}]($userInfo.url})
  `;
  if (userInfo.email !==null){
    draftDev +=
`
    Email: ${userInfo.email}
    `};

    draftReadMe += draftDev;

    return ddraftReadMe;

  }

module.exports = generateReadMe;
