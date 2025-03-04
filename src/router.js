import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/missioncommander",
    name: "missioncommander",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/missioncommander/:id",
    name: "missioncommander-details",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/addMC",
    name: "add-missioncommander",
    component: () => import("./components/AddMissionCommander")
  },
  {
    path: "/explorers",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
