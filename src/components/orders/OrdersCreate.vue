<template>
  <div class="all">
    
    <div class="select">
      <div class="selectCeo">
        <router-link to="/productCeo/list" class="ceoButton">업체 선택하기</router-link>
      
      <p class="ceo">선택된 CEO: {{ storeName }}</p>
      </div>
        

      <div class="selectManager">
        <router-link to="/productManager/list" class="ceoButton">매니저 선택하기</router-link>
        <p class="manager">선택된 매니저: {{ managerName }}</p>
      </div>
        

      </div>
    <form class="orderform" @submit.prevent="sendData">
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" maxlength="30" placeholder="ex.홍길동/포롱" v-model="name" />
      </div>

      <div>
        <label for="phoneNumber">전화번호</label>
        <input type="tel" id="phoneNumber" maxlength="11" placeholder="ex.01011112222" v-model="phoneNumber" />
      </div>

      <div>
        <label for="time">예약시간</label>
        <input type="tel" id="time" maxlength="11" placeholder="숫자만 써주세요" v-model="time" />
      </div>

      <div>
        <label for="orderDetails">특이사항</label>
        <input type="text" id="orderDetails" maxlength="50" placeholder="ex. 입질이 있어요" v-model="orderDetails" />
      </div>

      <div class="service">
        <label for="place">장소</label>
        <input type="text" id="place" maxlength="50" placeholder="장소" v-model="place" />
      </div>

      <!-- <div class="productName">
        <label for="productName">코스</label>
        <input type="text" id="productName" maxlength="50" placeholder="코스" v-model="productName" />
      </div> -->

      <div class="numbers">
      <p>업체 번호: {{ productCeoIdx }} </p> &nbsp;
      <p>매니저 번호 :{{ productManagerIdx }} </p>&nbsp;
      <p>나의 번호: {{ memberIdx }} </p>
    </div>


      <input class="submit signup-progress-btn" type="submit" value="전송하기" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      time: "",
      orderDetails: "",
      place: "",
      productName: "",
      storeName: localStorage.getItem("storeName") || "업체를 선택해주세요",
      productCeoIdx: localStorage.getItem("productCeoIdx"),
      managerName: localStorage.getItem("managerName") || "매니저를 선택해주세요",
      productManagerIdx: localStorage.getItem("productManagerIdx"),
      memberIdx: localStorage.getItem('memberIdx') || "로그인한 사용자의 idx가 없습니다"
      // "현재 로그인한 사용자의 ID", // 예시 값, 실제 구현에선 인증 로직에 맞게 설정
    };

  },
  methods: {
    async sendData() {
      let data = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        time: this.time,
        orderDetails: this.orderDetails,
        place: this.place,
        // productName: this.productName,
        storeName: this.storeName,
        productCeoIdx: this.productCeoIdx,
        productManagerIdx: this.productManagerIdx,
        memberIdx: this.memberIdx,
      };

      try {
        await axios.post("http://www.woofwoof.kro.kr/api/orders/create", data, {
          headers: { "Content-Type": "application/json" },
        });
        alert("주문이 완료되었습니다.");
        this.$router.push("/orders/success");
      } catch (error) {
        console.error(error);
        alert("주문을 실패하였습니다.");
      }
    },
  },
};
</script>
<style scoped>
.ceoButton{
  /* border: 1px solid red; */
  font-size: 22px;
  background-color: #faef71;
  padding: 5px;
}
.select{
  /* border: 1px solid red; */
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    right: -3%;
    top: 42px;
}
.select>div{
  margin-bottom: 20px;
}
.selectCeo{
  /* display: flex; */
  /* border: 1px solid green; */
  margin-bottom:40px;
}
.selectManager{
  /* display: flex; */
  /* border: 1px solid green; */
  margin-bottom:20px;
}
.ceo{
font-size: 20px;
font-weight: normal;
margin-top: 10px;
}
.manager{
  font-size: 20px;
font-weight: normal;
margin-top: 10px;
}

.numbers{
  display: flex;
    padding: 50px;
    font-size: 20px;
}

.orderform {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  margin: 50px 0px;
}
.orderform > div > label {
  display: flex;
}

.service > #userPlace > label > input {
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

.orderform > div > button {
  display: flex;
}
.orderform > div > label {
  margin-bottom: 10px;
  margin-right: 30px;
}
.orderform > div > input {
  width: 315px;
  height: 56px;
  border: none;
  background: #faef71;
  margin-bottom: 24px;
  border-radius: 20px;
  padding: 0 10px;
  outline: none;
}
.service {
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
#username {
  display: flex;
}

#userorder {
  width: 331px;
  height: 109px;
  background: #faef71;
  padding: 10px;
  border-radius: 20px;
  border: none;
  resize: none;
}
.orderform > input:nth-of-type(5) {
  background: #191919;
  color: #fff;
  border: 1px solid #191919;
  transition: all 0.3s ease 0s;
  height: 43px;
  margin-top: 50px;
  border-radius: 33px;
}
.saleform > input:nth-of-type(5):hover {
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
.submit:hover {
  background-color: #e9df6959;
}
/* .orderform > div{
  margin-bottom: 20px;
} */

/* .number{
  margin-top: 75px;
} */
.productName {
  margin-top: 20px;
}
</style>
