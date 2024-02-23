import { defineStore } from "pinia";
import axios from "axios";
import { toRaw } from "vue";

const backend = "http://www.woofwoof.kro.kr/api";

export const useManagerStore = defineStore("manager", {
  state: () => ({ isLoading: false, isLoggedIn: false }),
  actions: {
    async login(managerLogin) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/manager/login",
          toRaw(managerLogin)
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
    async signup(managerSignup) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/manager/signup",
          toRaw(managerSignup)
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