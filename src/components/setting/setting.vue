<template>
  <section>
    <el-col :span="24">
      <h3 class="changeTheme">更换主题</h3>
      <ul id="themeContainer" class="toolbar">
        <li v-for="(theme,index) in themes" :style="{backgroundColor:theme.bgcolor}" @click="changeTheme(index)"></li>
      </ul>
    </el-col>
  </section>
</template>
<script type="text/ecmascript-6" >
import {themes} from '@/common/themeArray'
  export default {
    data() {
      return {
        themes: []
      }
    },
    created() {
      this.themes = themes
    },
    methods: {
      changeTheme(index) {
        window.document.documentElement.setAttribute('data-theme', this.themes[index].name)
        localStorage.setItem('themeValue', this.themes[index].name)
        this.$message({
          type: 'success',
          message: '皮肤更换成功'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .changeTheme {
    padding: 0 5px;
  }
  #themeContainer {
    padding: 15px;
    list-style: none;
    li {
      display: inline-block;
      height: 50px;
      width: 50px;
      margin-right: 15px;
    }
  }
</style>