<template>
    <div class="specialsalebanner">
      <h1>업체 회원 가입</h1>
      <h4>업체 회원 정보를 입력하세요.</h4>
    </div>

    <form class="loginform" @submit.prevent>
      <div class="formbox">
        <div class="loginform">
          <label for="businessnum">사업자등록번호</label><br>
          <input type="text" id="businessnum" maxlength="100" v-model="ceoSignup.businessnum">
        </div>

        <div class="loginform">
          <label for="password">비밀번호</label><br>
          <input type="password" id="password" maxlength="100" v-model="ceoSignup.password">
        </div>

        <div class="loginform">
          <label for="ceoname">이름</label><br>
          <input type="text" id="ceoname" maxlength="100" v-model="ceoSignup.ceoname">
        </div>

        <div class="loginform">
          <label for="phoneNumber">전화번호</label><br>
          <input type="number" id="phoneNumber" maxlength="100" v-model="ceoSignup.phoneNumber">
        </div>

        <div class="loginform">
          <label for="contents">업체 소개</label><br>
          <input type="text" id="contents" maxlength="100" v-model="ceoSignup.contents">
        </div>
      </div>

      <div>
        <input class="loginsubmit" type="submit" value="가입하기" @click="signup()">
      </div>
    </form>
</template>

<script>

import { mapStores } from 'pinia'
import { useCeoStore } from '@/stores/useCeoStore';

export default {
  data() {
    return {
      ceoSignup:{
        businessnum: '',
        password: '',
        ceoname: '',
        phoneNumber: '',
        contents: ''
      }
    };
  },
  computed:{
    ...mapStores(useCeoStore)
  },
  methods: {
    async signup() {
      // 스토어에 있는 메소드 실행
      let result = await this.ceoStore.signup(this.ceoSignup)

      if (result === true) {
        window.location.href = "/login/ceo";
      }
      else{
        alert("회원 가입 실패");
        this.ceoSignup = {
          businessnum: '',
          password: '',
          ceoname: '',
          phoneNumber: '',
          contents: ''
        }
      }
    }
  }
};
</script>

<style scoped>
.specialsalebanner {
  text-align: center;
}

.loginform {
  text-align: center;
}

.loginform > input {
  width: 222px;
  height: 37px;
  border: none;
  background: #FAEF71;
  margin-bottom: 24px;
  border-radius: 20px;
  padding: 0 10px;
  outline: none;
}

.loginsubmit {
  height: 45px;
  width: 120px;
  background-color: #FAEF71;
  border-radius: 30px;
  color: black;
  font-weight: bold;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.loginsubmit:hover {
  background-color: #fff9b3;
}

.usertypebutton {
  height: 64px;
  width: 480px;
  background-color: #e9df6959;
  color: black;
  
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px -3px;
  cursor: pointer;
  line-height: 64px;
}

.usertypebutton:hover {
  background-color: #FAEF71;
  color: black;
}

.usertypecontainer {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 75px;
}

.formbox {
  margin-bottom: 20px;
}
</style>