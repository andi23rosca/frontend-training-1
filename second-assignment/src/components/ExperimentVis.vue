<template>
  <div class="section">
    <h3>Visualizations</h3>
    <experiment-vis-histogram />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ExperimentVisHistogram from "./ExperimentVisHistogram.vue";

export default defineComponent({
  components: { ExperimentVisHistogram },
});
</script>
