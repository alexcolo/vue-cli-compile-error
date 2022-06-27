<template>
  <v-hover v-slot="{ hover }">
    <fullscreen-viz
      class="viz-wrapper"
      viz-name="summary-container-box"
      :drop-down-field="dropDownField"
      :is-hover="hover"
    >
      <qlik-viz
        name="summary-container-box"
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
  name: "SummaryContainer",

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
          await this.setFieldValList("summary-dl");
        }
      }
    }
  }

  //Replaced with a mixin
  // data: () => ({
  //   dropDownField: ""
  // }),

  // computed: {
  //   resourcesReady() {
  //     return getters.loadComplete();
  //   },
  //   currentLanguage() {
  //     return getters.getLanguageSelection();
  //   },
  //   combined() {
  //     return this.resourcesReady && this.currentLanguage;
  //   }
  // },

  // watch: {
  //   combined: {
  //     immediate: true,
  //     handler: async function() {
  //       if (this.combined) {
  //         const currentLanguage = this.currentLanguage;
  //         const fieldObject = getters.getFieldDefs(
  //           `summary-dl-${currentLanguage}`
  //         );
  //         this.dropDownField = fieldObject.field;
  //         await actions.setQlikFieldValList(fieldObject.field);
  //       }
  //     }
  //   }
  // }
};
</script>
