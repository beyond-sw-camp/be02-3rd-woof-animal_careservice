<template>
  <div id="myPage">
    <h2  class="mypagetxt">마이페이지</h2>

    <div class="profile">

    <img src="../../public/static/images/salon.jpg" alt="Profile Image" class="profile-image">
    <h2 class="username">{{ user.username }}</h2>
    <p class="email">{{ user.email }}</p>
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
      <h3>회원 정보 수정</h3>
      <form id="updateProfileForm">
        <label for="Password">현재 비밀번호:</label>
            <input type="text" id="Password" name="Password" required>
            <label for="newPassword">새 비밀번호:</label>
            <input type="password" id="newPassword" name="newPassword" required>
        <button type="submit" class="button">수정</button>

      </form>
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
export default {
  name: "MyPageComponent",
  data() {
    return {
      activeSection: "", // 기본으로 회원 정보 수정 섹션을 보여줍니다.
      user: {
        username: '솜사탕',
        email: 'heueun77@example.com',
       
        profileImage: './public/static/images/salon.jpg'
      }
    };
  },
  
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
    navigateToCartList() {
      this.$router.push('/cartlist');
    },
  },
};
</script>

<style scoped>
/* @import "../../public/css/mypage.css"; */
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
  width: 200px;
    height: 50px;
    margin-top: 10px;
    border: none;
    background-color: #faef71;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
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
