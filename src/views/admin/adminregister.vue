<template>
<div class="back4">
    
<div id="allscreen4">
    <div class="con4">
        <form id="adminRegister">
            <span class="user">账号密码注册</span>
            <div class="wrapper4">
                <input type="text" v-model="form.adminIdCard" id="adminIdCard" maxlength="18" minlength="18"  placeholder="请输入身份证号码" >
                <br>
                <input type="password" v-model="form.adminPassword" id="password" maxlength="10" autocomplete="off" minlength="6" placeholder="请输入密码" >
                <br>
                <input type="password" id="password2" maxlength="10" autocomplete="off" minlength="6"  placeholder="请确认密码" >
                <br>
                <input type="text" v-model="form.adminTelephone" id="tel" maxlength="11" minlength="11" placeholder="请输入手机号码" >
                <input type="text" v-model="form.verifyCode" class="verifyCode" placeholder="请输入手机验证码">
                <button class="adminregster-button" @click="getverifyCode()" :disabled="disabled">获取验证码</button>
                <div id="add"></div>
                <button class="adminregster-button" @click="ClickItem">注册</button>
                <b @click="ToLogin">前去登录</b>
            </div>
        </form>
    </div>
</div>
</div>
    
</template>

<script>

// import axios from 'axios'

export default {
    name: 'adminadminregister',
    data() {
        return {
            disabled:false,
            form: {
                adminIdCard: '',
                verifyCode: '',
                adminPassword: '',
                adminTelephone: '',
            }
        }
    },
    methods: {
        ClickItem() {
            var password = document.getElementById("password").value;
            var password2 = document.getElementById("password2").value;
            if(password != password2) {
                alert("两次密码不同")
            }
            let data = {
                adminIdCard : this.form.adminIdCard,
                adminPassword: this.form.adminPassword,
                adminTelephone: this.form.adminTelephone,
                verifyCode: this.form.verifyCode
            }

            this.$axios.post('/admin/register',data)
            // api.adminregister(data)
            .then((res)=>{
                alert(res.data.msg)
               if(res.data.msg === '管理员注册成功'){
                   this.$router.push('/adminlogin')
                // window.location.href('/adminbtn')
               }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getverifyCode(){
            // 验证电话号码
            if(!/^1[345678]\d{9}$/.test(this.form.adminTelephone)) {
               alert("请输入正确的电话号码")
            }
            //获取验证码

             //倒计时
            let time = 3;
            let timer = setInterval(() => {
            if(time == 0) {
                clearInterval(timer);
                this.disabled = false;
                this.btnTitle = "获取验证码";
            } else {
                this.btnTitle =time + '秒后重试';
                this.disabled = true;
                time--
            }
            },1000)

            let data={userTelephone: this.form.adminTelephone}
            


            // this.ajax.post('/sendSms',data)

            this.$axios.post('/sendSms',data)
            // api.verifyCode(data)
            .then((res)=>{
                alert(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })
        },	    	    
        ToLogin() {
            this.$router.replace('/adminlogin')
        }
    }
}


</script>

<style>
.back4{
  width: 100%;
  height: 100%;
  /* background-color: rgb(168, 199, 194); */
  background-image: url('../../assets/image/pic2.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 19px;
  /* flex-direction: column ; */
}
#allscreen4{
    display: block;
    height: 70%;
    width: 40%;
    margin: auto;
    margin-top: 6%;
    padding: 0;
}
.con4{
    height: 100%;
    /* opacity: 0.8; */
    opacity: 0.8;
    background-color: rgb(255, 255, 255);
    border-radius: 9px;
} 
form{
    text-align: center;
    height: 100%;
    width: 100%;
}
.wrapper4{
    width: 100%;
    margin: 2.5% auto;
    height: 500px;
    /* background-color: lightcoral; */
}
.user{
    height: 40px;
    display: inline-block;
    margin: 5% 0 5% 0;
    font-size: 35px;
    font-family: 'Courier New', Courier, monospace;
}
#adminRegister .wrapper4 input,.adminregster-button{
    width: 90%;
    height: 45px;
    margin: 8px 0;
    border-radius: 5px;
    text-align: center;
    border: 1px solid rgb(155, 153, 153);
}
#Sub{
    margin-top: 20px;
    margin-bottom: 15px;
}
b{
    margin-top: 2%;
    display: inline-block;
    width: 90%;
    height: 35px;
    /* background-color: aquamarine; */
}
</style>