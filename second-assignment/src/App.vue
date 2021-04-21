<template>
  <div class="section">
    <h1>My app</h1>
    <experiment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Experiment from "./components/Experiment.vue";

export default defineComponent({
  components: { Experiment },
});
</script>
<style>
.section {
  padding: 1rem;
  border: solid #ddd 1px;
}
</style>
