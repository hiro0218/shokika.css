import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const distPath = path.join(__dirname, '../dist');
const css = fs.readFileSync(path.join(distPath, 'shokika.css'), 'utf8');
const js = `const cssString = \`${css}\`;
export default cssString;`;

fs.writeFileSync(path.join(distPath, 'string.js'), js);
