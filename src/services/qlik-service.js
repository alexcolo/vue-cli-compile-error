// Qlik Components Service
import { getters, actions } from "@/store";
// import { getEnigmaApp } from "@/services/enigma-service";
import { getFieldValues } from "@/services/qlik-field-service";
// import { qdtCapabilityApp, QdtViz } from "qdt-components";
// import { QdtViz } from "qdt-components";
import { qlikCapabilityViz } from "@/services/qlik-capability-viz";
import { qlikCapabilityApp } from "@/services/qlik-capability-app";

export async function getQlikApp(name) {
  if (!name) return null;
  let qlikApp = getters.qlikApplication(name);

  if (!qlikApp) {
    const appDef = getters.qlikAppDef(name);
    const serverDef = getters.qlikServerDef(appDef?.serverRef);
    if (serverDef) {
      const { secure, host, port, prefix } = serverDef;
      const { appId } = appDef;
      const config = { secure, host, port, prefix, appId };

      qlikApp = await qlikCapabilityApp(config, {
        vizApi: true,
        engineApi: true
      });

      actions.setQlikApplication(name, qlikApp);

      qlikApp.on("closed", function(err) {
        const MAX_TRIES = 3; // try this many times before waiting for the delay
        const RETRY_DELAY = 60000; // after above retries, wait this long before trying again (in ms)
        const lastError = localStorage.getItem("lastErrRefresh");
        let retries = localStorage.getItem("connErrRetries") || 0;
        const timeoutElapsed = Date.now() - lastError > RETRY_DELAY;
        localStorage.setItem("lastError", err);
        if (
          !lastError || // this is the first attempt
          retries < MAX_TRIES || // let's try again some number of times
          timeoutElapsed
        ) {
          // it's been long enough to reset the retry counter
          retries = timeoutElapsed ? 1 : retries + 1;
          localStorage.setItem("connErrRetries", retries);
          localStorage.setItem("lastErrRefresh", Date.now());
          location.reload();
        }
      });
    }
  }

  return qlikApp;
}

// ---------
export async function attachVisualization(name, $elem, options) {
  const vizDef = getters.qlikVisualizationDef(name);
  const qlikApp = await getQlikApp(vizDef?.appRef);

  if (qlikApp) {
    const domRef = await qlikCapabilityViz({
      // const domRef = QdtViz({
      app: qlikApp,
      element: $elem,
      options: {
        type: vizDef.type,
        id: vizDef.id,
        ...vizDef.options,
        ...options
      }
    });
    // actions.setVizDomRef(name, domRef);
    return domRef;
  }
}

export async function detachVisualization(name) {
  const domRef = getters.vizDomRef(name);

  if (domRef) {
    // domRef.destroy();
    // actions.setVizDomRef(name, null);

    const vizDef = getters.qlikVisualizationDef(name);
    const qlikApp = await getQlikApp(vizDef?.appRef);

    if (qlikApp && vizDef?.id) {
      qlikApp.destroySessionObject(vizDef.id);
    }
  }
}

export async function getQlikAppReloadTime(appRef, lastRefreshField) {
  const qlikApp = await getQlikApp(appRef);
  // console.log("readLastRefresh qlikApp: ", qlikApp);
  if (qlikApp) {
    //Old part where I read last reload time from last reload of app
    // const reply = await qlikApp.getAppLayout();
    // const localTimeDate = new Date(reply.layout.qLastReloadTime);
    // const lastRefreshDateFormatted = `${localTimeDate.getDate()}.${(
    //   "0" +
    //   (localTimeDate.getMonth() + 1)
    // ).slice(-2)}.${localTimeDate.getFullYear()}`;
    // return lastRefreshDateFormatted;

    //New part where I read last reload time from a field within data model
    const lastRefresh = await getFieldValues(lastRefreshField);
    return lastRefresh[lastRefreshField].data[0];
  }
}

export default {
  attachVisualization,
  detachVisualization,
  getQlikApp,
  getQlikAppReloadTime
};
