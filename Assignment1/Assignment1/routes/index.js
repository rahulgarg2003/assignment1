var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Route for the Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Project' });
});


// Route for the Services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Route for the Contact Me page
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Me' });
});
module.exports = router;
