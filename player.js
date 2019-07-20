import robotStore from './src/robotStore';
import handleCommand from './src/commandCentre';
import * as actions from './src/actionCentre';
import { bindActionCreators } from 'redux'
import fs from 'fs';
import readline from 'readline';

const store = robotStore();
const boundActions = bindActionCreators(actions, store.dispatch);

function receiveCommand() {
	var lineReader = readline.createInterface({
  		input: fs.createReadStream('commands.txt')
	});

	lineReader.on('line', function (line) {
	  	console.log('Line from:', line);
	  	// console.log("state", store.getState());
	  	const action = handleCommand(line);
	  	store.dispatch(action);
	});
}

receiveCommand();