import takeAChance from './take-a-chance.js';

takeAChance('Kitlong')
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
