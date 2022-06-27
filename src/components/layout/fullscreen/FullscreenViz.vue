<template>
  <v-sheet>
    <viz-toolbar
      :v-show="false"
      v-if="showCollapsedToolbar"
      :title="closedDialogTitle"
      :class="{ 'has-viz-info': vizInfo }"
      :viz-name="vizName"
      :drop-down-field="dropDownField"
    >
      <template v-slot:toolbar-title v-if="useTitleSlot || closedDialogVizInfo">
      </template>

      <v-scale-transition origin="center center">
        <download-viz-excel :viz-name="vizName" v-show="isHover" />
      </v-scale-transition>

      <v-scale-transition origin="center center">
        <download-viz-pdf :viz-name="vizName" v-show="isHover" />
      </v-scale-transition>

      <v-scale-transition origin="center center">
        <v-btn icon @click="toggleFullscreen(true)" v-show="isHover">
          <v-icon>mdi-arrow-expand</v-icon>
        </v-btn>
      </v-scale-transition>
    </viz-toolbar>
    <slot />

    <v-dialog fullscreen v-model="isFullscreen">
      <v-sheet height="100%">
        <viz-toolbar
          :class="{ 'has-viz-info': vizInfo }"
          :title="title"
          :viz-name="vizName"
          :drop-down-field="dropDownField"
        >
          <template v-slot:toolbar-title v-if="useTitleSlot || vizInfo">
          </template>

          <download-viz-excel :viz-name="vizName" />
          <download-viz-pdf :viz-name="vizName" />
          <v-btn icon @click="toggleFullscreen(false)">
            <v-icon>mdi-arrow-collapse</v-icon>
          </v-btn>
        </viz-toolbar>

        <slot />
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script>
import ResizeMixin from "@/mixins/resize";
import Toolbar from "@/components/layout/toolbar/Toolbar";
import DownloadVizExcel from "@/components/download-viz/DownloadVizExcel";
import DownloadVizPdf from "@/components/download-viz/DownloadVizPdf";

export default {
  name: "FullscreenViz",

  mixins: [ResizeMixin],

  components: {
    VizToolbar: Toolbar,
    DownloadVizExcel,
    DownloadVizPdf
  },

  props: {
    title: String,
    vizName: String,
    vizInfo: String,
    dropDownField: String,
    useTitleSlot: Boolean,
    fullscreenMode: Boolean,
    showTitleOnlyInFullscreen: Boolean,
    showCollapsedToolbar: {
      type: Boolean,
      default: true
    },
    isHover: Boolean
  },

  data: () => ({
    isFullscreen: false,
    dialog: false
  }),

  computed: {
    closedDialogTitle: function() {
      return this.showTitleOnlyInFullscreen ? "" : this.title;
    },
    closedDialogVizInfo: function() {
      return this.showTitleOnlyInFullscreen ? "" : this.vizInfo;
    }
  },

  watch: {
    fullscreenMode: function() {
      this.isFullscreen = this.fullscreenMode;
    },
    isFullscreen: async function() {
      this.resizeViz();
    }
  },

  methods: {
    toggleFullscreen: async function(isFullscreen) {
      this.isFullscreen = isFullscreen;
      this.$emit("fullscreen-mode-changed", isFullscreen);
    }
  }
};
</script>
