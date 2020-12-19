<template id="search">
    <div id="app">
    <div  class="header">
        <button class="accountbutton"  @click="login"></button>
        <div class="main" id="main">
            <input type="text" v-model="searchfor" class="input" value=searchfor>
            <button class="searchbutton" @click="search">检索</button>
            <div class="result" id="result"></div>
        </div>
        <div class="bottom">Powered by langjc</div>
     </div>
  </div>
</template>
<script type="text/javascript">
/* eslint-disable */
export default {
  '/search': 'search',
  data(){
    return{
      searchfor:''
    }
  },
  mounted:function(){                                      //打开页面开始读入数据
      var aba=this;                                        //明确this指向
      const searchfor = this.$route.query.searchfor;        //从Home页面传参来的searchfor
      aba.popout(searchfor,aba);
  },
  methods: {
    search () {                               //如果又按了搜索按钮
      var aba=this;                           //明确this指向
      document.getElementById('result').textContent=" ";  //清空结果框
      const searchfor = this.searchfor;
      if(searchfor == null || searchfor == ""||searchfor==undefined) 
      { 
       alert('输入书名');
       return;
      } 
      else                                                //拿value
           aba.popout(searchfor,aba);
  },
  popout(searchfor,aba){
      let url=('http://library.justinxiao.cn/api/search?key='+searchfor),i=0,j=0
      let setting={
          method:'POST',
      }
      let book=[]//接受数据
      fetch(url,setting).then(function(response){
      response.json().then(function(data){ 
        for(i in data)
           if(data[i] instanceof Array)                      
              for(j in data[i]) 
                 book.push(data[i][j])                         //高树韬，我的超人
      if(book.length==0)
      {
        var div = document.getElementById("result");
         div.style.cssText="text-align: center;font-size: xx-large;padding-top:50px;"
        div.innerText="查无此书=￣ω￣="
      }
        for(i=0;i<book.length;i++)
        {
           var div = document.getElementById("result");        //如果搜到书名 开始生成div
           var div2 = document.createElement("div");           //大框(
           var titlediv=document.createElement("titlediv");
           var authordiv=document.createElement("authordiv");
           var publisherdiv=document.createElement("publisherdiv");
           var createddiv=document.createElement("createddiv");//没图片就不弄了
           div2.style.cssText="clear:both;margin-left:5%;width:90%;margin-top:10px;background-color:rgb(255, 255, 255);;height:100px;box-shadow:1px 1px 10px #1113"
           titlediv.style.cssText="float:left;margin-left:10%;margin-right:30%;margin-top:10px;color:black;font-size:large;"
           authordiv.style.cssText="float:left;margin-left:10%;margin-right:30%;color:#333;font-size:small;"
           publisherdiv.style.cssText="float:left;margin-left:10%;margin-right:30%;color:#333;font-size:small;"
           createddiv.style.cssText="float:left;margin-left:10%;margin-right:30%;color:#333;font-size:small;"
           titlediv.innerText = book[i].title;
           authordiv.innerText= "作者: "+book[i].author;
           publisherdiv.innerText= "出版社: "+book[i].publisher;
           createddiv.innerText= "出版时间: "+book[i].created_at;
           var id=book[i].id;
           div2.onclick=function(){aba.$router.push({path:"/booksdetail",query:{id:id}})}
           div2.appendChild(titlediv);  //就硬塞
           div2.appendChild(authordiv);
           div2.appendChild(publisherdiv);
           div2.appendChild(createddiv);
           div.appendChild(div2);
        }          
      })
    })
  },
  login(){
    this.$router.push({path:"/login"})       //去登陆页面哦
  }
}
}
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
    background-image: url(./assets/account.svg);
     margin-left:80%;
     margin-top:20px;
     width: 30px;
     height: 30px;
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
    margin-top:5%;
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
    margin-top:5%;
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
.result{
    float:left;
    height:500px;
    width: 50%;
    background-color: rgba(190, 192, 194, 0);
    margin-left:25%;
    margin-top:20px;
    color:rgb(0, 0, 0);
}
</style>
