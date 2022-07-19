import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import vueAxios from "vue-axios";

const app = createApp(App);
app.use(vueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
