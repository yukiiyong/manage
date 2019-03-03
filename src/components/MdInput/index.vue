<template>
  <div :class="computedClasses" class="material-input__component">
    <div :class="{iconClass:icon}">
      <i v-if="icon" :class="['el-icon-'+icon]" class="el-input__icon material-input__icon" ></i>
      <input 
        v-if="type === 'text'"
        :name="name"
        :placeholder="fillPlaceholder"
        v-model="currentValue"
        :readonly="readonly"
        :disabled="disabled"
        :autoComplete="autoComplete"
        :required="required"
        type="email"
        class="material-input"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput" >
      <span class="material-input-bar" ></span>
      <label class="material-label" >
        <slot></slot>
      </label>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'MdInput',
    props: {
      icon: String,
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      value: [String,Number],
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoComplete: {
        type: String, 
        default: 'off'
      },
      required: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentValue: this.value,
        focus: false,
        fillPlaceholder: null
      }
    },
    computed: {
      computedClasses() {
        return {
          'material--active': this.focus,
          'material--disabled': this.disabled,
          'material--raised': Boolean(this.focus || this.currentValue) //has value
        }
      }
    },
    watch: {
      value(newVal) {
        this.currentValue = newVal
      }
    },
    methods: {
      handleInput(e) {
        const value = e.target.value
        this.$emit('input',value)
        if(this.$parent.$options.componentName === 'ELFormItem') {
          if(this.validateEvent) {
            this.$parent.$emit('el.form.change', [value])
          }
        }
        this.$emit('change',value)
      },
      handleFocus(e) {
        this.focus = true
        this.$emit('focus',e)
        if(this.placeholder && this.placeholder !== '') {
          this.fillPlaceholder = this.placeholder
        }
      },
      handleBlur(e) {
        this.focus = false
        this.$emit('blur', e)
        this.fillPlaceholder = null
        if(this.$parent.$options.componentName === 'ELFormItem') {
          if(this.validateEvent) {
            this.$parent.$emit('el.form.blur',[this.currentValue])
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped >
  //font
  $font-size-small: 16px;
  $font-size-base: 18px;
  //utils
  $apixel: 1px;
  $spacer: 12px;
  $transition: 0.2s ease all;
  $index: 0px;
  $index-has-icon: 30px;
  $color-white: white;
  $color-grey: #9E9E9E;
  $color-grey-light: #E0E0E0;
  $color-blue: #2196F3;
  $color-red: #F44336;
  $color-black: black;
  //Base Class
  //input-bar 利用&:before 和 &:after 来进行absolute定位，height:1px，wodth:0,左边left:50%,右边right:50%,起点设为中间，active时设宽度
  %base-bar-pseudo {
    position: absolute;
    content: '';
    height: 1px;
    width: 0px;
    bottom: 0;
    transition: $transition;
    background: $color-blue;
  }
  //absolute定位，raised时使top为负值，top根据height来定位，不计入margin
  @mixin slide-top() {
    top: -($font-size-base);
    left: 0;
    font-size: $font-size-small;
    font-weight: bold;
  }

  .material-input__component {
    margin-top: 30px;
    position: relative;
    .iconClass {
      .material-input__icon {
        position: absolute;
        left: 0;
        top: $spacer;
        line-height: $font-size-base;
        width: $index-has-icon;
        height: $font-size-base;
        font-size: $font-size-base;
        font-weight: normal;
        color: $color-blue;
        pointer-events: none;
      }
      .material-label {
        left: $index-has-icon;
      }
      .material-input {
        text-indent: $index-has-icon;
      }     
    }
    .material-input {
      font-size: $font-size-base;
      padding: $spacer $spacer $spacer - $apixel * 10 $spacer/2;
      width: 100%;
      color: $color-black;
      border: none;
      border-bottom: 1px solid $color-grey;
      line-height: 1;
      &:focus {
        outline: none;
        border:none;
        border-bottom: 1px solid transparent;
      }
    }
    .material-label {
      position: absolute;
      left: $index;
      top: $spacer;
      font-size: $font-size-base;
      font-weight: normal;
      line-height: 1;
      color: $color-grey;
      transition: $transition;
      pointer-events: none;
    }
    .material-input-bar {
      position: relative;
      width: 100%;
      display: block;
      &:before {
        @extend %base-bar-pseudo;
        left: 50%;
      }
      &:after {
        @extend %base-bar-pseudo;
        right: 50%;
      }
    }
    &.material--disabled {
      .material-input {
        border-bottom-style: dashed;
      }
    }
    &.material--raised {
      .material-label {
        @include slide-top();
        color: $color-blue;
      }
    }
    &.material--active {
      .material-input-bar {
        &:before, &:after {
          width: 50%;
        }
      }
    }
  }
  .material--has-errors {
    &.material--active, .material-label {
      color: $color-red;
    }
    .material-input-bar {
      &:before, &:after {
        background: transparent;
      }
    }
  }
</style>