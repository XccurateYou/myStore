<template>
    <header class="header">
        <headerNavbar></headerNavbar>
        <headerSearchbar></headerSearchbar>
    </header>
</template>

<script>
    import headerNavbar from './headerNavbar.vue'
    import headerSearchbar from './headerSearchbar.vue'
    export default {
        name:'bodyHeader',
        components:{
            headerNavbar,
            headerSearchbar
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 25px 12.5%;
        background: yellowgreen;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background-color: transparent;
    }
</style>