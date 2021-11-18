let express = require('express');
let router = express.Router();
let name = require('../models/name');

router.get("/name", function (req, res) {
    res.render('index')
})

router.post("/name", function (req, res) {
    
    name.create(req.body.name, function (err, nameAnswer) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/name/name');
        }
    })
    
})

module.exports = router;