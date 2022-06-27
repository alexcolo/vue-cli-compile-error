<template>
  <div>
    <div class="filter-container">
      <qlik-viz
        :name="currSelections"
        :options="{ height: filterHeight }"
        loader-type="text"
        :is-skeleton-loader="true"
      />
    </div>
    <div class="filter-container filter-container-filters">
      <qlik-viz
        v-for="item in filtersNumber"
        :key="item"
        :name="filterPrefix + item"
        :options="{ height: filterHeight }"
        loader-type
        :is-loader-enabled="false"
      >
      </qlik-viz>
    </div>
  </div>
</template>

<script>
import QlikViz from "@/components/qlik-components/QlikViz";

export default {
  name: "SelectionBar",

  components: { QlikViz },

  props: {
    currSelections: String,
    filterPrefix: String,
    filtersNumber: Number
  },

  data: () => ({
    filterHeight: "38px"
  })
};
</script>

<style lang="scss">
.filter-container {
  background-color: var(--v-filters-base);
  display: flex;
}

.filter-container-filters {
  padding: 10px 0 5px 0;
}

//Override vuetify ul padding for qlik selection bar
div.qlik-viz ul {
  padding-left: 0px;
}

//Override selections color in filter pane
div.lui-popover-container {
  & .qv-listbox li.selected,
  .qv-listbox li.serverExcludedLock,
  .qv-listbox li.serverLocked,
  .qv-listbox li.serverSelected,
  .qv-listbox li.serverSelectedExcluded {
    background-color: var(--v-petrol-base);
    border-bottom: 1px solid var(--v-light-pretrol-base);
  }
}

//Override selections color in selections bar
div.qv-state-count-bar {
  .state.selected {
    background: var(--v-petrol-base);
  }
}

.v-card.v-sheet.filters-card {
  border: none;
}
.qv-collapsed-listbox .title-wrapper .title {
  font-size: 14px !important;
  line-height: 1rem;
  font-weight: 400;
}
.qv-filterpane {
  & .qv-filterpane-collapsed,
  & .qv-filterpane-expanded {
    margin-top: 1rem;
  }
  & .qv-filterpane-column:first-child {
    margin: 0 4px !important;
  }
  & .qv-filterpane-column {
    margin: 0 4px !important;
  }
  & .qv-filterpane-column:last-child {
    margin-left: 4px !important;
  }
}
.lui-popover.qv-listbox-popover {
  width: 350px !important;
  z-index: 1050 !important;
  max-width: 65vw;
  overflow: visible;
  .popover-header {
    display: none;
  }
  .qv-selection-toolbar,
  .sel-toolbar-list {
    color: white !important;
    .sel-toolbar-menu-text,
    .sel-toolbar-menu-span-icon {
      color: black !important;
    }
  }
}

// .lui-popover__arrow--bottom {
//   position: absolute;
//   top: 0;
//   bottom: auto !important;
//   transform: rotate(180deg);
// }
// .lui-popover-container {
//   position: fixed !important;
//   z-index: 1090 !important;
//   transition: 0.3s all;
//   left: 16px;
//   right: auto;
// }
</style>
