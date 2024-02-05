<template>
        <div class="button-container">
      <br>
      <button @click="goToProductCreatePage">매니저 등록</button>
      <br><br>
        </div>
    <div id="manager-page-list">
        <ProductManagerCardComponent v-for="productManager in productManagerStore.productManagerList" :key="productManager.idx" :productManager="productManager"/>
    </div>
</template>

  
<script>
import { mapStores } from 'pinia'
import { useProductManagerStore } from '@/stores/useProductManagerStore';

import ProductManagerCardComponent from '@/components/productManager/ProductManagerCardComponent.vue'
export default {
    name: 'ProductManagerPage',
    data() {
        return { managerList: [{ idx: 1 }, { idx: 2 }, { idx: 3 }, { idx: 4 }, { idx: 5 }, { idx: 6 }] }
    },
    components: {
      ProductManagerCardComponent
    },
    computed: {
        ...mapStores(useProductManagerStore)
    },
    mounted() {
        this.productManagerStore.getProductManagerList()
    },
    methods:{
        goToProductCreatePage() {
      this.$router.push("/productManager/create");
    },  
    }
}
</script>


  
<style>
#manager-page-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F7F8FA;
    box-sizing: border-box;
}

.button-container {
  text-align: right;
  padding-right: 40px;
  background-color: #F7F8FA;
}
.button-container button{
  font-size:18px;
  font-weight:600;
  padding: 5px 10px;
  color:white;
  letter-spacing:0.2px;
  border: none;
  background-color: #fae14a;
}
.button-container button:hover {
  color: #555555;
}
</style>
  