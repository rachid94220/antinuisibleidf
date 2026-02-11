import fs from 'fs';

const filePath = 'components/testimonials.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all full names with first name + first letter of last name
// Pattern: name: "FirstName LastName" -> name: "FirstName L."
// Also handles compound first names like "Jean-Pierre" and "Sylvie et Marc"
content = content.replace(/name: "([^"]+) ([A-Z][a-zéèêëàâäôùûüïîç]+)"/g, (match, firstName, lastName) => {
  return `name: "${firstName} ${lastName[0]}."`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('All names updated successfully');
