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
            <summary-cases />
          </v-col>
          <v-col cols="2">
            <pre-collection />
          </v-col>
          <v-col cols="2">
            <collection />
          </v-col>
          <v-col cols="2">
            <surveillance />
          </v-col>
          <v-col cols="2">
            <international />
          </v-col>
          <v-col cols="2">
            <debt-restructuring />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6" style="height: 29.1vh">
            <process-name />
          </v-col>
          <v-col cols="12" md="6" style="height: 29.1vh">
            <collection-phase />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 29.1vh">
        <summary-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import SummaryCases from "@/components/open-cases/summary/kpis/SummaryCases.vue";
import PreCollection from "@/components/open-cases/summary/kpis/PreCollection.vue";
import Collection from "@/components/open-cases/summary/kpis/Collection.vue";
import Surveillance from "@/components/open-cases/summary/kpis/Surveillance.vue";
import International from "@/components/open-cases/summary/kpis/International.vue";
import DebtRestructuring from "@/components/open-cases/summary/kpis/DebtRestructuring.vue";
import ProcessName from "@/components/open-cases/summary/ProcessName.vue";
import CollectionPhase from "@/components/open-cases/summary/CollectionPhase.vue";
import SummaryTable from "@/components/open-cases/summary/SummaryTable.vue";

export default {
  name: "OpenCasesSummary",

  components: {
    UpdateDate,
    SummaryCases,
    PreCollection,
    Collection,
    Surveillance,
    International,
    DebtRestructuring,
    ProcessName,
    CollectionPhase,
    SummaryTable
  }
};
</script>
