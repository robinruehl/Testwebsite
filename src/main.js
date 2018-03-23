// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Fun from "./routes/fun";
import Home from "./routes/home";
import Mission from "./routes/mission";
import Creator from "./routes/creator";
//import Gamemodes from "./routes/fun/gamemodes";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/fun", name: 'Fun', component: Fun },
  { path: "/", name: 'Home', component: Home },
  { path: "/mission", name: 'Mission', component: Mission },
  { path: "/creator", name: 'Creator', component: Creator },
  //{ path: "/fun/gamemodes", name: 'Gamemodes', component: Gamemodes }
  ];

const router = new VueRouter({
  routes
});


new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
