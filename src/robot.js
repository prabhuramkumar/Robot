import compass from './utils/compass';
import navigator from './utils/navigator';

// place the robot on table
// All validations done prior, just place it.
export function placeRobot(state, placeValues) {
    const newPosition = {
		x: parseInt(placeValues.x),
		y: parseInt(placeValues.y)
	}
   
    return Object.assign({}, state, {position:newPosition}, {facing: placeValues.facing});
}

// Move robot on 5X5 table 
// If it goes outside the border throw error.
export function moveRobot(state) {
    const newPosition = navigator(state);
    if(!newPosition) {
    	let newError = {errorOccured: true, errorMessage: "Oh! falling off"};
    	return Object.assign({}, state, {error: newError});
    }
    return Object.assign({}, state, {position: newPosition});
}

// Rotate robot
export function rotateRobot(state, direction) {
	let newFacing = compass(state.facing, direction);
	if(!newFacing) {
		let newError = {errorOccured: true, errorMessage: "Oh! Wrong Direction"};
    	return Object.assign({}, state, {error: newError});
    }
	return Object.assign({}, state, {facing: newFacing});
}

// Report if there is no error otherwise report error.
export function reportPosition(state, placeValues) {
	let report;
	if(state.error.errorOccured){
    	console.log("Error:", state.error.errorMessage);
    	report = false;
	}else{
		console.log("Position:", state.position.x + " " + state.position.y + " " + state.facing);
		report = true;
	}
	return Object.assign({}, state, {report});
}

// handle error when called from anywhere and update state.
export function errorUpdate(state, message) {
	let newError = {errorOccured: true, errorMessage: message};
	return Object.assign({}, state, {error: newError});
}