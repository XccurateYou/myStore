<template>
  <nav class="navbar">
    <a href="#">Import</a>
    <a href="#">Export</a>
    <a href="#">QueryCustomer</a>
    <a href="#">QueryNation</a>
    <a href="#">SqlAnalyze</a>
  </nav>
</template>

<script>
export default {
    name:'headerNavbar'
}
</script>

<style scoped>
.navbar a {
    position: relative;
    font-size: 16px;
    color: #e4e4e4;
    text-decoration: none;
    font-weight: 500;
    margin-right: 30px;
}

.navbar a::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #e4e4e4;
    border-radius: 5px;
    transform: translateY(10px);
    opacity: 0;
    transition: .5s;
}


.navbar a:hover::after {
    transform: translateY(0);
    opacity: 1;
}
</style>