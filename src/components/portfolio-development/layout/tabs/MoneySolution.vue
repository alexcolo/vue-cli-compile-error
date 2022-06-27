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
      <v-col cols="12" style="height: 35.1vh">
        <money-solution-chart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <money-solution-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import MoneySolutionChart from "@/components/portfolio-development/money-solution/MoneySolutionChart";
import MoneySolutionContainer from "@/components/portfolio-development/money-solution/MoneySolutionContainer";

export default {
  name: "MoneySolution",

  components: {
    UpdateDate,
    MoneySolutionChart,
    MoneySolutionContainer
  }
};
</script>
