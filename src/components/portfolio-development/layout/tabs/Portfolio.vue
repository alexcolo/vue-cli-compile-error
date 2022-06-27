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
          <v-col cols="12" style="height: 24.1vh">
            <portfolio-solution-perc />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="height: 24.1vh">
            <various-case-info />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" style="height: 24.1vh">
            <principal-original />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="height: 24.1vh">
            <collection-score-color />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 22vh">
        <portfolio-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import PortfolioSolutionPerc from "@/components/portfolio-development/portfolio/PortfolioSolutionPerc";
import VariousCaseInfo from "@/components/portfolio-development/portfolio/VariousCaseInfo";
import PrincipalOriginal from "@/components/portfolio-development/portfolio/PrincipalOriginal";
import CollectionScoreColor from "@/components/portfolio-development/portfolio/CollectionScoreColor";
import PortfolioTable from "@/components/portfolio-development/portfolio/PortfolioTable";

export default {
  name: "Portfolio",

  components: {
    UpdateDate,
    PortfolioSolutionPerc,
    VariousCaseInfo,
    PrincipalOriginal,
    CollectionScoreColor,
    PortfolioTable
  }
};
</script>
