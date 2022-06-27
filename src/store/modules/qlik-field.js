import Vue from "vue";
import { qlikFields } from "@/data/qlik-resources";
// import { getFieldValues } from "@/services/qlik-field-service";

const state = Vue.observable({
  qlikFieldDefs: {},
  qlikFieldsValList: {},
  loadFieldValComplete: false
});

const getters = {
  getFieldDefs: name => state.qlikFieldDefs?.[name],
  qlikFieldValList: name => state.qlikFieldsValList?.[name],
  loadFieldValComplete: () => state.loadFieldValComplete
};

const mutations = {
  setQlikFieldDefs: val => Vue.set(state, "qlikFieldDefs", val),
  setQlikFieldValList: val =>
    Vue.set(state, "qlikFieldsValList", {
      ...state.qlikFieldsValList,
      ...val
    }),
  setLoadFieldValComplete: () => Vue.set(state, "loadFieldValComplete", true),
  setLoadFieldValNotComplete: () =>
    Vue.set(state, "loadFieldValComplete", false),
  setQlikFieldCurrentSelectedVal: (field, currentSelectedValues) =>
    Vue.set(
      state,
      "qlikFieldValList",
      (state.qlikFieldsValList[
        field
      ].currentSelectedValues = currentSelectedValues)
    )
};

const actions = {
  async fetchQlikFields() {
    const qf = await qlikFields.get();
    await mutations.setQlikFieldDefs(qf);
  },
  async setQlikFieldValList(fields) {
    // mutations.setQlikFieldValList(await getFieldValues(fields));
    mutations.setQlikFieldValList(fields);
    mutations.setLoadFieldValComplete();
  },
  async setQlikFieldCurrentSelectedVal(field, currentSelectedValues) {
    mutations.setQlikFieldCurrentSelectedVal(field, currentSelectedValues);
  },
  async setLoadFieldNotComplete() {
    mutations.setLoadFieldValNotComplete();
  }
};

export default { getters, actions };
