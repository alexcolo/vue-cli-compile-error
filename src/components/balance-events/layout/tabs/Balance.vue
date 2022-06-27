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
            <ib />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <balance-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import Ib from "@/components/balance-events/balance/Ib.vue";
import BalanceTable from "@/components/balance-events/balance/BalanceTable.vue";

export default {
  name: "Balance",

  components: {
    UpdateDate,
    Ib,
    BalanceTable
  }
};
</script>
