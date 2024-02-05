<template>
        <h1>나의 주문 내역</h1>
    <hr>
    <div class="all">
    <div class="boxdiv" v-for="order in orders" :key="order.idx">
        <!-- <div class="state">
            <h2>{{ order.date }}</h2>
            <h3>{{ order.status }}</h3>
        </div> -->
        <ul class="my">
            <li>나의 주문 번호: {{ order.idx }}</li>
            <li>장소: {{ order.place }}</li>
            <li>가격: {{ order.price }}</li>
            <button class="review" v-on:click="createReview(order.idx)">리뷰 작성하기</button>
            <button class="btn" v-on:click="viewOrderDetail(order.idx)">주문 상세 보기 </button>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'OrderList',
    data() {
        return {
            orders: [],
        };
    },
    async created() {
        try {
            const response = await axios.get("http://localhost:8080/orders/mylist");
            this.orders = response.data.result;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        createReview(orderIdx) {
            // 리뷰 작성하기 로직
            this.$router.push({ name: 'ReviewCreate', params: { orderId: orderIdx } });
            // this.$router.push('/orders/update');
        },
        viewOrderDetail(orderIdx) {
            // 주문 상세 보기 로직
            this.$router.push({ name: 'ReviewCreate', params: { orderId: orderIdx } });
        }
    }
}
</script>


<style scoped>
.all{
    display: block;
    margin: 0 auto;
    margin-left: 58px;
    font-size: 25px;
    padding: 50px;
    position: relative;

}
h1{
    margin-left: 20px;
    font-size: 55px;
    font-weight: bold;
    /* margin: 50px 0; */
    margin-left: 50px;
    padding: 50PX;
}

.state{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */

    padding: 10px;
}
.state:first-of-type{
    margin-left: 20px;
}
.state:last-of-type{
    margin-right: 20px;
}
.boxdiv{
    margin-bottom: 40px;
}


ul{
    border: 1px solid black;
    margin-bottom: 20px;
    border-radius: 10px;
    /* width: 250px; */
    height: 100px;
    padding: 20px;
    position: relative;
}
.btn{
    position: absolute;
    right: 10px;
    top: 15px;
    /* width: 200px; */
    height: 50px;
    background-color: white;
    transition: all 0.2s ease 0s;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid #909090;
}
.review{
    position: absolute;
    right: 139px;
    top: 15px;
    /* width: 200px; */
    height: 50px;
    background-color: white;
    transition: all 0.2s ease 0s;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid #909090;
}
button:hover{
    background-color: green;
}
</style>
