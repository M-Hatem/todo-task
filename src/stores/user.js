import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: localStorage.getItem("token") ? true : false,
    // Current user
    user: {},
  }),

  actions: {
    // To sign in user
    async signInUser(formData) {
      const { email } = formData;

      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const res = await response.json();

      const { token } = res;
      const user = {
        // default value because api doesn't return an id for the user when logging in
        id: 4,

        email,
        avatar: "../assets/default-pic.svg",
      };

      if (token) {
        this.userLoggedIn = true;
        localStorage.setItem("token", token);

        this.user = user;
        return true;
      }

      return false;
    },

    // To sign up user
    async signUpUser(formData) {
      const { email, password } = formData;
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      const { id, token } = data;

      const user = {
        id,
        email,
        avatar: "../assets/default-pic.svg",
      };

      if (token) {
        this.userLoggedIn = true;
        localStorage.setItem("token", token);

        this.user = user;
        return true;
      }

      return false;
    },

    // To sign out the user
    signOutUser() {
      this.userLoggedIn = false;
      this.user = {};
      localStorage.clear();
    },
  },
});
