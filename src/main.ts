// App
import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// Router
import { router } from "@/router";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import {
  VApp,
  VAppBar,
  VAppBarTitle,
  VDataTable,
  VBtn,
  VIcon,
  VRow,
  VCol,
  VSwitch,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemTitle,
  VMain,
  VContainer,
} from "vuetify/components";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
  },
  defaults: {
    VBtn: {
      style: "text-transform: none;",
    },
  },
  components: {
    VApp,
    VAppBar,
    VAppBarTitle,
    VDataTable,
    VBtn,
    VIcon,
    VRow,
    VCol,
    VSwitch,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemTitle,
    VMain,
    VContainer,
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
