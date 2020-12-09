<template>
<div class="history-back">
  <div class="historydom">
    <div class="historydom-tittle">
        <div class="historydom-tittle-search">
            <input type="text" placeholder="请输入搜索节点编号" id="nodeId">
            <input type="date" id="dataDate">
            <button @click="btnsrchis">搜索</button>
        </div>
        <span>历史信息记录</span>
    </div>
    
    <el-table :data="pageData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="nodeId" label="节点编号"></el-table-column>
      <el-table-column prop="dataDate" label="数据发送时间"></el-table-column>
      <el-table-column prop="cH4" label="CO浓度"> </el-table-column>
      <el-table-column prop="cO2" label="CO2浓度"> </el-table-column>
    </el-table>
    <div class="paginationClass">
        <el-pagination  @size-change="handleSizeChange"  @current-change="handleCurrentChange"  :current-page="currentPage" 
         :page-sizes="[14]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pageData.length">
        </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'history',
    data() {
        return {
            currentPage: 1, //默认显示页面为1
            pagesize: 14,
            request:{
                dataDate: '',
                nodeId: ''
            },
            pageData:[],
        }
    },
    created() {
        this.initdata()
    },
    methods: {
        btnsrchis(){
            let nodeId = document.getElementById('nodeId').v
        },
        initdata(){
            let idid = {
                dataDate: this.request.dataDate,
                nodeId: this.request.nodeId
            }
            console.log(idid)
            this.$axios.post('/coalfield/history',idid)
            .then(res=>{
                this.pageData=res.data.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        btnsrchis(){
            let data = {
                nodeId : '',
                dataDate: ''
            }
            data.nodeId = document.getElementById('nodeId').value
            data.dataDate = document.getElementById('dataDate').value
            console.log(data)
            this.$axios.post('/coalfield/history',data)
            .then(res=>{
                this.pageData=res.data.data
            })
            .catch(err=>{
                console.log(err)
            })
            // this.$store.dispatch('gethisval',data)
            // this.$store.dispatch('gethistory')
            // this.pageData=this.$store.state.problem
            // Vue.set(this.data,0,this.$store.state.problem)
            // this.$set(this.data,0,this.$store.state.problem)
            console.log(this.pageData)
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 == 1) {
                return 'warning-row';
            } else if (rowIndex%2 == 0) {
                return 'success-row';
            }
            return '';
        },
        handleSizeChange: function(size) {
            this.pagesize = size;
            /*console.log(this.pagesize) */
        },
            //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
            /*console.log(this.currentPage) */
        },
    },

}
</script>

<style>
.history-back{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/image/pic4.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.historydom {
    width: 60%;
    background-color: #fff;
    /* border-radius: ; */
    margin:3% auto;
}
.historydom-tittle {
  width: 96%;
  height: 50px;
  /* background-color: aquamarine; */
  padding: 2%;
  font-size: 37px;
  font-family: 'Courier New', Courier, monospace;
}
.historydom-tittle span {
    display: inline-block;
    margin-left: -40%;
}
.historydom-tittle-search {
    width: 40%;
    float: left;
    text-align: left;
    /* background-color: aquamarine; */
}
.historydom-tittle-search input,button{
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgb(155, 153, 153);
}
.historydom-tittle-search button {
    width: 15%;
}
.history-back .el-table .warning-row {
    background: #f3f0d6;
}

.history-back .el-table .success-row {
background:#fff;
}

.history-back .el-table .el-table-column {
    width: 25%;
}
.is-leaf {
    font-size: 20px;
}
.el-pagination{
    font-size: 15px;
}
</style>