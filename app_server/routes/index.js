var express = require('express');
var router = express.Router();

//basic index
router.get('/', function(req, res) {
	res.send("Welcome to Phil's Blog");
})

module.exports = router;
