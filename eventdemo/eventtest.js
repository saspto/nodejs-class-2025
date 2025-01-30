const EventEmitter = require('events');

class FileProcessor extends EventEmitter{}

const processor = new FileProcessor();

processor.on('start', (fileName) => {
console.log(`Starting processing of ${fileName}`);
});
processor.on('process', (progress) => {
console.log(`Processing file...${progress}% completed`);
});
processor.on('complete', () => {
console.log('Processing complete');
});
processor.on('error', (err) => {
console.log(`Error processing of ${err.message}`);
});


function startProcessing(fileName){
    if(!fileName){
        processor.emit('error', new Error('No File name given'));
        return;
    }
    processor.emit('start', fileName);

    let progress = 0;
    let Interval = setInterval(() => {
	    progress +=25;
	    if (progress === 50 && fileName ==='corruptFile.xyz'){
		clearInterval(Interval);
		processor.emit('error', new Error('Format not supported'));
		return;
	}
	processor.emit('process', progress);
	if (progress === 100){
		clearInterval(Interval);
		processor.emit('complete');
		return;
	}
},1000);
}
//startProcessing();
startProcessing('document.txt');
/*
if (!fs.existsSync(fileName)) { processor.emit('error', newError(File not found: ${fileName})); return; }
*/
