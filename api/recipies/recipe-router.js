const Recipe = require('./recipe-model');
const mw = require('./recipe-middleware');
const router = require('express').Router();

router.get(`/`, async (req, res, next) => {
  try {
    const recipies = await Recipe.findAll();
    res.status(200).json(recipies);
  } catch(err) {
    next(err);
  }
});

router.get(`/:recipe_id`, mw.checkRecipeId, async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.recipe_id);
    res.status(200).json(recipe);
  } catch {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;