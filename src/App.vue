<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.toolbar {
  background: #f2f2f2;
  margin: 10px 0;
  padding: 10px 10px;
}
.toolbar .el-form-item {
  margin-bottom: 0;
}
</style>
