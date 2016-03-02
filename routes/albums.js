var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Albums() {
  return knex('albums');
}

router.post('/', function(req, res) {
  Albums().insert({
    artist: req.body.artist,
    name: req.body.name,
    genre: req.body.genre,
    stars: req.body.stars,
    explicit: req.body.explicit
  }, 'id').then(function(result) {
    res.json(result);
  });
});

router.get('/', function(req, res) {
  //SELECT * FROM albums
  Albums().select().then(function(result) {
    res.json(result);
  });
});

router.get('/:id', function(req, res){
  //SELECT * from albums where ID = req.params.id
  Albums().where('id', req.params.id).first().then(function(result) {
    res.json(result);
  });
});

router.put('/:id', function(req, res){
  //update albums set stars = req.body.stars where id = req.params.id
  Albums().where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result) {
    res.json(result);
  })
});

router.delete('/:id', function(req, res) {
  // DELETE FROM albums WHERE id= req.params.id
  Albums().where('id', req.params.id).del().then(function(result) {
    res.json(result);
  });
});

module.exports = router;