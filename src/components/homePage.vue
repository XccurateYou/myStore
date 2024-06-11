<template>
    <div class="content">
        <h2 class="logo"><i class='bx bxl-postgresql'></i>
            E-Business DataBase</h2>
        <div class="text-sci">
            <h2>Welcome!<br>
                <span>To Our DataBase System.</span>
            </h2>
            <p>
                This is a simple database system demo.You can login and do some easy database oprations like
                query for detailed customers' or nations' information ,import or export data to your local computer
                as .txt files.
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'homePage',

}
</script>

<style scoped>
.container {
    /* 相对于body元素的absolute属性 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background: url('background.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 80px;
    color: #24697e;
    display: flex;
    justify-content: center;
    align-items: center;
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