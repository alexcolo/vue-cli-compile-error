<template>
  <v-toolbar
    height="30px"
    :flat="flat"
    width="100%"
    v-bind="$attrs"
    :class="{ 'is-drawer-toolbar': isDrawerToolbar }"
  >
    <v-toolbar-title class="subtitle-1 font-weight-medium">
      <slot name="toolbar-title">
        {{ title }}
      </slot>
    </v-toolbar-title>
    <the-select
      v-show="!title && vizName.includes('container-box')"
      :field="dropDownField"
      class="select-container"
    />
    <v-spacer></v-spacer>
    <slot />
    <template v-slot:extension v-if="isExtended">
      <slot name="extension" />
    </template>
  </v-toolbar>
</template>

<script>
import TheSelect from "@/components/layout/select/TheSelect";

export default {
  name: "Toollbar",

  components: {
    TheSelect
  },

  props: {
    title: String,
    flat: {
      type: Boolean,
      default: true
    },
    isExtended: Boolean,
    isDrawerToolbar: Boolean,
    vizName: String,
    dropDownField: String,
    isFullscreen: Boolean
  }
};
</script>

<style lang="scss">
.has-viz-info {
  .v-toolbar__title {
    overflow: visible;
  }
}
div.select-container {
  .v-input__slot {
    width: 33vh;
  }
}
</style>
