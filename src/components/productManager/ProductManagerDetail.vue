<template>
  <div class="all">
    <div v-if="product" class="product-container">

        <div class="product-image"> <!-- 새로운 이미지 추가 -->
        <img src="https://i.ibb.co/XWNFVRc/ddd.png" />
      </div>
        <div class="product-image">
        <img :src="productImageSrc" alt="Product Image" />
      </div>

      <div class="product-info">
        <div class="managerName">
          <h1>{{ product.managerName }} 매니저</h1>
        </div>
        <div class="gender">       
            <p>{{ product.gender }}</p>
        </div>
        <div class="phoneNumber">
            <p>전화번호 : {{ product.phoneNumber }}</p>
        </div>
        <div class="price">
            <p>{{ product.price }} 원</p>
        </div>
        <div class="contents">
        <p>상세 설명 : {{ product.contents }}</p>
        </div>
        <div class="product-butten">
            <button @click="updateProduct">수정</button>
            <button @click="deleteProduct">삭제</button>
            <button @click="goToReservation">예약하기</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>상품 정보를 불러오는 중...</p>
    </div>
  </div>

  <!-- 리뷰 -->
  
  <div class="review1">
        <div class="header1">
            <p>고객 후기

                452 
                
                개</p>
            <div class="rating1">
                <div class="stars1">
                    <!-- <div class="starsimg1"> -->
                    <img class="starsimg1" src="/static/images/common/star_1.png">
                    <img class="starsimg1" src="/static/images/common/star_1.png">
                    <img class="starsimg1" src="/static/images/common/star_1.png">
                    <img class="starsimg1" src="/static/images/common/star_1.png">
                    <img class="starsimg1" src="/static/images/common/star_1.png">
                <!-- </div> -->
                <!-- <p class="startsp1">5.0</p> -->
            </div>
        </div>
        <!-- <div class="images1">
            <div class="image1">
                <img class="imageimg1" src="https://wayo.cdn.ntruss.com/resized/review/1dd354fc64db425aa78828ab9d4c08d7.jpg">
            </div>
            <div class="image1">
                <img class="imageimg1" src="https://wayo.cdn.ntruss.com/resized/review/3f567c1accff4a12a149fcd447e11361.JPEG">
            </div>
            <div class="image1">
                <img class="imageimg1" src="https://wayo.cdn.ntruss.com/resized/review/bf0504866d2941c5b5ed77895eba2746.JPEG">
            </div>
            <div class="image1">
                <img  class="imageimg1"src="https://wayo.cdn.ntruss.com/resized/review/194d132e0fb0411f890dae6cb4768b9b.JPEG">
            </div>
            <div class="more-images1">
                <p class="more-imagesp1">+ 442</p>
            </div>
        </div> -->
    </div>
    </div>


    <div class="review2">
        <div class="user-info2">
            <div class="user-image2">
                <img class="user-imageimg2" src="https://wayo.cdn.ntruss.com/resized/pet/daa7bb0c5b2141a2891e9bf73ced5358.jpg">
            </div>
            <div class="user-details2">
                <p class="user-detailsp2">김◯연 님 ( 비숑믹스·7살 )</p>
                <div class="user-rating2">
                    <div class="stars2">
                        <img class="startsimg2" src="/static/images/common/star_1.png">
                        <img class="startsimg2" src="/static/images/common/star_1.png">
                        <img class="startsimg2" src="/static/images/common/star_1.png">
                        <img class="startsimg2" src="/static/images/common/star_1.png">
                        <img class="startsimg2" src="/static/images/common/star_1.png">
                    </div>
                    <p>4일 전</p>
                </div>
            </div>
        </div>
        <div class="user-review2">
            <p class="user-reviewp2">우려했던 부분을 아시고 백동이에 맞춰서 교육방법을 잘 알려주십니다 감사합니다!</p>
        </div>
        <div class="user-tags2">
            <div class="tag2">
                <p>🐶&nbsp; 문제 행동 진단과 솔루션</p>
            </div>
            <div class="tag2">
                <p class="tagp2">🏠 방문 교육</p>
            </div>
        </div>
    </div>

    <div class="review3">
        <div class="user-info3">
            <div class="user-image3">
                <img class="user-imageimg3" src="https://wayo.cdn.ntruss.com/resized/pet/5a2fb50a7d35461b9365c3aa0a3acfe1.jpg">
            </div>
            <div class="user-details3">
                <p class="user-detailsp3">박◯영 님 ( 오스트레일리안 셰퍼드·9개월 )</p>
                <div class="user-rating3">
                    <div class="stars3">
                        <img class="starsimg3" src="/static/images/common/star_1.png">
                        <img class="starsimg3" src="/static/images/common/star_1.png">
                        <img class="starsimg3" src="/static/images/common/star_1.png">
                        <img class="starsimg3" src="/static/images/common/star_1.png">
                        <img class="starsimg3" src="/static/images/common/star_1.png">
                    </div>
                    <p class="user-ratingp3">6일 전</p>
                </div>
            </div>
        </div>
        <div class="user-review3">
            <p class="user-reviewp3">훈련을 여러 군데 다녀봤지만 훈련사님의 교육이 제일 효과적이였습니다. 또한 제가 반려견을 키울때 갖고 있는 철학과 일치하여 너무 만족스러웠습니다. 감사합니다~</p>
        </div>
        <div class="user-tags3">
            <div class="tag3">
                <p class="tagp3">🐶&nbsp; 문제 행동 진단과 솔루션</p>
            </div>
            <div class="ta3g">
                <p>🏠 방문 교육</p>
            </div>
        </div>
    </div>

    <div class="review4">
        <div class="user-info4">
            <div class="user-image4">
                <img class="user-imageimg4" src="https://wayo.cdn.ntruss.com/resized/pet/32f4e96671ff4f8f9a1d564f4253b810.jpg">
            </div>
            <div class="user-details4">
                <p class="user-detailsp4">신◯희 님 ( 푸들·7살 )</p>
                <div class="user-rating4">
                    <div class="stars4">
                        <img class="starsimg4" src="/static/images/common/star_1.png">
                        <img class="starsimg4" src="/static/images/common/star_1.png">
                        <img class="starsimg4" src="/static/images/common/star_1.png">
                        <img class="starsimg4" src="/static/images/common/star_1.png">
                        <img class="starsimg4" src="/static/images/common/star_1.png">
                    </div>
                    <p class="user-ratingp4">지난 주</p>
                </div>
            </div>
        </div>
        <div class="user-review4">
            <p class="user-reviewp4">친절하고 자세하게 가르쳐주셔서 좋았어요! 아이가 스트레스 받지 않는 방향으로 훈련하는 방식을 알려주셔서 좋았고, 밥 잘 안 먹는 것 원인도 보자마자 바로 알아채고 해결해주신 것도 신기했습니다ㅎㅎ 감사합니다!! 합격이는 머리를 너무 많이 썼는지 끝나고 바로 뻗었어요ㅋㅋ</p>
        </div>
        <div class="user-photo4">
            <!-- <img class="user-photoimg4" src="https://wayo.cdn.ntruss.com/resized/review/1dd354fc64db425aa78828ab9d4c08d7.jpg"> -->
        </div>
        <div class="user-tags4">
            <div class="tag4">
                <p class="tagp4">🐶&nbsp; 문제 행동 진단과 솔루션</p>
            </div>
            <div class="tag4">
                <p class="tagp4">🏠 방문 교육</p>
            </div>
        </div>
        <div class="more-reviews4">
            <p class="more-reviewsp4"> +&nbsp;&nbsp; 후기 더 보기</p>
        </div>
    </div>


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null,
      idx: this.$route.params.idx, // URL 파라미터에서 idx 값을 초기화합니다.
    };
  },
  methods: {
    goToReservation() {
    // 로컬 스토리지에 선택 정보 저장
    localStorage.setItem('managerName', this.product.managerName);
    localStorage.setItem('productManagerIdx', this.idx);

    // 예약 페이지로 라우팅, URL 쿼리 파라미터에 선택 정보 포함
    this.$router.push({
      path: "/orders/create",
      query: {
        managerName: this.product.managerName,
        productManagerIdx: this.idx,
      },
    });
  },

    async loadProductInfo() {
      try {
        const response = await axios.get(
          `http://www.woofwoof.kro.kr/api/productManager/${this.idx}`
        );
        const data = response.data;
        if (data && data.code === 1000) {
          this.product = {
            ...data.result,
            filenames: data.result.filename
              ? data.result.filename.split(",")
              : [],
          };
        } else {
          console.error("상품 정보를 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    updateProduct() {
  const productId = this.idx; // 현재 제품의 ID
  window.location.href = `/productManager/update?idx=${productId}`;
},
    deleteProduct() {
  if (confirm('정말로 이 상품을 삭제하시겠습니까?')) {
    axios.delete(`http://www.woofwoof.kro.kr/api/productManager/deleteManager?idx=${this.idx}`)
      .then(() => {
        alert('상품이 성공적으로 삭제되었습니다.');
        this.$router.push('/productManager/list'); // 예를 들어, 상품 목록 페이지로 리디렉션
      })
      .catch(error => {
        console.error('상품 삭제 중 오류 발생:', error);
        alert('상품 삭제 중 오류가 발생했습니다.');
      });
  }
}
  },
  created() {
    if (this.idx) {
      this.loadProductInfo();
    }
  },
  computed: {
    productImageSrc() {
      if (this.product && this.product.filenames.length > 0) {
        return this.product.filename;
      } else {
        return '/static/images/salon.jpg';
      }
    },
  },
};
</script>

<style scoped>
.all {
  padding: 20px; /* 전체 페이지의 패딩 조정 */
  background-color: #f7f8fa;
}

.product-container {
  display: flex;
  flex-direction: row; /* 이미지와 정보를 가로로 배열 */
  align-items: start;
  justify-content: space-between; /* 요소들 사이에 공간을 두어 분배 */
}

.product-image img {
  width: 350px; /* 이미지 크기 조정 */
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px; /* 이미지 사이의 간격 */
}

.product-info {
  flex-grow: 1; /* 정보 영역이 남은 공간을 채우도록 */
  padding: 20px; /* 패딩 추가 */
  display: flex;
  flex-direction: column; /* 내용을 세로로 배열 */
  justify-content: space-between; /* 내용과 버튼 사이에 공간을 두어 분배 */
}

.product-details {
  flex: 2;
  padding-left: 10px;
  border-left: 2px solid white; /* 이미지와 텍스트 정보 사이의 경계선 */
}

.managerName {
  font-size: 24px; /* 텍스트 크기 조정 */
  color: #333; /* 색상을 더 진한 회색으로 */
}

.gender, .phoneNumber, .price, .contents {
  font-size: 18px; /* 정보 텍스트 크기 조정 */
  margin-top: 15px;
  color: #555; /* 색상을 조금 더 진한 회색으로 */
}
.product-butten { /* 오타 수정: .product-button이 맞는 클래스 명입니다 */
  align-self: flex-end; /* 버튼을 오른쪽 하단에 위치시킴 */
  margin-top: 80px;
}

button {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px;
  color: white;
  letter-spacing: 0.2px;
  border: none;
  background-color: #fae14a;
  cursor: pointer;
}


/* 리뷰 */
.review1 {
    padding-top: 50px;
}

.header1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    margin-left: 35px;
}

.headerp1 {
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    letter-spacing: -0.2px;
}

.rating1 {
    display: flex;
    align-items: center;
}

.stars1 {
    display: flex;
    justify-content: space-between;
}

.starsimg1 {
    width: 12px;
    height: 12px;
}

.ratingp1 {
    margin-left: 10px;
}

.images1 {
    display: flex;
    flex-direction: row;
    padding-bottom: 38px;
    position: relative;
    justify-content: space-between;
}

.image1 {
    width: 136px;
    height: 136px;
    border-radius: 3px;
    object-fit: cover;
    margin-right: 0;
}

.imageimg1 {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}

.more-images1 {
    width: 136px;
    height: 136px;
    background-color: black;
    opacity: 0.59;
    border-radius: 3px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.more-imagesp1 {
    font-size: 26px;
    color: white;
}

.review2 {
    padding-top: 45px;
    padding-bottom: 45px;
    border-top: 1px solid #EBEBEB;
}

.user-info2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:35px;
}

.user-image2 {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.user-imageimg2 {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
}

.user-details2 {
    margin-left: 24px;
}

.user-detailsp2 {
    font-size: 17px;
    font-weight: 500;
    color: #333333;
    letter-spacing: -0.2px;
}

.user-rating2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
}

.stars2 {
    width: 70px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
}

.startsimg2 {
    width: 12px;
    height: 12px;
}

.user-ratingp2 {
    font-size: 15px;
    color: #A0A0A0;
    letter-spacing: -0.2px;
    font-weight: 500;
}

.user-review2 {
    margin-top: 32px;
    margin-left: 35px;
}

.user-reviewp2 {
    font-size: 17px;
    color: #555555;
    line-height: 28px;
}

.user-tags2 {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35px;
}

.tag2{
    background-color: #FAFAFB;
    border-radius: 16px;
    padding: 9px 14px 6px 14px;
    margin-right: 10px;
}

.tagp2 {
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    color: #333333;
}

.review3 {
    padding-top: 45px;
    padding-bottom: 45px;
    border-top: 1px solid #EBEBEB;
}

.user-info3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35px;
}

