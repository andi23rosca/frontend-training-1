<template>
  <div class="section">
    <h3>Gating</h3>
    <slider v-model="gating" :max="13" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import Slider from "@vueform/slider";
import { withCells } from "../withCells";
export default defineComponent({
  components: {
    Slider,
  },
  setup() {
    // TODO: Receive this from a parent
    const cells = withCells();
    cells.fetch();

    return {
      gating: cells.gating,
    };
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>
