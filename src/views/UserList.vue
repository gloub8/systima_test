<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" sm="3" md="4">
        <v-text-field
          v-model="query.name"
          label="Name"
          placeholder="Search by name..."
          hide-details
          variant="solo"
          clearable
          @click:clear="handleQueryClear('name')"
        />
      </v-col>
      <v-col cols="12" sm="3" md="4">
        <v-text-field
          v-model="query.email"
          label="Email"
          placeholder="Search by email..."
          hide-details
          variant="solo"
          clearable
          @click:clear="handleQueryClear('name')"
        />
      </v-col>
      <v-col cols="auto" sm="auto" md="auto">
        <v-btn text="Clear" @click="handleQueryClear(undefined)">
          <template #prepend>
            <v-icon icon="mdi-close"></v-icon>
          </template>
        </v-btn>
      </v-col>
      <v-col cols="auto" sm="auto" md="auto">
        <v-btn text="Search" @click="getUserList">
          <template #prepend>
            <v-icon icon="mdi-magnify"></v-icon>
          </template>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table-server
          :loading="isLoading"
          :headers="HEADERS"
          :items="userList"
          v-model:items-per-page="query._limit"
          v-model:page="query._page"
          :items-per-page-options="ITEMS_PER_PAGE_OPTIONS"
          :items-length="MAX_ITEMS"
          @update:options="getUserList"
        >
          <template #item="{ item, internalItem }">
            <v-data-table-row
              :item="internalItem"
              @click="navigateToUser(item.id)"
            ></v-data-table-row>
          </template>
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { AxiosIntance } from "@/axios";
import { UserListResponseItem } from "@/types/user";

type Query = {
  name: string | null;
  email: string | null;
  _page: number;
  _limit: number;
};
const ITEMS_PER_PAGE_OPTIONS: number[] = [1, 5, 10];
const MAX_ITEMS = 10;
const HEADERS = [
  { title: "Name", value: "name" },
  { title: "Email", value: "email" },
  { title: "Phone", value: "phone" },
  { title: "Company Name", key: "company.name" },
];

const router = useRouter();
const isLoading = ref<boolean>(false);
const query = reactive<Query>({
  name: null,
  email: null,
  _page: 1,
  _limit: 5,
});
const userList = ref<UserListResponseItem[]>([]);

const handleQueryClear = (queryKey?: keyof Query) => {
  switch (queryKey) {
    case "name":
      query.name = null;
      break;
    case "email":
      query.email = null;
      break;
    case "_page":
      query._page = 1;
      break;
    case "_limit":
      query._limit = 10;
      break;
    default:
      query.name = null;
      query.email = null;
      query._page = 1;
      query._limit = 10;
  }
  getUserList();
};
const getUserList = async () => {
  try {
    isLoading.value = true;
    const { data } = await AxiosIntance.get<UserListResponseItem[]>("/users", {
      params: query,
    });
    userList.value = data;
  } finally {
    isLoading.value = false;
  }
};

const navigateToUser = (id: number) => {
  router.push({ name: "UserDetail", params: { id } });
};
</script>
