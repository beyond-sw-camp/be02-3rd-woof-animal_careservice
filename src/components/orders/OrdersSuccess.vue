<template>
    <div class="orderform">
      <h1>성공적으로 예약이 완료되었습니다</h1>
      <form @submit.prevent="sendData">
        <input id="idx" v-model="idx" type="text" placeholder="나의 주문번호">
        <div class="btns">
            <input class="btn " type="submit" value="나의 예약 확인하기" v-on:click="getData()">
            <input class="btn" type="submit" value="나의 예약 삭제하기" v-on:click="deleteData()">
        </div>
        
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        idx: '',
        backend: 'http://localhost:8080' // 백엔드 서버 주소
      };
    },
    methods: {
      async getData() {
        console.log(this.idx);
  
        let data = {
          idx: this.idx
        };
  
        let number = await axios.get(this.backend + "/orders/read", { params: data });
        if (number.data !== null) {
          window.location.href = this.backend + "/orders/read?idx=" + this.idx;
        }
      },
      async deleteData() {
        console.log(this.idx);
  
        let data = {
          idx: this.idx
        };
  
        let number = await axios.delete(this.backend + "/orders/delete", { params: data });
        if (number.data !== null) {
            window.location.href = "http://localhost:8081/orders/delete"
        }
      }
    }
  };
  </script>
  

<style scoped>
h1{
    font-size: 34px;
    margin-bottom: 40px;
    font-weight: bold;
    width: 350px;
}
.orderform{
    width: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    align-items: center;
    
}
.btns{
    display: flex;
}
.btn{
    margin-right: 50px;
    background-color: #fae14a;
    margin-top: 20px;
    border: none;
    padding: 25px;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
}

.btn:hover{
    background-color: #e9df6959;
}

input#idx {
    width: 215px;
    height: 56px;
    border: none;
    background: #faef71;
    margin-bottom: 24px;
    border-radius: 20px;
    padding: 5px 20px;
    outline: none;
}
</style>
<style>
/* reset */
*{margin: 0; padding: 0;}
a{text-decoration: none; color:inherit;}
ul,ol{list-style: none;}
h1,h2,h3,h4,h5,h6{font-size: inherit; font-weight: normal;}
b,strong{font-weight: normal;}
i,em,address{font-style: normal;}
table{border-collapse: collapse;}
img{max-width: 100%;}

</style>