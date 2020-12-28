// function to generate markdown for README
function generateReadMe(response) {
  return`
  

  # Title of Application : ${response.title}
 
 
  # Description : ${response.description}

  # Table of Contents : 
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)
  *[License](#license)
  

  # Installation : ${response.installation}

  # Usage : ${response.usage}

  # Contributors : ${response.contributors}

  # Tests : ${response.tests}

  # License : MIT
  
  # Questions?
   Contact me with any questions: $response.username}.

    `;
   }

module.exports = generateReadMe;
