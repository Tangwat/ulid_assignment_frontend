<template>
    <form @submit.prevent ="handleSubmit">
        <h3>Reset Password</h3>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model = "password" placeholder="Password"/>
        </div>

        <div class="form-group">
            <label>Password Confirm</label>
            <input type="password" class="form-control" v-model ="passwordConfirm" placeholder="Password Confirm"/>
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Reset',
    data(){
        return {
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        async handleSubmit (){
            const response = await axios.post('reset', {
                password: this.password,
                passwordConfirm: this.passwordConfirm,
                token: this.$route.params.token
            });

            console.log(response);
            this.$route.push('/login');

        }
    }  
}
</script>