import { defineStore } from "pinia";
import axios from 'axios';

const backend = "http://10.10.10.10/api";

export const useProductManagerStore = defineStore('productManager', {
  state: () => ({ productManagerList: [] }),
  actions: {
    async getProductManagerList() {
      let response = await axios.get(backend+"/productManager/listManager");
      this.productManagerList = response.data.result;

      
      return this.productManagerList;
    },
  },
})