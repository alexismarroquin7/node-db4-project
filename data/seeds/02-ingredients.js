
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Meatballs' },
    { ingredient_name: 'Marinara Sauce' },
    { ingredient_name: 'Fettuccine' },
    { ingredient_name: 'New York Steak' },
    { ingredient_name: 'Olive oil' }
  ]);
};
