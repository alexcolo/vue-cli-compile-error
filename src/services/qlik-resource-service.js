// import { getters } from "@/store";

export async function getFiltersNumber(visualizations) {
  //Loop over visualization for evaluate an object with filters number per app
  let filtersNumber = {};
  let appName = "";
  let counter = 0;
  for (const viz in visualizations) {
    if (viz.includes("-filter-")) {
      counter++;
      appName = viz.slice(0, viz.indexOf("filter") - 1);
      filtersNumber[appName] = { filtersNumber: counter };
    } else {
      counter = 0;
    }
  }
  return filtersNumber;
}

export default { getFiltersNumber };
