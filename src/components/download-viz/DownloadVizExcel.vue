<template>
  <!-- <v-btn icon v-if="vizName" :loading="downloadingViz" @click="downloadExcel">
    <v-icon>mdi-file-download</v-icon>
  </v-btn> -->
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-if="vizName" v-bind="attrs" v-on="on">
          <v-icon>mdi-file-download</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Excel Settings</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span class="text-h6">Data Format</span>
                <v-select
                  :items="dataFormats"
                  v-model="dataFormat"
                  label="Solo field"
                  solo
                  :value="dataFormat"
                ></v-select>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="downloadExcel"
            :loading="downloadingViz"
          >
            Export
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  getViz,
  getVizInActiveContainerTab
} from "@/services/qlik-visualization-service";
import { DATA_FORMATS, DATA_FORMAT_DEFAULT } from "@/constants";

export default {
  name: "DownloadVizExcel",

  props: {
    vizName: String
  },

  data: () => ({
    downloadingViz: false,
    dialog: false,
    dataFormats: DATA_FORMATS,
    dataFormat: DATA_FORMAT_DEFAULT,
    currContainerElement: null
  }),

  methods: {
    // setCurrContainerEl: function(event) {
    //   this.currContainerElement = event.target.closest(".viz-wrapper"); //Need for get correct container when have multiple viz-lib-container
    // },
    fixUrl: function(url) {
      return url.startsWith("https://")
        ? url
        : `${window.location.origin}${url}`;
    },
    downloadExcel: async function(e) {
      e && (e.cancelBubble = true);
      this.downloadingViz = true;

      try {
        let viz = await getViz(this.vizName);

        if (this.vizName.includes("container-box")) {
          viz = await getVizInActiveContainerTab(this.vizName);
        }

        // ******** 20220302: Commented due to migration from Viz container to native container
        //Manage vizlib container box for geting active qlik viz.
        //Need this because Viz Container has no active container property in engine GetLayout API
        // if (this.vizName.includes("container-box")) {
        //   //Manage a specific viz with a vizlib continaer box in a vizlib container box
        //   if (this.vizName === "key-figures-vizlib-container-box-2-extension") {
        //     const nestedViz = await getVizInActiveContainerTab(
        //       viz.model.layout.props.tabs,
        //       this.currContainerElement
        //     );
        //     viz = await getVizInActiveContainerTab(
        //       nestedViz.model.layout.props.tabs,
        //       this.currContainerElement,
        //       1
        //     );
        //   } else {
        //     viz = await getVizInActiveContainerTab(
        //       viz.model.layout.props.tabs,
        //       this.currContainerElement
        //     );
        //   }
        // }

        let settings = {
          format: this.dataFormat
        };
        const url = await viz.table.exportData(settings);
        window.open(this.fixUrl(url), "_blank");
        viz.close();
      } finally {
        this.downloadingViz = false;
      }
    }
  }
};
</script>

<style></style>
