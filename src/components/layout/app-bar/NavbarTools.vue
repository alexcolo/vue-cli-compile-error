<template>
  <div>
    <v-btn icon style="top: 50%; transform: translateY(-50%);">
      <v-icon dense>mdi-file-table-outline</v-icon>
    </v-btn>

    <bookmarks></bookmarks>
  </div>
</template>

<script>
// import { getters, actions } from "@/store";
// import {
//   LANGUAGE_FILTER,
//   LANGUAGE_FIELD,
//   DASHBOARDS,
//   SELECTIONS_BAR_DEF
// } from "@/constants";
// import navigationRoute from "@/mixins/navigation-route";
// import { applySelection } from "@/services/selection-service";
import Bookmarks from "@/components/bookmarks/Bookmarks";
// import SelectionBar from "@/components/selection-bar/SelectionBar";

export default {
  name: "NavbarTools",

  // mixins: [navigationRoute],

  components: {
    Bookmarks
  },

  // props: {
  //   inQlikApp: Boolean
  // },

  data: () => ({
    dialog: false
  })

  // computed: {
  //   appLogo() {
  //     return require(`@/assets/images/Intrum_Logo_RGB_White.svg`);
  //   },
  //   currentLanguage() {
  //     return getters.getLanguageSelection();
  //   },
  //   appBarHeight() {
  //     return this.inQlikApp ? "192" : "64px";
  //   },
  //   currentMainPath() {
  //     return this.$route.path.substring(
  //       0,
  //       this.$route.path.split("/", 2).join("/").length
  //     );
  //   },
  //   currSelectionsVizName() {
  //     return this.selectinsBarDef[this.currentMainPath.substring(1)]
  //       .currSelectionsDef;
  //   },
  //   filtersVizName() {
  //     return this.selectinsBarDef[this.currentMainPath.substring(1)].filtersDef;
  //   }
  // },

  // methods: {
  //   changeLanguage: function(language) {
  //     this.$i18n.locale = language;
  //     actions.setLanguageSelection(language);

  //     let selections = {};
  //     selections[this.languageField] = [this.languageFilter[language]];
  //     applySelection(getters.getAppDefs(), selections);
  //   },
  //   backToHome: function() {
  //     if (this.inQlikApp) {
  //       this.$router.push("/");
  //     }
  //   }
  // }
};
</script>

<style lang="scss"></style>
