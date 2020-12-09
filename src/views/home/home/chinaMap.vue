<template>
  <baidu-map style="width:100%,height:600px" class="map">
    <!-- 没有用！！！！！！！！！！！！！！！！！！！！！！！！！！ -->
      <!--比例尺控件-->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
      <!--聚合动态添加的点坐标-->
      <bm-marker-clusterer :averageCenter="true">
          <bm-marker v-for="marker of markers" :key="marker.code" :position="{lng: marker.lng, lat: marker.lat}" @click="lookDetail(marker)"></bm-marker>
      </bm-marker-clusterer>
      <!--信息窗体-->
      <bm-info-window :position="{lng: infoWindow.info.lng, lat: infoWindow.info.lat}" :title="infoWindow.info.name" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
          <p><span class="left">单位面积能耗：</span><span class="right">{{infoWindow.info.areaEnergy}}kWh/㎡</span></p>
          <p><span class="left">建筑面积：</span><span class="right">{{infoWindow.info.area}}㎡</span></p>
          <p><span class="left">电耗：</span><span class="right">{{infoWindow.info.energy}}kWh</span></p>
          <p><span class="left">水耗：</span><span class="right">{{infoWindow.info.water}}m³</span></p>
          <p><span class="left">气耗：</span><span class="right">{{infoWindow.info.air}}m³</span></p>
      </bm-info-window>
  </baidu-map>
</template>
<script>
export default {
  name: "echarts",
  data() {
    return {
    };
  },
  methods: {
    //查看详情
    lookDetail(data, target){
        this.infoWindow.show =true;
        this.infoWindow.info=data;
        this.activeName = data.name;
        //为弹窗口标题添加title
        this.$nextTick(()=>{
            var win=document.querySelector(".BMap_bubble_title");
            win.title = this.activeName;
        })
        if(target=='left'){ //点击的是左侧列表项，则不需要滚动
            this.map.center={lng: data.lng, lat: data.lat};
            this.map.zoom = 15;
            return;
        }
        //滚动到指定元素位置
        this.$nextTick(()=>{
            var obj=document.querySelector(".active");
            var scrollTop=obj.offsetTop;
            this.$refs.box.scrollTop=scrollTop-180;
        })
    },
  }
}
</script>

<style scoped>

.left_map {
  width: 1200px;
  height: 100%;
}
.right_opetate {
  flex: 1;
  height: 100%;
  background: #404a59
}
</style>