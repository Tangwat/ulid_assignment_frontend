<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error"/>

        <h3>Sign Up</h3>

        <div class="form-group">
            <label>UserName</label>
            <input type="usernaame" class="form-control" v-model="username" placeholder="UserName">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="confirmPassword" class="form-control" v-model="confirmPassword" placeholder="Confirm Password">
        </div>

    
        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
    
</template>

<script>

import axios from 'axios'
import Error from './Error.vue'

    export default {
        name: 'Signup',
        components: {
            Error
        },
        data() {
            return{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: ''
            }
        },
        methods: {    
            async handleSubmit(){
                try{
                    await axios.post('signup',{
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        confirmPassword: this.confirmPassword
                    
                    }); 
                    this.$router.push('/login');
                } catch (e) {
                    this.error = 'Error occurred!';

                } 
            }
        }      
    }
</script>
