<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="collection-score-color-linechart"
      :title="$t('portfolio-dev.portfolio.collection-score-color-linechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="collection-score-color-linechart"
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
  name: "CollectionScoreColor",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
