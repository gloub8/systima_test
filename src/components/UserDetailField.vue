<template>
  <v-list-item>
    <template #prepend>
      <v-icon :icon="icon"></v-icon>
    </template>
    <template #title>
      <v-tooltip v-if="smAndDown" :text="computedText">
        <template #activator="{ props }">
          <span v-bind="props">{{ computedText }}</span>
        </template>
      </v-tooltip>
      <span v-else>{{ computedText }}</span>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { smAndDown } = useDisplay();

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: true,
  },
});
const computedText = computed(() =>
  props.text === null || props.text === undefined ? "N/A" : props.text
);
</script>
