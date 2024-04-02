<template>
  <div>
    <bodyHeader></bodyHeader>
    <bodyBackground></bodyBackground>
    <bodyContainer></bodyContainer>
  </div>
</template>

<script>
  import bodyContainer from './components/bodyContainer.vue'
  import bodyHeader from './components/bodyHeader.vue'
  import bodyBackground from './components/bodyBackground.vue'
  export default {
    name:'App',
    components:{
      bodyHeader,
      bodyContainer,
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