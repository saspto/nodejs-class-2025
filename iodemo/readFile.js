const fs = require('fs').promises;

async function readFile(filePath) {

    try{
        const data = await fs.readFile(filePath);
        console.log(data.toString());
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
 
} 

readFile('greetings.txt');