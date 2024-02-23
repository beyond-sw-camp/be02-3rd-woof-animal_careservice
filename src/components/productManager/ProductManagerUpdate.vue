<template>
  <div>
    <div class="productManagerUpdateBanner">
      <div class="productManagerUpdateBannerTxt">
        <h2>매니저 정보 수정하기</h2>
      </div>
    </div>
    <div class="ReqBox">
      <article class="ReqInputBox">
        <div class="ReqInput">
          <p>가게 이름</p>
          <input
            id="managerName"
            type="text"
            v-model="productInfo.managerName"
            placeholder="매니저 이름"
            class="managerNameEx"
          /><br />

          <p>성별</p>
          <input
            id="gender"
            type="text"
            v-model="productInfo.gender"
            placeholder="성별"
            class="genderEx"
          /><br />

          <p>전화 번호</p>
          <input
            id="phoneNumber"
            type="text"
            v-model="productInfo.phoneNumber"
            placeholder="숫자만 적어주세요"
            class="phoneNumberEx"
          /><br />

          <p>가격</p>
          <input
            id="price"
            type="text"
            v-model="productInfo.price"
            placeholder="숫자만 적어주세요"
            class="priceEx"
          /><br />

          <p>경력</p>
          <input
            id="contents"
            type="text"
            v-model="productInfo.contents"
            placeholder="경력"
            class="contentsEx"
          /><br /><br />
        </div>
      </article>
      <div class="button-container">
        <button id="send" @click="updateProduct">수정</button><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productInfo: {
        idx: null,
        managerName: "",
        gender: "",
        phoneNumber: "",
        price: "",
        contents: "",
      },
    };
  },
  methods: {
    loadProductInfo() {
      const idx = this.$route.query.idx || this.$route.params.idx; // 쿼리 파라미터 또는 라우트 파라미터에서 idx를 가져옵니다.
      axios
        .get(`http://www.woofwoof.kro.kr/api/productManager/${idx}`)
        .then((response) => {
          if (response.data.code === 1000) {
            this.productInfo = { idx, ...response.data.result };
          }
        })
        .catch((error) => console.error("Error loading product info:", error));
    },
    updateProduct() {
      axios
        .patch(`http://www.woofwoof.kro.kr/api/productManager/updateManager`, this.productInfo)
        .then(() => {
          alert("상품이 성공적으로 수정되었습니다.");
          this.$router.push(
            `/productManager/detail/${this.productInfo.idx}`
          );
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("상품 수정에 실패하였습니다.")
        });
    },
  },
  mounted() {
    this.loadProductInfo();
  },
};
</script>

<style scoped>
.productManagerUpdateBanner {
  margin: 0 auto; /* 수평 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding-top: 15px;
  padding-bottom: 20px;
  background-color: #f7f8fa;
}

.productManagerUpdateBannerTxt {
  font-size: 40px;
  font-weight: 600;
  color: rgb(85, 85, 85);
}

.ReqBox {
  margin: 0 auto;
  text-align: center;
  background-color: #f7f8fa;
  border: 1px solid #f7f8fa;
  border-radius: 12px;
}

.ReqInput {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(85, 85, 85);
  margin-top: 28px;
  margin-bottom: 28px;
  text-align: center;
  width: 30%;
}
.managerNameEx,
.genderEx,
.phoneNumberEx,
.priceEx,
.contentsEx {
  text-align: center;
}
.picture {
  text-align: center;
  margin-left: 68px;
}
.ReqInputBox {
  margin: 0 auto;
  text-align: center;
  width: 30%;
  display: flex;
  justify-content: center;
}

.button-container button {
  font-size: 18px;
  font-weight: bold;
  font-weight: 600;
  padding: 5px 10px;
  color: white;
  letter-spacing: 0.2px;
  border: none;
  background-color: #fae14a;
}
.button-container button:hover {
  color: #555555;
}
</style>
