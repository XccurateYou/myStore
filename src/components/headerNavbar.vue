<template>
  <nav class="navbar">
    <router-link to="/customerLayout"><div>Customer</div></router-link>
    <router-link to="/hotelForward"><div>HotelForward</div></router-link>
    <router-link to="/acMonitor"><div>AcAdministrator</div></router-link>
    <router-link to="/hotelManager"><div>HotelManager</div></router-link>
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

div {
  display: inline-block;
} 

.navbar div {
    position: relative;
    font-size: 16px;
    color: #e4e4e4;
    text-decoration: none;
    font-weight: 500;
    margin-right: 30px;
}

.navbar div::after {
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


.navbar div:hover::after {
    transform: translateY(0);
    opacity: 1;
}
</style>