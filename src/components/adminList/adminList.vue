<template>
  <section>
    <el-col :span="24" class="toolbar" >
      <el-form :inline="true" :model="filters" >
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button @click="getAdminList(filters.name)" type="primary" >查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="users" v-loading="listLoading" style="width: 100%;">
      <el-table-column width="200px" prop="name" label="姓名" sortable></el-table-column>
      <el-table-column width="300px" prop="registime" label="注册时间" sortable></el-table-column>
      <el-table-column width="350px" prop="addr" label="地址" sortable></el-table-column>
      <el-table-column width="200px" prop="role" label="权限" ></el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar" >
      <el-pagination layout="prev,pager,next" background :page-size="10" :total="total" :current-page="page" @current-change="handleCurrentChange" ></el-pagination>
    </el-col> 
  </section>
</template>
<script type="text/ecmascript-6">
  import {getAdminList} from 'api/request' 

  export default {
    data() {
      return {
        filters: {name: ''},
        users: [],
        total: 0,
        page: 1,
        listLoading: false
      }
    },
    mounted() {
      this.getAdminList()
    },
    methods: {
      getAdminList(name) {
        const nameParam = name || ''
        let param = {
          name: name,
          page: this.page
        }
        this.listLoading = true
        getAdminList(param).then(res => {
          if(res.success) {
            this.listLoading = false
            this.total = res.total
            this.users = res.users
          }
        }).catch(e => {
          this.listLoading = false
          this.$message({
            type: 'danger',
            message: e
          })
        })
      },
      handleCurrentChange(val) {
        this.page = val
        this.getAdminList()
      }
    }
  }
</script>
<style scoped></style>