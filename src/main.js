import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// To include bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
// To import main.css file
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
