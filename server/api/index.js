const router = require('express').Router();

// Here you will place routes for files that you will add in the api folder.
// More info/examples at link below:
// https://learn.fullstackacademy.com/workshop/589f3d5b12f93c00045c27fd/content/589f64c260b3960004f59466/text

// error handling
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;