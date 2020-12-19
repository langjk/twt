<template id="Hello">
  <div id="app">
    <div  class="header">
        <button class="accountbutton" @click="login"></button>
        <div class="main" id="main">
            <button class="return" @click="turnback">返回</button>
            <div class="detaildiv" id="detaildiv"></div>
        </div>
        <div class="bottom">Powered by langjc</div>
     </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  '/booksdetail': 'Booksdetail',
  data () {
    return {
      searchfor: ''
    }
  },
  mounted:function(){
    const id = this.$route.query.id
    let url=('http://library.justinxiao.cn/api/allBooks'),i=0,j=0
      let setting={
          method:'Get',
      }
      let book=[]//接受数据
      fetch(url,setting).then(function(response){
      response.json().then(function(data){ 
        for(i in data)
           if(data[i] instanceof Array)                      
              for(j in data[i]) 
                if(data[i][j].id==id)
                  book.push(data[i][j])
           var div = document.getElementById("detaildiv");
           var div2 = document.createElement("div");
           var titlediv=document.createElement("titlediv");
           var authordiv=document.createElement("authordiv");
           var publisherdiv=document.createElement("publisherdiv");
           var createddiv=document.createElement("createddiv");
           div2.style.cssText="clear:both;width:90%;margin-top:10px;background-color:rgb(255, 255, 255);height:500px;box-shadow:1px 1px 10px #1113;font-size:x-large;color:#333"
           titlediv.style.cssText="float:right;margin-right:60%;margin-top:50px;color:black;font-size:large;"
           authordiv.style.cssText="float:left;margin-left:100px;margin-top:50px;color:black;font-size:small;"
           publisherdiv.style.cssText="float:left;margin-left:100px;margin-top:50px;color:black;font-size:small;"
           createddiv.style.cssText="float:left;margin-left:100px;margin-top:50px;color:black;font-size:small;"
           div2.innerText="详细信息       其他信息真的没了QAQ"
           titlediv.innerText = book[0].title;
           authordiv.innerText= "作者: "+book[0].author;
           publisherdiv.innerText= "出版社: "+book[0].publisher;
           createddiv.innerText= "出版时间: "+book[0].created_at;
           div2.appendChild(titlediv);
           div2.appendChild(authordiv);
           div2.appendChild(publisherdiv);
           div2.appendChild(createddiv);
           div.appendChild(div2);
      })
      })
  },
  methods: {
  login(){
    this.$router.push({path:"/login"})       //去登陆页面哦
  },
  turnback(){
    this.$router.push({path:"/search"})  
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
.detaildiv{
    float:left;
    width:60%;
    margin-left: 20%;
    margin-top:5%;
    height:100%;
    font-size: medium;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
}
.bottom
{
    position:absolute;
    height:100px;
    text-align: center;
    width: 100%;
    margin-bottom: 0px;
    background-color: rgb(230, 57, 53);
}
.return{
    float:left;
    background-color: rgb(230, 57, 53);
    margin-left: 2%;
    margin-top:5%;
    width:7%;
    height:50px;
    border-radius: 5px;
    border: 0px solid transparent;
    outline: none;
    color:white;
    font-size: large;
}
.return:hover {
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.24), 0 15px 48px 0 rgba(0,0,0,0.19);
}
.return:active{ 
    background-color: rgb(187, 37, 35);
    box-shadow: 0 5px #666;
}   
</style>
