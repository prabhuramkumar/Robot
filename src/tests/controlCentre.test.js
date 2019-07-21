import decodeCommand from '../commandCentre';

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
    // expect(controller(undefined, {})).toEqual(initialState);
  });

 //  it('should add a product to the state and update total', () => {
 //  	let actions = {
 //  		type: 'ADD_TO_CART',
 //  		val: mockProducts[0]
 //  	}
 //  	newState = indexReducer(initialState, actions);
 //    expect(newState.total).toEqual(10);
	// expect(newState.cart.length).toEqual(1);
 //  });

  // it('should update quantity when same product added again and should update total', () => {
  // 	let actions = {
  // 		type: 'ADD_TO_CART',
  // 		val: mockProducts[0]
  // 	}
  // 	newState = indexReducer(newState, actions);
  //   expect(newState.total).toEqual(20);
	 // expect(newState.cart.length).toEqual(1);
	 // expect(newState.cart[0].quantity).toEqual(2);
  // });


});