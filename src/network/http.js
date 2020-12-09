import axios from 'axios'

// 设置基础apiUrl
axios.defaults.baseURL = 'http://192.168.1.144:8080';


export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {value: axios})
  }
}