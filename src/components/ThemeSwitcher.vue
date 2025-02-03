<template>
  <v-switch
    :model-value="computedThemeValue"
    @update:model-value="toggleTheme"
    hide-details
  >
    <template #prepend>
      <v-icon icon="mdi-white-balance-sunny"></v-icon>
    </template>
    <template #append>
      <v-icon icon="mdi-moon-waning-crescent"></v-icon>
    </template>
  </v-switch>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const computedThemeValue = computed(() => {
  return theme.global.name.value === "dark";
});
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<style scoped></style>
