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
  },'reports.getToday'(deviceIMEI){
    let today = new Date();
    today = today.toISOString().slice(0,10) + 'T00:00:00.000Z';
    const reports = Reports.find({imei: Number(deviceIMEI), dateAndTime: { $gte: new Date(today) }}, { sort: { dateAndTime: -1 } }).fetch();
    return reports;
  }
});