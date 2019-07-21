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

  
let newState;

describe('Reducer test - Testing initialState', () => {
  it('should return the initial state', () => {
    expect(controller(undefined, {})).toEqual(initialState);
  });

  it('should add a product to the state and update total', () => {
  	let actions = {
  		type: 'PLACE',
  		commandValues: {x: 1, y: 1, facing: 'EAST'}
  	}
  	newState = controller(initialState, actions);
    expect(newState.position.x).toEqual(1);
	expect(newState.facing).toEqual('EAST');
  });

});