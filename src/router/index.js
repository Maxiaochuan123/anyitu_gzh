import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {  // 车抵贷
      path: "/mortgage",
      name: "mortgage",
      component: () => import("../views/mortgage.vue")
    },
    {  //车分期
      path: "/byStages",
      name: "byStages",
      component: () => import("../views/byStages.vue")
    }
  ]
});
export default router;
