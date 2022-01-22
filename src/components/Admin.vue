<template>
  <div class="container">
    <router-link to="/admin" class="nav-link"></router-link>
    <h1><center>List of Applications</center></h1>
    <table class="table table-striped">
      <thead>
        <!-- <th>Seriel Number</th> -->
        <th>Applicant Id</th>
        <th>Applicant First Name</th>
        <th>Applicant Surname</th>
        <th>Applicant Email</th>
        <th>Applicant Phone Number</th>
        <th>Applicant Cover Letter</th>
        <th>Applicant Image</th>
        <th>Applicant Resume</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="applicant in applicants" v-bind:key="applicant.applicantId">
        <!-- <tr v-for="(applicant, index) in applicants" v-bind:key="applicant.applicantId"> -->
          <!-- <td>{{ index+1 }}</td> -->
          <th>{{applicant.applicantId}}</th>
          <td>{{ applicant.firstName }}</td>
          <td>{{ applicant.surName }}</td>
          <td>{{ applicant.email }}</td>
          <td>{{ applicant.phoneNumber }}</td>
          <td>{{ applicant.coverLetter }}</td>
          <td><img v-bind:style="{width: '60px'}" :src="applicant.image" /></td>
          <td><a v-bind:href="applicant.resume">Download Resume</a></td>
          <td><button v-on:click="deleteApplicant(applicant.applicantId)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <v-container>
        <router-link to="/admin" class="nav-link"></router-link>
    </v-container> -->
</template>

<script>
import {getApplicants} from '../api.js'
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: "Admin",
  data() {
    return {
      applicants: [],
    };
  },
  methods: {
    getApplicant() {
      getApplicants().then((response) => {
          console.log(response.data)
        this.applicants = response.data;
      });
    },
    deleteApplicant(applicantId) {
      this.axios.delete('http://localhost:8080/api/applicants/'+ applicantId).then(()=>{
        this.getApplicant();
      })
    }
  },
  created() {
    this.getApplicant();
  },
};
</script>
<style>

.flex-table {
    display: ruby-base;
}
/* table, th, td {
  border: 1px solid black;
}
table.center {
  margin-left: auto;
  margin-right: auto;
} */
</style>

