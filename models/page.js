//my edits- to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogwiki');
var db = mongoose.connection;

var Schema = mongoose.Schema;
	var Page = new Schema({
		title: String,
		url: {type: String, index: {unique:true}},
		content: String,
		menuIndex: Number,
		date: Date	
	})
	var Page = mongoose.model('Page', Page);
	module.exports=Page;

//The models for Page and Admin
var adminUser = new Schema({
	username: String,
	password: String
});
var adminUser = mongoose.model('adminUser', adminUser);

module.exports = adminUser;
