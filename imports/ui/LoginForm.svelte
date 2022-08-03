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
    <div >
        <label  htmlFor="username">Username</label>
      <input type="text" name="username" class="form-control" bind:value={username}/>
    </div>
  
    <!-- Password input -->
    <div >
        <label htmlFor="password">Password</label>
      <input type="password" name="password" class="form-control" bind:value={password}/>
    </div>
  
    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
 </form>
