<template >
  <el-row :span="24">
    <el-col :span="24" >
      <div id="chartBar"></div>
    </el-col>
    <el-col :span="24">
      <div id="chartPie"></div>
    </el-col>
  </el-row>
</template>
<script type="text/ecmascript-6" >
  import echarts from 'echarts'
  export default {
    data() {
      return {
        chartBar: {},
        chartPie: {}
      }
    },
    mounted() {
      this.drawChartBar()
      this.drawChartPie()
    },
    updated() {
      this.drawChartBar()
      this.drawChartPie()
    },
    methods:{
      drawChartBar() {
        this.chartBar = echarts.init(document.getElementById('chartBar'))
        this.chartBar.setOption({
          title: {
            text: '月均访问量',
            subtext:'数据均为虚构'
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
      },
      drawChartPie() {
        this.chartPie = echarts.init(document.getElementById("chartPie"))
        this.chartPie.setOption({
          title: {text: '', subtext: ''},
          toolbox: {
            show: true, 
            feature: {
              mark: {show: true},
              dataView: {show: true},
              restore: {show: true},
              magicType: {
                show: true,
                type: ['pie','funnel']
              },
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/> {b}:{c} ({d}%)"
          },
          legend: {
            x:'center',
            y: 'bottom',
            data: ['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
          },
          calculate: true,
          series: [{
            name: '',
            type: 'pie',
            radius: [30,110],
            center: ['75%', 200],
            roseType: 'area',
            x: '50%', //for funnel
            max: 40, //for funnel
            sort: 'ascending', //for funnel
            itemSelf: {
              normal: {label: {show:false},labelLine: {show: false}},
              emphasis: {label: {show: true},labelLine: {show: true}}
            },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
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
  #chartPie {
    height: 400px;
  }
</style>