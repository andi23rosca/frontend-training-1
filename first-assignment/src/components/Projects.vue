<template>
  <div v-if="projectsState === 'none' || projectsState === 'loaded'">
    <li v-for="project in projects" :key="project">{{ project }}</li>
  </div>
  <div v-else>Loading...</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { fetchProjects } from "../helpers";
export default defineComponent({
  data() {
    return {
      projects: [] as string[],
      projectsState: "none" as "none" | "loading" | "loaded",
    };
  },
  created() {
    this.projectsState = "loading";
    fetchProjects().then((projects) => {
      this.projects = projects;
      this.projectsState = "loaded";
    });
  },
});
</script>
