<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-btn icon="mdi-menu" @click="drawer = !drawer" />
      </template>
      <v-app-bar-title>Systima Test</v-app-bar-title>
      <template v-slot:append>
        <ThemeSwitcher />
      </template>
    </v-app-bar>
    <NavigationDrawer v-model="drawer" />
    <v-main>
      <RouterView #default="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </RouterView>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

const drawer = ref<boolean>(false);
</script>
