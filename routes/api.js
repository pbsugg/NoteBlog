//basic CRUD routes

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models.page.js')
var adminUser = require('../models/admin-users.js');

//User routes

router.get('/pages', function(request, response){
	
	return Page.find(function(err, pages){
		if (!err){
			return response.send(pages);
		}
		else{
			return response.send(500, err);
		}
	});
})

module.exports = router;
