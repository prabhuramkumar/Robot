import robotStore from './src/robotStore';
import receiveCommand from './src/commandCentre';
import * as actions from './src/actionCentre';
import { bindActionCreators } from 'redux'
import fs from 'fs';
import readline from 'readline';

const store = robotStore();
const boundActions = bindActionCreators(actions, store.dispatch);

function readCommand() {
	var lineReader = readline.createInterface({
  		input: fs.createReadStream('commands.txt')
	});

	receiveCommand(lineReader, boundActions);
}

readCommand();