<template>
  <p
    v-if="reloadTime"
    class="text-right"
    style="margin-bottom: 0; font-family: IntrumSansRegularItalic;"
  >
    {{ $t("label.update-date") }} {{ reloadTime }}
  </p>
  <v-layout v-else align-center justify-center column fill-height>
    <v-progress-circular
      size="20"
      width="3"
      color="primary"
      indeterminate
      v-show="!reloadTime"
    ></v-progress-circular>
  </v-layout>
</template>

<script>
import { getters } from "@/store";

export default {
  name: "UpdateDate",

  computed: {
    reloadTime() {
      return getters.lastRefresh();
    }
  }
};
</script>
