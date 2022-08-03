<script>
    import { Meteor } from 'meteor/meteor';

    let username = "";
    let password = "";

    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password);
    }
</script>

<section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid" alt="Phone image">
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form on:submit|preventDefault={handleSubmit}>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="text" id="form1Example13" class="form-control form-control-lg" 
              required
              bind:value={username}/>
              <label class="form-label" for="form1Example13">Username</label>
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form1Example23" class="form-control form-control-lg"
              required
              bind:value={password}/>
              <label class="form-label" for="form1Example23">Password</label>
            </div>

  
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

  
          </form>
        </div>
      </div>
    </div>
  </section>