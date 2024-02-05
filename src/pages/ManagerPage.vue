<template>
    <div class="manager-top-wrapper">
        <h1 class="manager-title">훈련사를 소개합니다!</h1>
        <p class="manager-description">나와 우리 반려견에게 꼭 맞는 훈련사를 찾아보세요!</p>
    </div>
    <div id="manager-page-list">
        <CardComponent v-for="product in productList" :key="product.idx" />
    </div>
</template>
  
  
<script>
import CardComponent from '../components/CardComponent.vue'
export default {
    name: 'ManagerPage',
    data() {
        return { productList: [{ idx: 1 }, { idx: 2 }, { idx: 3 }, { idx: 4 }, { idx: 5 }, { idx: 6 }] }
    },
    components: {
        CardComponent
    }
}
</script>
  
<style>
#manager-page-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 75px;
    padding-top: 45px;
    background-color: #F7F8FA;
    padding: 50px 50px 0px 50px;
}

.manager-top-wrapper {
    margin-top: 80px;
    padding-top: 50px;
    width: 1000px;
    margin: 0px auto
}

.manager-title {
    font-size: 50px;
    font-weight: 600;
    color: #555555
}

.manager-description {
    font-size: 17px;
    color: #333333;
    margin-top: 24px
}</style>
  