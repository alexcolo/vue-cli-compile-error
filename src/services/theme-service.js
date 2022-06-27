import { getters } from "@/store";
import { getQlikApp } from "@/services/qlik-service";

async function applyTheme(appName, newTheme) {
  const qlikApp = await getQlikApp(appName);

  if (qlikApp) {
    const theme = await qlikApp.theme.get(newTheme);
    theme.apply();
  }
}

export async function applyThemeToAllApps(theme) {
  const appDefs = getters.qlikCurrentApp();
  const isSetteled = await Promise.allSettled(
    Object.keys(appDefs).map(appName => applyTheme(appName, theme))
  );

  return isSetteled;
}

export default {
  applyThemeToAllApps
};
