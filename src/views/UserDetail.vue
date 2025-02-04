<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn prepend-icon="mdi-chevron-left" @click="go(-1)">Back</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-card :loading="isLoading">
          <!-- Card loader -->
          <template #loader="{ isActive }">
            <template v-if="isActive">
              <v-skeleton-loader type="list-item-avatar-two-line">
              </v-skeleton-loader>
              <v-skeleton-loader
                v-for="i in 4"
                :key="i"
                type="list-item-avatar"
              >
              </v-skeleton-loader>
            </template>
          </template>
          <!-- Card header -->
          <template #prepend>
            <v-icon size="x-large" icon="mdi-account"></v-icon>
          </template>
          <template #title>
            {{ user?.name }}
          </template>
          <template #subtitle>
            <v-chip size="small">
              <template #prepend>
                <v-icon size="medium" icon="mdi-at"></v-icon>
              </template>
              <template #default>
                <span class="pl-1">{{ user?.username }}</span>
              </template>
            </v-chip>
          </template>
          <!-- Card body -->
          <template #text>
            <v-list>
              <UserDetailField icon="mdi-at" :text="user?.email" />
              <UserDetailField icon="mdi-phone" :text="user?.phone" />
              <UserDetailField icon="mdi-web" :text="user?.website" />
              <UserDetailField icon="mdi-map-marker" :text="userAddress" />
              <UserDetailField icon="mdi-domain" :text="companyInfo" />
            </v-list>
          </template>
        </v-card>
        <v-card v-if="!user && !isLoading">
          <template #text>
            <p class="text-center">Oops... Something went wrong</p>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import UserDetailField from "@/components/UserDetailField.vue";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { AxiosIntance } from "@/axios";
import { UserListResponseItem } from "@/types/user";

const { currentRoute, go } = useRouter();
const user = ref<UserListResponseItem | null>(null);
const isLoading = ref<boolean>(false);

const userAddress = computed(() => {
  if (!user.value?.address) return "N/A";
  return `${user.value.address.street} ${user.value.address.suite} ${user.value.address.city} ${user.value.address.zipcode}`;
});
const companyInfo = computed(() => {
  if (!user.value?.company) return "N/A";
  return `${user.value?.company.name} ${user.value?.company.catchPhrase}`;
});

const getUserDetails = async () => {
  try {
    isLoading.value = true;
    const { data } = await AxiosIntance.get<UserListResponseItem>(
      `/users/${currentRoute.value.params.id}`
    );
    user.value = data;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getUserDetails();
});
</script>

<style lang="scss" scoped></style>
