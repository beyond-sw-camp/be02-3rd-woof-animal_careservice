<template>
    <div class="all" v-if="order">
        <h1>나의 예약 확인하기</h1>
      <div class="orders-list-item-wrapper">
        <router-link :to="`/ordersDetail/${order.idx}`">
          <div class="orders-idx-wrapper ordersDiv">
            <strong class="orders-idx">주문번호 : <br>{{ order.idx }}</strong>
          </div>
          <div class="orders-name-wrapper ordersDiv">
            <strong class="orders-name">성함 : <br> {{ order.name }}</strong>
          </div>
          <div class="orders-phoneNumber-wrapper ordersDiv">
            <strong class="orders-phoneNumber">전화번호 : <br> {{ order.phoneNumber }}</strong>
          </div>
          <div class="orders-time-wrapper ordersDiv">
            <strong class="orders-time">예약시간 : <br> {{ order.time }}</strong>
          </div>
          <div class="orders-place-wrapper ordersDiv">
            <strong class="orders-place">예약장소 : <br> {{ order.place }}</strong>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        order: null,
      };
    },
    async created() {
      const idx = this.$route.query.idx;
      try {
        const response = await axios.get(`http://www.woofwoof.kro.kr/api/orders/read?idx=${idx}`);
        this.order = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  
  
  <style scoped>
  .all{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;


  }
  h1{
    font-size: 55px;
    font-weight: bold;
    margin: 42px 0;
  }
  .orders-list-item-wrapper{
    margin: 20px 0 101px;
    padding: 88px;
    background-color: #fae14a;
    font-size: 20px;
    width: 240px;
    text-align: center;
    border-radius: 50px;
  }
  .ordersDiv{
    margin-bottom: 37px;
    font-size: 25px;
  }
  </style>
  

