<template>
  <section>
    <div class="container h-100">
      <div
        class="row mt-5 justify-content-center align-items-center h-100 text-center"
      >
        <div class="home-container p-5 col-lg-6 col-md-7 col-10 bg-white">
          <h1>
            Welcome To <span class="text-success">To-Do List</span> Application
          </h1>

          <p class="my-5">Start by Adding your list</p>
          <AddNewAvtivity
            @click.prevent="
              $router.push(userLoggedIn ? { name: 'list' } : { name: 'signin' })
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddNewAvtivity from "../components/Add-activity.vue";

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Main-page",
  components: {
    AddNewAvtivity,
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 80vh;
  .home-container {
    border-radius: 8px;
    box-shadow: 0 2px 2px #888;
  }
}
</style>
