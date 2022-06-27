<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="open-cases-restruc-not-collection-kpi"
      :is-hover="hover"
    >
      <qlik-viz
        name="open-cases-restruc-not-collection-kpi"
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
  name: "NotCollection",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
