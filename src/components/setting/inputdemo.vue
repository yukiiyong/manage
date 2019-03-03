<template>
  <div>
    <MdInput :icon="icon" :type="type" :placeholder="placeholder" class="demo">姓名</MdInput>
    <div class="button"></div>
  </div>
</template>
<script type="text/ecmascript-6" >
  import MdInput from 'components/MDInput'
  export default {
    data() {
      return {
        icon: 'search',
        type: 'text',
        placeholder: '请输入',
      }
    },
    components: {
      MdInput
    }
  }
</script>
<style lang="scss" scoped>
  @import 'styles/mixin';
  .demo {
    width: 200px;
  }
  .button {
    width: 100px;
    height: 30px;
    @include bg_color();
    border-radius: 4px;
    text-align: center;
    color: #fff;
    line-height: 1;
  }
</style>