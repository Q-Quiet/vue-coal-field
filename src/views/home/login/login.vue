<template>
<div class="back">
    
<div id="allscreen">
    <div class="con">
        <form id="Login">
            <span class="user">用户登录</span>
            <div class="wrapper">
                <input type="text" id="userid" v-model="loginForm.userIdCard" maxlength="18" minlength="18" autocomplete="off" placeholder="请输入身份证号码" >
                <br>
                <input type="password" id="password" v-model="loginForm.userPassword" maxlength="6" autocomplete="off" minlength="6" placeholder="请输入密码" >
                <br>
                <input type="text" id="test" v-model="loginForm.validateCode" maxlength="4" autocomplete="off" minlength="4" placeholder="请输入验证码" >
                <br>
                <span style="display: inline-block;width: 130px;height: 53px;border: 1px solid #D7D7D7;" @click="changeImgCode">
                    <img :src="imgCode" style="width: 100%;height: 100%;cursor: pointer;"/>
                </span>
                <!-- <div type="primary">
                    <img :src="codeImg" @click="toggleCode" class="img" alt="">
                </div> -->
                <!-- <div class="divIdentifyingCode" @click="getIdentifyingCode(true)">
                   <img style="width: 100%;" class="pointer" :src="loginForm.src" @click="refreshvalidateCode">
                </div> -->
                <button id="Sub" @click="getHandle">登录</button>
                <b @click="ToRegister">注册账号</b>
            </div>
        </form>
    </div>
</div>
</div>
    
</template>


<script>
import axios from 'axios'

export default {
    name: 'login',
    data() {
        return {
            loginForm:{
                userIdCard: '',
                userPassword: '',
                validateCode: '',
            },
            imgCode: 'http://192.168.1.144:8080/createImg'
        }
    },
    // created(){
    //     this.codeImg="http://192.168.1.144:8080/createImg";
    // },
    methods: {
        //验证码
        // refreshvalidateCode(){
        //         this.$http.get('http://192.168.1.144:8080/createImg',{
        //             responseType: 'arraybuffer',
        //         })
        //         .then(response => {
        //             return 'data:image/png;base64,' + btoa(
        //                 new Uint8Array(response.data)
        //                         .reduce((data, byte) => data + String.fromCharCode(byte), '')
        //             );
        //         }).then(data => {
        //         this.loginForm.src = data
        //         })
        //         console.log(this.loginForm.src)
        //     },
        changeImgCode() {
                var num=Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
                this.imgCode = "http://192.168.1.144:8080/createImg?" + num;
            },
        getHandle(){
            let data = {
                userIdCard : this.loginForm.userIdCard,
                userPassword : this.loginForm.userPassword,
                validateCode: this.loginForm.validateCode
            }
            this.$axios.post('/user/login',data)
            .then((res)=>{
               alert(res.data.msg)
               this.$router.replace('/allmap')
            })
            .catch(err=>{
                console.log(err)
            }) 
        },
        ToRegister() {
            this.$router.replace('/register')
        }
    }
}


</script>

<style>
.back{
  width: 100%;
  height: 100%;
  font-size: 19px;
  /* background-color: rgb(168, 199, 194); */
  background-image: url('../../../assets/image/pic1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
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
.wrapper {
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
.wrapper input,#Sub {
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
#Sub {
    margin-top: 20px;
    margin-bottom: 15px;
}
/* @media screen and (min-height:800px){
    .wrapper{
        width: 40%;
        height: 35%;
    }
    span{
        font-size: 30px;
        margin: 4% 0 2% 0;
    }
    input{
        font-size: 20px;
        height: 18%;
        margin: 1% 0;
    }
}
@media screen and (min-height:950px){
    .wrapper{
        width: 40%;
        height: 40%;
    }
    span{
        font-size: 50px;
        margin: 4% 0 2% 0;
    }
    input{
        font-size: 40px;
        height: 20%;
        margin: 1.5% 0;
    }
}
@media (max-height:1500px) and (max-width: 1200px){
    .wrapper{
        width: 40%;
        height: 25%;
    }
    span{
        font-size: 36px;
        margin-bottom: 4%;
    }
    input{
        font-size: 22px;
        height: 15.5%;
        margin: 2% 0;
    }
    a{
        font-size: 20px;
    }
} 
@media (max-height:1200px) and (max-width: 1200px){
    .wrapper{
        width: 40%;
        height: 24%;
    }
    span{
        font-size: 30px;
        margin-bottom: 2%;
    }
    input{
        font-size: 20px;
        height: 15%;
        margin: 2% 0;
    }
    a{
        font-size: 16px;
    }
}
@media (max-height:800px) and (max-width:1200px) {
    .wrapper{
        width: 40%;
        height: 48%;
    }
    span{
        font-size: 22px;
        margin: 6% 0 4% 0;
    }
    input{
        font-size: 16px;
        margin: 3% 0;
    } 
}
@media (max-height:1200px) and (max-width: 700px) {
    .wrapper{
        width: 40%;
        height: 37%;
    }
    span{
        font-size: 20px;
        margin: 5% 0;
    }
    input{
        font-size: 16px;
        margin: 3% 0;
    } 
    a{
        line-height: 12px;
        font-size: 10px;
    }
}
@media  (max-height: 900px) and (max-width: 420px) {
    .wrapper{
        width: 40%;
        height: 27%;
    }
    span{
        font-size: 22px;
        margin: 8% 0;
    }
    input{
        font-size: 18px;
        height: 15%;
        margin: 3% 0;
    }
}
@media screen and (max-width: 380px) {
    .wrapper{
        width: 40%;
        height: 25%;
    }
    span{
        font-size: 18px;
        margin: 5% 0 3% 0;
    }
    input{
        font-size: 14px;
        height: 16%;
        margin: 2.5% 0 1.5% 0;
    }
} */
</style>