<template>
  <div class="inputContainer">
    <MdInput :icon="icon" :type="type" :placeholder="placeholder" class="demo">姓名</MdInput>
    <div class="button" @click="handleClick" ref="btn">提交</div>
    <div class="button" ref="test" v-ripple>test</div>
  </div>
</template>
<script type="text/ecmascript-6" >
  import MdInput from 'components/MDInput'
  import Ripple from '@/directive/ripple'
  export default {
    data() {
      return {
        icon: 'search',
        type: 'text',
        placeholder: '请输入',
      }
    },
    methods: {
      handleClick(e) {
        const target = e.target
        const x = e.pageX
        const y = e.pageY
        const offset = target.getBoundingClientRect()
        let $ripple = document.createElement('span')
        $ripple.className = "ripple"
        $ripple.style.width = $ripple.style.height =  Math.max(offset.width, offset.height) + 'px'
        target.appendChild($ripple)
        $ripple.style.left = x - offset.left - $ripple.offsetWidth / 2 + 'px'
        $ripple.style.top = y - offset.top - $ripple.offsetHeight / 2 + 'px'
      }
    },
    components: {
      MdInput
    },
    directives: {
      Ripple
    }
  }
</script>
<style type="text/css" lang="scss" >
  @import 'styles/mixin';

  .inputContainer {
    position: relative;
  }
  .demo {
    width: 200px;
  }
  .button {
    position: relative;
    width: 100px;
    height: 36px;
    margin: 20px;    
    @include bg_color();
    border-radius: 4px;
    text-align: center;
    color: #fff;
    line-height: 36px;
    cursor: pointer;
    overflow: hidden;
  }
  .ripple {
    position: absolute;
    color: red;
    background: rgba(0,0,0,0.15);
    border-radius: 100%;
    transform: scale(0);
    animation: ripples .75s ease-out;
    opacity: 1;
  }
  @keyframes ripples {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
</style>