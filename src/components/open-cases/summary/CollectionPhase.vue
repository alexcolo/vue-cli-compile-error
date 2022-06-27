<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="open-cases-collection-phase-piechart"
      :title="$t('open-cases.summary.open-cases-collection-phase-piechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="open-cases-collection-phase-piechart"
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
  name: "CollectionPhase",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
