<template>
    <div>
      <ul class="orders-list">
        <li class="orders-list-item" v-for="order in orderList" :key="order.idx">
          <div class="orders-list-item-wrapper all">
            <router-link to="/ordersDetail">
              <div class="orders-idx-wrapper ordersDiv">
                <strong class="orders-idx">주문번호 : {{ order.idx }}</strong>
              </div>
              <div class="orders-phoneNumber-wrapper ordersDiv">
                <strong class="orders-phoneNumber">전화번호 : {{ order.phoneNumber }}</strong>
              </div>
              <div class="orders-time-wrapper ordersDiv">
                <strong class="orders-time">예약시간 : {{ order.time }}</strong>
              </div>
              <div class="orders-place-wrapper ordersDiv">
                <strong class="orders-place">예약장소 : {{ order.place }}</strong>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orderList: [],
        backend: 'http://www.woofwoof.kro.kr/api' // 백엔드 서버 주소
      };
    },
    async created() {
      try {
        let response = await axios.get(this.backend + "/orders/list");
        this.orderList = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  
  
  
  <style scoped>
  ul{
    /* display: flex; */
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

li{
    margin: 10px auto;
    background-color: #faef71;
    display: block;
    width: 170px;
    /* width: 30%; */
    height: 170px;
    text-align: center;
    padding: 10px;
    border-radius: 24px;
    transition: all 0.2s ease 0s;
}

.orders-list-item-wrapper.all {
    margin-top: 25%;
    text-align: justify;
}

li:hover{
    background-color: #e9df6959;
    border: 1px solid #faef71;
    transform: scale(0.9);
}
  </style>
  