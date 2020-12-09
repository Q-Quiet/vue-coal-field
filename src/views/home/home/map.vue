<template>
<!-- 矢量地图 -->
    <div class="content row-flex-start" style="width:100%">
        <div class="left_map" id="left_map"  @click="showChinaMap"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
import axios from 'axios'
echarts.registerMap('china', china)
var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾']
export default {
    created () {
    },
    mounted () {
        this.$nextTick(() => {
        this.initMap()
        })
    },
    // data () {
    //     return {
    //     map: {}
    //     }
    data() {
      return {
        chart: this.chart
      }
    },
    props: {},
    methods: {
        getMapOpt (place) {
            const option = {
                backgroundColor: '#F3F3F3', //地图背景颜色
                //以下是地图标题，我在此处设空，需要的可以自己加上
                title: {
                    text: '',
                    subtext: '',
                    left: 'center'
                },
                tooltip: {        //显示悬浮窗口
                    trigger: 'item',
                    /*formatter:function(params, ticket, callback){
        //                return params.name+':'+params.value
        //                console.log(params);
                    },*/  
                },
                dataRange: {
                    show: false,
                    min: 0,
                    max: 1000,
                    text: ['High', 'Low'],
                    realtime: true,
                    calculable: true,
                    color: ['orangered', 'yellow', 'lightskyblue']
                },
                    //以下是地图右侧“还原”“下载”工具框
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                geo: {
                    map: place || 'china',
                    label: {
                        emphasis: {
                            show: false
                        },
                        // 不需要显示地名可直接删除normal此项
                        normal: {
                        show: true, // 是否显示对应地名
                        textStyle: {
                            color: 'rgba(0,0,0)'
                        }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)'
                        },
                        emphasis: {
                            areaColor: null,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                },
                series:[{
                        type: 'scatter',
                        coordinateSystem: 'geo' // 对应上方配置
                    },
                    {
                        name: '煤田检测', // 浮动框的标题
                        type: 'map',
                        geoIndex: 0,
                        data: [
                            { name: '西藏', value: 605.83 },
                            { name: '青海', value: 670.44 },
                            { name: '宁夏', value: 102.21 },
                            { name: '海南', value: 22.66 },
                            { name: '甘肃', value: 20.37 },
                            { name: '贵州', value: 701.84 },
                            { name: '新疆', value: 10.05 },
                            { name: '云南', value: 893.12 },
                            { name: '重庆', value: 11.37 },
                            { name: '吉林', value: 568.83 },
                            { name: '山西', value: 237.55 },
                            { name: '天津', value: 307.28 },
                            { name: '江西', value: 702.82 },
                            { name: '广西', value: 720.87 },
                            { name: '陕西', value: 512.3 },
                            { name: '黑龙江', value: 582 },
                            { name: '内蒙古', value: 359.88 },
                            { name: '安徽', value: 300.65 },
                            { name: '北京', value: 251.93 },
                            { name: '福建', value: 560.18 },
                            { name: '上海', value: 195.69 },
                            { name: '湖北', value: 632.26 },
                            { name: '湖南', value: 669.56 },
                            { name: '四川', value: 26.68 },
                            { name: '辽宁', value: 226.7 },
                            { name: '河北', value: 515.76 },
                            { name: '河南', value: 931.03 },
                            { name: '浙江', value: 318.85 },
                            { name: '山东', value: 361.85},
                            { name: '江苏', value: 110.27 },
                            { name: '广东', value: 210.28 },
                            ]
                        },
                    ]
                }
                return option
            },
                // 显示中国地图
            showChinaMap () {
            const option = this.getMapOpt()
                this.map.setOption(option, true)
            },
                // 显示各省地图，这里使用axios请求本地文件，provice文件夹存在的位置为public/province（旧版本是static）
            getProvinceMapOpt (provinceAlphabet) {
                axios.get('static/province/' + provinceAlphabet + '.json').then((s) => {
                    echarts.registerMap(provinceAlphabet, s.data)
                    const option = this.getMapOpt(provinceAlphabet)
                    this.map.setOption(option, true)
                })
            },
            initMap () {
            var dom = document.getElementById('left_map')
            this.map = echarts.init(dom)
            const option = this.getMapOpt()
            if (option && typeof option === 'object') {
                this.map.setOption(option, true)
            }
            this.map.on('click', (param) => {
                // console.log(param)
                event.stopPropagation()// 阻止冒泡
                // 找到省份名
                const provinceIndex = provincesText.findIndex(x => {
                return param.name === x
                })
                //在这里判断provincesText中是否包含点击的省份名，有则渲染省级地图，无则无处理（需要可从此获得）
                if (provinceIndex === -1) return
                const provinceAlphabet = provinces[provinceIndex]
                // 重新渲染各省份地图
                this.getProvinceMapOpt(provinceAlphabet)
            })
        }
    },
    computed: {}
}

</script>

<style>
.left_map {
  width: 100%; 
  height:1120px; 
}
</style>

