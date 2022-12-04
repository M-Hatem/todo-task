<template>
  <section id="activities-section">
    <div class="container-md container-fluid">
      <div class="row justify-content-center">
        <div class="activities-container col-lg-8 col-12 py-4 px-5 my-5">
          <h1 class="activities-title text-center mb-5">To-Do List</h1>
          <div class="list-group">
            <Activity
              v-for="activity of activities"
              :activity="activity"
              :key="activity.id"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Activity from "@/components/Activity.vue";

import axios from "axios";

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Activities",
  components: {
    Activity,
  },
  data() {
    return {
      activities: {},
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      const { data: activities } = response;
      this.activities = activities.filter(
        (list) => list.userId === this.user.id
      );
      console.log(this.activities);
    });
  },
};
</script>

<style lang="scss" scoped>
#activities-section {
  .activities-container {
    box-shadow: 0 4px 6px #aaa;
    border-radius: 8px;

    .activities-title {
      font-family: "Lobster";
      text-decoration: underline;
    }
  }
}
</style>
