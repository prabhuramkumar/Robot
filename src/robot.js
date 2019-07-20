import compass from './utils/compass';
import navigator from './utils/navigator';

// place the robot on table
export function placeRobot(state, placeValues) {
    const newPosition = {
		x: parseInt(placeValues[1]),
		y: parseInt(placeValues[2])
	}
   
    return Object.assign({}, state, {position:newPosition}, {facing: placeValues[3]});
}

// Move the robot
export function moveRobot(state) {
    const newPosition = navigator(state);
    if(!newPosition) {
    	let newError = {errorOccured: true, errorMessage: "Oh! falling off"};
    	return Object.assign({}, state, {error: newError});
    }
    return Object.assign({}, state, {position: newPosition});
}

export function rotateRobot(state, direction) {
	let newFacing = compass(direction, state.facing);
	return Object.assign({}, state, {facing: newFacing});
}

export function reportPosition(state, placeValues) {
	if(state.error.errorOccured){
    	console.log("Error", state.error.errorMessage);
	}else{
		console.log("Position", state.position.x + " " + state.position.y + " " + state.facing);
	}
}

export function errorUpdate(state, message) {
	let newError = {errorOccured: true, errorMessage: message};
	return Object.assign({}, state, {error: newError});
}