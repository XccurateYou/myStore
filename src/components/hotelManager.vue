<template >
    <div class='container'  ref="chart">
        
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'hotelManager',
    data() {  
    return {  
      chart: null,  
      salesData: [  
      123, 156, 102, 189, 95, 210, 134, 178,   
  201, 140, 192, 115, 89, 235, 168, 128,   
  180, 220, 109, 152, 98, 175, 205, 137 
      ],  
      xData:['00-01','01-02','02-03','03-04','04-05','05-06','06-07','07-08','08-09','09-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21','21-22','22-23','23-24']
    };  
  },  
  mounted() {  
    this.initChart();  
  },  
  methods: {  
    initChart() {  
      this.chart = echarts.init(this.$refs.chart);  
  
      let option = {  
        xAxis: {  
          type: 'category',  
        //   boundaryGap:false,
          data: this.xData,  
          axisLabel: {  

            textStyle: {  
              color: '#e4e4e4', // y轴标签颜色  
              fontSize: 12, // y轴标签字体大小  
              // 其他文本样式...  
            }  
          }  
        },  
        yAxis: {  
          type: 'value', 
          splitLine: {  
            lineStyle: {  
                color: 'gray', // 设置网格线的颜色  
                type: 'solid' // 设置网格线的类型  
            },  
        },  
          axisLabel: {  
            textStyle: {  
              color: '#e4e4e4', // y轴标签颜色  
              fontSize: 14, // y轴标签字体大小  
              // 其他文本样式...  
            }  
          }  
        },  
        series: [{  
          data: this.salesData,  
          type: 'bar',  
          label: {  
            show: true, // 开启显示标签  
            position: 'top', // 标签的位置，这里设置为柱形顶部  
            formatter: '{c}' ,// 格式化标签内容，{c} 代表原始数据值  
            textStyle:{
            color:'#e4e4e4',
            fontSize: 12,
            fontWeight: 'bold',
          }
          },  
          
        }],  
      };  
  
      this.chart.setOption(option);  
    },  
  },  
  watch: {  
    salesData: {  
      handler(newVal) {  
        this.chart.setOption({  
          series: [{  
            data: newVal,  
          }],  
        });  
      },  
      deep: true,  
    },  
  },  
}
</script>
<style scoped>
    .container {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
    background:url('background.jpg');
    border: solid 2px rgba(94, 137, 185, 0.589);
    overflow:hidden
    }
</style>