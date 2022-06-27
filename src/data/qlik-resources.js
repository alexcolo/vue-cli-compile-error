/**
 * Qlik Resources
 */
import QlikResources from "@/config/qlik-resources/qlik-resources";

function qlikResourcesGetter(type) {
  return async function() {
    let data = {};

    try {
      const json = QlikResources;
      data = json?.[type] || {};
    } catch (error) {
      console.error(
        `An error occurred while requesting ${type} data from qlik-resources`,
        { error }
      );
    }

    return data;
  };
}

export const qlikServers = {
  get: qlikResourcesGetter("qlik-servers")
};

export const qlikApps = {
  get: qlikResourcesGetter("qlik-apps")
};

export const qlikVisualizations = {
  get: qlikResourcesGetter("qlik-visualizations")
};

export const qlikFields = {
  get: qlikResourcesGetter("qlik-fields")
};

export default {
  qlikServers,
  qlikApps,
  qlikVisualizations,
  qlikFields
};
