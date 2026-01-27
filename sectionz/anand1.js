const {promisify} = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readAnandFile() {
    try {
        const data = await readFileAsync('sectionz/anand1.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readwithpromisify();