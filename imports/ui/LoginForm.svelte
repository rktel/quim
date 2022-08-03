<script>
    import { Meteor } from 'meteor/meteor';

    let username = "";
    let password = "";

    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password);
    }
</script>
<form on:submit|preventDefault={handleSubmit}>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" bind:value={username}/>
      <label class="form-label" for="form2Example1">Username</label>
    </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" bind:value={password}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
 </form>
