import {place, rotate, move, report, error} from './actionCentre.js';


//Redirect command to actions
export default function handleCommand(command){
    const commandValues = command.toUpperCase().split(' ');
    const commandName = commandValues[0];
    switch (commandName) {
	    case 'PLACE': 
	    	return place(commandValues);
	    
	    case 'LEFT':
			return rotate(commandName);
		
		case 'RIGHT': 
			return rotate(commandName);
		
		case 'MOVE':
			return move();
		
		case 'REPORT':
			return report();

		default:
			return error(message);
		
	}
}

