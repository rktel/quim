<script>
  import { Reports } from "../db/Reports.js";
  import { Meteor } from "meteor/meteor";
  const handler = Meteor.subscribe("reports");
  let reports = [];
  $m: {
    reports = Reports.find({}).sort({"dateAndTime":-1}).fetch();
  }
</script>

<div>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control form-control-sm rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search" />
        </span>
      </form>
    </div>
  </nav>
  <table class="table table-sm table-bordered">
    <thead>
      <tr>
        <th scope="col">FechaHora</th>
        <th scope="col">latitud</th>
        <th scope="col">Longitud</th>
        <th scope="col">Kilometraje</th>
      </tr>
    </thead>
    <tbody>
      {#each reports as repo (repo._id)}
      <tr>
        <th scope="row">{repo.dateAndTime}</th>
        <td>{repo.latitude}</td>
        <td>{repo.longitude}</td>
        <td>{repo.odometer}</td>
      </tr>
      {/each}
    </tbody>
  </table>

</div>
