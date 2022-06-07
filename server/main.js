import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("METEOR MONGO_URL: " + process.env.MONGO_URL);
});
