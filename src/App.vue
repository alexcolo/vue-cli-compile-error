<template>
  <router-view></router-view>
</template>

<script>
import { actions } from "@/store";

export default {
  name: "App",

  created() {
    actions.fetchQlikResources();
    actions.fetchStartupBookmark();
    actions.setLanguageSelection(this.$i18n.locale);
  }
};
</script>
