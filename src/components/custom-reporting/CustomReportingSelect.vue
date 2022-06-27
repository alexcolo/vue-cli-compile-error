<template>
  <v-select
    v-if="fieldValues"
    v-model="fieldValue"
    :items="fieldValues"
    :label="label"
    :multiple="multiple"
    @change="applyQlikSelection"
    :hint="hint"
    persistent-hint
    :loading="loading"
  >
    <template v-slot:prepend-item>
      <v-list-item ripple @mousedown.prevent @click="toggle">
        <v-list-item-action>
          <v-icon :color="fieldValue.length > 0 ? 'indigo darken-4' : ''">
            {{ icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("label.select-all") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 5" close @click:close="removeFilterValue(index)">
        <span>{{ item }}</span>
      </v-chip>
      <span v-if="index === 5" class="grey--text text-caption">
        (+{{ fieldValue.length - 5 }} others)
      </span>
    </template>
  </v-select>
  <v-layout v-else align-center justify-center column fill-height>
    <v-progress-circular
      size="20"
      width="3"
      color="primary"
      indeterminate
      v-show="!fieldValues"
    ></v-progress-circular>
  </v-layout>
</template>

<script>
import { applySelection } from "@/services/selection-service";
import { getters, actions } from "@/store";

export default {
  name: "CustomReportingSelect",

  props: {
    dropDownField: String,
    label: String,
    hint: String,
    multiple: Boolean,
    type: String
  },

  data() {
    return {
      fieldValue: "",
      fieldValues: null,
      loading: false
    };
  },

  computed: {
    fieldValuesReady() {
      return (
        getters.qlikFieldValList(this.dropDownField) &&
        getters.qlikFieldValList(this.dropDownField)?.currentSelectedValues
      );
    },
    likesAllFruit() {
      return this.fieldValue.length === this.fieldValues.length;
    },
    likesSomeFruit() {
      return this.fieldValue.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },

  watch: {
    fieldValuesReady: {
      immediate: true,
      handler: async function() {
        if (this.fieldValuesReady && this.dropDownField) {
          this.fieldValues = getters.qlikFieldValList(this.dropDownField).data;
          this.fieldValue = getters.qlikFieldValList(
            this.dropDownField
          ).currentSelectedValues;
        }
      }
    }
  },

  methods: {
    applyQlikSelection: async function() {
      this.loading = true;
      let selections = {};
      selections[this.dropDownField] =
        typeof this.fieldValue === "string"
          ? [this.fieldValue]
          : this.fieldValue === null
          ? []
          : this.fieldValue;
      await applySelection(getters.qlikCurrentApp(), selections);
      actions.setQlikFieldCurrentSelectedVal(
        this.dropDownField,
        this.fieldValue
      );
      this.loading = false;
    },
    removeFilterValue(arrayIndex) {
      this.fieldValue.splice(arrayIndex, 1);
      this.applyQlikSelection();
    },
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.fieldValue = [];
          this.applyQlikSelection();
        } else {
          this.fieldValue = this.fieldValues.slice();
          this.applyQlikSelection();
        }
      });
    }
  }
};
</script>
