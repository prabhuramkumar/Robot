import {faces, directions} from '../robotConfig';

// faces constants is set clockwise, move by 1 item in the array to get next face.
// when reached first item for LEFT, reseting to last item in the array using lenth.
// Just reversing the array for RIGHT
const compass = (facing, direction) => {
	const facesArray = Object.values(faces);
	const faceIndex = facesArray.indexOf(facing);
	const directionsArray = Object.values(directions);
	const directionIndex = directionsArray.indexOf(direction);
	const lastFaceIndex = facesArray.length;
	const firstFaceIndex = 0;

	if(faceIndex < 0 || directionIndex < 0){
		return false;
	}

	if(direction === directions.right)
		facesArray.reverse();

	const currentFaceIndex = facesArray.indexOf(facing);
	return currentFaceIndex === firstFaceIndex ? facesArray[lastFaceIndex-1] : facesArray[currentFaceIndex-1];
}

export default compass