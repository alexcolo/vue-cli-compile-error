import Vue from "vue";
import { applyThemeToAllApps } from "@/services/theme-service";

const THEME_STORE_KEY = "HERC_DAILY_DASHBOARD_THEME";
const QLIK_THEMES = {
  light: "sense",
  dark: "HercNightMode"
};

const state = Vue.observable({
  currentTheme: null,
  isThemeChanging: false
});

const getters = {
  isThemeChanging: () => state.isThemeChanging,
  currentTheme: () =>
    state.currentTheme || window.localStorage.getItem(THEME_STORE_KEY)
};

const mutations = {
  setTheme: val => Vue.set(state, "currentTheme", val),
  setThemeLoadingState: val => Vue.set(state, "isThemeChanging", val)
};

const actions = {
  async changeQlikTheme(theme) {
    mutations.setThemeLoadingState(true);

    if (state.currentTheme !== null) {
      window.localStorage.setItem(THEME_STORE_KEY, theme);
    }

    mutations.setTheme(theme);
    await applyThemeToAllApps(QLIK_THEMES[theme]);
    mutations.setThemeLoadingState(false);
  }
};

export default { getters, actions };
