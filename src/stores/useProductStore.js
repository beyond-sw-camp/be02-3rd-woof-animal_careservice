import { defineStore } from "pinia";
import axios from 'axios';

const backend = "http://10.10.10.10/api";


export const useProductStore = defineStore('product', {
  state: () => ({ productCeoList: [] }),
  actions: {
    async getProductCeoList() {
      let response = await axios.get(backend+"/productCeo/listCeo");
      this.productCeoList = response.data.result;

      
      return this.productCeoList;
    },
  },
})