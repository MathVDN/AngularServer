var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('template', {
        title: 'AngularServer',
        partials: {
            content: 'pages/index'
        }
    });
});

module.exports = router;
