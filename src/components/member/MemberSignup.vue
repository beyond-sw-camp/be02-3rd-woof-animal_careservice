<template>
  <div class="specialsalebanner">
    <h1>일반 회원 가입</h1>
    <h4>일반 회원 정보를 입력하세요.</h4>
  </div>

  <form class="loginform" @submit.prevent>
    <div class="formbox">
      <div class="loginform">
        <label for="email">이메일</label><br>
        <input type="email" id="email" v-model="memberSignup.email" maxlength="100">
      </div>

      <div class="loginform">
        <label for="password">비밀번호</label><br>
        <input type="password" id="password" v-model="memberSignup.password" maxlength="100">
      </div>

      <div class="loginform">
        <label for="nickname">닉네임</label><br>
        <input type="text" id="nickname" v-model="memberSignup.nickname" maxlength="100">
      </div>

      <div class="loginform">
        <label for="phoneNumber">전화번호</label><br>
        <input type="tel" id="phoneNumber" v-model="memberSignup.phoneNumber" maxlength="100">
      </div>

      <div class="loginform">
        <label for="pet">반려동물 정보</label><br>
        <input type="text" id="pet" v-model="memberSignup.pet" maxlength="100">
      </div>
    </div>

    <div>
      <input class="loginsubmit" type="submit" value="가입하기" @click="signup()">
    </div>
  </form>
</template>
  
<script>

import { mapStores } from 'pinia'
import { useMemberStore } from '@/stores/useMemberStore';


export default {
  data() {
    return {
      memberSignup: {
        email: '',
        password: '',
        nickname: '',
        phoneNumber: '',
        pet: ''
      }

    };
  },
  computed: {
    ...mapStores(useMemberStore)
  },
  methods: {
    async signup() {
      // 스토어의 액션 실행해서 회원 가입 결과 받아옴
      let result = await this.memberStore.signup(this.memberSignup)


      // 회원 가입 결과가 성공이면 리다이렉트
      if (result === true) {
        window.location.href = "/login/member";
      }
      // 회원 가입 결과가 실패면 메시지 보여주고 변수 초기화
      else {
        alert("회원 가입 실패");
        this.memberSignup = {
          email: '',
          password: '',
          nickname: '',
          phoneNumber: '',
          pet: ''
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

.loginform>input {
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
  background-color: rgb(248, 248, 248);
  color: black;
  border: none;
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