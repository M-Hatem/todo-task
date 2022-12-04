<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <RouterLink to="/">
        <img
          src="https://e7.pngegg.com/pngimages/629/289/png-clipart-computer-icons-checklist-icon-design-graphic-design-information-miscellaneous-text.png"
          alt="home-icon"
          class="home-icon"
        />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex">
          <li class="nav-item ms-2">
            <a class="nav-link" v-if="userStore.userLoggedIn"> New Activity </a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" v-if="userStore.userLoggedIn"> Manage </a>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink
              class="nav-link"
              to="/auth/sign-in"
              v-if="!userStore.userLoggedIn"
            >
              Sign In / Sign Up
            </RouterLink>
            <a class="nav-link" @click.prevent="signOut" v-else> Sign Out </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

import { mapStores } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Navbar",
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    signOut() {
      this.userStore.signOutUser();
    },
  },
  // methods: {
  //   ...mapActions(useUserStore, ["signOutUser"]),
  //   signOut() {
  //     signOutUser();
  //   },
  // },
};
</script>

<style scoped lang="scss">
nav {
  .home-icon {
    width: 30px;
  }
}
</style>
