import robotStore from './src/robotStore';
import handleCommand from './src/commandCentre';
import {place, rotate, move, report} from './src/actionCentre';
import fs from 'fs';
import readline from 'readline';

const store = robotStore();

function receiveCommand() {
	var lineReader = readline.createInterface({
  		input: fs.createReadStream('commands.txt')
	});

	lineReader.on('line', function (line) {
	  	console.log('Line from:', line);
	  	const action = handleCommand(line);
	  	store.dispatch(action);
	});
}

receiveCommand();