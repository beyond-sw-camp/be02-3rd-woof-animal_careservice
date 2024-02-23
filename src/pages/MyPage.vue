<template>
  <div id="myPage">
    <h2 class="mypagetxt">마이페이지</h2>
    <div class="profile">
      <img
        src="../../public/static/images/salon.jpg"
        alt="Profile Image"
        class="profile-image"
      />
      <p>{{ memberList?.nickname }}</p>
      <p>{{ memberList?.email }}</p>
  
    </div>
    <div id="navigation">
      
      <button v-on:click="getData()">예약 내역</button>
      <button @click="setActiveSection('updateProfile')">회원 정보 수정</button>
        </div>
  </div>

  <div v-show="activeSection === 'updateProfile'" id="updateProfileSection">
    <div>
      <form @submit.prevent="submitForm">
        <label for="email">이메일:</label>
        <input
          v-model="formData.email"
          type="text"
          id="email"
          name="email"
          required
        />

        <label for="password">새 비밀번호:</label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          name="password"
          required
        />

        <label for="nickname">새 닉네임:</label>
        <input
          v-model="formData.nickname"
          type="text"
          id="nickname"
          name="nickname"
          required
        />

        <button type="submit" class="button">수정</button>
      </form>
    </div>
  </div>

  <div v-show="activeSection === 'reservation'" id="reservationSection">
    <h3>예약 내역</h3>
    <ul id="reservationList">
      <!-- 예약 내역이 동적으로 추가될 부분 -->
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activeSection: "",
      memberList: {},
      formData: {
        email: "",
        password: "",
        nickname: ""
      },
    };
  },
  methods: {
    setActiveSection(section) {

      this.activeSection = section;
    },
    async getData() {
      const memberIdx = sessionStorage.getItem("memberIdx");
      if (memberIdx) {
        this.$router.push("/orders/mylist?idx=" + memberIdx);
      } else {
        alert("로그인 정보가 없습니다.");
      }
    },
    async submitForm() {
      let data = {
        email: this.formData.email,
        password: this.formData.password,
        nickname: this.formData.nickname
        
      };

      let memberUpdateReq = JSON.stringify(data);

      console.log(memberUpdateReq);

      try {
        let response = await axios.patch(
          "http://www.woofwoof.kro.kr/api/member/update",
          memberUpdateReq,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);

        // 서버로부터 받은 응답을 처리하는 로직 추가
        alert("회원 정보가 성공적으로 수정되었습니다.");
      } catch (error) {
        console.error(error);
        // 수정 실패 시 팝업 창 띄우기
        alert("회원 정보 수정에 실패했습니다.");
      }
    },
    // 페이지가 로드된 후에 사용자 정보를 가져오는 로직 추가
    async mounted() {
      await this.fetchUserData();
    },
    async fetchUserData() {
  // 세션 스토리지에 저장된 토큰 가져오기
  const token = window.sessionStorage.getItem('atoken');

  // 토큰이 없는 경우 함수 종료
  if (!token) {
    console.log('No token found');
    return;
  }

  // 토큰 디코드
  const decodedToken = atob(token.split('.')[1]);
  const email = JSON.parse(decodedToken).username;

  // 디코드된 이메일로 사용자 정보 가져오기
  try {
    const response = await axios.get(`http://www.woofwoof.kro.kr/api/member/${email}`);
    console.log(response.data);
    this.memberList = response.data;
  } catch (error) {
    console.error(error);
  }
},
},
async mounted() {
    await this.fetchUserData();
  },
};
</script>

<style scoped>

.profile {
  text-align: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.username {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.email {
  font-size: 18px;
}

#navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#navigation button {
  margin: 10px;
}
.profile {
  text-align: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.username {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.email {
  font-size: 18px;
}

.mypagetxt {
  font-size: 37px;
  font-weight: 900;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
}

#myPage {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 5px;
}

h2 {
    text-align: center;
    color: #333;
}

#navigation {
    display: flex;
    flex-direction: column; /* 수정된 부분 */
    align-items: center; /* 수정된 부분 */
    margin-bottom: 20px;
}

button {
    background-color: #faef71;
    color: #000000;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: block; /* 수정된 부분 */
    font-size: 16px;
    margin: 10px 0; /* 수정된 부분 */
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #faef71;
}


.section {
    display: none;
}

.section h3 {
    color: #333;
    margin-bottom: 10px;
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

form {
    max-width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
}

button[type="submit"],
button[type="submit"]:hover {
    background-color: #faef71;
    color: #000000;
    text-align: center;
    margin: 10px auto; 
    text-decoration: none;
    display: block;
    font-size: 16px;
    border-radius: 5px;

}


</style>
