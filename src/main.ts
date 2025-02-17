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
  VDataTableServer,
  VDataTableRow,
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
  VTextField,
  VCard,
  VFadeTransition,
  VChip,
  VSkeletonLoader,
  VTooltip,
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
    VTooltip: {
      location: "top",
    },
  },
  components: {
    VApp,
    VAppBar,
    VAppBarTitle,
    VDataTableServer,
    VDataTableRow,
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
    VTextField,
    VCard,
    VFadeTransition,
    VChip,
    VSkeletonLoader,
    VTooltip,
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
