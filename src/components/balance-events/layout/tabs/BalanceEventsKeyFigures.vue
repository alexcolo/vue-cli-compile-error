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
          <v-col cols="12" md="4" style="height: 70.2vh">
            <key-figures-container-box-1 />
          </v-col>
          <v-col cols="12" md="8" style="height: 70.2vh">
            <key-figures-container-box-2 />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import KeyFiguresContainerBox1 from "@/components/balance-events/key-figures/KeyFiguresContainerBox1.vue";
import KeyFiguresContainerBox2 from "@/components/balance-events/key-figures/KeyFiguresContainerBox2.vue";

export default {
  name: "BalanceEventsKeyFigures",

  components: {
    UpdateDate,
    KeyFiguresContainerBox1,
    KeyFiguresContainerBox2
  }
};
</script>
