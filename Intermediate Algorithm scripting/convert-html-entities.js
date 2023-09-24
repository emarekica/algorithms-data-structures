/* Convert HTML entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


NOTES:

- use chart with html entities: https://www.w3schools.com/html/html_entities.asp
- separate the string and work with each character to convert the right ones and then join everything back up.
- can be solved with RegEx

*/


function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Use map function to return a filtered str with all entities changed automatically.
  // entity is assigned to htmlEntities object via bracket notation
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
