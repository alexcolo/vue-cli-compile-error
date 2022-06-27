<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-if="vizName"
          v-bind="attrs"
          v-on="on"
          @click="setCurrContainerEl"
        >
          <v-icon>mdi-file-pdf-box</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">PDF Settings</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span class="text-h6">Paper Size</span>
                <v-select
                  :items="pdfPaperSizes"
                  v-model="pdfPaperSize"
                  label="Solo field"
                  solo
                  :value="pdfPaperSize"
                ></v-select>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <span class="text-h6">Orientation</span>
                <v-radio-group v-model="pdfOrientation" row>
                  <v-radio label="Portrait" value="portrait"></v-radio>
                  <v-radio label="Landscape" value="landscape"></v-radio>
                </v-radio-group>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <span class="text-h6">Aspect Ratio</span>
                <v-radio-group v-model="pdfAspectRatio" row>
                  <v-radio label="Fit to Page" v-bind:value="2"></v-radio>
                  <v-radio label="Custom Size" v-bind:value="0"></v-radio>
                </v-radio-group>
                <v-row>
                  <v-col cols="6">
                    <v-expand-transition>
                      <div v-if="pdfAspectRatio === 0">
                        <v-text-field
                          label="Height"
                          v-model="pdfHeight"
                        ></v-text-field>
                      </div>
                    </v-expand-transition>
                  </v-col>
                  <v-col cols="6">
                    <v-expand-transition>
                      <div v-if="pdfAspectRatio === 0">
                        <v-text-field
                          label="Width"
                          v-model="pdfWidth"
                        ></v-text-field>
                      </div>
                    </v-expand-transition>
                  </v-col>
                </v-row>
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
            @click="downloadPdf"
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
import { PDF_PAPER_SIZES, PDF_PAPER_SIZE_DEFAULT } from "@/constants";

export default {
  name: "DownloadVizPdf",

  props: {
    vizName: String
  },

  data: () => ({
    downloadingViz: false,
    dialog: false,
    pdfPaperSizes: PDF_PAPER_SIZES,
    pdfPaperSize: PDF_PAPER_SIZE_DEFAULT,
    pdfOrientation: "landscape",
    pdfAspectRatio: 2,
    pdfHeight: 200,
    pdfWidth: 400,
    currContainerElement: null
  }),

  methods: {
    setCurrContainerEl: function(event) {
      this.currContainerElement = event.target.closest(".viz-wrapper"); //Need for get correct container when have multiple viz-lib-container
    },
    fixUrl: function(url) {
      return url.startsWith("https://")
        ? url
        : `${window.location.origin}${url}`;
    },
    downloadPdf: async function(e) {
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
        // if (this.vizName.includes("vizlib-container-box")) {
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

        let settings;
        if (this.pdfAspectRatio === 2) {
          settings = {
            documentSize: this.pdfPaperSize,
            orientation: this.pdfOrientation,
            aspectRatio: this.pdfAspectRatio
          };
        } else {
          settings = {
            documentSize: this.pdfPaperSize.value,
            orientation: this.pdfOrientation,
            aspectRatio: this.pdfAspectRatio,
            objectSize: { height: this.pdfHeight, width: this.pdfWidth }
          };
        }
        const url = await viz.exportPdf(settings);
        window.open(this.fixUrl(url), "_blank");
        viz.close();
      } finally {
        this.downloadingViz = false;
      }
    }
  }
};
</script>
