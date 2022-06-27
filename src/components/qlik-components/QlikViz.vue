<template>
  <div :class="['qlik-viz-container', { 'toolbar-enabled': isToolbarEnabled }]">
    <div :ref="name" class="qlik-viz" v-show="isVizLoaded" />
    <div class="qlik-viz" v-show="!isVizLoaded">
      <slot>
        <v-skeleton-loader
          v-if="isSkeletonLoader"
          class="mx-auto pa-2"
          :type="loaderType"
          v-show="isLoaderEnabled"
        ></v-skeleton-loader>
        <viz-loading-indicator
          v-else
          :is-loader-enabled="isLoaderEnabled"
          v-bind:size="50"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import { getters } from "@/store";
import {
  attachVisualization,
  detachVisualization
} from "@/services/qlik-service";
import VizLoadingIndicator from "@/components/layout/VizLoadingIndicator";

export default {
  name: "QlikViz",

  components: {
    VizLoadingIndicator
  },

  props: {
    name: String,
    isToolbarEnabled: Boolean,
    isLoaderEnabled: {
      type: Boolean,
      default: true
    },
    isSkeletonLoader: {
      type: Boolean,
      default: false
    },
    loaderType: String,
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    observer: null,
    isVizLoaded: false,
    componentMounted: false
    // viz: null
  }),

  //I want to have viz object static, without vue reactivity. With vue reactivity we have an app freeze
  //I'm declaring it with custom option
  viz: null,

  computed: {
    isComponentMountedWithResources() {
      return this.componentMounted && getters.loadComplete();
    }
  },

  watch: {
    isComponentMountedWithResources: {
      immediate: true,
      handler: function() {
        this.loadVisualizationHandler();
      }
    }
  },

  created() {
    this.createObserver();
  },

  mounted() {
    this.componentMounted = true;
  },

  methods: {
    loadVisualizationHandler: async function() {
      if (this.isComponentMountedWithResources) {
        // attachVisualization(this.name, this.$refs[this.name], this.options);
        this.observeViz();
        //Access the custom option using $options
        this.$options.viz = await attachVisualization(
          this.name,
          this.$refs[this.name],
          this.options
        );
        // this.viz = viz.close;
        // this.observeViz();
      }
    },
    createObserver: function() {
      this.observer = new MutationObserver(
        function(_, observer) {
          this.isVizLoaded =
            this.$refs[this.name].firstChild?.childElementCount > 0 ?? false;
          if (this.isVizLoaded) {
            observer.disconnect();
          }
        }.bind(this)
      );
    },
    observeViz: function() {
      this.observer.observe(this.$refs[this.name], {
        childList: true,
        subtree: true
      });
    }
  },

  beforeDestroy() {
    this.observer.disconnect();
    //Closing visualization reading my non reactive data
    this.$options.viz.close();
    this.$options.viz = null;
    detachVisualization(this.name);
  }
};
</script>

<style lang="scss">
.qlik-viz-container {
  height: 100%;
  width: 100%;

  &.toolbar-enabled {
    height: calc(100% - 30px);
  }

  .qlik-viz {
    height: 100%;
  }
}
</style>
