const Recipe = require('./recipe-model');

const checkRecipeId = async (req, res, next) => {
  const { recipe_id } = req.params;
  try {
    const recipe = await Recipe.findById(recipe_id);
    if(recipe){
      next();
    } else {
      res.status(404).json({ message: `Recipe id ${id} not found` })
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {
  checkRecipeId
}