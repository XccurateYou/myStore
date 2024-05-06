<template >
    <div class="form container">
        <form action="">
            <div class="set">
                <label>Shared_Buffer set to:</label>
                <input  type="number" v-model="$store.state.ini_shared_buffers" required >
            </div>

            <div class="set">
                <label for="max_connections">Max_Connections set to:</label>
                <input type="number" v-model="$store.state.ini_max_connections" required>
            </div>

            <div class="set">
                <label for="timeout">TimeOut set to:</label>
                <input type="number"  v-model="$store.state.ini_statement_timeout" required>                
            </div>

            <div class="set icon">
                <i class='bx bx-refresh' @click="changeSetitng()"></i>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'setSetting',
    methods:{

        changeSetitng(){
            axios({
                method:'POST',
                url:'http://10.129.152.215:8080/systemManagement/updateConfig',
                data:{
                    shared_buffers:this.$store.state.ini_shared_buffers,
                    max_connections:this.$store.state.ini_max_connections,
                    statement_timeout:this.$store.state.ini_statement_timeout,
                },
                headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
                }
            }).then(response => {
                this.$store.max_connections=response.data.data.config[0].setting;
                this.$store.shared_buffers=response.data.data.config[1].setting;
                this.$store.statement_timeout=response.data.data.config[2].setting
                }
                )
        },

    }
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

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .set {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 30%;
        border-radius: 20px;
        background-color: transparent;
        backdrop-filter: blur(14px);
    }

    .set.icon {
        background-color: transparent;
        backdrop-filter: blur(0px);
        
    }
    .set.icon .bx{
        color: #B6DBF2;
        font-size: 64px;
        transition: .5s;
    }

    .set.icon .bx:hover {
        cursor: pointer;
        font-size: 96px;
    }

    .set label {
        height: 48px;
        border-radius: 4px;
        background-color: #30588C;
        width: 48%;
        color:#B6DBF2;
        font-size:24px;
        line-height: 48px;
        text-align: center;
    }

    .set input {
        width: 55%;
        height: 48px;
        border: none;
        outline: none;
        border-radius: 12px;
        font-size: 24px;
        text-align: center;
        background-color: #acb4bb91;
        color:#B6DBF2 ;
    }

    input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:  #c8dce9;
    }
</style>