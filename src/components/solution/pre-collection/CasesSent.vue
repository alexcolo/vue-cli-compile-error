<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="solution-item-cases-sent"
      :title="$t('solution.total.solution-item-cases-sent')"
      :is-hover="hover"
    >
      <qlik-viz
        name="solution-item-cases-sent"
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
  name: "CasesSent",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
