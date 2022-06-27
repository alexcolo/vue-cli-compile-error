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
      <v-col cols="4" style="height: 13vh">
        <!-- <v-select
          v-model="dimValue"
          :items="dimValues"
          label="Dimensions"
          multiple
          chips
          @change="applySelections"
          hint="Pick a dimension for custom reporting"
          persistent-hint
          deletable-chips
        ></v-select> -->
        <custom-reporting-select
          :drop-down-field="dimField"
          :label="$t('select.dimensions.title')"
          :hint="$t('select.dimensions.hint')"
          :multiple="true"
          type="singleField"
        />
      </v-col>
      <v-col cols="4">
        <!-- <v-select
          :items="fieldValues"
          v-model="fieldValue"
          label="Measures Group"
          chips
          @change="activateMeasures"
          hint="Pick your Measures Group"
          persistent-hint
          deletable-chips
        ></v-select> -->
        <custom-reporting-select
          :drop-down-field="measureGroupField"
          :label="$t('select.measures-group.title')"
          :hint="$t('select.measures-group.hint')"
          :multiple="true"
          type="groupField"
        />
      </v-col>
      <v-col cols="4">
        <!-- <v-select
          v-model="selectMeasures"
          :items="measures"
          label="Measures"
          multiple
          chips
          @change="applySelections"
          :disabled="disableMeasures"
          :hint="
            fieldValue
              ? 'Pick a measures for custom reporting'
              : 'Select a Measures Group for enabling measures'
          "
          persistent-hint
          deletable-chips
        ></v-select> -->
        <custom-reporting-select
          :drop-down-field="measureField"
          :label="$t('select.measures.title')"
          :hint="$t('select.measures.hint')"
          :multiple="true"
          type="singleField"
        />
        <!-- TO delete if requirement for disable measure field will not e choosen
          <custom-reporting-select
          :drop-down-field="measureField"
          :label="$t('select.measures.title')"
          :multiple="true"
          type="singleField"
          :disabled="disabled"
          @disable-select="receiveDisableSelect"
        /> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 57.2vh">
        <the-custom-reporting viz="table" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import fieldValues from "@/mixins/field-values";
import UpdateDate from "@/components/update-date/UpdateDate";
import CustomReportingSelect from "@/components/custom-reporting/CustomReportingSelect";
import TheCustomReporting from "@/components/custom-reporting/TheCustomReporting";

export default {
  name: "CustomReporting",

  mixins: [fieldValues],

  data() {
    return {
      dimField: "",
      measureGroupField: "",
      measureField: "",
      disabled: true
      // fieldValues: ["Measure Group 1", "Measure Group 2", "Measure Group 3"],
      // fieldValue: "",
      // selectMeasures: [],
      // measures: [
      //   "Open Cases",
      //   "Collection Cases",
      //   "# Surveillance",
      //   "# Received Cases"
      // ],
      // disableMeasures: true
    };
  },

  components: {
    UpdateDate,
    CustomReportingSelect,
    TheCustomReporting
  },

  computed: {
    hint() {
      return '$t("select.measure.hint-disabled")';
    }
  },

  watch: {
    combined: {
      immediate: true,
      handler: async function() {
        if (this.combined) {
          this.dimField = await this.setFieldValList("cr-dim-pd");
          this.measureGroupField = await this.setFieldValList("cr-group-pd");
          this.measureField = await this.setFieldValList("cr-measure-pd");
        }
      }
    }
  }

  // TO delete if requirement for disable measure field will not e choosen
  // methods: {
  //   receiveDisableSelect: function(value) {
  //     this.disabled = value;
  //   }
  // }
};
</script>
