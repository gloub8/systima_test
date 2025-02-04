<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    temporary
    @update:model-value="(payload: boolean) => emits('update:model-value', payload)"
  >
    <v-list nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        exact
        @click="handleNavigation(item.routeName)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

export interface NavigationItem {
  title: string;
  routeName: string;
  icon: string;
}

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "update:model-value", value: boolean): void;
}>();

const router = useRouter();
const items: NavigationItem[] = [
  {
    title: "Users",
    routeName: "UserList",
    icon: "mdi-account-details",
  },
];
const handleNavigation = (payload: NavigationItem["routeName"]) => {
  router.push({ name: payload });
};
</script>

<style scoped></style>
