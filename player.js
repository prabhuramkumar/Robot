import robotStore from './src/robotStore';
import decodeCommand from './src/commandCentre';
import * as actions from './src/actionCentre';
import { bindActionCreators } from 'redux'
import lineReader from 'line-reader';

const store = robotStore();
const boundActions = bindActionCreators(actions, store.dispatch);

function readCommand() {
	lineReader.eachLine('commands.txt', function(line, last) {
	  console.log(line);
	  const commandExecuted = decodeCommand(line, boundActions);

	  if(!commandExecuted){
	  	boundActions.error("Invalid Command, verify and run again.");
		boundActions.report();
		return false;
	  }
		
	});
}

readCommand();