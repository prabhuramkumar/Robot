import compass from './utils/compass';

export function placeRobot(state, placeValues) {
    // place the robot on table
    const newPosition = {
    	position: {
    		x: placeValues[1],
    		y: placeValues[2]
    	}
	}
   
    return Object.assign({}, state, newPosition, {facing: placeValues[3]});
}

export function moveRobot(state) {
    // Move the robot
    let position = state.position;
	switch (state.facing) {
		case 'NORTH':
		  	return position.y+1;
		case 'SOUTH':
		  	return position.y+1;
		case 'EAST':
			return position.x+1;
		case 'WEST':
			return position.x+1;
	}
    return Object.assign({}, state, position);
}

export function rotateRobot(state, direction) {
	let newFacing = compass(direction, state.facing);
	return Object.assign({}, state, {facing: newFacing});
}

export function reportPosition(state, placeValues) {
	console.log("state", state);
    console.log("Position", state.position.x + " " + state.position.y + " " + state.facing);
}

export function error(state) {
    console.log("OOPS! Wrong command");
}