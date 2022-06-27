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
      <v-col cols="12" style="height: 70.2vh">
        <the-description />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import TheDescription from "@/components/descriptions/TheDescription";

export default {
  name: "Descriptions",

  components: {
    UpdateDate,
    TheDescription
  }
};
</script>
