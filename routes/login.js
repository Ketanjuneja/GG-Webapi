var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('mongodb://ggadmin:khiladi720@ds045521.mlab.com:45521/gg_user');

router.get('/', function(req, res) {
    var collection = db.get('gg_login');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

module.exports = router;
