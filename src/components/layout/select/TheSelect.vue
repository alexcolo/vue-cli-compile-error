<template>
  <v-select
    v-if="fieldValue"
    :items="fieldValues"
    :value="fieldValue"
    v-model="fieldValue"
    dense
    @change="applyQlikSelection"
    class="pt-3"
  ></v-select>
  <v-layout v-else align-center justify-center column fill-height>
    <v-progress-circular
      size="20"
      width="3"
      color="primary"
      indeterminate
      v-show="!fieldValue"
    ></v-progress-circular>
  </v-layout>
</template>

<script>
import { applySelection } from "@/services/selection-service";
import { getters, actions } from "@/store";

export default {
  name: "TheSelect",

  props: {
    field: String
  },

  data: () => ({
    fieldValuesStart: null,
    fieldValue: ""
  }),

  computed: {
    fieldValuesReady() {
      return (
        getters.qlikFieldValList(this.field) &&
        getters.qlikFieldValList(this.field).currentSelectedValues
      );
    },
    fieldValues: {
      get() {
        return getters.qlikFieldValList(this.field)?.data;
      },
      set(newValue) {
        this.fieldValuesStart = newValue;
      }
    }
  },

  watch: {
    fieldValuesReady: {
      immediate: true,
      handler: async function() {
        if (this.fieldValuesReady && this.field) {
          this.fieldValues = getters.qlikFieldValList(this.field)?.data;
          this.fieldValue = getters.qlikFieldValList(
            this.field
          ).currentSelectedValues[0];
        }
      }
    }
  },

  methods: {
    applyQlikSelection: async function() {
      let selections = {};
      selections[this.field] = [this.fieldValue];
      applySelection(getters.qlikCurrentApp(), selections);
      //Transform single select value in array for managing possible multi selections from another components
      const currentValues = [this.fieldValue];
      actions.setQlikFieldCurrentSelectedVal(this.field, currentValues);
    }
  }
};
</script>
