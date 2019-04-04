var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateCreated:{type: Date, default: Date.now()},
  websites: [websiteSchema]
},{collection:'Users'});

module.exports = userSchema;

