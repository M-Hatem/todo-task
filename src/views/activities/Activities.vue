<template>
  <section id="activities-section">
    <div class="container-md container-fluid">
      <div class="row justify-content-center">
        <div class="activities-container col-lg-8 col-12 py-4 px-5 my-5">
          <h1 class="activities-title text-center mb-5">To-Do List</h1>
          <SearchInput @search="searchValue" />
          <SortBox @sort="sort" />
          <AddNewActivity @addNew="addActivity" />
          <Spinner v-if="isLoading" />
          <div class="list-group" v-else>
            <Activity
              v-for="activity of activities"
              :activity="activity"
              :key="activity.id"
              @refreshList="removeActivity"
              @saveData="saveData"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Activity from "@/components/Activity.vue";
import AddNewActivity from "@/components/Add-activity.vue";
import Spinner from "@/components/Spinner.vue";
import SearchInput from "../../components/Search-input.vue";
import SortBox from "../../components/Sort-box.vue";

import axios from "axios";
import Swal from "sweetalert2";

import { mapState, mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import useListStore from "@/stores/list";

export default {
  name: "Activities",
  components: {
    Activity,
    AddNewActivity,
    Spinner,
    SearchInput,
    SortBox,
  },
  data() {
    return {
      activities: {},
      isLoading: true,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapWritableState(useListStore, ["list"]),
  },
  methods: {
    getAllList() {
      if (!localStorage.getItem("list")) {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/todos?userId=${this.user.id}`
          )
          .then((response) => {
            const { data: activities } = response;
            this.activities = activities.sort((a, b) => (a.id > b.id ? -1 : 1));
            this.list = this.activities;
            localStorage.setItem("list", JSON.stringify(this.list));
            this.isLoading = false;
          });
      } else {
        this.list = JSON.parse(localStorage.getItem("list"));
        this.activities = this.list;
        this.isLoading = false;
      }
    },

    // To remove an activity from the list
    removeActivity(activity) {
      this.activities = this.activities.filter((l) => l.id !== activity.id);
      this.list = this.activities;
    },

    // To add new Activity
    addActivity() {
      // check if the latest one is empty
      if (!this.activities[0].title) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must fill the latest one first",
        });
        return;
      }

      this.activities.unshift({
        userId: this.user.id,
        completed: false,
        id: this.activities[0].id + 1,
        title: "",
      });
      this.list = this.activities;
    },

    // To search for a value in list
    searchValue(value) {
      const list = JSON.parse(localStorage.getItem("list"));

      if (!value) {
        this.activities = list;
        return;
      }

      this.activities = list.filter((l) =>
        Object.values(l).toString().toLowerCase().includes(value)
      );
      this.link = this.activities;
    },

    // To sort list by order
    sort(value) {
      const list = JSON.parse(localStorage.getItem("list"));

      if (!value) {
        this.activities = list.sort((a, b) => (a > b ? -1 : 1));
        return;
      }

      this.activities = list.sort((a, b) => (a > b ? 1 : -1));
    },

    // To save list data in localstorage to keep the state
    saveData() {
      localStorage.setItem("list", JSON.stringify(this.list));
    },
  },
  created() {
    this.getAllList();
  },
  updated() {
    this.saveData();
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
