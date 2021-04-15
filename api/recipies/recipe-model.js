const db = require('../../data/db-config');

const findAll = () => {
  return db('recipies');
}

const findById = async recipe_id => {
  const [ recipe_row ] = await db('recipies as r').where('r.recipe_id', recipe_id);
  const steps = await db('recipies as r')
  .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .select(
      'r.recipe_id',
      's.step_id',
      's.step_instructions', 
      's.step_number'
    )
    .where('s.recipe_id', recipe_id)
    .orderBy('s.step_number', 'asc');
  console.log("recipe_row: ", recipe_row)
  const result = { ...recipe_row, steps };
  return result;
}

module.exports = {
  findAll,
  findById
}