.user-image3 {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.user-imageimg3 {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
}

.user-details3 {
    margin-left: 24px;
}

.user-detailsp3 {
    font-size: 17px;
    font-weight: 500;
    color: #333333;
    letter-spacing: -0.2px;
}

.user-rating3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
}

.stars3 {
    width: 70px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
}

.starsimg3 {
    width: 12px;
    height: 12px;
}

.user-ratingp3 {
    font-size: 15px;
    color: #A0A0A0;
    letter-spacing: -0.2px;
    font-weight: 500;
}

.user-review3 {
    margin-top: 32px;
    margin-left: 35px;
}

.user-reviewp3 {
    font-size: 17px;
    color: #555555;
    line-height: 28px;
}

.user-tags3 {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35px;
}

.tag3 {
    background-color: #FAFAFB;
    border-radius: 16px;
    padding: 9px 14px 6px 14px;
    margin-right: 10px;
}

.tagp3 {
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    color: #333333;
}
.review4 {
    padding-top: 45px;
    padding-bottom: 45px;
    border-top: 1px solid #EBEBEB;
}

.user-info4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35px;
}

.user-image4 {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.user-imageimg4 {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
}

.user-details4 {
    margin-left: 24px;
}

.user-detailsp4 {
    font-size: 17px;
    font-weight: 500;
    color: #333333;
    letter-spacing: -0.2px;
}

.user-rating4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
}

.stars4 {
    width: 70px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
}

.starsimg4 {
    width: 12px;
    height: 12px;
}

.user-ratingp4 {
    font-size: 15px;
    color: #A0A0A0;
    letter-spacing: -0.2px;
    font-weight: 500;
}

.user-review4 {
    margin-top: 32px;
    margin-left: 35px;
}

.user-reviewp4 {
    font-size: 17px;
    color: #555555;
    line-height: 28px;
}

.user-photo4 {
    margin-top: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user-photoimg4 {
    width: 120px;
    height: 120px;
    margin-right: 8px;
    border-radius: 3px;
}

.user-tags4 {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35px;
}

.tag4 {
    background-color: #FAFAFB;
    border-radius: 16px;
    padding: 9px 14px 6px 14px;
    margin-right: 10px;
}

.tagp4 {
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    color: #333333;
}

.more-reviews4 {
    width: 100%;
    height: 59px;
    background-color: #F7F8FA;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
}

.more-reviewsp4 {
    font-size: 18px;
    font-weight: 600;
    color: #777777;
}




</style>
