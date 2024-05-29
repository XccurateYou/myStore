<template>
  <nav class="navbar">
    <a href="">Customer</a>
    <a href="">Forward</a>
    <a href="">Manager</a>
  </nav>
</template>

<script>
// import axios from 'axios'
export default {
    name:'headerNavbar',
    methods:{
      
    }
}
</script>

<style scoped>
.mulchoose:hover .bx-caret-down{
  opacity: 0;
}

.dropdown-content:hover .bx-caret-down{
  opacity: 0;
}

.bx-caret-down {
  opacity: 1;
  font-size: 16px;
  color: #e4e4e4;
  transition: .5s;
}

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