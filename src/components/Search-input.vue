<template>
  <input
    type="text"
    class="form-control my-5"
    placeholder="Search"
    @input="search"
  />
</template>

<script>
export default {
  name: "Search-input",
  methods: {
    search(e) {
      const value = e.currentTarget.value.toLowerCase();
      this.$emit("search", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
