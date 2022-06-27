<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="received-cases-linechart"
      :title="$t('portfolio-dev.summary.received-cases-linechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="received-cases-linechart"
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
  name: "ReceivedCases",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
