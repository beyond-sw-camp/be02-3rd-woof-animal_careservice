<template>
  <ul class="nav">
    <li class="nav-item nav-item-best"></li>
  </ul>
  <div id="home-container">
    <div class="desktop hidden-s">
      <section class="introduction-section"></section>
      <div class="box1">
          <img
            src="../../public/static/images/maincatdog.jpeg"
            style="width: 800px; height: 670px; object-fit: contain"/>
        <div class="container">
      <p class="header-text">우리아이<br />FRIENDS.</p>
        <p class="sub-text">반려가족의 하루에 WOOF가 함께하겠습니다.</p>
    </div>
      </div>
    </div>
  </div>
  <div class="box6">
    <div class="box7">
      <div class="text1">
        <h1 class="text2">매니저가<br />집으로 와요!</h1>
        <h3 class="text3">
          원하는 픽업 장소로<br />언제 어디서든 WOOF 매니저를 불러보세요!
        </h3>
        <a href="/petsitter">
          <div class="box10">
            <p class="p1">자세히 보기</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </a>
      </div>
      <img
        src="../../public/static/images/baby.jpeg"
        alt="baby"
        style="width: 500px; height: 450px; border-radius: 2px"
      />
    </div>
    <div class="box11">
      <img
        src="../../public/static/images/clinic.jpeg"
        style="width: 570px; height: 450px; border-radius: 2px"
      />
      <div class="text4">
        <h2 class="text5">믿을 수 있는<br />업체!</h2>
        <h3 class="text6">
          WOOF가 엄선한 업체<br />
          실제 후기 보고 선택하세요
        </h3>
        <a href="/trainer"
          ><div class="text7">
            <p class="p2">자세히 보기</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-arrow-right"></i>
            </div
        ></a>
      </div>
    </div>
    <div class="box12">
      <div class="text8">
        <h1 class="text9">그루머의<br />미용 서비스</h1>
        <h3 class="text10">
          우리 동네 애견 미용샵들을 한 눈에 비교하고,<br />
          예약부터 결제까지 간편하게 해결하세요.
        </h3>
        <a href="/groomer"
          ><div class="box15">
            <p class="p4">자세히 보기</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-arrow-right"></i>
          </div
        ></a>
      </div>
      <img
        src="../../public/static/images/salon.jpg"
        style="width: 500px; height: 450px; border-radius: 2px"
      />
    </div>
  </div>
  
 

  <div class="review2">
    <div class="review3">
      <div class="review4">
        <h2 class="review5">WOOF 파트너로 함께해요!</h2>
        <h3 class="banner1">
          반려가족에게 행복한 시간을 선물할 수 있도록<br />WOOF와 함께 성장할
          파트너를 찾습니다.
        </h3>
        <a class="banner2" href="/partner/petsitter">
          <p class="p9">WOOF 매니저 지원</p>
          <i class="fa-solid fa-arrow-right"></i></a
        ><a class="partner1" href="/partner/trainer">
          <p class="p10">WOOF 제휴업체 지원</p>  
          <i class="fa-solid fa-arrow-right"></i>
          </a>
      </div>
    </div>
  </div>
  <ul class="productCeo-list"></ul>
  <br /><br /><br />
</template>

<script>
export default {};
</script>

<style scoped>
.box1 {
  display: flex;
  position: relative;
  /* flex-direction: column; */
  width: 100%;
  height: 673px;
  background-color: #faef71;
  align-items: center;
  /* margin-top: 80px; */
}

.box2 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 1440px;
  height: 770px;
  background: #faef71;
  position: relative;
}

.box3 {
  display: flex;
  flex-direction: column;
  align-self: center;
  position: absolute;
  top: 229px;
  left: 0;
  right: 0;
  margin: 0px auto;
  width: 1440px;
  z-index: 20;
}
.box6 {
  width: 1440px;
  margin: 0px auto;
  background-color: white;
  margin-top: 170px;
  padding-bottom: 180px;
  position: relative;
}

.box7 {
  display: flex;
  justify-content: space-between;
  padding: 0px 220px 0px 220px;
}
.box10 {
  width: 170px;
  height: 59px;

  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faef71;
}

.box11 {
  display: flex;
  /* padding: 0px 220px 0px 220px; */
  margin-top: 110px;
  background-color: #faef71;
}

.container {
  /* width: 320px; */
  margin-left: 240px;
}

.header-text {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-weight: 600;

  font-size: 85px;
  /* line-height: 87px; */
  color: #333333;
  /* margin-top: 80px; */

  font-weight: 600;

}

