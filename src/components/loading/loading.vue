<template >
  <transition name="loading" >
    <div v-show="isShow" class="ui-loading-wrap" >
      <div class="ui-loading-mask" ></div>
      <div class="ui-loading" >
        <div class="ui-loading-icon"></div>
        <div class="ui-loading-text">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script >
  export default {
    props: {
      text: {
        type: String,
        default: 'loading...'
      },
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped >
.ui-loading-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2001;
}
.ui-loading-mask {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.2);
}
.ui-loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2003;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.ui-loading-text {
  color: #fff;
}
.ui-loading-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-top: 3px solid #c7f7e8;
  border-bottom: 3px solid #b4f8e3;
  border-left: 3px solid #a0fadd;
  border-right: 3px solid #c6ffed;
  animation: turn 1s linear infinite;
}
@keyframes turn {
  0%{-webkit-transform: rotate(0deg);}
  25%{-webkit-transform: rotate(90deg);}
  50%{-webkit-transform: rotate(180deg);}
  75%{-webkit-transform: rotate(270deg);}
  100%{-webkit-transform: rotate(360deg);}
}
.loading-enter-active, .loading-leave-active {
  transition: all 0.3s ease;
}
.loading-enter, .loading-leave-to {
  opacity: 0
}
</style>