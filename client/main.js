import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

import '../imports/api/mdb.min.js';

Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});