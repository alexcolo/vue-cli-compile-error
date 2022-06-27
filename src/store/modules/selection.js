import Vue from "vue";

const state = Vue.observable({
  languageSelection: ""
});

const getters = {
  getLanguageSelection: () => state.languageSelection
};

const mutations = {
  setLanguageSelections: val => Vue.set(state, "languageSelection", val)
};

const actions = {
  async setLanguageSelection(selectedValue) {
    mutations.setLanguageSelections(selectedValue);
  }
};

export default { getters, actions };
