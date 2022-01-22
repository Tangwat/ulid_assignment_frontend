import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import ApplicantRegistrationForm from './components/ApplicantRegistrationForm.vue'
import Forgot from './components/Forgot.vue'
import Reset from './components/Reset.vue'
import Admin from './components/Admin.vue'
import store from './vuex'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/admin', component: Admin},
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        // {path: '/login', component: Login},
        {path: '/signup', component: Signup},
        {path: '/applicant', component: ApplicantRegistrationForm},
        {path: '/forgot', component: Forgot},
        {path: '/reset/:token', component: Reset}


    ]
})
    store;
