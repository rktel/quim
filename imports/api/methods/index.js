import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Devices = new Mongo.Collection('devices');

Meteor.methods({
    'demo'(){
      console.log("--DEMO--");
    },'devices.insert'(device){
        console.log("--devices.insert--");
        console.log(device);
        Devices.insert(device);
    }
});