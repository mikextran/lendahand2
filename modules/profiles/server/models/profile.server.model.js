'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Profile Schema
 */
var ProfileSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill in display name',
    trim:true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  skill: {
    type: String,
    default: '',
    required: 'Please fill skills',
    trim: true
  },
  location: {
    type: String,
    required: 'Please fill location',
    trim: true  
  },
  about: {
    type: String,
    required: 'Please fill about',
    trim: true  
  }
});

mongoose.model('Profile', ProfileSchema);
