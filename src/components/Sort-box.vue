<template>
  <span class="d-inline-block mb-3">
    <span class="fs-5 me-2">Sort By:</span>
    <span class="me-2 text-primary">Descending</span>
    <Toggle v-model="isSorted" @change="sort" />
    <span class="ms-2 text-danger">Ascending</span>
  </span>
</template>

<script>
import Toggle from "@vueform/toggle";

export default {
  name: "Sort-box",
  components: {
    Toggle,
  },
  data() {
    return {
      isSorted: false,
    };
  },
  methods: {
    sort() {
      this.$emit("sort", this.isSorted);
    },
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
