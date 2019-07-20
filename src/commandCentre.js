import {place, rotate, move, report, error} from './actionCentre.js';
import {tableSize} from './robotConfig';
let placed;

//Redirect command to actions
export default function receiveCommand(lineReader, boundActions) {
	lineReader.on('line', function (line) {
	  	console.log('Command:', line);
	  	const decoded = decodeCommand(line, boundActions);
	  	if(!decoded) 
  			lineReader.close()
	});
}

//Decode command based on config
function decodeCommand(command, boundActions) {
	const [commandName, x, y, facing] = command.toUpperCase().split(' ');
	let positionValues = {x,y,facing};

	if(commandName === 'PLACE'){
		placed = checkInitalPlacement(positionValues);
	}

	if(placed) {
		handleCommand(commandName, positionValues, boundActions);
		return true;
	}else{
		console.log("Invalid command");
		return false;
	}
}

function checkInitalPlacement(positionValues){
	if(positionValues.x<tableSize.x 
		&& positionValues.y<tableSize.y 
		&& positionValues.x>0 
		&& positionValues.y>0)
		return true;
}

//Distribute command based on config
function handleCommand(commandName, positionValues, boundActions){
    switch (commandName) {
	    case 'PLACE': 
	    	 boundActions.place(positionValues);
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

