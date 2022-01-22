import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './api'
import store from './vuex'
import './cloudinary.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
