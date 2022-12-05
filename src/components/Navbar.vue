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
          <li class="nav-item ms-lg-2">
            <RouterLink
              class="nav-link"
              :to="{ name: 'list' }"
              v-if="userStore.userLoggedIn"
            >
              My List
            </RouterLink>
          </li>
          <li class="nav-item ms-lg-auto d-flex">
            <img
              src="../assets/default-pic.svg"
              class="rounded-circle"
              v-if="userStore.userLoggedIn"
            />
            <RouterLink
              class="nav-link"
              to="/auth/sign-in"
              v-if="!userStore.userLoggedIn"
            >
              Sign In / Sign Up
            </RouterLink>
            <a class="nav-link" @click.stop.prevent="signOut" v-else>
              Sign Out
            </a>
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
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  .home-icon {
    width: 30px;
  }

  .nav-link {
    cursor: pointer;
  }
}
</style>
