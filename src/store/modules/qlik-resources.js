/**
 * Qlik Resources Store
 *
 * Qlik Application metadata for making connections and accessing content.
 */
import Vue from "vue";
import { getQlikAppReloadTime } from "@/services/qlik-service";
import { getFiltersNumber } from "@/services/qlik-resource-service";
import {
  qlikServers,
  qlikApps,
  qlikVisualizations
} from "@/data/qlik-resources";

const state = Vue.observable({
  qlikServerDefs: {},
  qlikAppDefs: {},
  qlikApplications: {},
  qlikVisualizationDefs: {},
  filtersNumber: {},
  vizDomRefs: {},
  loadComplete: false,
  lastRefresh: "",
  qlikCurrentApp: ""
});

export const getters = {
  qlikServerDef: name => state.qlikServerDefs?.[name],
  qlikAppDef: name => state.qlikAppDefs?.[name],
  qlikApplication: name => state.qlikApplications?.[name],
  qlikVisualizationDef: name => state.qlikVisualizationDefs?.[name],
  filtersNumber: name => state.filtersNumber?.[name]?.filtersNumber,
  vizDomRef: name => state.vizDomRefs?.[name],
  getAllAppDefs: () => state.qlikAppDefs,
  loadComplete: () => state.loadComplete,
  getAppDefs: () =>
    Object.keys(state.qlikAppDefs).reduce((app, key) => {
      return key;
    }, {}),
  lastRefresh: () => state.lastRefresh,
  qlikCurrentApp: () => state.qlikCurrentApp
};

const mutations = {
  setQlikServerDefs: val => Vue.set(state, "qlikServerDefs", val),
  setQlikAppDefs: val => Vue.set(state, "qlikAppDefs", val),
  setQlikVisualizationDefs: val => Vue.set(state, "qlikVisualizationDefs", val),
  setFiltersNumber: val => Vue.set(state, "filtersNumber", val),
  setLoadComplete: () => Vue.set(state, "loadComplete", true),
  setQlikApplication: (name, app) =>
    Vue.set(state, "qlikApplications", {
      ...state.qlikApplications,
      [name]: app
    }),
  setVizDomRef: (name, domRef) =>
    Vue.set(state, "vizDomRefs", {
      ...state.vizDomRefs,
      [name]: domRef
    }),
  setLastRefresh: val => Vue.set(state, "lastRefresh", val),
  setQlikCurrentApp: val => Vue.set(state, "qlikCurrentApp", val)
};

export const actions = {
  async setQlikApplication(name, app) {
    mutations.setQlikApplication(name, app);
  },
  async setVizDomRef(name, domRef) {
    mutations.setVizDomRef(name, domRef);
  },
  async fetchQlikResources() {
    const qs = await qlikServers.get();
    const qa = await qlikApps.get();
    const qv = await qlikVisualizations.get();
    mutations.setFiltersNumber(await getFiltersNumber(qv));
    await this.fetchQlikFields();
    mutations.setQlikServerDefs(qs);
    mutations.setQlikAppDefs(qa);
    mutations.setQlikVisualizationDefs(qv);
    mutations.setLoadComplete();
  },
  async readLastRefresh(appName, lastRefreshField) {
    mutations.setLastRefresh(
      await getQlikAppReloadTime(appName, lastRefreshField)
    );
  },
  async setQlikCurrentApp(appName) {
    mutations.setQlikCurrentApp(appName);
  }
};

export default {
  getters,
  actions
};
