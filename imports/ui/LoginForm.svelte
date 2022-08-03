<script>
    import { Meteor } from 'meteor/meteor';

    let username = "";
    let password = "";

    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password);
    }
</script>
<div class="full-height login">
    <form on:submit|preventDefault={handleSubmit}>
        <div class="m-t-10">
            <label for="username">Username</label>
            <input type="text" id="username" name="Username" placeholder="Username" bind:value={username}>
        </div>
        <div class="m-t-10">
            <label for="password">Password</label>
            <input type="text" id="password" name="Password" placeholder="Password" bind:value={password}>
        </div>
        <div class="m-t-10">
            <input class="btn success" type="submit" value="Ingresar">
        </div>
    </form>
</div>
