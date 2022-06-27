<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="money-solution-perc-linechart"
      :is-hover="hover"
    >
      <qlik-viz
        name="money-solution-perc-linechart"
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
  name: "MoneySolutionChart",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
