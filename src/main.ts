import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";


import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/theme.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCartShopping);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
