<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Admin-login</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link to="/signup" class="nav-link">Sign up</router-link>
            </li> -->
          </ul>
          <ul class="navbar-nav ml-auto" v-if="user">
            <li class="nav-item">
              <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Nav',
    methods: {
      handleClick(){
        localStorage.removeItem('token');
        this.$store.dispatch('user',null)
        this.$router.push('/');
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
        
</script>
