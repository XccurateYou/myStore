<template>
        <div class="content">
            <h2 class="logo"><i class='bx bxs-hotel'></i>
                Botel Hotel</h2>
            <div class="text-sci">
                <h2>Welcome!<br>
                    <span>To Our Hotel System.</span>
                </h2>
                <p>
                    This is a simple Hotel system demo.You can login and act as customer,acadministrator,hotelmanager and hotelforward.
                </p>
            </div>
        </div>
</template>

<script>
export default {
    name:'containerContent'
}
</script>

<style scoped>
.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 58%;
    height: 100%;
    background-color: transparent;
    padding: 80px;
    color: #24697e;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.logo {
    font-size: 30px;
}

.text-sci h2 {
    font-size: 40px;
    line-height: 1;
}

.text-sci h2 span {
    font-size: 16px;
    margin: 20px 0;
}

.text-sci p {
    font-size: 16px;
    margin: 20px 0;
}

h2 {
    font-size: 40px;
}

h2 span {
    font-size: 25px;
}
</style>