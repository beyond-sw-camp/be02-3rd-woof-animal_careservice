<template>
  <div class="all">
    <div class="productCeoBanner">
      <div class="productCeoBannerTxt">
        <h1>내가 찾던 반려동물 시설</h1>
        <p class="txt2">반려동물에게 필요한 시설을 찾아보세요!</p>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.productCeoBanner {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background-size: cover;
}

.productCeoBannerTxt {
  display: flex;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}

.txt2 {
  margin-left: 100px;
}

.productCeoBannerTxt>h1 {
  font-size: 50px;
  font-weight: 600;
  color: #333333;
}

.productCeoBannerTxt>p {
  font-size: 17px;
  color: #333333;
  margin-top: 24px;
  width: 349px;
}
</style>