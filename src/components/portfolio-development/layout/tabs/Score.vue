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
        <score-container-1 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 35.1vh">
        <score-container-2 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateDate from "@/components/update-date/UpdateDate";
import ScoreContainer1 from "@/components/portfolio-development/score/ScoreContainer1";
import ScoreContainer2 from "@/components/portfolio-development/score/ScoreContainer2";

export default {
  name: "Score",

  components: {
    UpdateDate,
    ScoreContainer1,
    ScoreContainer2
  }
};
</script>
