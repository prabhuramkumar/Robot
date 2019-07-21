import {tableSize} from './robotConfig';
let placed;


//Decode command based on config
export default function decodeCommand(command, boundActions) {
	try {
		const [commandName, x, y, facing] = command.toUpperCase().split(' ');
		let positionValues = {x,y,facing};

		if(commandName === 'PLACE'){
			placed = checkInitalPlacement(positionValues);
		}

		if(placed) {
			handleCommand(commandName, positionValues, boundActions);
			return true;
		}else{
			return false;
		}
	}catch(e) {
		return false;
	}
}

function checkInitalPlacement(positionValues){
	if(positionValues.x<=tableSize.x 
		&& positionValues.y<=tableSize.y 
		&& positionValues.x>=0 
		&& positionValues.y>=0)
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

