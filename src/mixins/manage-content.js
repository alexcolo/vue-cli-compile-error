import managePath from "@/mixins/manage-path";
import { actions, getters } from "@/store";
import {
  LANGUAGE_FIELD,
  LANGUAGE_FILTER,
  LAST_REFRESH_FIELD
} from "@/constants";
import {
  getVariableContentByQlikResource
  // setVariableByName
} from "@/services/qlik-variable-service";
import {
  applySelection
  // getFieldSelections
} from "@/services/selection-service";
import {
  applyBookmarkToApp,
  getQlikBookmarksFromApp
} from "@/services/bookmark-service";

export default {
  mixins: [managePath],

  data: () => ({
    languageFilter: LANGUAGE_FILTER,
    languageField: LANGUAGE_FIELD,
    lastRefreshField: LAST_REFRESH_FIELD
  }),

  computed: {
    resourcesReady() {
      return getters.loadComplete();
    },
    enableRadioButton() {
      return this.$route.path === this.items[1].navPath ? true : false;
    },
    currentRoutePath() {
      return this.$route.path;
    },
    currentApp() {
      return this.getCurrentMainPath(this.$route.path);
    }
  },

  methods: {
    applyStartupBookmark() {
      const startupBookmark = getters.getStartupBookmark(this.currentApp);

      if (startupBookmark) {
        return applyBookmarkToApp(this.currentApp, startupBookmark);
      }
    }
  },

  watch: {
    resourcesReady: {
      immediate: true,
      handler: async function() {
        if (this.resourcesReady) {
          let selections = {};
          await actions.setQlikCurrentApp(this.currentApp);
          selections[this.languageField] = [
            this.languageFilter[this.$i18n.locale]
          ];
          applySelection(getters.qlikCurrentApp(), selections);

          actions.readLastRefresh(
            getters.qlikCurrentApp(),
            this.lastRefreshField
          );
          await getQlikBookmarksFromApp(this.currentApp);
          await this.applyStartupBookmark();
          if (this.currentApp === "portfolio-development") {
            this.radios = await getVariableContentByQlikResource(
              this.variableObjName
            );
          }
        }
      }
    }
  }

  // methods: {
  //   getCurrentMainPath(currentRoutePath) {
  //     //If I have only parent path just get it
  //     if (currentRoutePath.split("/").length - 1 === 1) {
  //       return currentRoutePath.slice(1);
  //       //otherwise I have parent and child path, so I have to get only the parent
  //     } else {
  //       const stringEndPos = currentRoutePath.split("/", 2).join("/").length;
  //       return currentRoutePath.slice(1, stringEndPos);
  //     }
  //   }
  // }
};
