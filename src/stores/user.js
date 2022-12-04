import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
    // Current user
    user: {},
  }),

  actions: {
    // To sign in user
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

    // To sign up user
    async signUpUser(formData) {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          avatar: "../assets/default-pic.svg",
        }),
      });
      const data = await response.json();

      console.log(data);

      if (data.id) {
        this.userLoggedIn = true;
        this.user = data;
        return true;
      }

      return false;
    },

    // To sign out the user
    signOutUser() {
      this.userLoggedIn = false;
      this.user = {};
    },
  },
});
