<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="solution-money-pre-collection-kpi-2"
      :is-hover="hover"
    >
      <qlik-viz
        name="solution-money-pre-collection-kpi-2"
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
  name: "MoneyPreCollection",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
