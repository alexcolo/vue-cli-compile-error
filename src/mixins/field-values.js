// import { actions, getters } from "@/store";
import { getters } from "@/store";
import { getFieldValues } from "@/services/qlik-field-service";

export default {
  data: () => ({
    dropDownField: ""
  }),

  computed: {
    resourcesReady() {
      return getters.loadComplete();
    },
    currentLanguage() {
      return getters.getLanguageSelection();
    },
    combined() {
      return this.resourcesReady && this.currentLanguage;
    }
  },

  methods: {
    async setFieldValList(field) {
      const currentLanguage = this.currentLanguage;
      const fieldObject = getters.getFieldDefs(`${field}-${currentLanguage}`);
      this.dropDownField = fieldObject.field;
      // await actions.setQlikFieldValList(fieldObject.field);
      await getFieldValues(fieldObject.field, fieldObject.type);
      return this.dropDownField;
    }
  }
};
