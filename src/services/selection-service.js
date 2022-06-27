import { actions } from "@/store";
import { getQlikApp } from "@/services/qlik-service";
import { LANGUAGE_FILTER } from "@/constants";

export async function getFieldSelections(appName, field) {
  const qlikApp = await getQlikApp(appName);
  const listFieldConfig = {
    qDef: {
      qFieldDefs: [field]
    },
    qInitialDataFetch: [
      {
        qTop: 0,
        qLeft: 0,
        qHeight: 20,
        qWidth: 1
      }
    ]
  };
  const listField = await qlikApp.createList(listFieldConfig);

  let fieldValues = listField.layout.qListObject.qDataPages[0].qMatrix;
  //Loop over values and get the selected one
  let languageShort = "";
  for (const fieldValue of fieldValues) {
    if (fieldValue[0].qState === "S") {
      languageShort = Object.keys(LANGUAGE_FILTER).find(
        key => LANGUAGE_FILTER[key] === fieldValue[0].qText
      );
      actions.setLanguageSelection(languageShort);
    }
  }
  //Destroy session object
  qlikApp.destroySessionObject(listField.id);
  return languageShort;
}

export async function applySelection(appName, selections) {
  const qlikApp = await getQlikApp(appName);

  if (qlikApp) {
    for (const field in selections) {
      await qlikApp.field(field).selectValues(selections[field]);
    }
  }
}

// export async function clearFieldSelection(fieldName, appName = "daily") {
//   const field = getters
//     .qlikFieldObjectsByName(fieldName)
//     .find(field => field.app === appName);

//   if (field) {
//     return field.object.clear();
//   }
// }

// export async function clearAppSelections(appRef) {
//   const qlikApp = await getQlikApp(appRef);

//   if (qlikApp) {
//     return qlikApp.clearAll();
//   }
// }

// export async function clearAllSelections() {
//   const appDefs = getters.getAppDefs();

//   for (const appName of Object.keys(appDefs)) {
//     await clearAppSelections(appName);
//   }
// }

export default {
  getFieldSelections,
  applySelection
};
