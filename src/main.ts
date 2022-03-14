import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/theme.scss";

import EtherBridge from "@/integration/etherBridge";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCartShopping, faEthereum);

const app = createApp(App);

//const bridgeInstance = EtherBridge.deploy();
//app.provide('etherBridge', bridgeInstance);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
