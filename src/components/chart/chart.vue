<template >
  <el-row :span="24">
    <el-col :span="24" >
      <div id="chartBar"></div>
    </el-col>
  </el-row>
</template>
<script type="text/ecmascript-6" >
  import echarts from 'echarts'
  export default {
    data() {
      return {
        chartBar: {}
      }
    },
    mounted() {
      this.drawChartBar()
    },
    updated() {
      this.drawChartBar()
    },
    methods:{
      drawChartBar() {
        this.chartBar = echarts.init(document.getElementById('chartBar'))
        this.chartBar.setOption({
          title: {
            text: '月均访问量',
            subtext:'数据来源于网络'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true,readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
            // formatter: (params) => {
            //   let tar 
            //   if(params[1].value != '-') {
            //     tar = param[1]
            //   } else {
            //     tar = param[0]
            //   }
            //   return tar.name + '<br/>' + tar.seriesName + ':' + tar.value
            // }
          },
          xAxis: {
            type: 'category',
            splitLine: {show: true},
            data: function() {
              let list = []
              for (let i = 1; i< 13; i++) {
                list.push(i + '月')
              }
              return list
            }()
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '访问量',
            type: 'bar',
            data: function() {
              let list = []
              for(let i = 0; i< 12; i++) {
                list.push((Math.random()*100).toFixed(0))
              }
              console.log(list)
              return list
            }()
          }]
        })
      }
    }
  }
</script>
<style scoped>
  #chartBar {
    height: 400px;
  }
</style>