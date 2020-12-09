<template>
  <div class="create-back">
    <div class="create-dom">
        <div class="create-dom-tittle">
            <span>添加节点信息</span>
        </div>
        <div class="create-dom-context">
            <el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item style="font-size:25px" label="节点编号" prop="nodeId">
                    <el-input v-model="ruleForm.nodeId"></el-input>
                </el-form-item>
                <el-form-item style="font-size:25px" label="节点经度" prop="longitude">
                    <el-input v-model="ruleForm.longitude"></el-input>
                </el-form-item>
                <el-form-item style="font-size:25px" label="节点纬度" prop="latitude">
                    <el-input v-model="ruleForm.latitude"></el-input>
                </el-form-item>
                <el-form-item style="font-size:25px">
                    <el-button type="primary" @click="submitForm">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'createdom',
    data() {
        return {
            ruleForm: {
                nodeId: '',
                longitude: '',
                latitude: ''
            },
        };
    },
    methods: {
        submitForm() {
            let data = this.ruleForm
            console.log(data)
            this.$store.dispatch('createdom',data)
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
  
}
</script>

<style>
.create-back {
    width: 100%;
    height: 1120px;
    background-image: url('../../assets/image/pic3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}
.create-dom {
    width: 40%;
    height: 40%;
    margin: 10% auto;
    background-color: rgba(245, 239, 218, 0.678);
    border-radius: 5%;
}
.create-dom-tittle{
    width: 100%;
    height: 15%;
    /* padding-top: 5%; */
}
.create-dom-tittle span{
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 5%;
    font-size: 40px;
}
.create-dom-context {
    width: 80%;
    margin:4% auto;
    padding-top: 5%;
    /* font-size: 40px; */
    /* background-color: rgba(109, 97, 56, 0.767); */
    height: 60%;
}
.el-form-item__label{
    font-size: 25px;
    /* background-color: aquamarine; */
}
</style>