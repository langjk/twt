<template id="Hello">
  <div id="app">
    <div  class="header">
        <button class="accountbutton" @click="login"></button>
        <div class="main" id="main">
            <input type="text" v-model="searchfor" placeholder="请输入关键字检索" class="input">
            <button class="searchbutton" @click="search">检索</button>
        </div>
        <div class="bottom">Powered by langjc</div>
     </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  '/hello': 'Hello',
  data () {
    return {
      searchfor: ''
    }
  },
  methods: {
    search () {
      const searchfor = this.searchfor;      //获取value哦
      this.$router.push({
	   	path: "/search",                      //去搜索页面哦
	  	query: {
		    	searchfor:searchfor,               //传参哦
	      }
  	  })
    },
  login(){
    this.$router.push({path:"/login"})       //去登陆页面哦
  }
}}
</script>
<style scoped>
     *{
    box-sizing: border-box;
}
.header{
    height:70px;
    background-color: rgb(230, 57, 53);
    width:100%;
    align-content: center;
    background-image: url(./assets/headerlogo.svg);
    background-repeat: no-repeat;
    background-position: 25%;
}
.accountbutton{
    margin-left:80%;
     margin-left:80%;
     margin-top:20px;
     width: 30px;
     height: 30px;
     background-image: url(./assets/account.svg);
     background-color: transparent;
     border-radius: 50%;
     border: 0px solid black;
}
.main{
    background-image:url(./assets/background.png);
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: -100px;
    background-size: 90%;
    width:100%;
    height:750px;
    align-content: center;
}
.input{
    float:left;
    width:30%;
    margin-left: 30%;
    margin-top:20%;
    height:50px;
    font-size: medium;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    border: 2px solid #333;
    outline: none;
}
.searchbutton{
    float:left;
    background-color: rgb(230, 57, 53);
    margin-left: 2%;
    margin-top:20%;
    width:7%;
    height:50px;
    border-radius: 5px;
    border: 0px solid transparent;
    outline: none;
    color:white;
    font-size: large;
}
.bottom
{
    position:absolute;
    height:100px;
    text-align: center;
    width: 100%;
    margin-bottom: 0px;
    background-color:  rgb(230, 57, 53);
}
.searchbutton:hover {
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.24), 0 15px 48px 0 rgba(0,0,0,0.19);
}
.searchbutton:active{ 
    background-color: rgb(187, 37, 35);
    box-shadow: 0 5px #666;
}   
</style>
