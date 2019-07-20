import {place, rotate, move, report, error} from './actionCentre.js';
let placed;

//Redirect command to actions
export default function receiveCommand(lineReader, boundActions) {
	lineReader.on('line', function (line) {
	  	console.log('Line from:', line);
	  	const decoded = decodeCommand(line, boundActions);
	  	if(!decoded) 
  			lineReader.close()
	});
}

function decodeCommand(command, boundActions) {
	const commandValues = command.toUpperCase().split(' ');
	const commandName = commandValues[0];
	if(!placed) {
		placed = commandName === 'PLACE';
	}

	if(placed) {
		handleCommand(commandName, commandValues, boundActions);
		return true;
	}else{
		console.log("Invalid command");
		return false;
	}
}


function handleCommand(commandName, commandValues, boundActions){
    switch (commandName) {
	    case 'PLACE': 
	    	 boundActions.place(commandValues);
	    	 break;
	    
	    case 'LEFT':
			 boundActions.rotate(commandName);
			 break;
		
		case 'RIGHT': 
			 boundActions.rotate(commandName);
			 break;
		
		case 'MOVE':
			 boundActions.move();
			 break;
		
		case 'REPORT':
			 boundActions.report();
			 break;

		default:
			 boundActions.error('OOPS! Wrong command');
			 break;
		
	}
}

