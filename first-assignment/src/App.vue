<template>
  <div>
    <Users class="container" />
    <Projects class="container" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Users from "./components/Users.vue";
import Projects from "./components/Projects.vue";
export default defineComponent({
  components: {
    Users,
    Projects,
  },
});
</script>
<style scoped>
.container {
  padding: 1rem;
}
</style>
