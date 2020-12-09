<template>
  <div class="echartLayout">
    <div id="container" style="width:100%; height:100%; overflow:hidden;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "personRelation",
    data() {
      return {
        myChart: null,
        chartData:[],
        chartLink:[]
      }
    },
    mounted() {
      this.initEchart()
    },
    methods: {
      initEchart() {
        let dom = document.getElementById("container");
        this.myChart = echarts.init(dom);
        this.chartData=this.dataEChart();
        this.chartLink=this.linkEChart();
        let option = {
          tooltip:{
            show:false
          },
          series: [
            {
              edgeLabel: {
                normal: {
                  formatter:"{c}",
                  show:true
                }
              },
              edgeSymbol:'circle',
              force:{
                repulsion:2000
              },
              layout:'force',
              roam:true,
              itemStyle:{
                normal:{
                  color: '#6495ED'
                },
                //鼠标放上去有阴影效果
                emphasis: {
                  shadowColor: '#3721db',
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 40,
                },
              },
              label:{
                normal:{
                  show:true
                }
              },
              //头像
              symbolSize:86,
              type:'graph',
              links: this.chartLink,
              data:this.chartData
            }
          ]
        };
        this.myChart.setOption(option);
      },
      /**
       * 数据集合
       */
      dataEChart(){
        let data = [
          {
            name: 'sensor1',
            symbolSize: 76,
            id: '1',
          },
          {
            name: 'sensor2',
            id: '2',
          },
          {
            name: 'sensor3',
            id: '3',
          },
          {
            name: 'sensor4',
            id: '4',
          },
          {
            name: 'sensor5',
            id: '5',
          },
          {
            name: 'sensor6',
            id: '6',
          },
          {
            name: 'sensor7',
            id: '7',
          },
          {
            name: 'sensor8',
            id: '8',
          },
          {
            name: 'sensor9',
            id: '9',
          },
          {
            name: 'sensor10',
            id: '10',
          },
          {
            name: 'sensor11',
            id: '11',
          },
          {
            name: 'sensor12',
            id: '12',
          },
          {
            name: 'sensor13',
            id: '13',
          },
          {
            name: 'sensor14',
            id: '14',
          },
          {
            name: 'sensor15',
            id: '15',
          },
        ];
        return data;
      },
      /**
       * 关系数据集合
       */
      linkEChart(){
        let dataLink=[
          {value: "=============",source: "1",target: "2"},
          {value: "=============",source: "1",target: "3"},
          {value: "=============",source: "1",target: "4"},
          {value: "=============",source: "3",target: "4"},
          {value: "-------======",source: "2",target: "5"},
          {value: "-------======",source: "2",target: "6"},
          {value: "-------======",source: "4",target: "7"},
          {value: "=============",source: "5",target: "8"},
          {value: "=============",source: "5",target: "1"},
          {value: "-------======",source: "3",target: "8"},
          {value: "-------======",source: "7",target: "10"},
          {value: "=============",source: "9",target: "8"},
          {value: "=============",source: "8",target: "11"},
          {value: "=============",source: "5",target: "12"},
          {value: "-------======",source: "9",target: "14"},
          {value: "-------======",source: "1",target: "10"},
          {value: "=============",source: "3",target: "13"},
          {value: "=============",source: "10",target: "15"},
        ];
        return dataLink;
      },
    }
  }
</script>

<style scoped>
  .echartLayout {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style> 