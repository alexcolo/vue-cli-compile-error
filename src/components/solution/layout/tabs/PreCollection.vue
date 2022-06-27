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
      <v-col cols="12">
        <v-row>
          <v-col cols="2" style="height: 12vh">
            <item-pre-collection />
          </v-col>
          <v-col>
            <item-collection />
          </v-col>
          <v-col>
            <cases-sent-kpi />
          </v-col>
          <v-col>
            <money-pre-collection />
          </v-col>
          <v-col>
            <money-collection />
          </v-col>
          <v-col>
            <money-solution />
          </v-col>
          <v-col>
            <item-solution />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6" style="height: 31.1vh">
            <solution-rates />
          </v-col>
          <v-col cols="12" md="6" style="height: 31.1vh">
            <cases-sent />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 27.1vh">
        <total-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import ItemPreCollection from "@/components/solution/pre-collection/kpis/ItemPreCollection.vue";
import ItemCollection from "@/components/solution/pre-collection/kpis/ItemCollection.vue";
import CasesSentKpi from "@/components/solution/pre-collection/kpis/CasesSentKpi.vue";
import MoneyPreCollection from "@/components/solution/pre-collection/kpis/MoneyPreCollection.vue";
import MoneyCollection from "@/components/solution/pre-collection/kpis/MoneyCollection.vue";
import MoneySolution from "@/components/solution/pre-collection/kpis/MoneySolution.vue";
import ItemSolution from "@/components/solution/pre-collection/kpis/ItemSolution.vue";
import SolutionRates from "@/components/solution/pre-collection/SolutionRates.vue";
import CasesSent from "@/components/solution/pre-collection/CasesSent.vue";
import TotalContainer from "@/components/solution/pre-collection/TotalContainer.vue";

export default {
  name: "OpenCasesSummary",

  components: {
    UpdateDate,
    ItemPreCollection,
    ItemCollection,
    CasesSentKpi,
    MoneyPreCollection,
    MoneyCollection,
    MoneySolution,
    ItemSolution,
    SolutionRates,
    CasesSent,
    TotalContainer
  }
};
</script>
