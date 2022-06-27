import ThemeModule from "./modules/theme";
import SelectionModule from "./modules/selection";
import BookmarkModule from "./modules/bookmark";
import QlikFieldModule from "./modules/qlik-field";
import QlikResourcesModule from "./modules/qlik-resources";

const getters = {
  ...ThemeModule.getters,
  ...SelectionModule.getters,
  ...BookmarkModule.getters,
  ...QlikFieldModule.getters,
  ...QlikResourcesModule.getters
};

const actions = {
  ...ThemeModule.actions,
  ...SelectionModule.actions,
  ...BookmarkModule.actions,
  ...QlikFieldModule.actions,
  ...QlikResourcesModule.actions
};

export { getters, actions };
export default { getters, actions };
