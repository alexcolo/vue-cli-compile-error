import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.20.0.json";
import SenseUtilities from "enigma.js/sense-utilities";

export async function getEnigmaApp(config) {
  if (!config) return null;

  const url = SenseUtilities.buildUrl(config);
  const session = enigma.create({
    schema,
    url
  });
  const global = await session.open();

  return global.openDoc(config.appId);
}

export default {
  getEnigmaApp
};
