<template>
  <div class="specialsalebanner">
    <h1>매니저 로그인</h1>
    <h4>매니저 로그인 정보를 입력하세요.</h4>
  </div>

  <form class="loginform" action="#" method="post">
    <div class="formbox">
      <div class="loginform">
        <label for="email">이메일</label><br>
        <input type="email" id="email" maxlength="100" v-model="email">
      </div>

      <div class="loginform">
        <label for="password">비밀번호</label><br>
        <input type="password" id="password" maxlength="100" v-model="password">
      </div>
    </div>

    <div>
      <input class="loginsubmit" type="submit" value="로그인" @click="login">
    </div>
  </form>
</template>
  
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 로그인 처리 로직 작성
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

form.loginform {
  margin-bottom: 100px;
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
  