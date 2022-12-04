import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// To import main.css file
import "./assets/main.css";
// To include bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
