import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { fetchCells, mean, deviation as getDev } from "./helpers";

export function withCells() {
  const realCells = ref<{ size: number }[]>([]);
  const gating = ref([0, 20]);

  /**
   * Filtered cells based on gating
   */
  const cells = computed(() =>
    realCells.value.filter(
      (c) => c.size >= gating.value[0] && c.size <= gating.value[1]
    )
  );

  const average = computed(() => mean(cells.value.map((c) => c.size)));
  const deviation = computed(() => getDev(cells.value.map((c) => c.size)));

  function fetch() {
    realCells.value = fetchCells();
  }

  return {
    cells,
    fetch,
    average,
    deviation,
    gating,
  };
}

export type CellsProvider = ReturnType<typeof withCells>;
