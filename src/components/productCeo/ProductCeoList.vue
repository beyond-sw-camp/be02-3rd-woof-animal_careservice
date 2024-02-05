<template>
  <div id="page-list">
    <ProductCeoCardComponent v-for="productCeo in productStore.productCeoList" :key="productCeo.idx" :productCeo="productCeo"/>
  </div>
</template>

  
<script>
import { mapStores } from 'pinia'
import { useProductStore } from '@/stores/useProductStore';

import ProductCeoCardComponent from '@/components/productCeo/ProductCeoCardComponent.vue'
export default {
    name: 'ProductCeoPage',
    components: {
      ProductCeoCardComponent
    },
    computed: {
        ...mapStores(useProductStore)
    },
    mounted() {
        this.productStore.getProductCeoList()
    }
}
</script>


  
<style>
#page-list {
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 50px 0px 0px 0px;
    padding: 50px 0px 100px 0px;
    background-color: #f7f8fa;
}
</style>
  