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
          <v-col style="height: 35.1vh">
            <cases-line-chart />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <cases-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import CasesLineChart from "@/components/balance-events/cases/CasesLineChart.vue";
import CasesContainer from "@/components/balance-events/cases/CasesContainer.vue";

export default {
  name: "Cases",

  components: {
    UpdateDate,
    CasesLineChart,
    CasesContainer
  }
};
</script>
