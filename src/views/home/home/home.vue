<template>
  <div id="allmap" class="Map">
    <!-- <baidu-map class="map" center="陕西" :scroll-wheel-zoom="true" zoom="5">
    <bm-marker :position="{lng: 116.404, lat: 39.915lat: 39.915}"></bm-marker> -->
      <!-- 左上侧城市选择 -->
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      
    <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      <!-- 定位  -->
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
  
    <!-- </baidu-map> -->
  </div>
</template>

<script>
export default {
  name:'home',
  // name: 'app',
  data () {
    return {
      dom: [
          {longitude: 119.197047,latitude: 36.629542, nodeId: '潍坊', CO2:20, CO:10},
          {longitude: 117.121768,latitude: 36.658748, nodeId: '济南', CO2:20, CO:2},
          {longitude: 118.054243,latitude: 36.786539, nodeId: '淄博', CO2:3,  CO:15},
          {longitude: 87.68333,latitude: 43.76667, nodeId: '乌鲁木齐', CO2:20, CO:20},
          {longitude: 87.66333,latitude: 43.50, nodeId: '乌鲁木齐齐', CO2:20, CO:20},
          // {longitude: 117.121768,latitude: 36.658748, name: '济南' },
          // {longitude: 117.121768,latitude: 36.658748, name: '济南' },
        ],
      dom2: [
        // {longitude: 108.93,latitude:  34.27, name: '陕西', CO2:20, CO:20},
        // {longitude: 108.70,latitude: 34.10, name: '陕西2', CO2:20, CO:20}
      ]
    }
  },
  created(){
    this.init()
    setTimeout(()=>{
      this.clickItem();
    },2000)
  },
  mounted(){
  },
  methods: {
    init() {
      this.$axios.get('/coalfield/allNodeInformation')
      .then((res)=>{
        this.dom=this.dom.concat(res.data.data)
        console.log(this.dom)
      })
    },
    clickItem () {
      let this_ = this
      this.dom=this.dom.concat(this.$store.state.domposition)
      console.log(this.dom)
      this.$nextTick(() => {
        var map = new BMap.Map("allmap");   //初始化map, 绑定id=allmap
        var point = new BMap.Point( 108.93, 34.27) // 创建点坐标
        map.centerAndZoom(point, 5) // 初始化地图，设置中心点坐标和地图级别
        map.enableScrollWheelZoom();         // 开启滚动鼠标滑轮

        // 如有多个point去展示，可根据后端接口传入为主
        let data = this_.dom
        // this_.$axios.get('/coalfield/allNodeInformation')
        // .then((res)=>{
        //   this.dom2 = res.data.data
        //   console.log(this.dom2)
        // })
        data.forEach((e, i) => {
          // 创建point, 将x,y值传入
          let pointNumber = new BMap.Point(e.longitude, e.latitude)
          // 创建信息窗口对象
          var content ='<span>CO浓度 </span>        '+ e.CO+
              '</br><span>CO2浓度</span>     '+ e.CO2;
              // '</br><span>节点状态</span>     '+ e.tai;
          let infoWindow = new BMap.InfoWindow(content, {
            width: 150,     // 信息窗口宽度
            height: 150,     // 信息窗口高度
            title: e.nodeId  // 信息窗口标题
          });
          // 将data中的name加入地图中
          var label = new BMap.Label(e.nodeId, {
            offset: new BMap.Size(25, 5)
          });
          markerFun(pointNumber, infoWindow, label)
        })
        
        function markerFun(points, infoWindows, label) {
          let markers = new BMap.Marker(points);
          map.addOverlay(markers);  // 将标注添加到地图中
          markers.setLabel(label);  // 将data中的name添加到地图中
          // 标注的点击事件
          markers.addEventListener('mouseover', function (event) {
            map.openInfoWindow(infoWindows, points);//参数：窗口、点  根据点击的点出现对应的窗口
            // if (infoWindows.isOpen()){//如果已经打开，直接获取按钮，添加事件
            //   document.getElementById("markerbtn").onclick = function (event) {
            //     // this.$router.replace('/login')
            //     //  window.location.href('../../../coaldomlogin')
            //     //  window.event.returnValue = false; 
            //   }
            // }
          });
          markers.addEventListener('click', function (event) {
            console.log(this);
          });
        }
  
        // 获取当前地理位置
        // var geolocation = new BMap.Geolocation();
        // geolocation.getCurrentPosition(function (r) {
        //   if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        //     var mk = new BMap.Marker(r.point);
        //     map.addOverlay(mk);
        //     map.panTo(r.point);
        //     // alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        //   } else {
        //     // alert('failed' + this.getStatus());
        //   }
        // });
  
      })
    },
    todatamessage() {
      this.$router.replace('/dataMess')
    }
  }
}
</script>

<style>
.Map {
  width: 100%;
  height:1120px;
}
.BMap_cpyCtrl {
  display: none;
  }
.anchorBL {
  display: none;
}
</style>