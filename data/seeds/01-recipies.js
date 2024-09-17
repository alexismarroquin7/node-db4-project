
exports.seed = function(knex) {
  return knex('recipies').insert([
    { recipe_name: 'Spaghetti and Meatballs' },
    { recipe_name: 'Pan Seared Steak' }
  ]);
};
