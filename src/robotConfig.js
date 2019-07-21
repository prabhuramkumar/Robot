const initialState = {
    position: null,
    facing: null,
    rotate: null,
    error: {
    	errorOccured: false,
    	errorMessage: ''
    }
};

const faces = {
	north: 'NORTH',
	east: 'EAST',
	south: 'SOUTH',
	west: 'WEST'
}

const directions = {
	left: "LEFT",
	right: "RIGHT"
}

const tableSize = {
	x: 5,
	y: 5
}


export {initialState, faces, directions, tableSize};