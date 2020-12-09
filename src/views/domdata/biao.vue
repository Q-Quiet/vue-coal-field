<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div style="width: 100%; height:99%; padding-top:2%"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/dark') // echarts theme

export default {
  data() {
    return {
      data:{},
    }
  },
  created() {
    let that = this
    setInterval(()=>{
      that.data=that.$store.state.dataData[0]
      that.initChart()
      console.log(that.data)
    },1100)
  },
  methods: {
    initChart() {
      // 通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图
      this.chart = echarts.init(this.$el)
      // this.chart = echarts.init(this.$el)
      // 使用刚指定的配置项和数据显示图表。
      let odataDate = this.data.dataDate
      let odatacO2 = this.data.cO2
      let odatacH4 = this.data.cH4
      this.chart.setOption({
        title: {
        text: '折线图堆叠',
         },
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        xAxis: {
         type: 'category',
         boundaryGap: false,
         data: odataDate,  //xData 就是日期这个数组
         
      },
        yAxis: {},
        toolbox: { // 工具箱
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['bar', 'line']},
              restore: {}
            }
          },
        series: [
            {
              // name:cO2,
              data:odatacO2,
              type: 'line', smooth: true, seriesLayoutBy: 'row', color: 'rgb(74, 123, 231)',
              markLine:{
                data:[
                  { 
                    name:'CO2的警戒线',
                    label:{
                      show:true,
                      formatter:'CO2的警戒线'
                    },
                    yAxis:0.08,
                    lineStyle:{
                      color:'purple'
                    }
                  },
                  {
                    name: '燃烧！！！',
                    label:{
                      show:true,
                      formatter:'燃烧！！！'
                    },
                    yAxis:0.12,
                    lineStyle:{
                      color:'red'
                    },
                    
                  }
                ],
                // symbol:['CO2的警戒线','Burning!!!']
              }
            },
            {
              // name:cH4,
              data:odatacH4,
              type: 'line', smooth: true, seriesLayoutBy: 'row',color:' rgb(173, 74, 231)',
              
            },
        ]
    })
    }
  }
}
</script>

<style scoped>
</style>