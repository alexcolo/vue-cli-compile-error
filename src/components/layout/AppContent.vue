<template>
  <v-app>
    <app-bar :in-qlik-app="false" />
    <v-main app style="padding-top: 74px">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-sheet elevation="4" min-height="88.2vh">
              <v-row>
                <!-- empty row for some initial space -->
                <v-col cols="12" style="padding-top:35px;"> </v-col>
              </v-row>
              <v-row v-for="dashboard in dashboards" :key="dashboard.id">
                <v-col cols="12">
                  <v-layout align-center justify-center>
                    <v-card
                      class="mx-6 cards-land-page"
                      width="115vh"
                      height="20vh"
                    >
                      <v-toolbar
                        :color="'light-pretrol'"
                        elevation="0"
                        @click="goToDashboard(dashboard.path)"
                      >
                        <v-toolbar-title>{{
                          $t(dashboard.id + ".landing-page-title")
                        }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="goToDashboard(dashboard.path)">
                          <v-icon>mdi-arrow-right-circle-outline</v-icon>
                        </v-btn>
                      </v-toolbar>

                      <!-- <v-card-subtitle class="pb-0">
                        This is the subtitle
                      </v-card-subtitle> -->

                      <v-card-text class="text--primary text-subtitle-1">
                        <div>
                          {{ $t(dashboard.id + ".landing-page-descr") }}
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-layout>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import { DASHBOARDS } from "@/constants";
import navigationRoute from "@/mixins/navigation-route";
import AppBar from "@/components/layout/app-bar/AppBar";
import AppFooter from "@/components/layout/footer/AppFooter";

export default {
  name: "AppContent",

  mixins: [navigationRoute],

  data: () => ({
    dashboardNum: 3,
    dashboards: DASHBOARDS
  }),

  components: {
    AppBar,
    AppFooter
  }
};
</script>

<style lang="scss">
.cards-land-page {
  .v-toolbar__content {
    cursor: pointer;
  }
}</style
>;
