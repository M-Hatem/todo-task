<template>
  <button
    class="btn w-100 add-container p-2 d-flex justify-content-center align-items-center mb-4"
    @click.stop.prevent="$emit('addNew')"
  >
    <i class="fa-solid fa-plus"></i>
  </button>
</template>

<script>
export default {
  name: "AddNewActivity",
};
</script>

<style lang="scss" scoped>
.add-container {
  background-color: #4ba34b;
  color: #fff;
  border-radius: 8px;

  &:hover {
    background-color: green;
  }
}
</style>
