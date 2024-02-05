<template>
  <div class="all">
    <div class="productManagerBanner">
      <div class="productManagerBannerTxt">
        <h1>훈련사를 소개합니다!</h1>
        <p class="txt2">나와 우리 반려견에게 꼭 맞는 훈련사를 찾아보세요!</p>
    </div>
</div>
<router-view></router-view>
</div>
</template>
    <!-- <div id="manager-page-list">
        <ProductManagerCardComponent v-for="product in productList" :key="product.idx" />
    </div> -->

<script>
// import ProductManagerCardComponent from '../components/productManager/ProductManagerCardComponent.vue'
export default {
    // name: 'ProductManagerPage',
    // data() {
    //     return { productList: [{ idx: 1 }, { idx: 2 }, { idx: 3 }, { idx: 4 }, { idx: 5 }, { idx: 6 }] }
    // },
    // components: {
    //     ProductManagerCardComponent
    // }
}
</script>
  
<style scoped>
.productManagerBanner {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background-size: cover;
}

.productManagerBannerTxt {
  display: flex;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}

.txt2 {
  margin-left: 41px;
}

.productManagerBannerTxt>h1 {
  font-size: 50px;
  font-weight: 600;
  color: #333333;
}

.productManagerBannerTxt>p {
  font-size: 17px;
  color: #333333;
  margin-top: 24px;
}
</style>