<template>
  <v-footer app padless color="primary" height="30vh">
    <strong class="text-color pl-3"
      >&#169; Intrum {{ new Date().getFullYear() }}</strong
    >
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style lang="scss">
.text-color {
  color: var(--v-toolbar-font-base);
}
</style>
