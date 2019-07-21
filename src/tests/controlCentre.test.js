import controller from '../controlCentre';
import {place, rotate, move, report, error} from '../actionCentre';

const initialState = {
    position: null,
    facing: null,
    rotate: null,
    error: {
	    	errorOccured: false,
	    	errorMessage: ''
	    }
	};

describe('Reducer - Basic functionality testing', () => {
  let newState;
  
  it('should return the initial state', () => {
    expect(controller(undefined, {})).toEqual(initialState);
  });

  it('should PLACE the robot on the table', () => {
		let commandValues = {x: 1, y: 1, facing: 'EAST'};
  	newState = controller(initialState, place(commandValues));
    expect(newState.position.x).toEqual(1);
	 expect(newState.facing).toEqual('EAST');
  });

  it('should MOVE the robot on the table.', () => {
  	newState = controller(newState, move());
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(1);
	  expect(newState.facing).toEqual('EAST');
  });

  it('should ROTATE to the LEFT and change direction.', () => {
  	newState = controller(newState, rotate('LEFT'));
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(1);
	  expect(newState.facing).toEqual('NORTH');
  });

  it('should MOVE in the direction after rotation.', () => {
  
  	newState = controller(newState, move());
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(2);
	  expect(newState.facing).toEqual('NORTH');
  });


  it('should REPORT and set value to be true for valid case.', () => {
  	newState = controller(newState, report());
	  expect(newState.report).toEqual(true);
  });

  it('should ERROR when there is a issue and report the error.', () => {
  	newState = controller(newState, error('Test error'));
    expect(newState.error.errorOccured).toEqual(true);
    expect(newState.error.errorMessage).toEqual('Test error');
  });

  it('should REPORT and set value to be false after error.', () => {
  	newState = controller(newState, report());
	  expect(newState.report).toEqual(false);
  });

});

describe('Reducer test - Advanced functionality testing', () => {
	let newState;
	const commandValues = {x: 0, y: 0, facing: 'EAST'}
	newState = controller(initialState, place(commandValues));
  expect(newState.position.x).toEqual(0);
	expect(newState.facing).toEqual('EAST');

	it('should rotate 360 degree', () => {
  	for(let i=0; i<4; i++) {
  		newState = controller(newState, rotate('LEFT'));
  	}
  	expect(newState.position.x).toEqual(0);
  	expect(newState.position.y).toEqual(0);
  	expect(newState.facing).toEqual('EAST');
  	expect(newState.error.errorOccured).toEqual(false);
	});

	it('should take u-turn', () => {
  	for(let i=0; i<4; i++) {
  		newState = controller(newState, move());
  	}
  	expect(newState.position.x).toEqual(4);
  	expect(newState.position.y).toEqual(0);
  	expect(newState.facing).toEqual('EAST');

  	for(let i=0; i<2; i++) {
  		newState = controller(newState, rotate('LEFT'));
  	}
  	expect(newState.position.x).toEqual(4);
  	expect(newState.position.y).toEqual(0);
  	expect(newState.facing).toEqual('WEST');

  	
		newState = controller(newState, move());
  	expect(newState.position.x).toEqual(3);
  	expect(newState.position.y).toEqual(0);
  	expect(newState.facing).toEqual('WEST');
  	expect(newState.error.errorOccured).toEqual(false);
	});
});

describe('Reducer test - Invallid Scenrios', () => {
	let newState;

	it('should PLACE the robot on the table on the border', () => {
		const commandValues = {x: 5, y: 5, facing: 'EAST'}
  	newState = controller(initialState, place(commandValues));
    expect(newState.position.x).toEqual(5);
	  expect(newState.facing).toEqual('EAST');
  });

  it('should ROTATE with wrong value return error', () => {
    newState = controller(newState, rotate('DOWN'));
    expect(newState.position.x).toEqual(5);
    expect(newState.position.y).toEqual(5);
    expect(newState.facing).toEqual('EAST');
    expect(newState.error.errorOccured).toEqual(true);
  });

	it('should not be able to move beyond the border (5 units) and through error', () => {
  	newState = controller(newState, move());
  	expect(newState.position.x).toEqual(5);
  	expect(newState.position.y).toEqual(5);
  	expect(newState.facing).toEqual('EAST');
  	expect(newState.error.errorOccured).toEqual(true);
	});

  it('should not be able to move beyond the border (5 units) in origin direction and through error', () => {
    newState = controller(newState, rotate('RIGHT'));
    for(let i=0; i<6; i++){
      newState = controller(newState, move());
    }
    expect(newState.position.x).toEqual(5);
    expect(newState.position.y).toEqual(0);
    expect(newState.facing).toEqual('SOUTH');
    expect(newState.error.errorOccured).toEqual(true);
  });
});