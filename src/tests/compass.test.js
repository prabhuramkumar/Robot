import compass from '../utils/compass';

describe('compass testing', () => {
  it('should return false when invalid direction or face passed.', () => {
    expect(compass('UP', 'EAST')).toEqual(false);
    expect(compass('LEFT', 'SIDE')).toEqual(false);
  });

  it('should return correct face when turned LEFT ', () => {
    expect(compass('EAST', 'LEFT')).toEqual('NORTH');
    expect(compass('NORTH', 'LEFT')).toEqual('WEST');
    expect(compass('WEST', 'LEFT')).toEqual('SOUTH');
    expect(compass('SOUTH', 'LEFT')).toEqual('EAST');
  });

  it('should return correct face when turned RIGHT ', () => {
  	expect(compass('NORTH', 'RIGHT')).toEqual('EAST');
    expect(compass('EAST', 'RIGHT')).toEqual('SOUTH');
    expect(compass('SOUTH', 'RIGHT')).toEqual('WEST');
    expect(compass('WEST', 'RIGHT')).toEqual('NORTH');
  });
});