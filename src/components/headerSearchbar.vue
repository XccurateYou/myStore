<template>
  <div class="headerRight">
        <button>
            <i class='bx bxs-user-circle'></i>
        </button>
        <router-link :to="{path:'/login'}"><div>{{changeLoginState()}}</div></router-link>
        <button>
            <i class='bx bx-log-in'></i>
        </button>
  </div>
</template>

<script>
export default {
    name:'headerSearchbar',
    methods:{
        changeLoginState(){
            return this.$store.state.logintip
        }
    }
}
</script>

<style scoped>
* {
    text-decoration: none;
}

.headerRight {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headerRight .bx.bxs-user-circle {
    font-size: 40px;
    color: #e4e4e4;
}

.headerRight button .bx.bx-log-in {
    font-size: 24px;
    color: #e4e4e4;
}

.headerRight button {
    background: transparent;
    border:none;
    outline: none;
}

.headerRight div {
    color: #e4e4e4;
    transition:  .5s;
}

.headerRight div:hover {
    font-size: 20px;
}
</style>