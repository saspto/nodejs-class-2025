const fs = require('fs').promises;

async function openFile() {

    try{
        const csvHeaders = 'name,quantity,price';
        await fs.writeFile('groceries.csv', csvHeaders)
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
 
} 
async function addGItem(name, quantity, price){

    try{
    const csvLine = `\n${name},${quantity},${price}`;
    await fs.writeFile('groceries.csv', csvLine, {flag: 'a'});
    } catch(error){
    console.error(`Error while writing: ${error.message}`);
    }}
(async function () {
    await openFile();
    await addGItem('eggs',10,2);
    await addGItem('sugar',2,10);
    await addGItem('banana',12,15);
    })();


