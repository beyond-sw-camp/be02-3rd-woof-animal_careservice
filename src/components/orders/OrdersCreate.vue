<template>
  <div class="all">
    <form class="orderform" @submit.prevent>
      <div>
        <label for="name">이름</label>
        <input
          type="text"
          id="name"
          maxlength="30"
          placeholder="ex.홍길동/포롱"
          v-model="name"
        />
      </div>

      <div>
        <label for="phoneNumber">전화번호</label>
        <input
          type="tel"
          id="phoneNumber"
          maxlength="11"
          placeholder="ex.01011112222"
          v-model="phoneNumber"
        />
      </div>
      <div>
        <label for="time">예약시간</label>
        <input
          type="tel"
          id="time"
          maxlength="11"
          placeholder="숫자만 써주세요"
          v-model="time"
        />
      </div>

      <div>
        <label for="orderDetails">특이사항</label>
        <input
          type="text"
          id="orderDetails"
          maxlength="50"
          placeholder="ex. 입질이 있어요"
          v-model="orderDetails"
        />
      </div>

      <div class="service">
        <label for="place">장소</label>
        <input
          type="text"
          id="place"
          maxlength="50"
          placeholder="장소"
          v-model="place"
        />
      </div>
      <div class="course">
        <label for="course">코스</label>
        <input
          type="text"
          id="course"
          maxlength="50"
          placeholder="코스"
          v-model="course"
        />
      </div>

      <div>
        <router-link to="/productCeo/list" class="button"
          >업체 선택하기</router-link
        >
      </div>
      <div>
        <p>선택된 CEO: {{ storeName }}</p>
        <!-- 예약 관련 다른 정보와 함께 예약하기 폼을 구성 -->
      </div>
      <br /><br /><br />

      <div>
        <router-link to="/productManager/list" class="button"
          >매니저 선택하기</router-link
        >
      </div>
      <div>
        <p>선택된 매니저: {{ managerName }}</p>
        <!-- 예약 관련 다른 정보와 함께 예약하기 폼을 구성 -->
      </div>
      <br /><br /><br />

      <label>멤버 번호 </label>
      <input
        type="text"
        id="memberIdx"
        placeholder="숫자만 써주세요"
        v-model="memberIdx"
      />
      <!-- 중략 -->
      <input
        class="submit signup-progress-btn"
        type="submit"
        value="전송하기"
        v-on:click="sendData()"
      />
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
      course: "",
      storeName: this.$route.query.storeName,
      productCeoIdx: this.$route.query.productCeoIdx,
      managerName: this.$route.query.managerName,
      productManagerIdx: this.$route.query.productManagerIdx,
      memberIdx: "",
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
        course: this.course,
        productCeoIdx: this.$route.query.productCeoIdx,
        productManagerIdx: this.$route.query.productManagerIdx,
        memberIdx: this.memberIdx,
      };

      let orderDto = JSON.stringify(data);

      console.log(orderDto);

      try {
        let response = await axios.post(
          "http://localhost:8080/orders/create",
          orderDto,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data !== null) {
          this.$router.push("/orders/success");
        }
        console.log(response, data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};

// created() {
//   this.storeName = this.$route.query.storeName || '기본값';
//   this.productCeoIdx = this.$route.query.productCeoIdx || '기본값';
//   this.managerName = this.$route.query.managerName || '기본값';
//   this.productManagerIdx = this.$route.query.productManagerIdx || '기본값';
// }
</script>

<style scoped>
.ordersBanner {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  /* background-color: tomato; */
  background-image: url(https://media.istockphoto.com/id/1356431581/ko/%EC%82%AC%EC%A7%84/%EC%95%A0%EC%99%84-%EB%8F%99%EB%AC%BC-%EC%86%8C%EC%9C%A0%EC%9E%90-%EC%9E%AC%EC%83%9D-%EC%99%80-%EA%B7%B8%EB%85%80%EC%9D%98-%EA%B5%AD%EA%B2%BD-%EC%BD%9C%EB%A6%AC-%EC%95%BC%EC%99%B8.jpg?s=2048x2048&w=is&k=20&c=tMPhUV9VW3lNRiuja8YJ_Qi6yJ2MVNVJwiKeWoyGKto=);
  background-size: cover;
  background-position: 50% 30%;
}
.ordersBanner > img:nth-of-type(1) {
  position: absolute;
  left: 0;
  top: -105px;
}

.ordersBannerTxt {
  display: flex;
  /* align-items: baseline; */
  /* font-weight: bold; */
  position: absolute;
  left: 38%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}
.ordersBannerTxt > h1 {
  font-size: 94px;
  font-weight: 400;
  background-color: #ebebeb6e;
}
.ordersBannerTxt > h2 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  background-color: #ebebeb6e;
  display: block;
  width: 349px;
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
.course {
  margin-top: 20px;
}
</style>
