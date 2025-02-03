import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: { name: "UserList" },
    },
    {
      path: "/users",
      children: [
        {
          path: "",
          name: "UserList",
          component: () => import("@/views/UserList.vue"),
        },
        {
          path: ":id",
          name: "UserDetail",
          component: () => import("@/views/UserDetail.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/404.vue"),
    },
  ],
});
