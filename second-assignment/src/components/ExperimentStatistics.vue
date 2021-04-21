<template>
  <div class="section">
    <h3>Statistics</h3>
    <div>Experiment date: {{ new Date().toLocaleString() }}</div>
    <div>Nr. of cells: {{ cells.length }}</div>
    <div>Average size: {{ average.toFixed(1) }}</div>
    <div>Size standard dev.: {{ deviation.toFixed(1) }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { withCells } from "../withCells";

export default defineComponent({
  setup() {
    // TODO: Receive this from a parent
    const cells = withCells();
    cells.fetch();

    return {
      cells: cells.cells,
      average: cells.average,
      deviation: cells.deviation,
    };
  },
});
</script>
