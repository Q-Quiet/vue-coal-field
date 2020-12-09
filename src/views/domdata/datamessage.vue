<template>
  <div id="dom-info">
    <div class="boxbox">
      <div id="dom-info-now">
        <div style="font-size:30px">当前节点信息</div>
        <div id="dom-info-now-mess">
          <div>节点序列号：<span>{{searchData.nodeId}}</span></div>
          <div>所属煤田：<span>{{searchData.coalname}}</span></div>
          <div>CO2浓度：<span>{{searchData.cO2}}</span></div>
          <div>CO浓度：<span>{{searchData.cH4}}</span></div>
          <div>节点状态：<span>{{searchData.status}}</span></div>
          <div>信息采集时间：<br><span>{{searchData.dataDate}}</span></div>
        </div>
      </div>

      <div id="tubiao">
        <biao></biao>
      </div>
    </div>
    <div id="dom-info-pro">预警信息记录
      <div style="margin:2% auto; font-size: 25px;">{{warn}}</div>
    </div>
    <!-- <div id="yu">预警信息：
      
    </div> -->
  </div>
</template>

<script>
import biao from './biao'
export default {
  name: 'datamessage',  
  data() {
    return {
      warn:'',
      searchData: [],
      dataproblem: '',
      // flag:false
    }
  },
  created: function () {
    this.searchData = this.$store.state.data[0]
    this.init()
    let that = this
    setInterval(()=>{
      that.$axios.get('/coalfield/warning')
      .then((res)=>{
        if(res.data){
          that.warn=res.data.data
          console.log('12')
          that.flag=true
          alert(res.data.data)
        }
      })
    }, 30000)
  },
  components: {
    biao
  },
  mounted() { 
  },
  methods: {
    init() {
      this.$store.dispatch('getproblem')
      // this.$set(this.data,0,this.$store.state.problem)
      let that = this
      this.$store.state.problem.forEach(item=>{
        if(item.nodeId==='0002'){
          that.dataproblem=item.information
        }
      })
      console.log(this.data2)
    }
  }
}
</script>

<style>
#dom-info {
  width: 100%;
  height: 100%;
  /* background-color: rgb(168, 199, 194); */
  background-image: url('../../assets/image/pic3.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  /* flex-direction: column ; */
}
.boxbox {
  width: 68%;
  margin: auto;
  margin-top: 3%;
  display: flex;
  height: 60%;

}
#dom-info-now {
  background-color: rgb(255, 255, 242);
  opacity: 0.8;
  border: solid 1px rgb(255, 255, 255);
  width: 30%;
  padding: 3%;
  /* display:inline-block; */
}
#tubiao {
  margin-left: 4%;
  width: 70%;
  background-color: rgb(255, 255, 242);
    opacity: 0.8;
  /* border: solid 1px black; */
}
#dom-info-pro {
  border: solid 1px rgb(255, 255, 255);
  margin:auto;
  margin-top: 5%;
  font-size: 20px;
  padding-top: 4px;
  width: 68%;
  height: 20%;
  font-size: 30px;
  background-color: rgb(255, 255, 242);
  opacity: 0.8; 
}
#dom-info-now-mess {
  margin: 9%;
  font-size: 29px;
}
#dom-info-now-mess div{
  text-align: left;
  padding: 2%;
  font-size: 25px;
}
/* #yu{
  width: 250px;
  height: 250px;
  position: absolute;
  left: 50px;
  font-size: 25px;
  bottom: 0px;
  background-color:#fff;
  opacity: 0.8;
} */
</style>