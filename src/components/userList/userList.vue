<template>
  <section>
    <el-col :span="24" class="toolbar" >
      <el-form :inline="true" :model="filters">
        <el-form-item >
          <el-input v-model="filters.name" placeholder="姓名" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="getUsers(filters.name)">查询</el-button> 
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd" >新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="users" v-loading="listLoading" @selection-change="handleSelsChange" style="width: 100%;">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column label="姓名" prop="name" width="120"></el-table-column>
      <el-table-column label="性别" prop="sex" :formatter="formatSex" width="100"></el-table-column>
      <el-table-column label="年龄" prop="age" width="100"></el-table-column>
      <el-table-column label="生日" prop="birth" width="120"></el-table-column>
      <el-table-column label="地址" prop="addr" width="180"></el-table-column>
      <el-table-column label="操作" width="150" >
        <template scope="scope" >
          <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>  
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="danger" :disabled="sels.length===0" @click="batchRemove">批量删除</el-button>
      <el-pagination layout="prev,pager,next" background :total="total" :page-size="5" :current-page="page" @current-change="handleCurrentChange" style="float:right;"></el-pagination>
    </el-col>

    <el-dialog :visible.sync="editFormVisible"  title="编辑" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" ref="editForm" :rules="editFormRules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="editForm.sex" >
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="editForm.age"></el-input-number>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker v-model="editForm.birth" placeholder="选择生日"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="editForm.addr" type="textarea" :rows="2" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
          <el-button @click="editFormVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="addFormVisible" title="新增" :close-on-click-modal="false">
      <el-form :model="addForm" :rules="editFormRules" ref="addForm" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="addForm.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>            
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="addForm.age" :min="0" :max="150"></el-input-number>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker v-model="addForm.birth" placeholder="选择生日"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="addForm.addr" type="textarea" :rows="2" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="addSubmit" :loading="addLoading">创建</el-button>
          <el-button @click.native="addFormVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>
<script type="text/ecmascript-6">
  import {getUserList, removeUser, batchRemove, editUser, addUser} from 'api/request'
  import {formatDate} from 'util/util'

  const formRules = {name: [{required: true,message: '请输入姓名',trigger: 'blur'}]}
  const addForm= { name: '',  sex: -1, age: 0,  birth: '', addr: ''  }
  const editForm =  { name: '',  sex: -1, age: 0,  birth: '', addr: ''  }
  export default {
    data() {
      return {
        user: {},
        users: [],
        total: 0,
        page: 1,
        sels: [],  //
        listLoading: false,
        filters: {
          name: ''
        },
        addFormVisible:false,
        addForm: addForm,
        addLoading: false,
        editFormVisible: false,
        editForm: editForm,
        editFormRules: formRules,
        editLoading: false
      }
    },
    mounted() {
      this.getUsers()
      this.user = JSON.parse(sessionStorage.getItem('user')) 
    },
    methods: {
      formatSex(row) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知' 
      },
      getUsers(name) {
        let nameParam = name || ''
        let param = {
          page: this.page,
          name: nameParam
        }
        this.listLoading = true
        getUserList(param).then(res => {
          if(res.success) {
            this.listLoading = false            
            this.total = res.total
            this.users = res.users
          }
        }).catch((e) => {
          this.listLoading = false
        })
      },
      handleSelsChange(sels) {
        this.sels = sels
      },
      handleAdd() {
        this.addFormVisible = true
        this.addForm = addForm
      },
      handleCurrentChange(val) {
        this.page = val
        this.getUsers()
      },
      handleEdit(index,row) {
        this.editFormVisible = true
        this.editForm = row
      },
      handleDel(index,row) {
        this.$confirm('确认删除该项记录吗？','提示',{type: 'warning'})
          .then(() => {
            if(this.user.role !== '超级管理员') {
              this.$message({
                type: 'danger',
                message: '权限不足'
              })
              return
            }
            this.listLoading = true
            let param = {id: row.id}
            removeUser(param).then((res) => {
              if(res.success) {
                this.listLoading = false
                this.$message({
                  message: '删除成功',
                  type: 'success'
                })
                this.getUsers()
              }
            })
          }).catch((e) => {
            this.listLoading = false
            this.$message({
              message: e,
              type: 'danger'
            })
          })
      },
      batchRemove() {
        let ids = this.sels.map(item => item.id)
        this.$confirm('确认删除选中记录吗？','提示',{
          type: 'warning'
        }).then(() => {
          this.listLoading = true
          let param = {ids: ids}
          batchRemove(param).then((res) => {
            if(res.success) {
              this.listLoading = false
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              this.getUsers()              
            }
          })
        }).catch((e) => {
          this.listLoading = false
          this.$message({
              message: e,
              type: 'danger'
          })
        })
      },
      addSubmit() {
        //先验证rules，然后弹出confirm框确认，然后组建参数发起请求，最后getUser
        this.$refs.addForm.validate((valid) => {
          if(valid) {
            this.$confirm('确认提交吗？','提示',{
              type: 'warning'
            }).then(() => {
              this.addLoading= true
              let param = Object.assign({}, this.addForm)
              param.birth = formatDate(param.birth)
              console.log(param)
              addUser(param).then((data) => {
                if(data.success) {
                  this.addLoading = false
                  this.$message({
                    type: 'success',
                    message: '提交成功'
                  })
                  this.$refs.addForm.resetFields()
                  this.addFormVisible = false
                  this.getUsers()
                }
              })
            }).catch((e) => {
              this.addLoading = false
              this.$message({
                type: 'danger',
                message: e
              })
            })
          }
        })
      },
      editSubmit() {
        this.$refs.editForm.validate((valid) => {
          if(valid) {
            this.$confirm('确认提交吗？','提示',{
              type: 'warning'
            }).then(() => {
              this.editLoading = true
              let param = Object.assign({}, this.editForm)
              param.birth = formatDate(param.birth)
              console.log(param)
              editUser(param).then((data) => {
                if(data.success) {
                  this.editLoading = false
                  this.$message({
                    type: 'success',
                    message: '提交成功'
                  })
                  this.$refs.editForm.resetFields()
                  this.editFormVisible = false
                  this.getUsers()
                }
              })
            }).catch(e => {
              this.editLoading = false
              this.$message({
                type: 'danger',
                message: e
              })
            })
          }
        })
      }
  }
}
</script>
<style scoped>
  /*.toolbar {
    height: 56px;
    padding: 10px 10px 0;
    margin: 10px 0;
    background: ;
  }*/
</style>