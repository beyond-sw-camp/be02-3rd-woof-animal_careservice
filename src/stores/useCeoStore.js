import { defineStore } from "pinia";
import axios from "axios";
import { toRaw } from "vue";

const backend = "http://www.woofwoof.kro.kr/api";

export const useCeoStore = defineStore("ceo", {
  state: () => ({ isLoading: false, isLoggedIn: false }),
  actions: {
    async login(ceoLogin) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/ceo/login",
          toRaw(ceoLogin)
        );
        if (response.status === 200 && response.data.accessToken != null) {
          sessionStorage.setItem("atoken", response.data.accessToken);

          this.isLoggedIn = true;
  
          return true;
        }
      } catch (e) {
        console.log(e);
        return false;
      } finally {
        this.isLoading = false;
      }
      return false;
    },
    async signup(ceoSignup) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/ceo/signup",
          toRaw(ceoSignup)
        );
        this.isLoading = false;

        if (response.status === 200 && response.data.isSuccess === true) {
          return true;
        }
      } catch (e) {
        return false;
      } finally {
        this.isLoading = false;
      }
      return false;

    },
  },
});