<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="open-cases-debt-restruc-phase-piechart"
      :title="
        $t('open-cases.restructuring.open-cases-debt-restruc-phase-piechart')
      "
      :is-hover="hover"
    >
      <qlik-viz
        name="open-cases-debt-restruc-phase-piechart"
        :options="{ height: '100%' }"
        :is-toolbar-enabled="true"
      />
    </fullscreen-viz>
  </v-hover>
</template>

<script>
import QlikViz from "@/components/qlik-components/QlikViz";
import FullscreenViz from "@/components/layout/fullscreen/FullscreenViz";

export default {
  name: "DebtRestructuringPhase",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
