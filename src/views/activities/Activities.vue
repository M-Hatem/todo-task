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
              @refreshList="removeActivity"
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

import { mapState, mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import useListStore from "@/stores/list";

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
    ...mapWritableState(useListStore, ["list"]),
  },
  methods: {
    async getAllList() {
      if (!this.list.length) {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/todos?userId=${this.user.id}`
          )
          .then((response) => {
            const { data: activities } = response;
            this.activities = activities;
            this.list = activities;
          });
      } else {
        this.activities = this.list;
      }
    },

    // To remove an activity from the list
    removeActivity(activity) {
      this.activities = this.activities.filter((l) => l.id !== activity.id);
      this.list = this.activities;
    },
  },
  created() {
    this.getAllList();
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
