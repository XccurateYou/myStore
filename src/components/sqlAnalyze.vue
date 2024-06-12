<template>
    <div class="container">

        <form>
            <label for="dateStart">订单开始日期:</label>
            <input type="date" id="dateStart" name="dateStart" v-model="start" placeholder="订单开始日期">
            <label for="dateEnd">订单截止日期:</label>
            <input type="date" id="dateEnd" name="dateEnd" v-model="end" placeholder="订单截止日期">
            <button @click.prevent="getAnalyze">查询</button>
            <button @click.prevent="getAnalyze_1">示例查询</button>
            <button @click.prevent="getAnalyze_2">TPC-C查询1</button>
            <button @click.prevent="getAnalyze_3">TPC-C查询2</button>
        </form>


        <div ref="chart" style="width: 900px; height: 450px;margin-top: 90px;" v-if="ifShowCharts"></div>

        <div v-if="ifShow" class="analyzeShow">
            <div v-for="(item, index) in analyze_list" :key="index" style="color: #645959;;white-space: pre">{{
                item.QUERY_PLAN.slice(0, -2) }}</div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';
export default {
    name: 'sqlAnalyze',
    data() {
        return {
            start: '',
            end: '',
            display_list: [],
            analyze_list: [],
            ifShow: false,
            chart: null, // ECharts 实例  
            ifShowCharts: false
        }
    },
    methods: {
        getAnalyze() {
            axios({
                method: 'POST',
                url: 'http://10.129.152.215:8080/tpcH/selectOrderPriority',
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'zxc'
                },
                params: {
                    beginDate: this.start,
                    endDate: this.end
                }
            }).then(response => {
                this.display_list = []
                this.analyze_list = []
                response.data.data.data.forEach(ele => {
                    let item = {
                        value: ele.order_count,
                        name: ele.o_orderpriority
                    }
                    this.display_list.push(item)
                })
                this.display_list.forEach(ele => ele.name = ele.name.trim())
                response.data.data.execution.forEach(item => {
                    // 移除字符串两端的数组括号  
                    const queryPlanString = item;
                    const trimmedString = queryPlanString.slice(1, -1);

                    // 使用正则表达式匹配每个QUERY PLAN对象  
                    const regex = /{"QUERY PLAN":"([^"]+)"}/g;
                    let matches = trimmedString.match(regex);

                    // 初始化一个空数组来存储解析后的JSON对象  

                    let idCount = 0
                    // 遍历匹配项，并解析每个字符串为JSON对象（虽然这里实际上并没有JSON解析，因为内容是字符串字面量）  
                    if (matches) {
                        matches.forEach(match => {
                            // 假设每个match都是完整的{"QUERY PLAN": "..."}形式，我们可以直接将其中的查询计划内容提取出来  
                            const planContent = match.replace(/^{"QUERY PLAN":"|"$/g, ''); // 移除前后的JSON结构部分  
                            // 这里我们不进行真正的JSON解析，因为planContent已经是查询计划的纯文本内容  
                            this.analyze_list.push({ QUERY_PLAN: planContent, id: idCount }); // 使用QUERY_PLAN作为键名，以避免与JSON.parse混淆  
                            idCount++
                        });
                    }
                })
                this.ifShow = true;
                if (this.display_list.length) {
                    this.ifShowCharts = true
                    this.$nextTick(() => {
                        this.initChart()
                    })
                    console.log(this.display_list);
                } else {
                    this.ifShowCharts = false
                }
            })
        },


        getAnalyze_1() {
            axios({
                method: 'POST',
                url: 'http://10.129.152.215:8080/tpcH/selectCusDistribution',
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'zxc'
                },
                params: {
                    comment1: 'special',
                    comment2: 'request'
                }
            }).then(response => {
                this.ifShowCharts = false
                this.analyze_list = []
                response.data.data.data.execution.forEach(item => {
                    // 移除字符串两端的数组括号  
                    const queryPlanString = item;
                    const trimmedString = queryPlanString.slice(1, -1);

                    // 使用正则表达式匹配每个QUERY PLAN对象  
                    const regex = /{"QUERY PLAN":"([^"]+)"}/g;
                    let matches = trimmedString.match(regex);

                    // 初始化一个空数组来存储解析后的JSON对象  

                    let idCount = 0
                    // 遍历匹配项，并解析每个字符串为JSON对象（虽然这里实际上并没有JSON解析，因为内容是字符串字面量）  
                    if (matches) {
                        matches.forEach(match => {
                            // 假设每个match都是完整的{"QUERY PLAN": "..."}形式，我们可以直接将其中的查询计划内容提取出来  
                            const planContent = match.replace(/^{"QUERY PLAN":"|"$/g, ''); // 移除前后的JSON结构部分  
                            // 这里我们不进行真正的JSON解析，因为planContent已经是查询计划的纯文本内容  
                            this.analyze_list.push({ QUERY_PLAN: planContent, id: idCount }); // 使用QUERY_PLAN作为键名，以避免与JSON.parse混淆  
                            idCount++
                        });
                    }
                })
                this.ifShow = true;
            })
        },


        getAnalyze_2() {
            axios({
                method: 'POST',
                url: 'http://10.129.152.215:8080/benchmark/run',
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'zxc'
                },
                params: {
                    transactionType: 'order'
                }
            }).then(response => {
                this.ifShowCharts = false
                this.analyze_list = []
                response.data.data.execution.forEach(item => {
                    // 移除字符串两端的数组括号  
                    const queryPlanString = item;
                    const trimmedString = queryPlanString.slice(1, -1);

                    // 使用正则表达式匹配每个QUERY PLAN对象  
                    const regex = /{"QUERY PLAN":"([^"]+)"}/g;
                    let matches = trimmedString.match(regex);

                    // 初始化一个空数组来存储解析后的JSON对象  
                    let idCount = 0

                    // 遍历匹配项，并解析每个字符串为JSON对象（虽然这里实际上并没有JSON解析，因为内容是字符串字面量）  
                    if (matches) {
                        matches.forEach(match => {
                            // 假设每个match都是完整的{"QUERY PLAN": "..."}形式，我们可以直接将其中的查询计划内容提取出来  
                            const planContent = match.replace(/^{"QUERY PLAN":"|"$/g, ''); // 移除前后的JSON结构部分  
                            // 这里我们不进行真正的JSON解析，因为planContent已经是查询计划的纯文本内容  
                            this.analyze_list.push({ QUERY_PLAN: planContent, id: idCount }); // 使用QUERY_PLAN作为键名，以避免与JSON.parse混淆  
                            idCount++
                        });
                    }
                })
                this.ifShow = true;
            })
        },
        getAnalyze_3() {
            axios({
                method: 'POST',
                url: 'http://10.129.152.215:8080/benchmark/run?',
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'zxc'
                },
                params: {
                    transactionType: 'payment'
                }
            }).then(response => {
                this.ifShowCharts = false
                this.analyze_list = []
                response.data.data.execution.forEach(item => {
                    // 移除字符串两端的数组括号  
                    const queryPlanString = item;
                    const trimmedString = queryPlanString.slice(1, -1);

                    // 使用正则表达式匹配每个QUERY PLAN对象  
                    const regex = /{"QUERY PLAN":"([^"]+)"}/g;
                    let matches = trimmedString.match(regex);

                    // 初始化一个空数组来存储解析后的JSON对象  

                    let idCount = 0
                    // 遍历匹配项，并解析每个字符串为JSON对象（虽然这里实际上并没有JSON解析，因为内容是字符串字面量）  
                    if (matches) {
                        matches.forEach(match => {
                            // 假设每个match都是完整的{"QUERY PLAN": "..."}形式，我们可以直接将其中的查询计划内容提取出来  
                            const planContent = match.replace(/^{"QUERY PLAN":"|"$/g, ''); // 移除前后的JSON结构部分  
                            // 这里我们不进行真正的JSON解析，因为planContent已经是查询计划的纯文本内容  
                            this.analyze_list.push({ QUERY_PLAN: planContent, id: idCount }); // 使用QUERY_PLAN作为键名，以避免与JSON.parse混淆  
                            idCount++
                        });
                    }
                })
                this.ifShow = true;
            })
        },




        initChart() {
            // 基于准备好的dom，初始化echarts实例  
            this.chart = echarts.init(this.$refs.chart);

            // 指定图表的配置项和数据  
            const option = {
                title: {
                    text: 'Order Count by Order Priority',
                    left: 'center',
                    textStyle: {
                        color: "white"
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    textStyle: {
                        color: "white"
                    }
                },
                series: [
                    {
                        name: 'Order Count',
                        type: 'pie',
                        radius: '60%',
                        data: this.display_list,
                        label: {
                            show: true,
                            formatter: '{b}: {c} ({d}%)' // 格式化标签内容 
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。  
            this.chart.setOption(option);
        }
    },
}
</script>
<style scoped>
.container {
    /* 相对于body元素的absolute属性 */
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 700px;
    background-color: skyblue;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
    background: url('setting.jpg') no-repeat;
    overflow-y: auto;
}

.container::-webkit-scrollbar {
    display: none;
}

form {
    color: #e4e4e4;
    width: 75%;
    display: flex;
    height: 20px;
    margin: 10px 10px;
    margin-top: 40px;
    justify-content: center;
}

label {
    margin-right: 10px
}

.analyzeShow {
    width: 90%;
    height: auto;
    background-color: transparent;
    align-self: flex-start;
    color: #645959;
}

.analyzeShow div:nth-child(2n+1) {
    background-color: rgb(236, 239, 247);
}

.analyzeShow div:nth-child(2n) {
    background-color: rgb(207, 232, 253);
}

input {
    margin-right: 50px;
    font-size: 16px;
    border: none;
    outline: none;

    font-weight: 500;
}

button {
    width: 100px;
    background: #67a7d1;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    color: #e4e4e4;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    text-align: center;
    line-height: 20px;
    margin-right: 20px;
}
</style>