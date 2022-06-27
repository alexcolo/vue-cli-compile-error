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
          <v-col style="height: 12vh">
            <int-cases />
          </v-col>
          <v-col>
            <principal-origin />
          </v-col>
          <v-col>
            <outstanding-balance />
          </v-col>
          <v-col>
            <countries />
          </v-col>
          <v-col>
            <agent-flag />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6" style="height: 29.1vh">
            <top-countries />
          </v-col>
          <v-col cols="12" md="6" style="height: 29.1vh">
            <debt-restructuring-phase />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 29.1vh">
        <int-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import IntCases from "@/components/open-cases/international/kpis/IntCases.vue";
import PrincipalOrigin from "@/components/open-cases/international/kpis/PrincipalOrigin.vue";
import OutstandingBalance from "@/components/open-cases/international/kpis/OutstandingBalance.vue";
import Countries from "@/components/open-cases/international/kpis/Countries.vue";
import AgentFlag from "@/components/open-cases/international/kpis/AgentFlag.vue";
import TopCountries from "@/components/open-cases/international/TopCountries.vue";
import DebtRestructuringPhase from "@/components/open-cases/international/DebtRestructuringPhase.vue";
import IntTable from "@/components/open-cases/international/IntTable.vue";

export default {
  name: "Restructuring",

  components: {
    UpdateDate,
    IntCases,
    PrincipalOrigin,
    OutstandingBalance,
    Countries,
    AgentFlag,
    TopCountries,
    DebtRestructuringPhase,
    IntTable
  }
};
</script>
