<template>
    <div>
        <h1>Welcome to Upperlink Digital Solution Job Application Portal!</h1>
        <h3 v-if="count < 4">Click <a href="http://localhost:3000/applicant">here</a> to apply...</h3>
        <h3 v-else>The Application Portal is Closed...</h3>
        <!-- <h3 v-if="user">Hi, {{user.first_name}}</h3>
        <h3 v-if="!user">You are not logged in!</h3> -->
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',
        computed: {
            ...mapGetters(['user'])
        },
        data(){
            return{
                count: 0

            }
        },
  
    methods: {
        getCount() {
            console.log("Man")
            this.axios.get('http://localhost:8080/api/count').then((response) => {
                console.log(response.data)
                this.count = response.data
        })
    }
},
    created() {
        this.getCount();
        },
    };
</script>


<style>

</style>