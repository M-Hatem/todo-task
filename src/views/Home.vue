<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "../components/Navbar.vue";

import { RouterView } from "vue-router";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>
