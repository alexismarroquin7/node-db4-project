const Recipe = require('./recipe-model');
const router = require('express').Router();

router.get(`/`, async (req, res, next) => {
  try {
    const recipies = await Recipe.findAll();
    res.status(200).json(recipies);
  } catch(err) {
    next(err);
  }
});

router.get(`/:recipe_id`, (req, res, next) => {

});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;