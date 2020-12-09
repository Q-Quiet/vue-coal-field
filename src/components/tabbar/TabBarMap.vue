<template>
  <div id="tab-bar-map">
    <span>地图</span>
    <div class="dropdown">
        <div @click="btnallMap">全国地图</div>
        <div @click="btnMap">矢量地图</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarMap',
  methods: {
    btnallMap() {
      this.$router.replace('/allmap')
    },
    btnMap() {
      this.$router.replace('/map')
    }
  }
}
</script>

<style>
#tab-bar-map {
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
#tab-bar-map:hover .dropdown{
  display: block;
  width: 100%;
}
</style>