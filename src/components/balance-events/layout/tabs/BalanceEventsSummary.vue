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
          <v-col cols="6" style="height: 35.1vh">
            <item-payment />
          </v-col>
          <v-col cols="6">
            <money-payment />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <summary-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import ItemPayment from "@/components/balance-events/summary/ItemPayment.vue";
import MoneyPayment from "@/components/balance-events/summary/MoneyPayment.vue";
import SummaryTable from "@/components/balance-events/summary/SummaryTable.vue";

export default {
  name: "BalanceEventsSummary",

  components: {
    UpdateDate,
    ItemPayment,
    MoneyPayment,
    SummaryTable
  }
};
</script>
