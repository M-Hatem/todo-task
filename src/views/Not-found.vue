<template>
  <section id="not-found-section">
    <div class="container">
      <div class="row flex-column align-items-center">
        <img
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg"
          alt="not-found"
        />
        <!-- class="w-50" -->

        <p class="text-center">
          Go back to
          <RouterLink class="link" to="/">Home</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Not-found",
};
</script>

<style lang="scss" scoped>
#not-found-section {
  img {
    width: 80%;
    height: 80%;
  }
}
</style>
