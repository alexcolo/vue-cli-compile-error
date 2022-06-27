<template>
  <v-container fluid>
    <!-- Data updated label -->
    <v-row>
      <v-col cols="9" />
      <v-col cols="3" style="padding: 12px 12px 0 0;">
        <update-date />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="4" style="height: 23vh">
                <open-cases />
              </v-col>
              <v-col cols="4">
                <collection-cases />
              </v-col>
              <v-col cols="4">
                <surveillance />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="height: 25.7vh">
            <solution-by-days />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" style="height: 23vh">
            <collection-score />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="height: 25.7vh">
            <received-cases />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 21.5vh">
        <summary-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import OpenCases from "@/components/portfolio-development/summary/kpis/OpenCases";
import CollectionCases from "@/components/portfolio-development/summary/kpis/CollectionCases";
import Surveillance from "@/components/portfolio-development/summary/kpis/Surveillance";
import CollectionScore from "@/components/portfolio-development/summary/CollectionScore";
import ReceivedCases from "@/components/portfolio-development/summary/ReceivedCases";
import SummaryContainer from "@/components/portfolio-development/summary/SummaryContainer";
import SolutionByDays from "@/components/portfolio-development/summary/SolutionByDays.vue";

export default {
  name: "Summary",

  components: {
    UpdateDate,
    OpenCases,
    CollectionCases,
    Surveillance,
    CollectionScore,
    ReceivedCases,
    SummaryContainer,
    SolutionByDays
  }
};
</script>
