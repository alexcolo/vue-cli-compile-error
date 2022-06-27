import Vue from "vue";
import bookmarkData from "@/data/bookmark";

const state = Vue.observable({
  startupBookmark: {},
  qlikAppBookmarks: {}
});

const getters = {
  // getStartupBookmark: () => state.startupBookmark,
  getStartupBookmark: name => state.startupBookmark?.[name],
  getAppBookmarks: name => state.qlikAppBookmarks?.[name]
};

const mutations = {
  setStartupBookmarks: val => Vue.set(state, "startupBookmark", val),
  setQlikAppBookmarks: (appName, bookmarks) =>
    Vue.set(state, "qlikAppBookmarks", {
      ...state.qlikAppBookmarks,
      [appName]: bookmarks
    })
};

const actions = {
  async fetchStartupBookmark() {
    const bookmarks = bookmarkData.get();
    mutations.setStartupBookmarks(bookmarks);
  },
  async updateStartupBookmark(
    appName,
    bookmarkId,
    isStartup,
    deleteStartUp = false
  ) {
    const id = isStartup
      ? bookmarkId
      : state.startupBookmark[appName] === bookmarkId
      ? null
      : state.startupBookmark[appName];

    //Read local storage for adding new bookmark for app or replace new bookmark for existing app
    let bookmarks = {};
    const savedBookmarks = bookmarkData.get();

    if (savedBookmarks) {
      for (const savedBookmark of Object.keys(savedBookmarks)) {
        //Check if in saved boomarks we have current one
        if (savedBookmark !== appName) {
          bookmarks[savedBookmark] = savedBookmarks[savedBookmark];
        }
      }
    }

    if (!deleteStartUp) {
      bookmarks = {
        ...bookmarks,
        [appName]: id
      };
    }

    mutations.setStartupBookmarks(bookmarks);
    bookmarkData.set(bookmarks);
  },
  async setQlikAppBookmarks(appName, bookmarks) {
    mutations.setQlikAppBookmarks(appName, bookmarks);
  }
};

export default {
  getters,
  actions
};
