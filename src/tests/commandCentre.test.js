import decodeCommand from '../commandCentre';
 const mockBoundActions = {
    place: jest.fn(),
    rotate: jest.fn(),
    move: jest.fn(),
    report: jest.fn(),
    error: jest.fn()
  }

describe('Reducer - Invalid scenrios testing', () => {

  it('should return false when empty command sent', () => {
    expect(decodeCommand('', mockBoundActions)).toEqual(false);
  });

  it('should return false when invalid command sent', () => {
    expect(decodeCommand(undefined, mockBoundActions)).toEqual(false);
  });

  it('should return false when first command is not PLACE', () => {
    expect(decodeCommand('MOVE', mockBoundActions)).toEqual(false);
  });

  it('should return false when PLACE command has x or y above 5 untis', () => {
    expect(decodeCommand('PLACE 6 5 EAST', mockBoundActions)).toEqual(false);
  });

  it('should return false when PLACE command is missing one or more values', () => {
    expect(decodeCommand('PLACE 6 5', mockBoundActions)).toEqual(false);
  });

  it('should call ERROR when invalid command passed after valid PLACE.', () => {
    decodeCommand('PLACE 3 3 EAST', mockBoundActions);
    decodeCommand('RUN', mockBoundActions);
    expect(mockBoundActions.error).toHaveBeenCalled();
  });
});

describe('Reducer - Valid scenrios testing', () => {

  it('should call PLACE with valid place command sent', () => {
    decodeCommand('PLACE 3 3 EAST', mockBoundActions);
    expect(mockBoundActions.place).toHaveBeenCalled();
  });

  it('should call MOVE with valid move command sent', () => {
    decodeCommand('MOVE', mockBoundActions);
    expect(mockBoundActions.move).toHaveBeenCalled();
  });

  it('should call REPORT with valid move command sent', () => {
    decodeCommand('REPORT', mockBoundActions);
    expect(mockBoundActions.report).toHaveBeenCalled();
  });

  it('should call ROTATE with valid direction command sent', () => {
    decodeCommand('LEFT', mockBoundActions);
    expect(mockBoundActions.rotate).toHaveBeenCalled();
  });

  it('should call ROTATE with valid direction command sent', () => {
    decodeCommand('RIGHT', mockBoundActions);
    expect(mockBoundActions.rotate).toHaveBeenCalled();
  });

  it('should call ERROR with valid move command sent', () => {
    decodeCommand('RUN', mockBoundActions);
    expect(mockBoundActions.report).toHaveBeenCalled();
  });

});