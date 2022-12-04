<template>
  <a
    href="#"
    class="list-group-item list-group-item-action text-md-center d-flex justify-content-center align-items-center"
    :class="{ 'activity-done': activity.completed }"
    @click.prevent="activity.completed = !activity.completed"
  >
    <span v-if="!editMode">{{ activity.title }}</span>
    <input
      type="text"
      class="form-control w-100 me-3"
      v-model="activity.title"
      v-else
    />
    <div class="d-flex ms-auto">
      <button
        class="btn btn-secondary me-2"
        v-if="!editMode"
        @click.stop.prevent="editActivity"
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button
        class="btn btn-secondary me-2"
        v-else
        @click.stop.prevent="saveActivity"
      >
        <i class="fa-solid fa-thumbs-up"></i>
      </button>
      <button
        class="delete-btn btn btn-danger"
        @click.stop.prevent="deleteActivity"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </a>
</template>

<script>
import axios from "axios";

// To import sweetalert
import Swal from "sweetalert2";

export default {
  name: "Activity",
  data() {
    return {
      editMode: false,
    };
  },
  props: ["activity"],
  methods: {
    deleteActivity() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://jsonplaceholder.typicode.com/todos/${this.activity.id}`
            )
            .then((res) => {
              const { status } = res;

              if (status === 200) {
                this.$emit("refreshList", this.activity);
              }
            });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your item has been deleted",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    // To start editing
    editActivity() {
      this.editMode = true;
    },
    // To save editing
    saveActivity() {
      if (!this.activity.title) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must fill the input first!",
        });
        return;
      }

      this.activity.completed = false;

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your item has been saved",
        showConfirmButton: false,
        timer: 1000,
      });

      this.editMode = false;
    },
  },

  updated() {
    !this.activity.title ? (this.editMode = true) : "";
  },
};
</script>

<style lang="scss" scoped>
.activity-done span {
  color: red;
  text-decoration: line-through;
}

@media (max-width: 768px) {
  .list-group-item {
    font-size: 12px;

    i {
      font-size: 12px;
    }
  }
}
</style>
