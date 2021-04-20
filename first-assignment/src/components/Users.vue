<template>
  <div v-if="usersState === 'none' || usersState === 'loaded'">
    <li v-for="user in users" :key="user">{{ user }}</li>
  </div>
  <div v-else>Loading...</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { fetchUsers } from "../helpers";
export default defineComponent({
  data() {
    return {
      users: [] as string[],
      usersState: "none" as "none" | "loading" | "loaded",
    };
  },
  created() {
    this.usersState = "loading";
    fetchUsers().then((users) => {
      this.users = users;
      this.usersState = "loaded";
    });
  },
});
</script>
