<template>
  <div>
    <div class="productManagerCreateBanner">
        <div class="productManagerCreateBannerTxt">
            <h2>매니저 등록하기</h2>
        </div>      
    </div>
    <div class="ReqBox">
      <article class="ReqInputBox">
        <div class="ReqInput">
          <p>매니저 이름</p>
          <input type="text" v-model="managerName" placeholder="띄어쓰기 없이 입력해주세요." class="managerNameEx"><br>

          <p>성별</p>
          <input type="text" v-model="gender" placeholder="'남'or'여'로 입력해주세요." class="genderEx"><br>

          <p>전화 번호</p>
          <input type="text" v-model="phoneNumber" placeholder="숫자만 적어주세요" class="phoneNumberEx"><br>

          <p>가격</p>
          <input type="text" v-model="price" placeholder="숫자만 적어주세요" class="priceEx"><br>

          <p>경력</p>
          <input type="text" v-model="contents" placeholder="경력을 적어주세요." class="contentsEx"><br>

          <p>사진 등록</p>
          <div class="picture">
            <input type="file" ref="filename" accept="image/*" class="pictureUpload"><br>
          </div><br><br>
        </div>
      </article>
      <div class="button-container">
        <button @click="handleFormSubmission">매니저 등록</button><br><br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          backend: "http://www.woofwoof.kro.kr/api",
          managerName: "",
          gender: "",
          phoneNumber: "",
          price: "",
          contents: "",
      }
  },
  methods: {
      async getProductManagerCreate(managerName, gender, phoneNumber, price, contents, file) {
          const formData = new FormData();

          const jsonData = {
            managerName: managerName,
            gender: gender,
              phoneNumber: phoneNumber,
              price: price,
              contents: contents
          };
          formData.append('postProductReq', new Blob([JSON.stringify(jsonData)], {type: 'application/json'}));

          if (file) {
              formData.append('uploadFiles', file);
          }

          let response = await axios.post(`${this.backend}/productManager/createManager`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });

          return response.data.result;
      },
      async handleFormSubmission() {
          const file = this.$refs.filename.files[0];
          await this.getProductManagerCreate(this.managerName, this.gender, this.phoneNumber, this.price, this.contents, file);
          alert("등록 되었습니다");
          this.$router.push("/productManager/list");
      }
  },
}
</script>

<style scoped>
.productManagerCreateBanner{
    margin: 0 auto; /* 수평 중앙 정렬 */
    text-align: center; /* 텍스트 중앙 정렬 */
    padding-top: 15px;
    padding-bottom: 20px;
    background-color: #F7F8FA;
}

.productManagerCreateBannerTxt{
    font-size: 40px;
    font-weight: 600;
    color: rgb(85, 85, 85);
}

.ReqBox{
    margin: 0 auto;
    text-align: center;
    background-color: #F7F8FA;
    border: 1px solid  #F7F8FA;
    border-radius: 12px;
}

.ReqInput{
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
.managerNameEx, .genderEx, .phoneNumberEx, .priceEx, .contentsEx{
    text-align: center;
}
.picture{
    text-align: center;
    margin-left: 68px;
}
.ReqInputBox{
    margin: 0 auto;
    text-align: center;
    width: 30%;
    display: flex;
    justify-content: center;
}

.button-container button{
  font-size:18px;
  font-weight: bold;
  font-weight:600;
  padding: 5px 10px;
  color:white;
  letter-spacing:0.2px;
  border: none;
  background-color: #fae14a;
}
.button-container button:hover {
  color: #555555;
}

</style>
