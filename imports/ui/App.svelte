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
  function openDrawer(params) {
            document.getElementById("myDrawer").style.width = "400px";
        }
  function closeDrawer(params) {
      document.getElementById("myDrawer").style.width = "0";
  }
</script>

<div>
  {#if user}
  <nav class="nav">
    <div class="d-flex">
      <button class="btn dark-alt" style="cursor:default ;" title="Fecha inicio">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" fill="currentColor"/></svg>
      </button >
      <input type="date" id="start" name="trip-start" value="2022-07-22">
      <button class="btn dark-alt" style="cursor:default ;" title="Fecha fin">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z" fill="currentColor"/></svg>
      </button>
      <input type="date" id="start" name="trip-end" value="2022-07-23">
      <input type="text" name="imei" id="imei" placeholder="IMEI">
      <button class="btn primary" title="Buscar dispositivo">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M18.68,12.32C16.92,10.56 14.07,10.57 12.32,12.33C10.56,14.09 10.56,16.94 12.32,18.69C13.81,20.17 16.11,20.43 17.89,19.32L21,22.39L22.39,21L19.3,17.89C20.43,16.12 20.17,13.8 18.68,12.32M17.27,17.27C16.29,18.25 14.71,18.24 13.73,17.27C12.76,16.29 12.76,14.71 13.74,13.73C14.71,12.76 16.29,12.76 17.27,13.73C18.24,14.71 18.24,16.29 17.27,17.27M10.9,20.1C10.25,19.44 9.74,18.65 9.42,17.78C6.27,17.25 4,15.76 4,14V17C4,19.21 7.58,21 12,21V21C11.6,20.74 11.23,20.44 10.9,20.1M4,9V12C4,13.68 6.07,15.12 9,15.7C9,15.63 9,15.57 9,15.5C9,14.57 9.2,13.65 9.58,12.81C6.34,12.3 4,10.79 4,9M12,3C7.58,3 4,4.79 4,7C4,9 7,10.68 10.85,11H10.9C12.1,9.74 13.76,9 15.5,9C16.41,9 17.31,9.19 18.14,9.56C19.17,9.09 19.87,8.12 20,7C20,4.79 16.42,3 12,3Z" fill="currentColor"/></svg>
      </button>
  </div>
  <div class="d-flex">
    <button class="btn primary" title="Abrir panel de comandos" on:click={openDrawer}>
        <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M17,16.47V7.39L11,11.93M2.22,9.19C1.92,8.87 1.91,8.37 2.2,8.04L3.4,6.93C3.6,6.75 4.09,6.67 4.45,6.93L7.87,9.54L15.8,2.29C16.12,1.97 16.67,1.84 17.3,2.17L21.3,4.08C21.66,4.29 22,4.62 22,5.23V18.73C22,19.13 21.71,19.56 21.4,19.73L17,21.83C16.68,21.96 16.08,21.84 15.87,21.63L7.85,14.33L4.45,16.93C4.07,17.19 3.6,17.12 3.4,16.93L2.2,15.83C1.88,15.5 1.92,14.96 2.25,14.63L5.25,11.93" fill="#00a8ff"/></svg>
    </button>
  </div>
    <div class="d-flex">
        <span class="span">{user.username}</span>
        <button class="btn" title="Cerrar sesión" on:click={logout}>
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" fill="#c2185b"/></svg>
      </button>
    </div>
  </nav>
  <div class="drawer" id="myDrawer">
    <div class="bar">
        <div>
            <button class="btn" on:click={closeDrawer} title="Cerrar panel de comandos">
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" fill="#c2185b"/></svg>
            </button>
        </div>
        <div></div>
    </div>
  </div>
    <table style="margin: 10px 20px;">
      <thead>
        <tr>
          <th>FechaHoraServer</th>
          <th>FechaHoraGPS</th>
          <th>IMEI</th>
          <th>Record</th>
          <th>latitud</th>
          <th>Longitud</th>
          <th>Altitud</th>
          <th>Velocidad</th>
          <th>Rumbo</th>
          <th>Satelites</th>
          <th>FixGPS</th>
          <th>HDOP</th>
          <th>Kilometraje</th>
          <th>Voltaje_0</th>
          <th>FechaHoraServer</th>
          <th>FechaHoraGPS</th>
          <th>IMEI</th>
          <th>Record</th>
          <th>latitud</th>
          <th>Longitud</th>
          <th>Altitud</th>
          <th>Velocidad</th>
          <th>Rumbo</th>
          <th>Satelites</th>
          <th>FixGPS</th>
          <th>HDOP</th>
          <th>Kilometraje</th>
          <th>Voltaje_0</th>
        </tr>
      </thead>
      <tbody>
        {#each reports as repo (repo._id)}
          <tr>
            <th>{formatDate(repo.serverTime)}</th>
            <td>{formatDate(repo.dateAndTime)}</td>
            <td>{repo.imei}</td>
            <td>{repo.numberOfRecord}</td>
            <td>{repo.latitude}</td>
            <td>{repo.longitude}</td>
            <td>{repo.altitude}</td>
            <td>{repo.speed}</td>
            <td>{repo.direction}</td>
            <td>{repo.satellites}</td>
            <td>{repo.coordinatesCorrectness}</td>
            <td>{repo.hdop}</td>
            <td>{repo.odometer}</td>
            <td>{repo.inputVoltage0}</td>
            <th>{formatDate(repo.serverTime)}</th>
            <td>{formatDate(repo.dateAndTime)}</td>
            <td>{repo.imei}</td>
            <td>{repo.numberOfRecord}</td>
            <td>{repo.latitude}</td>
            <td>{repo.longitude}</td>
            <td>{repo.altitude}</td>
            <td>{repo.speed}</td>
            <td>{repo.direction}</td>
            <td>{repo.satellites}</td>
            <td>{repo.coordinatesCorrectness}</td>
            <td>{repo.hdop}</td>
            <td>{repo.odometer}</td>
            <td>{repo.inputVoltage0}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <LoginForm />
  {/if}
</div>
