import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
// To import validation
import VeeValidationPlugin from "./includes/validation";

// To include bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
// To import main.css file
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VeeValidationPlugin);

app.mount("#app");
