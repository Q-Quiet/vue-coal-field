<template>
<div class="back">
    
<div id="allscreen">
    <div class="con">
        <form id="Login">
            <span class="user">管理员登录</span>
            <div class="wrapper3">
                <input type="text" id="adminId" v-model="loginForm.adminIdCard" maxlength="18" minlength="18" autocomplete="off" placeholder="请输入管理员账号" >
                <br>
                <input type="password" id="password" v-model="loginForm.adminPassword" maxlength="6" autocomplete="off" minlength="6" placeholder="请输入密码" >
                <br>
                <input type="text" id="test" v-model="loginForm.verifyCode" maxlength="4" autocomplete="off" minlength="4" placeholder="请输入验证码" >
                <br>
                <span style="display: inline-block;width: 130px;height: 53px;border: 1px solid #D7D7D7;" @click="changeImgCode">
                    <img :src="imgCode" style="width: 100%;height: 100%;cursor: pointer;"/>
                </span>
                <!-- <div type="primary">z
                    <img :src="codeImg" @click="toggleCode" class="img" alt="">
                </div> -->
                <!-- <div class="divIdentifyingCode" @click="getIdentifyingCode(true)">
                   <img style="width: 100%;" class="pointer" :src="loginForm.src" @click="refreshverifyCode">
                </div> -->
                <button id="adminSub" @click="admingetHandle">登录</button>
                <b @click="ToAdminRegister">注册管理员</b>
            </div>
        </form>
    </div>
</div>
</div>
    
</template>


<script>
import axios from 'axios'

export default {
    name: 'adminlogin',
    data() {
        return {
            loginForm:{
                adminIdCard: '',
                adminPassword: '',
                verifyCode: '',
            },
            imgCode: 'http://192.168.1.144:8080/createImg'
        }
    },
    methods: {
        // 验证码
        changeImgCode() {
                var num=Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
                this.imgCode = "http://192.168.1.144:8080/createImg?" + num;
            },
        admingetHandle(){
            let data = {
                adminIdCard : this.loginForm.adminIdCard,
                adminPassword : this.loginForm.adminPassword,
                verifyCode: this.loginForm.verifyCode
            }
            this.$axios.post('/admin/login',data)
            .then((res)=>{
               alert(res.data.msg)
               if(res.data.msg === '管理员登录成功'){
                   this.$router.push('/adminbtn')
                // window.location.href('/adminbtn')
               }
            })
            .catch(err=>{
                console.log(err)
            }) 
        },
        ToAdminRegister() {
            this.$router.replace('/adminregister')
        }
    }
}


</script>

<style>
.back{
  width: 100%;
  height: 100%;
  /* background-color: rgb(168, 199, 194); */
  background-image: url('../../assets/image/pic1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 19px;
  /* flex-direction: column ; */
}
#allscreen {
    display: block;
    width: 50%;
    margin: auto;
    margin-top: 5%;
    height:58%;
    padding: 0;
}
.con {
    height: 100%;
    opacity: 0.8;
    background-color: rgb(255, 255, 255);
    margin-top: 1.5%;
    border-radius: 9px;
} 
form {
    text-align: center;
    height: 100%;
    width: 100%;
}
.wrapper3 {
    width: 100%;
    margin:  auto;
    height: 500px;
    /* background-color: lightcoral; */
}
.user {
    display: inline-block;
    margin: 5% 0 5% 0;
    font-size: 35px;
    font-family: 'Courier New', Courier, monospace;
}
.wrapper3 input,#adminSub {
    width: 90%;
    height: 45px;
    margin: 8px 0;
    border-radius: 5px;
    text-align: center;
    border: 1px solid rgb(155, 153, 153);
}
b {
    display: inline-block;
    width: 90%;
    height: 35px;
    /* background-color: aquamarine; */
}
.divIdentifyingCode {
    margin: auto;
    width: 200px;
    height: 50px;
    background-color: aquamarine;
}
#adminSub {
    margin-top: 20px;
    margin-bottom: 15px;
}
</style>