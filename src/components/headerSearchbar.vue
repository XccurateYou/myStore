<template>
  <div class="headerRight">
    <form action="#" class="search-bar">
            <input type="text" placeholder="Search...">
            <button type="submit">
                <i class='bx bx-search'></i>
            </button>
        </form>
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

.search-bar {
    width: 250px;
    height: 45px;
    border: 2px solid #e4e4e4;
    background: transparent;
    border-radius: 6px;
    display: flex;
    align-items: center;
}

.search-bar input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    color: #e4e4e4;
    padding-left: 10px;
}

.search-bar input::placeholder {
    color: #e4e4e4;
}

.search-bar>button {
    width: 40px;
    height: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
}

.search-bar button i {
    font-size: 22px;
    color: #e4e4e4;
}
</style>