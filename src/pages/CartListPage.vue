<template>
  <div id="cart-list" v-for="(cart, index) in carts" :key="index">
    <p>{{ index + 1 }}번 카트</p>
    <p>지점명 :  {{ cart.productCeoStoreName }}</p>  
    <p>매니저 이름{{ cart.productMangerName }}</p>
    <p>{{ cart.productCeoIdx }}</p>
    <img :src="cart.productCeoImage">
    <br>
    <img :src="cart.productManagerImage">
    <button @click="createCart(cart)">장바구니담기</button>
    <br><br><br>
  </div>


</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      carts: null,
      result: null
    };
  },
  methods: {
    async getCart() {
      
      const memberIdx = this.$route.query.memberIdx;
      try {
        const response = await axios.get(
          `http://localhost:8080/cart/cartlist?memberIdx=${memberIdx}`, 
          // {
          //   headers:{
          //     Authorization : 'Baerer ' + token,
          //     'Content-Type' : "application/json"
          //   }
          // }
        );
        console.log(response);
        this.carts = response.data;
      } catch (error) {
        console.error(error);
      }

    },
    async createCart(cart) {
  let data = {
    productCeoIdx: cart.productCeoIdx,
    productManagerIdx: cart.productManagerIdx,
    memberIdx: cart.memberIdx,
    productCeoImage: cart.productCeoImage,
    productManagerImage: cart.productManagerImage
  };
        let cartCreateReq = JSON.stringify(data);
        try{
          const response = await axios.post('http://localhost:8080/cart/in', cartCreateReq, {
            headers:{
              'Content-Type' : "application/json"
            }
          })

          this.result = response.data

          alert("등록성공")
        }catch(error){
          console.error(error);
        }
      }
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped>
.favorite-heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.product-image,
.manager-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
