
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    { step_id: 1 },
    { step_quantity_of_ingredient: 2, ingredient_id: 2, step_id: 2 },
    { step_quantity_of_ingredient: 1, ingredient_id: 3, step_id: 3 },
    { step_quantity_of_ingredient: 1, ingredient_id: 4, step_id: 4 },
    { step_quantity_of_ingredient: 1, ingredient_id: 5, step_id: 5 }
  ]);
};
