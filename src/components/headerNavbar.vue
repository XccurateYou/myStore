<template>
  <nav class="navbar">
    <router-link :to="{path:'/databaseSetting'}"><a href="#" class="single" @click="getInitialSetting()">Database Setting</a></router-link>
    <div class="dropdown">
      <a href="#" class="mulchoose dropbtn" @click.prevent="">FileOperation<i class='bx bx-caret-down'></i></a>
      <div class="dropdown-content">
          <router-link :to="{path:'/downloadFiles'}">Download</router-link>
          <router-link :to="{path:'/uploadFile'}">Upload</router-link>
      </div>
    </div>
    <router-link :to="{path:'/queryService'}"><a href="#" class="single" @click="getCustomerAndNation">QueryService</a></router-link>
    <router-link :to="{path:'/test'}"><a href="#" class="single">SqlAnalyze</a></router-link>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
    name:'headerNavbar',
    methods:{
      getInitialSetting(){
        this.$store.dispatch('getinitialsetting')
      },
      getCustomerAndNation(){

        const request1 = axios({
          method:'POST',
          url:'http://10.129.152.215:8080/initQuery/queryNationName',
          headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
                },
        })

        const request2 = axios({
          method:'POST',
          url:'http://10.129.152.215:8080/initQuery/queryNationName',
          headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
                },
        })

        axios.all([request1,request2])
        .then(responses =>{
          this.$store.state.customer_list = responses[0].data.data;
          this.$store.state.nation_list = responses[1].data.data
        })
      }
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

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(3,31,66);
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transition: .125s;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 8px;
  margin: auto;
  text-decoration: none;
  display: block;
  text-align: left;
}




.navbar a {
    position: relative;
    font-size: 16px;
    color: #e4e4e4;
    text-decoration: none;
    font-weight: 500;
    margin-right: 30px;
}

.navbar .single::after {
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


.navbar .single:hover::after {
    transform: translateY(0);
    opacity: 1;
}
</style>