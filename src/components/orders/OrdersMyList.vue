<template>
    <h1>나의 주문 내역</h1>
    <hr>
    <div class="all">
        <div class="boxdiv" v-for="order in orders" :key="order.idx">
            <ul class="my">
                <li>이름: {{ order.name }}</li>
                <li>전화번호: {{ order.phNum }}</li>
                <li>상세 주문: {{ order.orderDetails }}</li>
                <li>장소: {{ order.place }}</li>
                <button class="review" @click="openReviewModal">리뷰 작성하기</button>
                
            </ul>
        </div>
    </div>
    
    <ReviewComponent ref="myModal"></ReviewComponent>
</template>

<script>
import ReviewComponent from '@/components/review/ReviewComponent.vue';
import axios from 'axios';

export default {
    name: 'OrderList',
    data() {
        return {
            orders: [],
        };
    },
    components:{
        ReviewComponent
    },
    async created() {
        const memberIdx = sessionStorage.getItem('memberIdx');
        if (!memberIdx) {
            alert('로그인이 필요합니다.');
            this.$router.push('/login');
            return;
        }

        try {
            const response = await axios.get(`http://www.woofwoof.kro.kr/api/orders/${memberIdx}`);
            console.log(response.data);
            this.orders = response.data;
            
        } catch (error) {
            console.error(error);
        }
    },

    methods: {
        createReview(orderIdx) {
            this.$router.push({ name: 'ReviewCreate', params: { orderId: orderIdx } });
        },
        viewOrderDetail(orderIdx) {
            this.$router.push({ name: 'OrderDetail', params: { orderId: orderIdx } }); // 라우트 이름 변경
        },
        openReviewModal(){
            //productIdx 리뷰작성에 필요한 변수를 던져야한다.
                this.$refs.myModal.openModal();
        },
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
    height: 145px;
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
    right: 35px;
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
    background-color: #fae14a;
}
</style>
