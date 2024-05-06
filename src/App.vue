<template>
  <div>
    <bodyHeader></bodyHeader>
    <bodyBackground></bodyBackground>
    <router-view/>
  </div>
</template>

<script>
  import bodyHeader from './components/bodyHeader.vue'
  import bodyBackground from './components/bodyBackground.vue'
  export default {
    name:'App',
    components:{
      bodyHeader,
      bodyBackground
    },
    mounted(){
      document.body.style.background='#0c1964'
    }
  }
</script>

<style>
  @import url('http://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
</style>