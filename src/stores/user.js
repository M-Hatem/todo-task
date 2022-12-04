import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
    user: {},
  }),
  actions: {
    async signInUser() {
      const response = await fetch("https://reqres.in/api/users/1");
      const res = await response.json();
      const { data: user } = res;

      if (user?.id) {
        this.userLoggedIn = true;
        this.user = user;
        return true;
      }

      return false;
    },
    signOutUser() {
      this.userLoggedIn = false;
      this.user = {};
    },
  },
});
