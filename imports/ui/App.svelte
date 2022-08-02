<script>
  import { Reports } from "../db/Reports.js";
  import { Meteor } from "meteor/meteor";
  const handler = Meteor.subscribe("reports");
  let reports = [];
  $m: {
    reports = Reports.find({}, { sort: { dateAndTime: -1 } }).fetch();
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    if (date) {
      return (
        [
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
          date.getFullYear(),
        ].join("/") +
        " " +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          padTo2Digits(date.getSeconds()),
        ].join(":")
      );
    }else{
      return undefined;
    }
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
          <th scope="row">{formatDate(repo.dateAndTime)}</th>
          <td>{repo.latitude}</td>
          <td>{repo.longitude}</td>
          <td>{repo.odometer}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
