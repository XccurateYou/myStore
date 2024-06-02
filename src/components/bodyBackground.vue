<template>
      <div class="background"></div>
</template>

<script>
export default {
    name:'bodyBackground'
}
</script>

<style scoped>
.background {
    width: 100%;
    height: 100vh;
    background: url('background.jpg') no-repeat;
    background-position: center;
    filter: blur(10px);
}
</style>