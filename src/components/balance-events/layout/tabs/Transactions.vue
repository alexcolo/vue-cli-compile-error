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
            <principal-payment />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <transactions-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import PrincipalPayment from "@/components/balance-events/transactions/PrincipalPayment.vue";
import TransactionsContainer from "@/components/balance-events/transactions/TransactionsContainer.vue";

export default {
  name: "Transactions",

  components: {
    UpdateDate,
    PrincipalPayment,
    TransactionsContainer
  }
};
</script>
