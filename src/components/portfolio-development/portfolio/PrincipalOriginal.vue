<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="principal-original-linechart"
      :title="$t('portfolio-dev.portfolio.principal-original-linechart')"
      :is-hover="hover"
    >
      <qlik-viz
        name="principal-original-linechart"
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
  name: "PrincipalOriginal",

  components: {
    QlikViz,
    FullscreenViz
  }
};
</script>
