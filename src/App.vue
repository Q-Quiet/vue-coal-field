<template>
  <div id="app">
    <tab-bar>
    </tab-bar>
    <router-view/>  
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
// import TabBarList from './components/tabbar/TabBarList'

export default {
  name: 'App',
  components: {
    TabBar,
    // TabBarList 
  }
}
</script>

<style>
* {
  padding: 0; 
  margin: 0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app{
  display: flex;
  flex-direction:column;
  height: 1120px;
  width: 100%;
  background-color: rgb(243, 241, 236); 
}
</style>
