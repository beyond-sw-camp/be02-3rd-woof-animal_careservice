<template>
    <div class="all">
<div class="ordersBanner">
    <!-- <img src= alt="earbudsbanner"> -->
    <div class="ordersBannerTxt">
        <h1>새로운 일상을 위하여</h1>
        <h2>반려가족의 일상에 우프가 함께하겠습니다</h2>
    </div>
</div>
</div>
<router-view></router-view>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* 배너 */
.ordersBanner{
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
    /* background-color: tomato; */
    background-image: url(https://media.istockphoto.com/id/1356431581/ko/%EC%82%AC%EC%A7%84/%EC%95%A0%EC%99%84-%EB%8F%99%EB%AC%BC-%EC%86%8C%EC%9C%A0%EC%9E%90-%EC%9E%AC%EC%83%9D-%EC%99%80-%EA%B7%B8%EB%85%80%EC%9D%98-%EA%B5%AD%EA%B2%BD-%EC%BD%9C%EB%A6%AC-%EC%95%BC%EC%99%B8.jpg?s=2048x2048&w=is&k=20&c=tMPhUV9VW3lNRiuja8YJ_Qi6yJ2MVNVJwiKeWoyGKto=);
    background-size: cover;
    background-position: 50% 30%;
  
  }
  .ordersBanner>img:nth-of-type(1){
    position: absolute;
    left: 0;
    top: -105px;
  }

  .ordersBannerTxt{
    display: flex;
    /* align-items: baseline; */
    /* font-weight: bold; */
    position: absolute;
    left: 38%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
  }
  .ordersBannerTxt>h1{
    font-size: 94px;
    font-weight: 400;
    background-color: #ebebeb6e;
  }
  .ordersBannerTxt>h2{
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
    background-color: #ebebeb6e;    display: block;
    width: 349px;
  }


  .orderform{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    margin: 50px 0px;
  }
.orderform>div>label{
    display: flex;

}

/*.userservice > label{*/
/*    display: flex;*/
/*}*/

.service> #userPlace>label > input{
    color: black;
    background-color: #faef71;
    width: 26px;
    height: 26px;
    border: none;
    border-radius: 10px;
    margin-left: 19px;
    margin-right: 7px;
    accent-color: #faef71;
}

.userservice:first-child{
    border-left: 0;
}

input[type="checkbox"]:checked + label {
    background-color: green;
}

.orderform>div>button:hover{
  background-color: #0056ff75;
}
.orderform
.orderform>div>button{
    display: flex;
}
  .orderform>div>label{
    margin-bottom: 10px;
    margin-right: 30px;
  }
  .orderform>div>input {
    width: 315px;
    height: 56px;
    border: none;
    background: #faef71;
    margin-bottom: 24px;
    border-radius: 20px;
    padding: 0 10px;
    outline: none;
}
  .service{
    width: 331px;
    height: 37px;
    border: none;
    /* background: #faef71; */
    margin-bottom: 24px;
    border-radius: 20px;
    padding: 0 10px;
    outline: none;
    margin-bottom: 45px;
  }
  #username{
    display: flex;
  }

  #userorder{
    width: 331px;
    height: 109px;
    background: #faef71;
    padding: 10px;
    border-radius: 20px;
    border: none;
    resize: none;
  }
  .orderform>input:nth-of-type(5){
    background: #191919;
    color: #fff;
    border: 1px solid #191919;
    transition: all 0.3s ease 0s;
    height: 43px;
    margin-top: 50px;
    border-radius: 33px;
  }
  .saleform>input:nth-of-type(5):hover{
    background: #fff;
    color: black;
  }

.textarea {
    width: 331px;
    /*height: 37px;*/
    border: none;
    /* background: #ebebeb; */
    margin-bottom: 24px;
    border-radius: 20px;
    padding: 0 10px;
    outline: none;
    margin-top: 20px;
  }

  #orderDetails {
    background-color: #faef71;
}
  .submit {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    border: none;
    background-color: #faef71;
      border-radius: 10px;
      transition: all 0.2s ease 0s;
}
.submit:hover{
    background-color: #e9df6959;
}
.orderform > div{
  margin-bottom: 20px;
}


/* header{
    background-color: skyblue;
    width: 100%;
    height: 200px;

} */

footer{
    background-color: skyblue;
    width: 100%;
    height: 200px;

}

.number{
  margin-top: 75px;
}
</style>