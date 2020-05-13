import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCreature } from '../../../services/creaturesAPI';
import { addCreature } from '../../../actions/creaturesActions';

const Form = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [hobby, setHobby] = useState('');
  const [food, setFood] = useState('');
  const [weapon, setWeapon] = useState(false);
  const [image, setImage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    postCreature({ type, hobby, food, weapon, image })
      .then(creature => {
        dispatch(addCreature(creature));
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={type} onChange={({ target }) => setType(target.value)} placeholder="Mythical creature type"/>
      <textarea value={hobby} onChange={({ target }) => setHobby(target.value)} placeholder="Creature hobby" />
      <input value={food} onChange={({ target }) => setFood(target.value)} placeholder="Creature favorite food" />
      <label htmlFor="weapon">Does creature use a weapon?</label>
      <input id="weapon" type="checkbox" checked={weapon} onChange={({ target }) => setWeapon(target.checked)}/>

      <img src={image}/>
      <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="Creature image"/>
      
      <button>Create mythical creature</button>
    </form>
  );
};

export default Form;
