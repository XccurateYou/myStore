<template >
    <div class='container'>
        <div class="header">
            <div class="headeritem">
                <label for="nationSelect">国家</label>
                <input id="nationSelect" type="text" list="$store.state.nation_list" v-model='nation_select'>
                <datalist id="$store.state.nation_list">
                    <option v-for='(nation,index) in $store.state.nation_list' :key='index'>{{nation}}</option>
                </datalist>
            </div>

            <div class="headeritem">
                <label for="customerSelect">客户</label>
                <input id="customerSelect" type="text" list="$store.state.customer_list" v-model='customer_select'>
                <datalist id="$store.state.customer_list"> 
                    <option v-for='(customer,index) in $store.state.customer_list' :key='index'>{{customer}}</option>
                </datalist>
            </div>
            
            <div class="headeritem" @click="sendQuery"><button>查询</button></div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:'queryService',
    methods: {
        sendQuery(){
            axios({
                method:'POST',
                url:'',
                headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
                },
                data:{
                    nation:this.$store.state.nation_select,
                    customer:this.$store.state.customer_select,
                    page:this.$store.state.page_number,
                    size:this.$store.state.size
                }
            }).then(response => {
                this.$store.state.page_number+=1,
                console.log(response.data.data)
            })
        }
    },
}
</script>


<style scoped>
    .container {
    /* 相对于body元素的absolute属性 */
    position: absolute;
    justify-content: space-around;
    align-items:center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background-color:skyblue; 
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
    background: url('setting.jpg') no-repeat;
    }

    .header {
        transform:translateX(12.5%);
        width:75%;
        margin-top:10px;
        display:flex;
        justify-content:space-around
    }

    label {
        margin-right:10px;
        color:#e4e4e4
    };

    input{
        outline:none;
        border: none
    }

    button {
        width:100px;
        color:gray
    }
</style>