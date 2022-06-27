import { getters } from "@/store";
import { getQlikApp } from "@/services/qlik-service";

export async function getViz(name, withId = false) {
  if (!withId) {
    const vizDef = getters.qlikVisualizationDef(name);
    const qlikApp = await getQlikApp(vizDef?.appRef);
    if (qlikApp) {
      return await qlikApp.visualization.get(vizDef?.id);
    }
  } else {
    const vizDef = name;
    const qlikApp = await getQlikApp(getters.qlikCurrentApp());

    if (qlikApp) {
      return await qlikApp.visualization.get(vizDef);
    }
  }
}

// ******** 20220302: Commented due to migration from Viz container to native container
// export async function getVizInActiveContainerTab(
//   tabs,
//   element,
//   nestedLevel = 0
// ) {
//   //Current active tab. Need to read from html because Viz Container has no active container property
//   const htmlActiveTab = element
//     .querySelectorAll(".navigationbar__tabs-text")
//     [nestedLevel].innerHTML.trim();

//   //Loop over tab for finding a match with html
//   for (const tab of tabs) {
//     if (tab.label === htmlActiveTab) {
//       return await getViz(tab.qLibraryId, true);
//     }
//   }
// }
export async function getVizInActiveContainerTab(vizName) {
  const vizDef = getters.qlikVisualizationDef(vizName);
  const qlikApp = await getQlikApp(vizDef?.appRef);
  //Read object properties for getting active tab. If no active tab present, get default (workaround due to a possible bug)
  const vizProps = await qlikApp.getObjectProperties(vizDef?.id);
  let viz;
  let activeTab;
  //Loop over tabs for checking the active one. Active tab has condition = 1
  for (const tab of vizProps.layout.children) {
    if (tab.condition === "1") {
      activeTab = tab.refId;
    }
  }

  //Loop over tabs' childrens for getting active tab visualization
  for (const vizTab of vizProps.layout.qChildList.qItems) {
    if (vizTab.qData.qExtendsId === activeTab) {
      viz = vizTab.qInfo.qId;
    }
  }
  return await getViz(viz, true);
}

export default { getViz, getVizInActiveContainerTab };
