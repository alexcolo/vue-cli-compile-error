<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="key-figures-container-box-1"
      :drop-down-field="dropDownField"
      :is-hover="hover"
    >
      <qlik-viz
        name="key-figures-container-box-1"
        :options="{ height: '100%' }"
        :is-toolbar-enabled="true"
      />
    </fullscreen-viz>
  </v-hover>
</template>

<script>
import fieldValues from "@/mixins/field-values";
import QlikViz from "@/components/qlik-components/QlikViz";
import FullscreenViz from "@/components/layout/fullscreen/FullscreenViz";

export default {
  name: "KeyFiguresContainer1",

  mixins: [fieldValues],

  components: {
    QlikViz,
    FullscreenViz
  },

  watch: {
    combined: {
      immediate: true,
      handler: async function() {
        if (this.combined) {
          await this.setFieldValList("key-figures-dl");
        }
      }
    }
  }
};
</script>
