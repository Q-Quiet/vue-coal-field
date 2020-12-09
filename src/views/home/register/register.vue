<template>
<div class="back2">
    
<div id="allscreen2">
    <div class="con2">
        <form id="Register">
            <span class="user">账号密码注册</span>
            <div class="wrapper2">
                <input type="text" v-model="form.userIdCard" id="useridcard" maxlength="18" minlength="18"  placeholder="请输入身份证号码" >
                <br>
                <input type="text" v-model="form.userName" id="username" maxlength="6"  placeholder="姓名" >
                <br>
                <input type="text" v-model="form.coalfieldName" id="email"  placeholder="请绑定煤田" >
                <br>
                <input type="email" v-model="form.userEmail" id="email"  placeholder="请绑定邮箱" >
                <br>
                <input type="password" v-model="form.userPassword" id="password" maxlength="10" autocomplete="off" minlength="6" placeholder="请输入密码" >
                <br>
                <input type="password" id="password2" maxlength="10" autocomplete="off" minlength="6"  placeholder="请确认密码" >
                <br>
                <input type="text" v-model="form.userTelephone" id="tel" maxlength="11" minlength="11" placeholder="请输入手机号码" >
                <input type="text" v-model="form.verifyCode" class="verifyCode" placeholder="请输入手机验证码">
                <button class="regster-button" @click="getVerifyCode()" :disabled="disabled">获取验证码</button>
                <div id="add"></div>
                <button class="regster-button" @click="ClickItem">注册</button>
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
    name: 'register',
    data() {
        return {
            disabled:false,
            form: {
                userIdCard: '',
                userName: '',
                verifyCode: '',
                userEmail: '',
                userPassword: '',
                userTelephone: '',
                coalfieldName:''
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
                userIdCard : this.form.userIdCard,
                userName: this.form.userName,
                userEmail: this.form.userEmail,
                userPassword: this.form.userPassword,
                userTelephone: this.form.userTelephone,
                verifyCode: this.form.verifyCode,
                coalfieldName: this.form.coalfieldName
            }


            // console.log(register)
            // JSON.stringify(register);
        //    let data={userTelephone: this.form.userTelephone}
            this.$axios.post('/user/register',data)
            // api.register(data)
            .then((res)=>{
                alert(res.data.msg)
            })
            .catch(err=>{
                console.log(err)
            })
            // axios.post('api/user/register',data)
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
            // this.$axios.post('http://192.168.1.144:8080/user/register',register)
        },
        getVerifyCode(){
            // 验证电话号码
            if(!/^1[345678]\d{9}$/.test(this.form.userTelephone)) {
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

            let data={userTelephone: this.form.userTelephone}
            


            // this.ajax.post('/sendSms',data)

            this.$axios.post('/sendSms',data)
            // api.VerifyCode(data)
            .then((res)=>{
                console.log(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })

            //发送网络请求
            // this.instance.register({             
            //     'userTelephone': this.form.userTelephone
            // }).then(res=>{
            //     console.log("123")
            // }).catch(function (error) {
            //     console.log(error);
            // })
        },	    	    
        ToLogin() {
            this.$router.replace('/login')
        }
    }
}


</script>

<style>
.back2{
  width: 100%;
  height: 100%;
  font-size: 19px;
  /* background-color: rgb(168, 199, 194); */
  background-image: url('../../../assets/image/pic2.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  /* flex-direction: column ; */
}
#allscreen2{
    display: block;
    height: 85%;
    width: 40%;
    margin: auto;
    margin-top: 2%;
    padding: 0;
}
.con2{
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
.wrapper2{
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
#Register .wrapper2 input,.regster-button{
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