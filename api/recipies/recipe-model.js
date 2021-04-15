const db = require('../../data/db-config');

const findAll = () => {
  return db('recipies');
}

const findById = recipe_id => {
  return db('recipies as r')
    .where('r.recipe_id', recipe_id);
}

module.exports = {
  findAll,
  findById
}