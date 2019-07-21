import controller from '../controlCentre';
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
  	let actions = {
  		type: 'PLACE',
  		commandValues: {x: 1, y: 1, facing: 'EAST'}
  	}
  	newState = controller(initialState, actions);
    expect(newState.position.x).toEqual(1);
	expect(newState.facing).toEqual('EAST');
  });

  it('should MOVE the robot on the table.', () => {
  	let actions = {
  		type: 'MOVE'
  	}
  	newState = controller(newState, actions);
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(1);
	expect(newState.facing).toEqual('EAST');
  });

  it('should ROTATE to the LEFT and change direction.', () => {
  	let actions = {
  		type: 'ROTATE',
  		direction: 'LEFT'
  	}
  	newState = controller(newState, actions);
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(1);
	expect(newState.facing).toEqual('NORTH');
  });

  it('should MOVE in the direction after rotation.', () => {
  	let actions = {
  		type: 'MOVE'
  	}
  	newState = controller(newState, actions);
    expect(newState.position.x).toEqual(2);
    expect(newState.position.y).toEqual(2);
	expect(newState.facing).toEqual('NORTH');
  });


  it('should REPORT and set value to be true for valid case.', () => {
  	let actions = {
  		type: 'REPORT'
  	}
  	newState = controller(newState, actions);
	expect(newState.report).toEqual(true);
  });

  it('should ERROR when there is a issue and report the error.', () => {
  	let actions = {
  		type: 'ERROR',
  		message: 'Test error'
  	}
  	newState = controller(newState, actions);
    expect(newState.error.errorOccured).toEqual(true);
    expect(newState.error.errorMessage).toEqual('Test error');
  });

  it('should REPORT and set value to be false after error.', () => {
  	let actions = {
  		type: 'REPORT'
  	}
  	newState = controller(newState, actions);
	expect(newState.report).toEqual(false);
  });

});

describe('Reducer test - Advanced functionality testing', () => {
	let newState;

  	let actions = {
  		type: 'PLACE',
  		commandValues: {x: 0, y: 0, facing: 'EAST'}
  	}
  	newState = controller(initialState, actions);
    expect(newState.position.x).toEqual(0);
	expect(newState.facing).toEqual('EAST');

  	it('should rotate 360 degree', () => {
	  	let actions = {
	  		type: 'LEFT'
	  	}
	  	for(let i=0; i<4; i++) {
	  		newState = controller(newState, actions);
	  	}
	  	expect(newState.position.x).toEqual(0);
    	expect(newState.position.y).toEqual(0);
    	expect(newState.facing).toEqual('EAST');
    	expect(newState.error.errorOccured).toEqual(false);
  	});

  	it('should take u-turn', () => {
	  	let actions = {
	  		type: 'MOVE'
	  	}
	  	for(let i=0; i<4; i++) {
	  		newState = controller(newState, actions);
	  	}
	  	expect(newState.position.x).toEqual(4);
    	expect(newState.position.y).toEqual(0);
    	expect(newState.facing).toEqual('EAST');

	  	let actions1 = {
	  		type: 'ROTATE',
  			direction: 'LEFT'
	  	}

	  	for(let i=0; i<2; i++) {
	  		newState = controller(newState, actions1);
	  	}
	  	expect(newState.position.x).toEqual(4);
    	expect(newState.position.y).toEqual(0);
    	expect(newState.facing).toEqual('WEST');

    	
  		newState = controller(newState, actions);
	  	expect(newState.position.x).toEqual(3);
    	expect(newState.position.y).toEqual(0);
    	expect(newState.facing).toEqual('WEST');
    	expect(newState.error.errorOccured).toEqual(false);
  	});
});

describe('Reducer test - Invallid Scenrios', () => {
	let newState;

	it('should PLACE the robot on the table on the border', () => {
	  	let actions = {
	  		type: 'PLACE',
	  		commandValues: {x: 5, y: 5, facing: 'EAST'}
	  	}
	  	newState = controller(initialState, actions);
	    expect(newState.position.x).toEqual(5);
		expect(newState.facing).toEqual('EAST');
	  });

  	it('should not be able to move beyond the border (5 units) and through error', () => {
	  	let actions = {
	  		type: 'MOVE'
	  	}
	  	newState = controller(newState, actions);
	  	expect(newState.position.x).toEqual(5);
    	expect(newState.position.y).toEqual(5);
    	expect(newState.facing).toEqual('EAST');
    	expect(newState.error.errorOccured).toEqual(true);
  	});
});