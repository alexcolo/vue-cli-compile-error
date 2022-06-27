<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="solution-by-days-barchart"
      :title="$t('portfolio-dev.summary.solution-by-days-barchart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="solution-by-days-barchart"
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
  name: "SolutionByDays",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
