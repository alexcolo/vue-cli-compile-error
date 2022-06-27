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
                  {{ $t("solution.tabs." + item.tab) }}
                </v-tab>
                <v-spacer></v-spacer>
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
import manageContent from "@/mixins/manage-content";
import AppBar from "@/components/layout/app-bar/AppBar";
import AppFooter from "@/components/layout/footer/AppFooter";

export default {
  name: "SolutionContent",

  mixins: [manageContent],

  components: {
    AppBar,
    AppFooter
  },

  data: () => ({
    items: TABS.apps[3].items
  })
};
</script>

<style lang="scss">
@import "@/scss/shared-content.scss";
</style>
