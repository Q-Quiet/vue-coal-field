<template>
    <div id="tab-bar">
        <div class="tab-item">
            <tab-bar-list></tab-bar-list>
        </div>
        <div class="tab-item">
            <tab-bar-map></tab-bar-map>
        </div>
        <div class="tab-item" id="srcsrc">
            <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect">
                <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
                <template slot-scope="{ item }">
                    <div class="name">{{ item.value }}</div>
                    <span class="addr">{{ item.address }}</span>
                </template>
            </el-autocomplete> &nbsp;&nbsp;
            <span @click="tocoaldom">搜索</span>
        </div>
        <div class="tab-item">
            <tab-bar-login></tab-bar-login>
        </div>
    </div>
</template>

<script>
import TabBarList from './TabBarList'
import TabBarMap from './TabBarMap'
import TabBarLogin from './TabBarLogin'

export default {
    name: 'TabBar',
    components: {
        TabBarList,
        TabBarMap,
        TabBarLogin
    },
    data() {
      return {
        restaurants: [],
        state: ''
      };
    },
    methods:{
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
            { "value": "火山煤田", "address": "长宁区新渔路144号" },
            { "value": "广西煤田", "address": "上海市长宁区淞虹路661号" },
            { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
            { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
            { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
            { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
            { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
            { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
            { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
            { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
            { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
            { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" }
            ];
        },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        },
        tocoaldom() {
            this.$router.push('/coaldom')
        }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style scoped>
#tab-bar {
    z-index: 1;
    height: 7%;
    width: 100%;
    font-size: 25px;
}
.tab-item {
    width: 24.50%;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    text-align: center;
    background-color: rgb(255, 255, 242);
    /* background-color: cadetblue; */
}
.my-autocomplete li{
    line-height: normal;
    padding: 7px;
}
.my-autocomplete li .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
.my-autocomplete li .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

.my-autocomplete li .highlighted .addr {
      color: #ddd;
    }
</style>