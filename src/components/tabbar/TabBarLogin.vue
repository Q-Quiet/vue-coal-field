<template>
    <div id="tab-bar-list">
        <span>
            登录
        </span>
        <div class="dropdown">
            <div  @click="btnLogin">用户登录</div>
            <div @click="btnadminlogin">管理员登录</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TabBarLogin',
  methods: {
    btnLogin() {
        this.$router.replace('/login')
    },
    btnadminlogin() {
      this.$router.replace('/adminlogin')
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