<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="collection-score-piechart"
      :title="$t('portfolio-dev.summary.collection-score-piechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="collection-score-piechart"
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
  name: "CollectionScore",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
