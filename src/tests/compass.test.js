import compass from '../utils/compass';

describe('compass testing', () => {
  it('should return false when invalid direction or face passed.', () => {
    expect(compass('UP', 'EAST')).toEqual(false);
    expect(compass('LEFT', 'SIDE')).toEqual(false);
  });

  it('should return correct face when turned LEFT ', () => {
    expect(compass('LEFT', 'EAST')).toEqual('NORTH');
    expect(compass('LEFT', 'NORTH')).toEqual('WEST');
    expect(compass('LEFT', 'WEST')).toEqual('SOUTH');
    expect(compass('LEFT', 'SOUTH')).toEqual('EAST');
  });

  it('should return correct face when turned RIGHT ', () => {
  	expect(compass('RIGHT', 'NORTH')).toEqual('EAST');
    expect(compass('RIGHT', 'EAST')).toEqual('SOUTH');
    expect(compass('RIGHT', 'SOUTH')).toEqual('WEST');
    expect(compass('RIGHT', 'WEST')).toEqual('NORTH');
  });
});