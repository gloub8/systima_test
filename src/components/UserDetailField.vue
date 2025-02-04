<template>
  <v-tooltip v-if="smAndDown" :text="text">
    <template #activator="{ props }">
      <span v-bind="props">{{ text }}</span>
    </template>
  </v-tooltip>
  <span v-else>{{ text }}</span>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
const { smAndDown } = useDisplay();

defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
