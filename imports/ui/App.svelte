<script>
  import { Reports } from "../db/Reports.js";
  import { Meteor } from "meteor/meteor";
  import LoginForm from "./LoginForm.svelte";

  const handler = Meteor.subscribe("reports");
  const logout = () => Meteor.logout();
  let reports = [];
  let user = null;
  $m: {
    user = Meteor.user();
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
    } else {
      return undefined;
    }
  }
</script>

<div>
  {#if user}
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid justify-content-between">
        <!-- Left -->
        <div class="d-flex">
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
        <!-- Left -->

        <!-- Right -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link" href="#">
               <strong class="d-none d-sm-block ms-1">{user.username}</strong>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link" href="#" on:click={logout}>
              <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
            </a>
          </li>

        </ul>
        <!-- Right -->

      </div>
    </nav>

    <table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th scope="col">FechaHoraServer</th>
          <th scope="col">FechaHoraGPS</th>
          <th scope="col">latitud</th>
          <th scope="col">Longitud</th>
          <th scope="col">Kilometraje</th>
        </tr>
      </thead>
      <tbody>
        {#each reports as repo (repo._id)}
          <tr>
            <th scope="row">{formatDate(repo.serverTime)}</th>
            <td>{formatDate(repo.dateAndTime)}</td>
            <td>{repo.latitude}</td>
            <td>{repo.longitude}</td>
            <td>{repo.odometer}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <LoginForm />
  {/if}
</div>
