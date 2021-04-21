<template>
  <div class="section">
    <h2>Experiment</h2>
    <experiment-gating />
    <br />
    <div class="container">
      <experiment-vis />
      <experiment-statistics />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ExperimentGating from "./ExperimentGating.vue";
import ExperimentStatistics from "./ExperimentStatistics.vue";
import ExperimentVis from "./ExperimentVis.vue";

export default defineComponent({
  components: {
    ExperimentStatistics,
    ExperimentVis,
    ExperimentGating,
  },
});
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
}
</style>
