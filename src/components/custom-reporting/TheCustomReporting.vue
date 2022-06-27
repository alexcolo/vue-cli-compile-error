<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      :viz-name="currentApp + '-' + viz + '-cr'"
      :is-hover="hover"
    >
      <qlik-viz
        :name="currentApp + '-' + viz + '-cr'"
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
  name: "TheCustomReporting",

  mixins: [managePath],

  props: {
    viz: String
  },

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
