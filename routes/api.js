//basic CRUD routes

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/page.js')
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



//save record
router.post('/pages/add', function(request, response){
	var page = new Page({
		title: request.body.title,
		url: request.body.url,
		content: request.body.content,
		menuIndex: request.body.menuIndex,
		date: new Date(Date.now())
	});

	page.save(function(err){
		if (response.status(404)){
			return response.send(err)
		}
		else{
			return response.send(page)
		}
	});
});

//display single record- admin
router.get('/pages/admin-details/:id', function(request, response){
	var id = request.params.id;

	Page.findOne({
		_id: id
	},
	function(err, page){
		if (err){
			return console.log(err);
		} else{
		return response.send(page);
		}
		});
			
});

//display single record--client route

router.get('/pages/details/:url', function(request, response){
	var url = request.params.url
	
	Page.findOne({
		url: url
	}, function(err, page){
		if(err){
			return console.log(err)
		} else {
			return response.send(page);
		}
	});
});

//update record
router.post('/pages/update', function(request, response){
	var id = request.body._id;

	Page.update({
		_id: id
	}, {
		$set: {
			title: request.body.title,
			url: request.body.url,
			content: request.body.content,
			menuIndex: request.body.menuIndex,
			date: new Date(Date.now())
			}		
	})
	.exec();
	response.send("Page updated!")
});

//delete record
router.get('/pages/delete/:id', function(request, response){

	var id = request.params.id;

	Page.remove({
		_id: id
	},function(err){
		return console.log(err)
	});

	return response.send('Page id- ' + id + ' deleted');

});

module.exports = router;

