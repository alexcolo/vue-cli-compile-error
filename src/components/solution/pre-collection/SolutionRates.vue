<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="solution-solution-rates"
      :title="$t('solution.total.solution-rates')"
      :is-hover="hover"
    >
      <qlik-viz
        name="solution-solution-rates"
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
  name: "SolutionRates",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
