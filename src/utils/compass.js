import {faces} from '../robotConfig';


const compass = (direction, facing) => {
	if(direction === 'LEFT'){
		console.log("faces", faces);
		switch(facing){
			case faces.north:
				return faces.west;
			case faces.south:
				return faces.east;
			case faces.east:
				return faces.north;
			case faces.west:
				return faces.south;
		}
	}
	if(direction === 'RIGHT'){
		switch(facing){
			case faces.north:
				return faces.east;
			case faces.south:
				return faces.west;
			case faces.east:
				return faces.south;
			case faces.west:
				return faces.north;
		}
	}
}

export default compass