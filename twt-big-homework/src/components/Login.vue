<template id="login">
    <div>
        <div id="app">
    <div  class="header">
        <div class="main" id="main">
            <input type="text" v-model="username" placeholder="请输入用户名" class="input">
            <input type="text" v-model="usercode" placeholder="请输入密码"   class="input2">
            <button class="login" @click="azhe">登录desu</button>
        </div>
        <div class="bottom">Powered by langjc</div>
     </div>
  </div>
    </div>
</template>
<script type="text/javascript">
/* eslint-disable */
export default {
  '/login': 'Login',
  methods:{
      azhe(){
          this.$router.push({path:"/Hello"}) 
      }
  },
  mounted:function(){
      alert("其实没有用户名和密码的接口，点登录回到主界面就可以了")
  }
}
</script>
<style scoped>
/* eslint-disable */
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
.main{
    background-image:url(./assets/background.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    width:100%;
    height:750px;
    align-content: center;
}
.input{
    float:left;
    width:20%;
    margin-left: 40%;
    margin-top:20%;
    height:50px;
    font-size: medium;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    border: 2px solid #333;
    outline: none;
}
.input2{
  float:left;
    width:20%;
    margin-left: 40%;
    margin-top:5%;
    height:50px;
    font-size: medium;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    border: 2px solid #333;
    outline: none;
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
.login{
  float:left;
    background-color: rgb(230, 57, 53);
    margin-left: 46%;
    margin-top:5%;
    width:8%;
    height:50px;
    border-radius: 5px;
    border: 0px solid transparent;
    outline: none;
    color:white;
    font-size: large;
}
.login:hover {
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.24), 0 15px 48px 0 rgba(0,0,0,0.19);
}
.login:active{
    background-color: rgb(187, 37, 35);
    box-shadow: 0 5px #666;
}
</style>
