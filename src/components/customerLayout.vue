<template>
    <div class='container'>
        <div class="left">
            <div class="room">
                <div class="roomicon">
                    <i class='bx bx-building-house' ></i>
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
                <div class="temp">24℃</div>
                <div class="speed">风速 中风</div>
                <div class="status">状态 正在送风</div>
            </div>
            
        </div>
    </div>
</template>


<script>
export default {
    name:"customerLayout"
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
    background:rgba(155, 173, 177, 0.788);
    border: solid 1px white;
}

    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35%;
        height: 550px;
        border-right: solid 1px white;
    }

    .room{
        display: flex;
        height: 300px;
        justify-content: space-evenly;
        font-size: 256px;
        text-align: center;
        border-bottom:  solid 1px white;
        
    }

    .roomicon{
        line-height: 300px;

        
    }
    .roomid {
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
        
        color: #98fb98;
    }

    .costnum{
        color: #e4e4e4;
    }
    .right{
        width: 65%;
    }

    .config {
        display: flex;
        justify-content: space-evenly;
        font-size: 64px;
        flex-wrap:wrap
    }

    .temp {
        text-align: center;
        font-size: 64px;
        width: 100%;
    }
</style>