<template>
  <section id="auth-section">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div
          class="col-10 col-md-6 col-lg-5 col-xl-4 p-5 bg-white auth-container"
        >
          <h3 class="auth-title text-center mb-4">Sign In</h3>
          <vee-form class="auth-form mb-4" :validation-schema="schema">
            <div class="auth-field mb-3">
              <label class="auth-label form-label" for="email">Email</label>
              <vee-field
                id="email"
                name="email"
                type="email"
                class="auth-input form-control"
                placeholder="Ex. mike@company.com"
              />
              <error-message class="text-danger" name="email" />
            </div>
            <div class="auth-field mb-4">
              <label class="auth-label form-label" for="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                class="auth-input form-control"
                placeholder="Your Password here"
              />
              <error-message class="text-danger" name="password" />
            </div>
            <div class="text-center">
              <button class="btn btn-dark auth-submit" type="submit">
                Sign in
              </button>
            </div>
          </vee-form>
          <p class="register text-center">
            Don't have an account?
            <br />
            <RouterLink to="/auth/sign-up">Register here</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SignIn",
  data() {
    return {
      schema: {
        email: "required|min:3|max:100|email",
        password: "required|min:9|max:100",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#auth-section {
  height: 100vh;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 32%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(../../../assets/auth-background.jpg);
  background-size: cover;

  .auth-container {
    border-radius: 8px;
    box-shadow: 0px 5px 8px #555;
    .auth-input:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
}
</style>
