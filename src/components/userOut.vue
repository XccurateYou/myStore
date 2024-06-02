<template >
    <div class='container2'>
        <div class="form-box login">
                <form action="">
                    <h2>Check Out</h2>

                    <div class="input-box">
                        <span class="icon">
                            <i class='bx bx-id-card'></i>
                        </span>
                        <!-- required属性表示必须要这个input框的value -->
                        <input type="text" required v-model="$store.state.custoemrID">
                        <label>CustomerID</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <i class='bx bx-home' ></i>
                        </span>
                        <!-- required属性表示必须要这个input框的value -->
                        <input type="password" required v-model="$store.state.roomID">
                        <label>RoomID</label>
                    </div>

                    <button type="submit" class="btn" @click.prevent="sendAxiosCheckOut">
                        Check Out
                    </button>

                </form>
            </div>
    </div>
</template>
<script>
export default {
    name:'userOut',
    methods:{
        sendAxiosCheckOut(){
            this.$store.dispatch('sendAxiosCheckOut')
        }
    }
}
</script>
<style scoped>
    .right .container2{
        width:100%;
        height:546px;
        transform:translateY(-100%);

        transition:.5s ease;
        opacity:1;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .right.active .container2{
        width:100%;
        height:546px;
        transform:translateY(100%);
        opacity:0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    } 

    .form-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: transparent;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #e4e4e4;
}




.form-box h2 {
    font-size: 32px;
    text-align: center;
}

.form-box .input-box {
    position: relative;
    width: 340px;
    height: 50px;
    border-bottom: 2px solid #e4e4e4;
    margin: 30px 0;
}

.input-box input {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #e4e4e4;
    font-weight: 500;
    padding-right: 28px;
}

.input-box label {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    /* 鼠标点击可以穿透该元素或者说是无视该元素 */
    pointer-events: none;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: .5s ease;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;

}

.input-box .icon {
    position: absolute;
    right: 0;
    top: 13px;
    font-size: 19px;
}

.btn {
    width: 100%;
    height: 45px;
    background: #67a7d1;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    color: #e4e4e4;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}



</style>