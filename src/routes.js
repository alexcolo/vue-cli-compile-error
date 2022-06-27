import { TABS } from "@/constants";
import Summary from "@/components/portfolio-development/layout/tabs/Summary";
import OpenCasesSummary from "@/components/open-cases/layout/tabs/OpenCasesSummary";
import BalanceEventsSummary from "@/components/balance-events/layout/tabs/BalanceEventsSummary";
import Total from "@/components/solution/layout/tabs/Total";

import AppContent from "@/components/layout/AppContent";
import PortfolioDevContent from "@/components/portfolio-development/layout/PortfolioDevContent";
import OpenCasesContent from "@/components/open-cases/layout/OpenCasesContent";
import BalanceEventsContent from "@/components/balance-events/layout/BalanceEventsContent";
import SolutionContent from "@/components/solution/layout/SolutionContent";

const apps = TABS.apps;

//Start with defining our base route configuration with home path and Qlik apps path with relative child home path
let dynamicRoutes = [
  { path: "", component: AppContent },
  {
    path: "/portfolio-development",
    component: PortfolioDevContent,
    children: [{ path: "", component: Summary }]
  },
  {
    path: "/open-cases",
    component: OpenCasesContent,
    children: [{ path: "", component: OpenCasesSummary }]
  },
  {
    path: "/balance-events",
    component: BalanceEventsContent,
    children: [{ path: "", component: BalanceEventsSummary }]
  },
  {
    path: "/solution",
    component: SolutionContent,
    children: [{ path: "", component: Total }]
  },
  { path: "*", redirect: "/" }
];

//Loop over tab apps and items and create routes based on constant file
for (const app of apps) {
  for (const item of app.items) {
    let dynamicRoute = {};
    dynamicRoute["path"] = item.path;
    dynamicRoute["component"] = item.component;
    dynamicRoutes[item.index].children.push(dynamicRoute);
  }
}

export const routes = dynamicRoutes;
