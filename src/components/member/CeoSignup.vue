<template>
    <div class="specialsalebanner">
      <h1>업체 회원 가입</h1>
      <h4>업체 회원 정보를 입력하세요.</h4>
    </div>

    <form class="loginform" action="#" method="post">
      <div class="formbox">
        <div class="loginform">
          <label for="businessnum">사업자등록번호</label><br>
          <input type="text" id="businessnum" maxlength="100" v-model="businessnum">
        </div>

        <div class="loginform">
          <label for="password">비밀번호</label><br>
          <input type="password" id="password" maxlength="100" v-model="password">
        </div>

        <div class="loginform">
          <label for="ceoname">이름</label><br>
          <input type="text" id="ceoname" maxlength="100" v-model="ceoname">
        </div>

        <div class="loginform">
          <label for="phoneNumber">전화번호</label><br>
          <input type="tel" id="phoneNumber" maxlength="100" v-model="phoneNumber">
        </div>

        <div class="loginform">
          <label for="contents">업체 소개</label><br>
          <input type="text" id="contents" maxlength="100" v-model="contents">
        </div>
      </div>

      <div>
        <button class="loginsubmit" @click="submitForm">가입하기</button>
      </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      businessnum: '',
      password: '',
      ceoname: '',
      phoneNumber: '',
      contents: ''
    };
  },
  methods: {
    submitForm() {
      // 폼 데이터를 서버로 전송하는 로직을 구현합니다.
      // 예시로는 axios 등을 사용하여 HTTP 요청을 보내는 방식으로 구현할 수 있습니다.
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
  background-color: rgb(248, 248, 248);
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