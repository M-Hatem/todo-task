<template>
  <a
    href="#"
    class="list-group-item list-group-item-action text-md-center d-flex justify-content-center align-items-center"
    :class="{ 'activity-done': activity.completed }"
    @click.prevent="activity.completed = !activity.completed"
  >
    <span>{{ activity.title }}</span>
    <div class="d-flex ms-auto">
      <button class="btn btn-secondary me-2">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="delete-btn btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </a>
</template>

<script>
export default {
  name: "Activity",
  props: ["activity"],
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