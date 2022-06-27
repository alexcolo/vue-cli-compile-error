<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="open-cases-summary-collection-kpi"
      :is-hover="hover"
    >
      <qlik-viz
        name="open-cases-summary-collection-kpi"
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
  name: "Collection",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
