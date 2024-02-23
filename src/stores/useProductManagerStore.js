import { defineStore } from "pinia";
import axios from 'axios';

export const useProductManagerStore = defineStore('productManager', {
  state: () => ({ productManagerList: [] }),
  actions: {
    async getProductManagerList() {
      let response = await axios.get("http://www.woofwoof.kro.kr/api/productManager/listManager");
      this.productManagerList = response.data.result;

      
      return this.productManagerList;
    },
  },
})