 import {faces, tableSize} from '../robotConfig';

const add = (position, axis, bordeLine)=>{
	let newPosition = Object.assign({},position);
	newPosition[axis]++;
	if(newPosition[axis] > bordeLine){
		return false;
	}
	return newPosition;
}

const subtract = (position, axis, bordeLine)=>{
	let newPosition = Object.assign({},position);
	newPosition[axis]--;
	if(newPosition[axis] < bordeLine){
		return false;
	}
	return newPosition;
}

const navigations = [
	{face: faces.west, axis:'x', operation: subtract, bordeLine: 0},
	{face: faces.south, axis:'y', operation: subtract, bordeLine: 0},
	{face: faces.east, axis:'x', operation: add, bordeLine: tableSize.x},
	{face: faces.north, axis:'y', operation: add, bordeLine: tableSize.y}
];

const naviagtor =  function(state){
	let position = state.position;

	let filteredNavigations = navigations.filter((item)=>{
		return item.face === state.facing;
	});
	const selectedNavigation = filteredNavigations[0];

	return selectedNavigation.operation(position, selectedNavigation.axis, selectedNavigation.bordeLine);

};


export default naviagtor;