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
      <input type="text" name="username" class="form-control" bind:value={username}/>
      <label class="form-label" htmlFor="username">Username</label>
    </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" name="password" class="form-control" bind:value={password}/>
      <label class="form-label" htmlFor="password">Password</label>
    </div>
  
    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
 </form>
