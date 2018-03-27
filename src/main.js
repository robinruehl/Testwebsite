// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Fun from "./routes/fun";
import Home from "./routes/home";
import Mission from "./routes/mission";
import Creator from "./routes/creator";
import Gamemodes from "./fun/gamemodes";
import Gamemodestest from "./fun/gamemodestest";
import Gamemodessurf from "./fun/gamemodessurf";
import Gamemodesjail from "./fun/gamemodesjail";
import Gamemodesminigame from "./fun/gamemodesminigame";

import DeFun from "./routes/defun";
import DeHome from "./routes/dehome";
import DeMission from "./routes/demission";
import DeCreator from "./routes/decreator";
//import DeGamemodes from "./fun/gamemodes";
import DeGamemodestest from "./fun/degamemodestest";
import DeGamemodessurf from "./fun/degamemodessurf";
import DeGamemodesjail from "./fun/degamemodesjail";
import DeGamemodesminigame from "./fun/degamemodesminigame";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [

  { path: "/fun", name: 'Fun', component: Fun },
  { path: "/", name: 'Home', component: Home },
  { path: "/mission", name: 'Mission', component: Mission },
  { path: "/creator", name: 'Creator', component: Creator },
  { path: "/fun/gamemodes", name: 'Gamemodes', component: Gamemodes },
  { path: "/fun/gamemodes/test", name: 'Test1', component: Gamemodestest },
  { path: "/fun/gamemodes/surf", name: 'Surf', component: Gamemodessurf },
  { path: "/fun/gamemodes/jail", name: 'Jail', component: Gamemodesjail },
  { path: "/fun/gamemodes/minigame", name: 'Minigame', component: Gamemodesminigame },

  { path: "/de/fun", name: 'DeFun', component: DeFun },
  { path: "/de/", name: 'DeHome', component: DeHome },
  { path: "/de/mission", name: 'DeMission', component: DeMission },
  { path: "/de/creator", name: 'DeCreator', component: DeCreator },
  //{ path: "/de/fun/gamemodes", name: 'DeGamemodes', component: DeGamemodes },
  { path: "/de/fun/gamemodes/test", name: 'DeTest1', component: DeGamemodestest },
  { path: "/de/fun/gamemodes/surf", name: 'DeSurf', component: DeGamemodessurf },
  { path: "/de/fun/gamemodes/jail", name: 'DeJail', component: DeGamemodesjail },
  { path: "/de/fun/gamemodes/minigame", name: 'DeMinigame', component: DeGamemodesminigame },
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
