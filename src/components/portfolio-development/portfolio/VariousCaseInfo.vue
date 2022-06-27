<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="various-case-info-linechart"
      :title="$t('portfolio-dev.portfolio.various-case-info-linechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="various-case-info-linechart"
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
  name: "VariousCaseInfo",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
