<template>
  <section  class="uploadContainer">
    <div>
      <input type="file" ref="excel-upload-input" class="excel-upload-input" style="{background:red;}" accept=".xlsx, .xls" @change="handleClick">
      <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
        <span>Drop excel file here or</span>
        <el-button :loading="loading" type="primary" class="uploadBtn" @click="handleUpload" >Browse</el-button>
      </div>
    </div>
    <el-table :data="excelData.results" class="showTable" border highlight-current-row>
      <el-table-column v-for="item in excelData.header" :key="item" :prop="item" :label="item" />
    </el-table>
  </section>
</template>
<script type="text/ecmascript-6" >
  import XLSX from 'xlsx'
  export default {
    data() {
      return {
        loading: false,
        excelData: {
          header: null,
          results: null
        }
      }
    },
    methods: {
      handleDrop(e) {
        console.log('handleDrop')
        e.stopPropagation()
        e.preventDefault()
        if(this.loading) return
        const files = e.dataTransfer.files
        if(files.length !== 1) {
          this.$message({type: 'error',message: 'Only Support one file'})
          return
        }
        const rawFile = files[0]
        if(!this.isExcel(rawFile)) {
          this.$message({type:'error', message: 'Only support upload .xlsx .xls suffix file'})
          return false
        }
        this.upload(rawFile)
      },
      handleUpload() {
        this.$refs['excel-upload-input'].click()
      },
      handleDragover(e) {
        e.stopPropagation()
        e.preventDefault()
        console.log('dragover')
        e.dataTransfer.dropEffect = 'copy'
      },
      handleClick(e) {
        const files = e.target.files
        const rawFile = files[0]
        if(!rawFile) return 
        this.upload(rawFile)
      },
      beforeUpload(rawFile) {
        const isLt1M = (rawFile.size / 1024 / 1024) < 1
        if(isLt1M) {
          return true
        }
        return false
      },
      upload(rawFile) {
        this.$refs['excel-upload-input'].value = null
        console.log('upload begin')
        const before = this.beforeUpload(rawFile)
        if(before) {
          this.readData(rawFile)
        }
      },
      readData(rawFile) {
        this.loading = true
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = e => {
            const data = e.target.result
            const workbook = XLSX.read(data, {type: 'array'})
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const header = this.getHeaderRow(worksheet)
            const results = XLSX.utils.sheet_to_json(worksheet)
            this.generateData({header, results})
            this.loading = false
            resolve()
          }
          reader.readAsArrayBuffer(rawFile)
        })
      },
      getHeaderRow(sheet) {
        const headers = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C //count
        const R = range.s.r
        for(C = range.s.c; C <=range.e.c; ++C) { //walk every column in the range 
          const cell = sheet[XLSX.utils.encode_cell({c: C, r: R})]
          //find the cell in the first row
          let hdr = 'UNKNOWN' + C
          if(cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          headers.push(hdr)
        }
        return headers
      },
      isExcel(file) {
        return /\.(xlsx|xls)/.test(file.name)
      },
      generateData({header, results}) {
        this.excelData.header = header
        this.excelData.results = results
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'styles/mixin';

  .uploadContainer {
    padding: 10px 0;
  }
 .excel-upload-input {
    display: none;
  }
  .drop {
    width: 100%;
    height: 200px;
    border: 2px dotted #999;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #999;
    line-height: 200px;
    text-align: center;
    overflow:hidden;
    .uploadBtn {
      margin-left: 10px;
    }
  }
  .showTable {
    margin-top: 16px;
  }
</style>