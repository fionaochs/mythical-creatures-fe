import { addCreature, ADD_CREATURE } from './creaturesActions';

describe('creatures actions', () => {
  it('creates an ADD_CREATURE action', () => {
    const action = addCreature({
      _id: '1234',
      type: 'gnome',
      hobby: 'mining',
      food: 'mushrooms',
      weapon: true
    });
    expect(action).toEqual({
      type: ADD_CREATURE,
      payload: {
        _id: '1234',
        type: 'gnome',
        hobby: 'mining',
        food: 'mushrooms',
        weapon: true
      }
    });
  });
});
