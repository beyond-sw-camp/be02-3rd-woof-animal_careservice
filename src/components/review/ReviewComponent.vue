<template>
    
    <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p class="review">리뷰를 작성해주세요.</p>
            <textarea v-model="review.text" placeholder="리뷰 내용을 입력해주세요" style="width: 1055px; height: 450px;"></textarea>
            <button class="btn2" @click="createReview">리뷰 생성</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isModalOpen: false,
            review: {
            
                text: null,
                ordersIdx: '' // 주문 인덱스. 실제 사용 시 적절한 값으로 설정해야 함
            }
        };
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        async getOrdersIdx() {
            const ordersIdx = sessionStorage.getItem('ordersIdx');
  try {
    const response = await axios.get(`http://www.woofwoof.kro.kr/api/orders/${ordersIdx}`);
    this.review.ordersIdx = response.data.ordersIdx;
  } catch (error) {
    console.error(error);
  }
},
        async createReview() {
            try {
                await axios.post("http://www.woofwoof.kro.kr/api/review/create", this.review, {
                    headers: { "Content-Type": "application/json" },
                });
                alert("리뷰가 성공적으로 등록되었습니다.");
                this.closeModal(); // 모달창 닫기
            } catch (error) {
                console.error(error);
                alert("리뷰 등록을 실패하였습니다.");
            }
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>


 

<style>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    background-color: #FEFEFE;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 575px;
    position: relative;
}
p.review {
    font-size: 25px;
    margin-bottom: 10px;
}
.btn2{
    width: 105px;
    height: 40px;
    position: absolute;
    right: 25px;
    bottom: 15px;
    background-color: green;
    color: white;
}
.close {
    color: #AAAAAA;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>