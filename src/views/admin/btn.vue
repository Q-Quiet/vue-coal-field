<template>
<div class="admin-btn">
    <div class="admin-btn-context">
        <div class="coalInfodom-btn">
            <span>开启节点数据接收</span>
            <button @click="domstart">开始</button>
            <button @click="domend">停止</button>
        </div>
        <div class="pro-btn">
            <span>开启节点故障监测</span>
            <button @click="prostart">开始</button>
            <button @click="proend">停止</button>
        </div>
        <div class="adddom-btn">
            <span>开启插入数据功能</span>
            <button @click="addstart">开始</button>
            <button @click="addend">停止</button>
        </div>
        <div class="warn-btn">
            <span>开启预警监测功能</span>
            <button @click="warnstart">开始</button>
            <button @click="warnend">停止</button>
        </div>
        <div class="coalInfodom-btn">
            <span>历史数据删除功能</span>
            <button @click="deletestart">开始</button>
            <button @click="deleteend">停止</button>
        </div>

    </div>
</div>
  
</template>

<script>
export default {
    name: 'adminbtn',
    methods: {
        domstart() {
            this.$axios.get('/node/startReadData')
            .then((res)=>{
                alert(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })
        },
        domend() {
            this.$axios.get('/node/stopReadData')
            .then((res)=>{
                alert(res.data.msg)
            }).catch(err=>{
                console.log(err)
            })
        },
        addstart() {
            let flag = { flag: 'true'}
            this.$axios.post('/node/insertSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        addend() {
            let flag = {flag: 'false'}
            this.$axios.post('/node/insertSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        prostart() {
            let flag = {flag: 'true'}
            this.$axios.post('/node/checkNodesSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        proend() {
            let flag = {flag: 'false'}
            this.$axios.post('/node/checkNodesSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        warnstart() {
            let flag = {flag: 'true'}
            this.$axios.post('/coalfield/warningSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        warnend() {
            let flag = {flag: 'false'}
            this.$axios.post('/coalfield/warningSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        deletestart() {
            let flag = {flag: 'true'}
            this.$axios.post('/node/timeDeleteSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        deleteend() {
            let flag = {flag: 'false'}
            this.$axios.post('/node/timeDeleteSwitch',flag)
            .then((res)=>{
                alert(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>
.admin-btn {
    width: 100%;
    height: 1080px;
    background-image: url('../../assets/image/pic3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}
.admin-btn-context {
    width: 40%;
    margin: auto;
    margin-top: 5%;
    background-color: #fff;
    opacity: 0.85;
    border-radius: 5%;
    height:58%;
    padding-top: 4%;
    display: flex;
    flex-direction: column;
}
.admin-btn-context div{
    height: 25%;
    margin-left: 18%;
    text-align: left;
    font-size: 25px;
}
.admin-btn-context div span {
    display: inline-block;
    margin-right: 5%;
}
.admin-btn-context div button{
    width: 15%;
    height: 40%;
    margin-right: 2%;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight:bold;
    padding-left: 1%;
    background-color:rgba(5, 168, 19, 0.884);
    /* border: none; */
    letter-spacing: 15px;
    color: white;
}
.admin-btn-context div button:last-child {
    margin-right: 8.3%;
    background-color:rgba(243, 26, 26, 0.884);
}
</style>