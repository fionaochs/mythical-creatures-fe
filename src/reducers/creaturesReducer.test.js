import { addCreature } from '../actions/creaturesActions';
import reducer from './creaturesReducer';

describe('creatures reducer', () => {
  it('handle the ADD_CREATURE action', () => {
    const state = [];
    const action = addCreature({
      _id: '1234',
      type: 'gnome',
      hobby: 'mining',
      food: 'mushrooms',
      weapon: true
    });
    
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '1234',
        type: 'gnome',
        hobby: 'mining',
        food: 'mushrooms',
        weapon: true
      }
    ]);
  });
});
