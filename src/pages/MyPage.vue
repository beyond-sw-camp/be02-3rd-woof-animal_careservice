<template>
  <div id="myPage">
    <h2  class="mypagetxt">마이페이지</h2>

    <div class="profile">

    <img src="../../public/static/images/salon.jpg" alt="Profile Image" class="profile-image">
    <h2 class="username">{{ memberList.nickname }}</h2>
    <p class="email">{{ memberList.email }}</p>
  </div>

    <div id="navigation">
      <button @click="setActiveSection('updateProfile')">회원 정보 수정</button>
      <button @click="setActiveSection('reservation')">예약 내역</button>
      <button @click="navigateToCartList()">즐겨찾기 목록</button>
      <button @click="setActiveSection('review')">리뷰 관리</button>
    </div>

    <div
      v-show="activeSection === 'updateProfile'"
      id="updateProfileSection"
    >
    <div>
    <h3>회원 정보 수정</h3>
    <form @submit.prevent="submitForm">
      <label for="email">이메일:</label>
      <input v-model="formData.email" type="text" id="email" name="email" required>

      <label for="password">새 비밀번호:</label>
      <input v-model="formData.password" type="password" id="password" name="password" required>

      <label for="nickname">새 닉네임:</label>
      <input v-model="formData.nickname" type="text" id="nickname" name="nickname" required>

      <button type="submit" class="button">수정</button>
    </form>
  </div>

    </div>

    <div
      v-show="activeSection === 'reservation'"
      id="reservationSection"
    >
      <h3>예약 내역</h3>
      <ul id="reservationList">
        <!-- 예약 내역이 동적으로 추가될 부분 -->
      </ul>
    </div>

    <div v-show="activeSection === 'likes'" id="likesSection" >
    
      <ul id="likesList">
  
              
 
        <!-- 즐겨찾기 목록 불러오기 -->
      </ul>
    </div>

    <div v-show="activeSection === 'review'" id="reviewSection" >
      <h3>리뷰 관리</h3>
      <ul id="reviewList">
        <!-- 리뷰 목록이 동적으로 추가될 부분 -->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyPage",
  data() {
    return {
     activeSection: "", // 기본으로 회원 정보 수정 섹션을 보여줍니다.
      memberList: [],
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
    navigateToCartList() {
      this.$router.push('/cartlist');
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
          "http://localhost:8080/member/update",
          memberUpdateReq, {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        console.log(response.data);

        // 서버로부터 받은 응답을 처리하는 로직 추가
      } catch (error) {
        console.error(error);
      }
    },
    // 페이지가 로드된 후에 사용자 정보를 가져오는 로직 추가
    async mounted() {
      this.fetchUserData();
    },

  

    // 사용자 정보를 가져오는 비동기 함수
    async fetchUserData() {
      const email = this.$route.query.email;
      try {
        // 서버로부터 사용자 정보를 가져온다고 가정하고 아래 URL을 실제 백엔드 엔드포인트로 변경
        let response = await axios.get(`http://localhost:8080/member?email=${email}`);
        this.memberList = response.data; // 받아온 사용자 정보를 Vue 데이터에 설정
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
@import "../../public/css/mypage.css";
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

.mypagetxt{
  font-size: 37px;
  font-weight: 900;
}
</style>
