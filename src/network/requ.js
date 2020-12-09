import axios from "axios"
import qs from "qs"

axios.defaults.timeout=10000   //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';        //配置请求头
axios.defaults.baseURL ='http://192.168.1.144:8080/';   //配置接口地址
// 
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    let token = sessionStorage.getItem('access_token') || ""  //获取token 
    // console.log(token)
    if (token!="") {
        config.headers = {
         'access-token': token,
         'Content-Type': 'application/x-www-form-urlencoded'
        }
    }    
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data)//序列化post 参数
        console.log(config)
    }
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    console.log(res)
    //对响应数据做些事
    if(!res.data.success){
        let newToken=res.data.token    //成功后更新token 
        localStorage.setItem('access_token', newToken)
    }
    return res;
}, (error) => {
    //   if(error.response.data.status=='401'){    //如果token 过期 则跳转到登录页面
    //     this.$router.push('/login');
    //   }
    console.log(error)
    return Promise.reject(error);
});
//返回一个Promise(发送post请求)
 function post(url,data) {
    return new Promise((resolve, reject) => {
        axios.post(url,qs.stringify(data))
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err)
        })
    })
}
 function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
        .then(response => {
            resolve(response)
        })
        .catch(err => {
            reject(err)
        })
    })
}
export default {
    get,
    post,
}