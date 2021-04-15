
exports.up = function(knex) {
  return knex.schema
  .createTable('recipies', tbl => {
    tbl.increments('recipe_id');
    tbl.string('recipe_name').unique().notNullable();
    tbl.timestamp('created_at');
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name').unique().notNullable();
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id');
    tbl.string('step_instructions').notNullable();
    tbl.integer('step_number').notNullable();
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipies')
      .onDelete('RESTRICT');
  })
  .createTable('step_ingredients', tbl => {
    tbl.increments('step_ingredients_id');
    tbl.decimal('step_quantity_of_ingredient');
    tbl.integer('ingredient_id')
      .unsigned()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('RESTRICT');
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipies')
};