.sub-text-container {
  margin-top: 30px;
}

.sub-text {

  font-weight: 500;
    margin-top: 38px;
    font-size: 26px;
}


.text1 {
  padding-top: 72px;
}
.text2 {
  font-size: 47px;
  color: #333333;
  font-weight: 600;
  line-height: 67px;
}

.text3 {
  font-weight: 400;
  margin-top: 38px;
  font-size: 17px;
  color: #333333;
  letter-spacing: -0.1px;
  line-height: normal;
}

.p1 {
  font-size: 17px;
  color: #333333;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.text4 {
  margin-left: 125px;
}

.text5 {
  margin: 55px;
  font-size: 47px;
  color: #333333;
  font-weight: 600;
  line-height: 67px;
}
.text6 {
  font-weight: 400;
  margin-top: 38px;
  font-size: 17px;
  color: #333333;
  letter-spacing: -0.1px;
  line-height: normal;
  margin: 55px;
}

.text7 {
  width: 170px;
  height: 59px;

  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #dad857; */
  margin-left: 55px;
  border: 1px solid black;
}

.p2 {
  font-size: 17px;
  color: #333333;
  font-weight: 600;
  letter-spacing: -0.2px;
}
.box12 {
  display: flex;
  justify-content: space-between;
  padding: 0px 220px 0px 220px;
  margin-top: 110px;
}

.text8 {
  padding-top: 72px;
}

.text9 {
  font-size: 47px;
  color: #333333;
  font-weight: 600;
  line-height: 67px;
}

.text10 {
  font-weight: 400;
  margin-top: 38px;
  font-size: 17px;
  color: #333333;
  letter-spacing: -0.1px;
  line-height: normal;
}

.box15 {
  width: 170px;
  height: 59px;

  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faef71;
}

.p4 {
  font-size: 17px;
  color: #333333;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.box16 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f7f8;
  padding-top: 166px;
  padding-bottom: 180px;
}

.text11 {
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-top: 21px;
  font-size: 50px;
  line-height: 70px;
  color: #555555;
}

.text12 {
  padding-left: 45px;
  display: flex;
  align-items: center;
  margin-top: 34px;
}

.text13 {
  border-bottom: 2px solid #6a92fe;
  margin-right: 24px;
  padding-bottom: 5px;
  cursor: pointer;
}

.p5 {
  color: #6a92fe;
  font-size: 17px;
  font-weight: 600;
}

.text14 {
  border-bottom: 2px solid transparent;
  margin-right: 24px;
  padding-bottom: 5px;
  cursor: pointer;
}

.p6 {
  color: #bcbcbc;
  font-size: 17px;
  font-weight: 600;
}

.box17 {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin-top: 55px;
  justify-content: space-between;
  align-items: center;
}

.box18 {
  width: 310px;
  height: 230px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.09);
  margin: 16px 0px 16px 0px;
  padding: 21px;
}

.box19 {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
}

.box20 {
  position: absolute;
  display: flex;
  top: 30px;
  left: 0;
  right: 0;
  height: 17px;
  justify-content: center;
  align-items: center;
}

.review1 {
  margin-top: 60px;
  width: 600px;  /* 이 부분을 변경해 주세요. */
  height: 59px;
  border: 1px solid #6a92fe;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.p8 {
  font-weight: 600;
  color: #6a92fe;
  font-size: 18px;

  letter-spacing: -0.2px;
}

.review2 {
  background-color: #faef71;
  height: 700px;
}

.review3 {
  padding-top: 184px;
  width: 1116px;
  margin: 0px auto;
  height: 100%;
}

.review4 {
  position: relative;
  height: 100%;
  padding-left: 55px;
}
.review5 {
  font-weight: 600;
  letter-spacing: 0.2px;
  font-size: 47px;
  line-height: 70px;
  color: #333333;
}

.banner1 {
  font-size: 17px;
  font-weight: 400;
  margin-top: 38px;
  color: #333333;
  line-height: 30px;
}

.banner2 {
  width: 250px;
  height: 59px;
  border: 1.5px solid black;
  margin-top: 59px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 29px;
  padding-right: 22px;
  
}


.p9 {
  font-size: 17px;
  color: #333333;
  font-weight: bold;
  letter-spacing: -0.2px;
}

.partner1 {
  width: 250px;
  height: 59px;
  border: 1.5px solid black;
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 29px;
  padding-right: 22px;
}

.p10 {
  font-size: 17px;
  color: #333333;
  font-weight: bold;
  letter-spacing: -0.2px;
}





</style>
