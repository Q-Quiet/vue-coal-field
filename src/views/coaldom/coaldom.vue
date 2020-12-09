<template>
    <div class="coalInfodom">
        <div class="coalInfodom-mess">
            <div class="coalInfodom-title">
                <!-- <div class="coalInfodom-title-input">搜索煤田&nbsp;&nbsp;
                    <input placeholder="请输入煤田名称" v-model="search" @input="submitFun" ref='searchInput'>
                </div> -->
                <div class="title"><span>节点信息记录</span></div>
                </div>
            <div class="dom-table" @click="tomess">
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="coalname" label="煤田名称"></el-table-column>
                <el-table-column prop="nodeId" label="节点编号"></el-table-column>
                <el-table-column prop="cH4" label="CO浓度"> </el-table-column>
                <el-table-column prop="cO2" label="CO2浓度"> </el-table-column>
                <el-table-column prop="status" label="节点状态"></el-table-column>
            </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'coaldom',
    data() {
        return {
            search: '',
            searchData: '',
            new:'123',
            tableData:[],
        };
    },
    created() {
        // this.$store.dispatch('getdata')
        let that = this
            console.log(that.tableData)
        setInterval(()=>{
            that.$store.dispatch('getdata')
            that.tableData=that.$store.state.data
            console.log(that.tableData)
        }, 1600)
    },
    mounted() {
    },
    methods: {
        tablerowclick() {
            this.$router.replace('/dataMess')
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 == 1) {
                return 'warning-row';
            } else if (rowIndex%2 == 0) {
                return 'success-row';
            }
            return 'hov';
        },
        tomess() {
            this.$router.replace('/dataMess')
        }
    },
};
</script>
<style>
.coalInfodom {
    width: 100%;
    height: 1120px;
    background-image: url('../../assets/image/pic3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}
.coalInfodom-mess {
    width: 60%;
    margin: auto;
    margin-top: 5%;
    background-color: #fff;
    opacity: 0.95;
    padding-top: 1%;
}
.coalInfodom-title{
    width: 100%;
    display: flex;
    height: 50px;
    line-height: 50px;
    margin-bottom: 2%;
}
.coalInfodom-title-input{
    width: 20%;
    /* background-color:burlywood ; */
}
.coalInfodom input{
    width: 150px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 1px solid rgb(155, 153, 153);
}
.coalInfodom-title .title{
    width: 67%;
    margin: auto;
    /* background-color: cadetblue; */
    margin-left: 16%;
}
.coalInfodom-title .title span{
    display: inline-block;
    width: 50%;
    height: 50px;
    font-family: 'Courier New', Courier, monospace;
    /* margin-left: -28%; */
    font-size: 35px;
    /* background-color:cadetblue; */
}
.dom-table {
    width: 100%;
    margin: auto;
}  
.el-table {
    width:100%
}
.coalInfodom .el-table .warning-row {
    background: #e6e3ca
}

.coalInfodom .el-table .success-row {
    background: #ffffff;
} 
.el-table .el-table-column {
    width: 25%;
}
</style>