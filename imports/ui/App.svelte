<script>
	import { Reports } from '../db/Reports.js';
	import { Meteor } from 'meteor/meteor';
  const handler = Meteor.subscribe('reports');
  let reports = [];
  $m:{
    reports = Reports.find({}).fetch();
  }
</script>
<div>
  {#each reports as repo (repo._id)}
    <div>
      <h1>{repo.imei}</h1>
      <p>{repo.dateAndTime}</p>
      <p>{repo.longitude}</p>
      <p>{repo.longitude}</p>
    </div>
  {/each}
</div>
