import { getters } from "@/store";
import { getQlikApp } from "@/services/qlik-service";

export async function getVariableContentByQlikResource(resourceName) {
  const vizDef = getters.qlikVisualizationDef(resourceName);
  return getVariableContentByName(vizDef.name, vizDef.appRef);
}

export async function getVariableContentByName(varName, appRef) {
  const qlikApp = await getQlikApp(appRef);

  if (qlikApp) {
    const variableData = await qlikApp.variable.getContent(varName);
    return variableData.qContent.qString;
  }
}

// export async function setVariableByName(varName, newValue, appRef) {
export async function setVariableByName(resourceName, newValue) {
  const vizDef = getters.qlikVisualizationDef(resourceName);
  const qlikApp = await getQlikApp(vizDef.appRef);

  if (typeof newValue === "number") {
    await qlikApp.variable.setNumValue(vizDef.name, newValue);
  } else {
    await qlikApp.variable.setStringValue(vizDef.name, newValue);
  }
}

export default {
  setVariableByName,
  getVariableContentByName,
  getVariableContentByQlikResource
};
