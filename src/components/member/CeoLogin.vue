<template>
  <div class="specialsalebanner">
    <h1>업체 로그인</h1>
    <h4>업체 로그인 정보를 입력하세요.</h4>
  </div>

  <form class="loginform" @submit.prevent>
    <div class="formbox">
      <div class="loginform">
        <label for="businessnum">사업자등록번호</label><br>
        <input type="text" id="businessnum" maxlength="100" v-model="ceoLogin.businessnum">
      </div>

      <div class="loginform">
        <label for="password">비밀번호</label><br>
        <input type="password" id="password" maxlength="100" v-model="ceoLogin.password">
      </div>
    </div>

    <div>
      <input class="loginsubmit" type="submit" value="로그인" @click="login()">
    </div>
  </form>
</template>
  
<script>
import { mapStores } from 'pinia'
import { useCeoStore } from '@/stores/useCeoStore';

export default {
  data() {
    return {
      ceoLogin: {
        businessnum: '',
        password: ''
      }
    };
  },
  computed: {
    ...mapStores(useCeoStore)
  },
  methods: {
    async login() {
      // 로그인 로직 구현
      let result = await this.ceoStore.login(this.ceoLogin)
      if(result){
        window.location.href = "/productCeo/list";
      } else {
        alert("로그인 실패");
        this.ceoLogin = {
          businessnum : '',
          password: ''
        }
      }

    }
  }
};
</script>
  
<style>
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
  background-color: #e9df6959;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.324);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px -3px;
  cursor: pointer;
  line-height: 64px;
  transition: all 0.2s ease 0s;
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
  