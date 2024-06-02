<template >
    <div class='container'>
        <div class="left">
            <div class="userin" @click="setUserIn()">
                <i class='bx bxs-user-plus' ></i>
            </div>
            <div class="userout" @click="setUserOut()">
                <i class='bx bx-user-minus' ></i>
            </div>
        </div>
        <div class="right" :class="{'active':$store.state.isActive}">
            <userIn></userIn>
            <userOut></userOut>
        </div>
    </div>
</template>
<script>
import userIn from './userIn.vue';
import userOut from './userOut.vue';
export default {
    name:"hotelForward",
    methods:{
        setUserIn(){
            this.$store.dispatch('userIn')
        },
        setUserOut(){
            this.$store.dispatch('userOut')
        }
    },
    components:{
        userIn,
        userOut
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
    overflow:hidden
}
    .left{
        display: flex;
        flex-wrap: wrap;
        width: 35%;
        height: 546px;
        font-size: 128px;
        color:  rgba(94, 137, 185, 0.589);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-right:solid 2px rgba(94, 137, 185, 0.589); 
    }

    .userin{
        width: 100%;
        height: 274px;
        text-align: center;
        line-height: 273px;
        border-bottom: solid 2px rgba(94, 137, 185, 0.589); 
        backdrop-filter: blur(14px);
        border-top-left-radius: 10px;
    }

    .userout{
        width: 100%;
        height: 273px;
        text-align: center;
        line-height: 275px;
        backdrop-filter: blur(14px);
        border-bottom-left-radius: 10px;
    }

    .right{
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
    }
</style>