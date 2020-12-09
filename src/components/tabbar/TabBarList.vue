<template>
    <div id="tab-bar-list">
        <span>
            下拉菜单
        </span>
        <div class="dropdown">
            <div @click="btndataMess">查询节点信息</div>
            <div @click="btnhispro">故障信息记录</div>
            <div @click="btnhis">历史信息记录</div>
            <div @click="btndomcreate">创建节点信息</div>
            <div @click="btndommap">节点连接结构</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TabBarList',
  methods: {
    btndataMess() {
      this.$router.replace('./coaldom')
    },
    btnhispro() {
      this.$router.replace('./datahisproblem')
    },
    btnhis() {
      this.$router.push('./datahistory')
    },
    btndomcreate(){
      this.$router.push('./domcreate')
    },
    btndommap(){
      this.$router.push('./dommap')
    }
  }
}

</script>

<style>
#tab-bar-list {
  width: 100%;
  z-index: 1;
  position: relative;
  display: inline-block;
}
.dropdown{
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#tab-bar-list:hover .dropdown{
  display: block;
  width: 100%;
}
</style>