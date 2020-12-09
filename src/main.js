import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import axios from 'axios'
import cytoscape from 'cytoscape';
Vue.prototype.$cytoscape = cytoscape;

Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;
axios.defaults.baseURL = 'http://192.168.1.144:8080/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
