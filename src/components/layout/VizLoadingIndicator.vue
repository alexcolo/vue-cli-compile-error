<template>
  <div id="viz-loading" class="d-flex justify-center align-center">
    <v-progress-circular
      class="text-center"
      :size="size"
      color="primary"
      indeterminate
      v-show="isLoaderEnabled"
    />
  </div>
</template>

<script>
export default {
  name: "VizLoadingIndicator",

  props: {
    size: {
      type: Number,
      default: 40
    },
    isLoaderEnabled: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
#viz-loading {
  height: 90%;
}
</style>
