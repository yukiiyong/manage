<template>
  <div >
    <el-col :span="10" class="wrapper">
      <span >Filename:</span>
      <el-input v-model="filename" style="width: 70%;" placeholder="please enter the filename" prefix-icon="el-icon-document" />
    </el-col>
    <el-col :span="10" class="wrapper" >
      <span>Cell Auto Width:</span>
      <el-radio-group v-model="autoWidth" syle="width: 66%;" size="medium">
        <el-radio :label="true" border>True</el-radio>
        <el-radio :label="false" border>False</el-radio>
      </el-radio-group>
    </el-col>
    <el-col :span="10" class="wrapper">
      <span >BookType:</span>
      <el-select v-model="bookType" style="width: 70%;">
        <el-option v-for="item in bookTypeOptions" :key="item" :label="item" :value="item" ></el-option>
      </el-select>
    </el-col>
  </div>
</template>
<script type="text/ecmascript-6" >
  export default {
    data() {
      return {
        filename:'excel-list',
        autoWidth: true,
        bookType: 'xlsx',
        bookTypeOptions: ['xlsx', 'csv', 'txt']
      }
    },
    watch: {
      bookType(val) {
        if(val) {
          this.$emit('bookTypeChange', val)
        }
      },
      filename(val) {
        if(val) {
          this.$emit('filenameChange', val)
        }
      },
      autoWidth(val) {
        this.$emit('autoWidthChange', val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrapper{
    //height: 40px;
    margin: 0 10px 10px 0;
    span {
      display: inline-block;
      line-height: 40px;
      font-size: 14px;
      font-weight: 600;
      margin-right: 5px;
    }
  }
</style>