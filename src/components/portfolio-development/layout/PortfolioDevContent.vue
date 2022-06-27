<template>
  <v-app>
    <app-bar :in-qlik-app="true" />
    <v-main app>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-sheet elevation="4" class="d-flex">
              <v-tabs vertical color="font">
                <v-tab
                  v-for="item in items"
                  :key="item.tab"
                  :to="item.navPath"
                  :class="[
                    'justify-start tab-item-font',
                    {
                      'v-tab--active':
                        currentRoutePath === '/' && item.tab === items[0].tab
                    }
                  ]"
                >
                  {{ $t("portfolio-dev.tabs." + item.tab) }}
                </v-tab>
                <v-spacer></v-spacer>
                <p v-show="radios && enableRadioButton" class="px-4">
                  {{ $t("portfolio-dev.portfolio.radio-include-withdrawn") }}
                </p>
                <v-radio-group
                  v-show="radios && enableRadioButton"
                  v-model="radios"
                  row
                  class="px-4 pb-16"
                  @change="changeRadio(radios)"
                >
                  <v-radio label="Yes" value="Yes"></v-radio>
                  <v-radio label="No" value="No"></v-radio>
                </v-radio-group>
                <v-progress-circular
                  size="30"
                  width="3"
                  color="primary"
                  indeterminate
                  v-show="!radios && enableRadioButton"
                  class="position-progress"
                ></v-progress-circular>
              </v-tabs>
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import { TABS } from "@/constants";
import { setVariableByName } from "@/services/qlik-variable-service";
import manageContent from "@/mixins/manage-content";
import AppBar from "@/components/layout/app-bar/AppBar";
import AppFooter from "@/components/layout/footer/AppFooter";

export default {
  name: "PortfolioDevContent",

  mixins: [manageContent],

  components: {
    AppBar,
    AppFooter
  },

  data: () => ({
    items: TABS.apps[0].items,
    radios: null,
    variableObjName: "radio-include-withdrawn-variable"
  }),

  methods: {
    changeRadio(value) {
      setVariableByName(this.variableObjName, value);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/shared-content.scss";
</style>
