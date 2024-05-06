<template>
  <div class="logreg-box" :class="{'active':$store.state.isActive}">
    <logregbox-form-login/>
    <logregbox-form-register/>
  </div>
</template>

<script>
import logregboxFormLogin from './logregboxFormLogin.vue';
import logregboxFormRegister from './logregboxFormRegister.vue';
export default {
    name:'containerLogregbox',
    components:{
      logregboxFormLogin,
      logregboxFormRegister
    }
}
</script>

<style scoped>
  .container .logreg-box {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    /* clac在运算符前后需要留有空格 */
    width: calc(100% - 58%);
    height: 100%;
}

</style>