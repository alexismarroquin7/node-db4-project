const router = require('express').Router();

router.get(`/`, (req, res, next) => {
  res.status(200).json(`it's working`)
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