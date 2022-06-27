<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="open-cases-summary-debt-restructuring-kpi"
      :is-hover="hover"
    >
      <qlik-viz
        name="open-cases-summary-debt-restructuring-kpi"
        :options="{ height: '100%' }"
        :is-toolbar-enabled="true"
        loader-type="image"
      />
    </fullscreen-viz>
  </v-hover>
</template>

<script>
import QlikViz from "@/components/qlik-components/QlikViz";
import FullscreenViz from "@/components/layout/fullscreen/FullscreenViz";

export default {
  name: "DebtRestructuring",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
