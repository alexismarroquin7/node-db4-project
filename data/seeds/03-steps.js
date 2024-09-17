
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_instructions: 'Put a large saucepan on a medium heat', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Add 2 cans of Marinara sauce', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Add 1 box of Fettuccine', step_number: 3, recipe_id: 1 },
    { step_instructions: 'Pat the steak dry', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Add 1 tbsp olive oil', step_number: 2, recipe_id: 2 }
  ]);
};
