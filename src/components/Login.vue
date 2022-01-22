<template>
    <form @submit.prevent ="handleSubmit">
        <error v-if="error" :error="error"/>
        
        <h3>Login</h3>

        <div class="form-group">
            <label>Username</label>
            <input type="username" class="form-control" v-model = "input.username" placeholder="Username"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model ="input.password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block" v-on:click="login()">Login</button>

        <p class="forgot-password text-right">
            <router-link to="forgot">Forgot password?</router-link>
        </p>
    </form>
    
</template>

<script>


  export default {
        name: "Login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
            if(this.input.username == "admin" && this.input.password == "pass") {
                this.$store.commit("setAuthentication", true);
                this.$router.replace({ name: "admin" });
            } else {
                console.log("The username and / or password is incorrect");
            }
        }
    }
}

</script>
<style>

/* .auth-inner .Login{
  width: 550px;
} */

</style>
