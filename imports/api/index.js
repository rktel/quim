import { Meteor } from 'meteor/meteor';
import { Reports } from '../db/Reports';

Meteor.publish('reports', function() {
  return Reports.find({});
});


Meteor.methods({
  'reports.insert'(report_array) {
    for (const key in report_array) {
      const repo = Reports.insert(report_array[key]);
      console.log('repor:',repo); // its id insert
    }
  }
});