<template>
  <div>
    <histogram :data="cells" />
  </div>
</template>
<script lang="ts">
//@ts-ignore
import HistogramSlider from "vue-histogram-slider";
import "vue-histogram-slider/dist/histogram-slider.css";

import { computed, defineComponent } from "vue";
import { withCells } from "../withCells";
import Histogram from "../helpers/Histogram.vue";

export default defineComponent({
  components: {
    HistogramSlider,
    Histogram,
  },
  setup() {
    // TODO: Receive this from a parent
    const cells = withCells();
    cells.fetch();

    return {
      cells: computed(() => cells.cells.value.map((c) => c.size)),
    };
  },
});
</script>
