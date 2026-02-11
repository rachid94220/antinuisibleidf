import { readFileSync, writeFileSync } from 'fs';

const file = readFileSync('components/testimonials.tsx', 'utf-8');

// Replace all "FirstName LastName" patterns in name fields with "FirstName L."
const updated = file.replace(/name: "(\w+[\u00C0-\u024F]*\w*) (\w)[\w\u00C0-\u024F-]*"/g, 'name: "$1 $2."');

writeFileSync('components/testimonials.tsx', updated);
console.log('Done updating names');
