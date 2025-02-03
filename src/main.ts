// App
import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// Router
import { router } from "@/router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
