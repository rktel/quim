import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Reports = new Mongo.Collection('reports');

Meteor.methods({
  'reports.insert'(report_array) {
    for (const key in report_array) {
      const repo = Reports.insert(report_array[key]);
      console.log('repor:',repo);
    }
  }
});