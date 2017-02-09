'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var CommentSchema = new Schema({
  content: String
});

/**
* Post Schema
*/
var PostSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill in the Title',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill in the Description',
    trim: true
  },
  time: {
    type: Date,
    default: Date.now,
    required: 'Please fill in the Time'
  },
  status: {
    type: Boolean
  },
  location: {
    type: String,
    default: '',
    required: 'Please fill in the Location',
    trim: true
  },
  service: {
    type: String,
    default: '',
    required: 'Please fill in the Service',
    trim: true
  },
  price: {
    type: Number,
    default: '0',
    required: 'Please fill in the Price'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  replyCount: {
    type: Number,
    default: 0
  },
  replies: [{
    type: Schema.ObjectId,
    ref: 'Reply'
  }]
});

mongoose.model('Post', PostSchema);
