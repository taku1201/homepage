import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
