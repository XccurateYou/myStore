<template>
    <div class='container'>
        <div class="left">
            <div class="room">
                <div class="roomicon">
                    <i class='bx bx-home'></i>
                </div>
                <div class="roomid">
                    1
                </div>
            </div>
            <div class="cost">
                <div class="costicon">
                    <i class='bx bx-money-withdraw'></i>
                </div>
                <div class="costnum">
                    120.0
                </div>
            </div>
        </div>
        <div class="right">
            <div class="config">
                <div class="temp"><i class='bx bxs-thermometer' ></i>24℃</div>
                <div class="speed"><i class='bx bx-wind'></i> 中风</div>
                <div class="status"><i class='bx bx-radio-circle-marked'></i> 正在送风</div>
            </div>
            <div class="control">
                <div class="power"><div class="outer" @click="powerState()"    :class="{'active':$store.state.powerActive}"><div class="round"></div></div></div>
                <div class="speedcontrol"><i class='bx bxl-tailwind-css'></i>风速</div>
            </div>
            <div class="tempcontrol">
                <i class='bx bx-minus'></i>温度<i class='bx bx-plus' ></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"customerLayout",
    methods:{
        powerState(){
            this.$store.dispatch('powerState')
        }
    }
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
}

    .left {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35%;
        height: 546px;
        border-right: solid 1px rgba(94, 137, 185, 0.589);
        backdrop-filter: blur(14px);
    }

    .room{
        display: flex;
        height: 300px;
        justify-content: space-evenly;
        font-size: 256px;
        text-align: center;
        border-bottom:  solid 1px rgba(94, 137, 185, 0.589);
        
    }

    .roomicon{
        line-height: 300px;

        
    }
    .roomid {
        color: #e4e4e4;
        text-align: center;
        line-height: 300px;
    }
    .cost {
        display: flex;
        height: 200px;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        font-size: 128px;
        transform: translateY(-25px);
    }

    .costicon {
        
        color:rgb(81,131,66);
    }

    .costnum{
        color: #e4e4e4;
    }
    .right{
        border-radius: 10px;
        width: 65%;
        color: #e4e4e4;
        display: flex;
        flex-wrap: wrap;
        backdrop-filter: blur(14px);
    }

    .config {
        width: 100%;
        height: 96px;
        display: flex;
        font-size: 64px;
    }

    .temp{
        border-right:solid 1px rgba(94, 137, 185, 0.589);
        border-bottom:solid 1px rgba(94, 137, 185, 0.589);
        flex: 1;
    }


    .speed{
        border-right:solid 1px rgba(94, 137, 185, 0.589);
        border-bottom:solid 1px rgba(94, 137, 185, 0.589);
        flex: 1;
    }

    .status {
        border-bottom:solid 1px rgba(94, 137, 185, 0.589);
        flex: 1.5;
    }

    .control{
        width: 100%;
        height: 204px;
        display: flex;
    }

    .tempcontrol{
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 64px;
    }

    .power{
        position: relative;
        width: 35%;
        border-right:solid 1px rgba(94, 137, 185, 0.589);
        border-bottom:solid 1px rgba(94, 137, 185, 0.589);
    }

    .speedcontrol{
        width: 65%;
        text-align: center;
        line-height: 200px;
        font-size: 64px;
        display: flex;
        justify-content: center;
        border-bottom:solid 1px rgba(94, 137, 185, 0.589);
    }

    .bxs-thermometer{
        color: rgb(190, 99, 99);
    }

    .bx-wind{
        color: rgb(188,203,210);
    }

    .bx-home{
        color:rgba(115, 211, 214, 0.548);
    }

    .bxl-tailwind-css{
        text-align: center;
        line-height: 200px;
        font-size: 128px;
    }

    .bx-radio-circle-marked{
        color: #97afbba1;
    }

    .outer{
        position: absolute;
        margin:auto;
        top:50%;
        left: 50%;
        width: 50%;
        height: 80px;
        transform: translate(-50%,-50%);
        background-color:transparent;
        transition: .5s;
        border-radius:40px;
        border: 2px solid white;
    }

    .round{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-120%,-50%);
        height: 60px;
        width: 60px;
        border-radius: 30px;
        background-color:white;
        transition: .5s;
    }

    .outer.active {
        background-color: rgb(67, 165, 67);
    }

    .outer.active .round {
        transform: translate(22%,-50%);
    }
</style>