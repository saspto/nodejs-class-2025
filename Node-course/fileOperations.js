const fs = require('fs').promises;

async function fileOperations() {
    const filePath = 'data.txt';
    const newFilePath = 'example.txt';

    try {
        // Write to a file
        await fs.writeFile(filePath, 'Node.js File System Module Example');
        console.log('File written successfully.');

        // Append to the file
        await fs.appendFile(filePath, ' - Appended Text');
        console.log('Text appended successfully.');

        // Read the file
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('Updated File Content:', data);

        // Rename the file
        await fs.rename(filePath, newFilePath);
        console.log(`File renamed to ${newFilePath}`);

        // Delete the file
        await fs.unlink(newFilePath);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Execute the function
fileOperations();
