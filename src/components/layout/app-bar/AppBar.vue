<template>
  <v-app-bar app color="primary" :height="appBarHeight">
    <div style="width: 100%; display: flex; height: 4rem;">
      <v-app-bar-title>
        <img
          :src="appLogo"
          alt="Intrum Logo"
          :class="['app-logo', { pointer: inQlikApp }]"
          @click="backToHome"
        />
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="lang-container">
        <div
          :class="[
            'lang-item',
            { 'text-decoration-underline': currentLanguage === 'en' }
          ]"
          v-on:click="changeLanguage('en')"
        >
          ENGLISH
        </div>

        <v-divider vertical class="mx-4 lang-diveder"> </v-divider>

        <div
          :class="[
            'lang-item',
            { 'text-decoration-underline': currentLanguage === 'no' }
          ]"
          v-on:click="changeLanguage('no')"
        >
          NORWEGIAN
        </div>
      </div>
    </div>

    <div v-show="inQlikApp" class="navigation-box">
      <div
        v-for="dashboard in dashboards"
        :key="dashboard.id"
        @click="goToDashboard(dashboard.path)"
        :class="[
          'navigation-item',
          { 'navigation-curr-item': dashboard.path === currentMainPath }
        ]"
      >
        {{ $t(dashboard.id + ".landing-page-title") }}
      </div>
      <v-spacer></v-spacer>
      <bookmarks></bookmarks>
    </div>

    <div v-if="inQlikApp" style="width: 100%;">
      <selection-bar
        :curr-selections="currSelectionsVizName"
        :filter-prefix="filtersVizName"
        :filters-number="filtersNumber"
      />
    </div>
  </v-app-bar>
</template>

<script>
import { getters, actions } from "@/store";
import {
  LANGUAGE_FILTER,
  LANGUAGE_FIELD,
  DASHBOARDS,
  SELECTIONS_BAR_DEF
} from "@/constants";
import navigationRoute from "@/mixins/navigation-route";
import { applySelection } from "@/services/selection-service";

import SelectionBar from "@/components/selection-bar/SelectionBar";
import Bookmarks from "@/components/bookmarks/Bookmarks";

export default {
  name: "AppBar",

  mixins: [navigationRoute],

  components: {
    SelectionBar,
    Bookmarks
  },

  props: {
    inQlikApp: Boolean
  },

  data: () => ({
    languageFilter: LANGUAGE_FILTER,
    languageField: LANGUAGE_FIELD,
    dashboards: DASHBOARDS,
    selectinsBarDef: SELECTIONS_BAR_DEF
  }),

  computed: {
    appLogo() {
      return require(`@/assets/images/Intrum_Logo_RGB_White.svg`);
    },
    currentLanguage() {
      return getters.getLanguageSelection();
    },
    appBarHeight() {
      return this.inQlikApp ? "192" : "64px";
    },
    currentMainPath() {
      return this.$route.path.substring(
        0,
        this.$route.path.split("/", 2).join("/").length
      );
    },
    currSelectionsVizName() {
      return this.selectinsBarDef[this.currentMainPath.substring(1)]
        .currSelectionsDef;
    },
    filtersVizName() {
      return this.selectinsBarDef[this.currentMainPath.substring(1)].filtersDef;
    },
    filtersNumber() {
      return getters.filtersNumber(this.currentMainPath.substring(1));
    }
  },

  methods: {
    changeLanguage: function(language) {
      this.$i18n.locale = language;
      actions.setLanguageSelection(language);

      let selections = {};
      selections[this.languageField] = [this.languageFilter[language]];
      applySelection(getters.qlikCurrentApp(), selections);
    },
    backToHome: function() {
      if (this.inQlikApp) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss">
.v-app-bar {
  &.v-app-bar--fixed.v-sheet.v-toolbar.theme--light {
    background-color: #ffffff;
  }

  .v-app-bar-title {
    height: 4rem;

    .v-app-bar-title__content {
      height: 4rem;
    }
  }

  .v-toolbar__title {
    padding-left: 0 !important;

    .app-logo {
      height: 4rem;
    }
    .pointer {
      cursor: pointer;
    }
  }

  .v-toolbar__content {
    padding: 0;
    display: block;

    //Override Qlik style: hide Selections button at the end of selections bar
    .buttons-end {
      display: none;
    }

    .lang-container {
      width: 205px;
      display: flex;
      padding-top: 23px;
      padding-bottom: 19px;
    }

    .lang-item {
      cursor: pointer;
      color: var(--v-toolbar-font-base);
      font-family: "IntrumSansBold";
      font-size: 14px;
    }

    .lang-diveder {
      border-color: var(--v-toolbar-font-base);
    }
  }

  .v-toolbar__extension {
    padding-left: 0;
    padding-right: 0;
  }

  .navigation-box {
    width: 100%;
    background-color: var(--v-toolbar-font-base);
    height: 2.3rem;
    display: flex;

    .navigation-item {
      padding: 7px 0px;
      margin: 0px 30px;
      cursor: pointer;
    }

    .navigation-curr-item {
      font-family: "IntrumSansBold";
      text-decoration: underline;
    }
  }
}
</style>
