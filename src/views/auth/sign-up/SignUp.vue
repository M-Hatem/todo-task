<template>
  <section id="auth-section">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div
          class="col-10 col-md-6 col-lg-5 col-xl-4 py-4 px-5 bg-white auth-container"
        >
          <h3 class="auth-title text-center mb-3">Sign Up</h3>
          <div class="my-2 alert alert-danger text-center" v-if="onErr">
            Something went wrong! Try again later.
          </div>
          <vee-form
            class="auth-form mb-4"
            :validation-schema="schema"
            @submit="register"
          >
            <div class="row">
              <div class="auth-field mb-3 col-6">
                <label class="auth-label form-label" for="first_name">
                  First Name
                </label>
                <vee-field
                  id="first_name"
                  name="first_name"
                  type="text"
                  class="auth-input form-control"
                  placeholder="Ex. John"
                />
                <error-message
                  class="text-danger mt-2 d-block error-msg"
                  name="first_name"
                />
              </div>
              <div class="auth-field mb-3 col-6">
                <label class="auth-label form-label" for="first_name">
                  Second Name
                </label>
                <vee-field
                  id="second_name"
                  name="second_name"
                  type="text"
                  class="auth-input form-control"
                  placeholder="Ex. Mike"
                />
                <error-message
                  class="text-danger mt-2 d-block error-msg"
                  name="second_name"
                />
              </div>
              <div class="auth-field mb-3 col-12">
                <label class="auth-label form-label" for="email">Email</label>
                <vee-field
                  id="email"
                  name="email"
                  type="email"
                  class="auth-input form-control"
                  placeholder="Ex. mike@company.com"
                />
                <error-message
                  class="text-danger mt-2 d-block error-msg"
                  name="email"
                />
              </div>
              <div class="auth-field mb-4 col-12">
                <label class="auth-label form-label" for="password">
                  Password
                </label>
                <vee-field
                  id="password"
                  name="password"
                  type="password"
                  class="auth-input form-control"
                  placeholder="Your Password here"
                />
                <error-message
                  class="text-danger mt-2 d-block error-msg"
                  name="password"
                />
              </div>
              <div class="auth-field mb-4 col-12">
                <label class="auth-label form-label" for="confirm_password">
                  Confirm Password
                </label>
                <vee-field
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  class="auth-input form-control"
                  placeholder="Repeat Password here"
                />
                <error-message
                  class="text-danger mt-2 d-block error-msg"
                  name="confirm_password"
                />
              </div>
              <div class="text-center">
                <button class="btn btn-dark auth-submit" type="submit">
                  Sign up
                </button>
              </div>
            </div>
          </vee-form>
          <p class="register text-center">
            Already have an account?
            <br />
            <RouterLink to="/auth/sign-in">Sign in</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";

import useUserStore from "@/stores/user";

export default {
  name: "SignUp",
  data() {
    return {
      schema: {
        first_name: "required|alpha_spaces|min:4|max:100",
        second_name: "required|alpha_spaces|min:4|max:100",
        email: "required|min:3|max:100|email",
        password: "required|min:9|max:100",
        confirm_password: "required|confirmed:@password",
      },
      onErr: false,
    };
  },
  methods: {
    ...mapActions(useUserStore, ["signUpUser"]),

    async register(formData) {
      const response = await this.signUpUser(formData);

      // Navigate to home page if success
      if (response) this.$router.push("/");
      else {
        // reset form and show an error message
        this.onErr = true;
        resetForm();
      }
    },
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

    .error-msg {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    label {
      font-size: 13px;
    }
  }
}
</style>
