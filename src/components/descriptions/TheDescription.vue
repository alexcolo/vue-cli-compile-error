<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      :viz-name="currentApp + '-descriptions'"
      :is-hover="hover"
    >
      <qlik-viz
        :name="currentApp + '-descriptions'"
        :options="{ height: '100%' }"
        :is-toolbar-enabled="true"
      />
    </fullscreen-viz>
  </v-hover>
</template>

<script>
import managePath from "@/mixins/manage-path";
import QlikViz from "@/components/qlik-components/QlikViz";
import FullscreenViz from "@/components/layout/fullscreen/FullscreenViz";

export default {
  name: "TheDescription",

  mixins: [managePath],

  components: {
    QlikViz,
    FullscreenViz
  },

  computed: {
    currentApp() {
      return this.getCurrentMainPath(this.$route.path);
    }
  }
};
</script>
