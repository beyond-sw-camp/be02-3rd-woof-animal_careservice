import { defineStore } from "pinia";
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({ productCeoList: [] }),
  actions: {
    async getProductCeoList() {
      let response = await axios.get("http://localhost:8080/productCeo/listCeo");
      this.productCeoList = response.data.result;

      
      return this.productCeoList;
    },
  },
})