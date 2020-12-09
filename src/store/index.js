import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    domposition:{
      longitude: '',
      latitude: '',
      nodeId: ''
    },
    problemval: {
      dataDate: '',
      nodeId: ''
    },
    problem:{
    },
    dataData: [{
      dataDate: [],
      cO2: [],
      cH4: []
    },{
      dataDate: [],
      cO2: [],
      cH4: [],
    },{
      dataDate: [],
      cO2: [],
      cH4: []
    }],
    data: [{
      coalname:'火山',
      nodeId: '0002',
      cO2: '',
      cH4: '',
      dataDate: '',
      status: ''
    },{
      coalname:'火山',
      nodeId: '0003',
      cO2: '',
      cH4: '',
      dataDate: '',
      status: ''
    },{
      coalname:'火山',
      nodeId: '0004',
      cO2: '',
      cH4: '',
      dataDate: '',
      status: ''
    }
    ],
  },
  mutations:{ 
    getdata(state,res){
      if (res.data  == '') {
        console.log(123)
        state.data[0].cO2 = '------------'
        state.data[0].cH4 = '------------'
        state.data[0].status = '------------'
        state.data[1].cO2 = '------------'
        state.data[1].cH4 = '------------'
        state.data[1].status = '------------'
        state.data[2].cO2 = '------------'
        state.data[2].cH4 = '------------'
        state.data[2].status = '------------'
      } else {
        for (let i=0; i<res.data.length; i++) {
          let num = 0
          let flag = true
          if (res.data[i].nodeId === '0002'){
            num = 1
            state.data[0].cO2 = res.data[i].cO2
            state.data[0].cH4 = res.data[i].cH4
            state.data[0].dataDate = res.data[i].dataDate
            if(parseFloat(state.data[0].cO2) > 0.08) {
              state.data[0].status = '预警'
            }else if(parseFloat(state.data[0].cO2) > 0.12) {
              state.data[0].status = '燃烧'
            }else {
              state.data[0].status = '正常'
            }
            if(state.dataData[0].dataDate.length == 12) {
              state.dataData[0].dataDate.shift()
              state.dataData[0].cO2.shift()
              state.dataData[0].cH4.shift()
            }else{
              state.dataData[0].dataDate.forEach(item=>{
                if(res.data[i].dataDate===item.dataDate){
                  flag = false
                }
              })
              if(flag){
                state.dataData[0].dataDate.push(res.data[i].dataDate)
                state.dataData[0].cO2.push(res.data[i].cO2)
                state.dataData[0].cH4.push(res.data[i].cH4)
              }
            } 
          } else if(res.data[i].nodeId === '0003'){
            num=2
            state.data[1].cO2 = res.data[i].cO2
            state.data[1].cH4 = res.data[i].cH4
            state.data[1].dataDate = res.data[i].dataDate
            if(parseFloat(state.data[1].cO2) > 0.08) {
              state.data[1].status = '预警'
            }else if(parseFloat(state.data[1].cO2) > 0.12) {
              state.data[1].status = '燃烧'
            }else {
              state.data[1].status = '正常'
            }
            if(state.dataData[1].dataDate.length == 12) {
              state.dataData[1].dataDate.shift()
              state.dataData[1].cO2.shift()
              state.dataData[1].cH4.shift()
            }else{
              state.dataData[1].dataDate.forEach(item=>{
                if(res.data[i].dataDate === item.dataDate){
                  flag = false
                }
              })
              if(flag){
                state.dataData[1].dataDate.push(res.data[i].dataDate)
                state.dataData[1].cO2.push(res.data[i].cO2)
                state.dataData[1].cH4.push(res.data[i].cH4)
              }
            }
          } else if(res.data[i].nodeId === '0004'){
            num=3
            state.data[2].cO2 = res.data[i].cO2
            state.data[2].cH4 = res.data[i].cH4
            state.data[2].dataDate = res.data[i].dataDate
            if(parseFloat(state.data[2].cO2) > 0.08) {
              state.data[2].status = '预警'
            }else if(parseFloat(state.data[2].cO2) > 0.12) {
              state.data[2].status = '燃烧'
            }else {
              state.data[2].status = '正常'
            }
            if(state.dataData[2].dataDate.length == 12) {
              state.dataData[2].dataDate.shift()
              state.dataData[2].cO2.shift()
              state.dataData[2].cH4.shift()
            }else{
              state.dataData[2].dataDate.forEach(item=>{
                if(res.data[i].dataDate === item.dataDate){
                  flag = false
                }
              })
              if(flag){
                state.dataData[2].dataDate.push(res.data[i].dataDate)
                state.dataData[2].cO2.push(res.data[i].cO2)
                state.dataData[2].cH4.push(res.data[i].cH4)
              }
            }
          }
        }
      }
    },
    getproval(state,res){
      state.problemval.dataDate = res.dataDate
      state.problemval.nodeId = res.nodeId
      console.log(state.problemval)
    },
    getproblem(state,res){
      state.problem=res
      console.log(state.problem)
    },
    createdom(state,res){
      state.domposition=res
    }
  },
  actions: {
    getdata(context) {
      Axios.get('/coalfield/realTimeData')
      .then(res=>{
        console.log(res.data)
        context.commit('getdata',res.data)
      })
    },
    getproval(context,data){
      console.log(data)
      context.commit('getproval',data)
    },
    getproblem(context) {
      let id = this.state.problemval
      console.log(id)
      Axios.post('/fault/selectFault',id)
      .then((res)=>{
        context.commit('getproblem',res.data.data)
      })
    },
    createdom(context,data) {
      Axios.post('/coalfield/insertNode',data)
      .then((res)=>{
        alert(res.data.msg)
      })
      context.commit('createdom',data)
    }
  }
})

export default store