import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "boxicons/css/boxicons.min.css";

createApp(App).use(store).use(router).mount("#app");
