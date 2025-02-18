<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <header>
    <div>
     
    </div>
    <nav>
      <img src="./assets/bkogo.png" class="bk" alt="logo" width="230" height="230"/>
    <ul>
    
        <li><Router-link to="/">Home</Router-link></li>
        <li><Router-link to="/person">Personal <i class="fas fa-chevron-down" id="drop"></i></Router-link></li><br><br>
        <li><Router-link to="/business">Business <i class="fas fa-chevron-down" id="drop"></i></Router-link></li><br><br>
        <li><Router-link to="/about">About Us <i class="fas fa-chevron-down" id="drop"></i></Router-link></li><br><br>
        <li><Router-link to="/support&update">Support & Updates <span>news</span> <i class="fas fa-chevron-down" id="drop"></i></Router-link></li>
      </ul>
    </nav>
    <div>
      <i class="fas fa-search" id="search"></i>
      <button class="popup"><Router-link to="/login" style="text-decoration: none;"> Login </Router-link> <i class="fas fa-chevron-down" id="drop"></i></button>
      <button class="pop"><Router-link to="/openaccount" style="text-decoration: none;">Open account </Router-link></button>
    </div>
  </header> 
  <RouterView /> 

  
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
export default {
  name: 'Header'
}

</script>

<style scoped>
#search{
  font-size: 26px;
  margin-right: 10px;
  margin-top: 13px;
}
img{

  z-index: 999;
  background-blend-mode: darken;
}
span{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  background-color: orange;
  padding: 2px;
  border-radius: 10px;
}
#drop{
  font-size: 10px;
}
header {
  display: flex;
  justify-content: space-between;
  background-color: #3e5ff3;
  opacity: 1; /* 50% transparent */
  color: white;
  padding: 20px;
}
nav{
  display: inline-flex;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
}
nav ul li a {
  margin-right: 7px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-decoration: none;
  color: #fff;
}
button {
  text-decoration: none;
  margin-left: 10px;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: medium;
  font-weight: bold;
  
 
}
.search {
  text-decoration: none;
  background-color: #fff;
  color: #3e5ff3;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
}
.popup {
  text-decoration: none;
  background-color: #fff;
  color: #3e5ff3;
  border: none;
  border-radius: 10px;
  margin-right: 10px;

}
.pop {
  text-decoration: none;
  background-color: #09b1f3;
  color: #3e5ff3;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
}
.bk {
  width: 50px;
  height: 50px;
}


</style>