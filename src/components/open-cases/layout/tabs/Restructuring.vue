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
      <v-col cols="12" md="7">
        <v-row>
          <v-col cols="3" style="height: 13vh">
            <restructuring-cases />
          </v-col>
          <v-col cols="3">
            <not-collection />
          </v-col>
          <v-col cols="3">
            <restructuring-collection />
          </v-col>
          <v-col cols="3">
            <priority />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" style="height: 13vh">
            <principal-origin />
          </v-col>
          <v-col cols="4">
            <outstanding-balance />
          </v-col>
          <v-col cols="4">
            <average-divided />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12" style="height: 26vh">
            <debt-restructuring-phase />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 44.2vh">
        <restructuring-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import RestructuringCases from "@/components/open-cases/restructuring/kpis/RestructuringCases.vue";
import NotCollection from "@/components/open-cases/restructuring/kpis/NotCollection.vue";
import RestructuringCollection from "@/components/open-cases/restructuring/kpis/RestructuringCollection.vue";
import Priority from "@/components/open-cases/restructuring/kpis/Priority.vue";
import PrincipalOrigin from "@/components/open-cases/restructuring/kpis/PrincipalOrigin.vue";
import OutstandingBalance from "@/components/open-cases/restructuring/kpis/OutstandingBalance.vue";
import AverageDivided from "@/components/open-cases/restructuring/kpis/AverageDivided.vue";
import DebtRestructuringPhase from "@/components/open-cases/restructuring/DebtRestructuringPhase.vue";
import RestructuringTable from "@/components/open-cases/restructuring/RestructuringTable.vue";

export default {
  name: "Restructuring",

  components: {
    UpdateDate,
    RestructuringCases,
    NotCollection,
    RestructuringCollection,
    Priority,
    PrincipalOrigin,
    OutstandingBalance,
    AverageDivided,
    DebtRestructuringPhase,
    RestructuringTable
  }
};
</script>
