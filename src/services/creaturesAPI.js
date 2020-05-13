export const postCreature = creature => {
  return fetch(`${process.env.API_URL}/api/v1/creatures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creature)
  })
    .then(res => res.json());
};

export const fetchCreatures = () => {
  return fetch(`${process.env.API_URL}/api/v1/creatures`)
    .then(res => res.json());
};
