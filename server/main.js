import { Meteor } from 'meteor/meteor';
import '../imports/api/index.js';

//const Names = new Mongo.Collection('names');

Meteor.startup(() => {
  // code to run on server at startup
 // console.log("METEOR MONGO_URL: " + process.env.MONGO_URL); 
 // console.log("NAMES COLLECTION: " + Names);
});

