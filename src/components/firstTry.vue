<template>
    <div class="container">
        <h1>hello</h1>
    </div>
</template>

<script>
    export default {
        name:'firstTry'
    }
</script>

<style>
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
</style>