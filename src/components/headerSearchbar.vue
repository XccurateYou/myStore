<template>
  <div class="headerRight">
        <button>
            <i class='bx bxs-user-circle'></i>
        </button>
        <button>
            <router-link :to="{path:'/login'}"><i class='bx bx-log-in'></i></router-link>
        </button>
  </div>
</template>

<script>
export default {
    name:'headerSearchbar'
}
</script>

<style scoped>
.headerRight {
    width: 340px;
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


</style>