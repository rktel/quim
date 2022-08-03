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
  <nav class="nav">
    <div class="d-flex">
        <input type="text" name="imei" id="imei" placeholder="IMEI">
        <button class="btn">Buscar</button>
    </div>
    <div class="d-flex">
        <span class="span">{user.username}</span>
        <button class="btn secondary" on:click={logout}>Salir</button>
    </div>
  </nav>

    <table>
      <thead>
        <tr>
          <th>FechaHoraServer</th>
          <th>FechaHoraGPS</th>
          <th>latitud</th>
          <th>Longitud</th>
          <th>Kilometraje</th>
        </tr>
      </thead>
      <tbody>
        {#each reports as repo (repo._id)}
          <tr>
            <th>{formatDate(repo.serverTime)}</th>
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
