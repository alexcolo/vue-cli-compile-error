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
      <v-col cols="12" md="4" style="height: 70.2vh">
        <key-figures-container-1 />
      </v-col>
      <v-col>
        <v-row>
          <the-select
            :field="dropDownField"
            class="select-container"
            style="padding-top: 8px !important; padding-left: 12px;"
          />
        </v-row>
        <v-row>
          <v-col cols="12" style="height: 64.2vh">
            <key-figures-container-2 />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import fieldValues from "@/mixins/field-values";
import UpdateDate from "@/components/update-date/UpdateDate";
import TheSelect from "@/components/layout/select/TheSelect";
import KeyFiguresContainer1 from "@/components/portfolio-development/key-figures/KeyFiguresContainer1";
import KeyFiguresContainer2 from "@/components/portfolio-development/key-figures/KeyFiguresContainer2";

export default {
  name: "KeyFigures",

  mixins: [fieldValues],

  components: {
    UpdateDate,
    TheSelect,
    KeyFiguresContainer1,
    KeyFiguresContainer2
  },

  watch: {
    combined: {
      immediate: true,
      handler: async function() {
        if (this.combined) {
          await this.setFieldValList("key-figures-dl");
        }
      }
    }
  }
};
</script>
