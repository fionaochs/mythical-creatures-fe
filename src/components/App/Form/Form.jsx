import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [food, setFood] = useState('');
  const [weapon, setWeapon] = useState(false);
  const [image, setImage] = useState('');

  return (
    <form>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Mythical creature name"/>
      <textarea value={hobby} onChange={({ target }) => setHobby(target.value)} placeholder="Creature hobby" />
      <input value={food} onChange={({ target }) => setFood(target.value)} placeholder="Creature favorite food" />
      <label htmlFor="weapon">Does creature use a weapon?</label>
      <input id="weapon" type="checkbox" checked={weapon} onClick={() => setWeapon(true)}/>
      <img src={image}/>
      <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="Creature image"/>
    </form>
  );
};

export default Form;
