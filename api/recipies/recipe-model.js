const db = require('../../data/db-config');

const findAll = () => {
  return db('recipies');
}

const findById = async recipe_id => {
  /* 
  select
    r.recipe_id,
    r.recipe_name,
    r.created_at,
    s.step_id,
    s.step_number,
    s.step_instructions,
    s_ing.step_quantity_of_ingredient,
    ing.ingredient_id,
    ing.ingredient_name
  from recipies r
  join steps s
    on r.recipe_id = s.recipe_id
  left join step_ingredients s_ing
    on s.step_id = s_ing.step_id
  left join ingredients ing
    on ing.ingredient_id = s_ing.ingredient_id
  where s.recipe_id = 1
  order by s.step_number asc
  */
  const rows = await db('recipies as r')
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as s_ing', 's.step_id', 's_ing.step_id')
    .leftJoin('ingredients as ing', 'ing.ingredient_id', 's_ing.ingredient_id')
    .where('s.recipe_id', recipe_id)
    .orderBy('s.step_number', 'asc');
  if(rows){
    const [ recipe_details ] = rows.map((row, idx) => {
      if(idx === 0){
        return {
          recipe_id: row.recipe_id,
          recipe_name: row.recipe_name,
          created_at: row.created_at,
        }
      }
    });
    const steps_details = rows.map(row => {
      if(row.ingredient_id !== null){
        return {
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: [
            {
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.step_quantity_of_ingredient
            }
          ]
        }
      } else {
        return {
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: []
        }
      }
    });
    return {
      ...recipe_details,
      steps: steps_details
    };
  } else {
    return null;
  }
}

module.exports = {
  findAll,
  findById
}