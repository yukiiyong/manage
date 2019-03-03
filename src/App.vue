<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let themeValue = localStorage.getItem('themeValue')
    if(themeValue) {
      window.document.documentElement.setAttribute('data-theme', themeValue)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/mixin';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  @include primary_color();
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
