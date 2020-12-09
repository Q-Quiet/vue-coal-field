<template>
<div class="problem-back">
  <div class="problemdom">
    <div class="problemdom-tittle">
      <div class="problemdom-tittle-search">
            <input type="text" placeholder="请输入搜索节点编号" id="nodeId">
            <input type="date" id="dataDate">
            <button @click="btnsrcpro">搜索</button>
        </div>
        <span>节点故障信息记录</span>
    </div>
    <el-table :data="data2" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="node.nodeId" label="节点编号" width="160px"></el-table-column>
      <el-table-column prop="node.belongCoalfield" label="煤田名称" width="160px"></el-table-column>
      <el-table-column prop="node.latitude" label="节点经度" width="180px"></el-table-column>
      <el-table-column prop="node.longitude" label="节点纬度" width="180px"></el-table-column>
      <el-table-column prop="faultDate" label="故障发生时间"></el-table-column>
      <el-table-column prop="information" label="故障信息"></el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
    name: 'problem',
    data() {
      return {
        request:{
          dataDate: '',
          nodeId: ''
        },
        data2: [],
      }
    },
    created() {
      this.init()
    },
    methods: {
      init(){
        this.$store.dispatch('getproblem')
        // this.$set(this.data,0,this.$store.state.problem)
        this.data2=this.$store.state.problem
        console.log(this.data2)
      },
      btnsrcpro(){
        let data = {
          nodeId : '',
          dataDate: ''
        }
        data.nodeId = document.getElementById('nodeId').value
        data.dataDate = document.getElementById('dataDate').value
        console.log(data)
        this.$store.dispatch('getproval',data)
        this.$store.dispatch('getproblem')
        this.data2=this.$store.state.problem
        // Vue.set(this.data,0,this.$store.state.problem)
        // this.$set(this.data,0,this.$store.state.problem)
        console.log(this.data2)
      },
      // init(){
      //   let idid = {
      //       dataDate: this.request.dataDate,
      //       nodeId: this.request.nodeId
      //   }
      //   console.log(idid)
        // this.$axios.post('/fault/selectFault',idid)
        // .then((res)=>{
        //   this.data=res.data.data
        // })
        // .catch(err=>{
        //   console.log(err)
        // })
      // },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 == 1) {
          return 'warning-row';
        } else if (rowIndex%2 == 0) {
          return 'success-row';
        }
        return '';
      }
    },

}
</script>

<style>
.problem-back{
  width: 100%;
  height: 1120px;
  background-image: url('../../assets/image/pic4.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.problemdom {
  width: 60%;
  background-color: #fff;
  /* border-radius: ; */
  margin:7% auto;
}
.problemdom-tittle {
  width: 100%;
  /* background-color: aquamarine; */
  padding: 2%;
  font-size: 37px;
  font-family: 'Courier New', Courier, monospace;
}
.problemdom-tittle span {
  display: inline-block;
  margin-left: -40%;
}
.problemdom-tittle-search {
  width: 30%;
  float: left;
  text-align: left;
  /* background-color: aquamarine; */
}
.problemdom-tittle-search input,button{
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(155, 153, 153);
}
.problemdom-tittle-search button {
  width: 15%
}
.problem-back .el-table .warning-row {
  background: #f3f0d6;
}

.problem-back .el-table .success-row {
background:#fff;
}


</style>