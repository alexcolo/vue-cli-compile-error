import Summary from "@/components/portfolio-development/layout/tabs/Summary";
import Portfolio from "@/components/portfolio-development/layout/tabs/Portfolio";
import MoneySolution from "@/components/portfolio-development/layout/tabs/MoneySolution";
import ItemSolution from "@/components/portfolio-development/layout/tabs/ItemSolution";
import Score from "@/components/portfolio-development/layout/tabs/Score";
import KeyFigures from "@/components/portfolio-development/layout/tabs/KeyFigures";

import OpenCasesSummary from "@/components/open-cases/layout/tabs/OpenCasesSummary";
import Restructuring from "@/components/open-cases/layout/tabs/Restructuring";
import International from "@/components/open-cases/layout/tabs/International";

import BalanceEventsSummary from "@/components/balance-events/layout/tabs/BalanceEventsSummary";
import Balance from "@/components/balance-events/layout/tabs/Balance";
import Transactions from "@/components/balance-events/layout/tabs/Transactions";
import Cases from "@/components/balance-events/layout/tabs/Cases";
import Remitted from "@/components/balance-events/layout/tabs/Remitted";
import Closed from "@/components/balance-events/layout/tabs/Closed";
import LegalActions from "@/components/balance-events/layout/tabs/LegalActions";
import BalanceEventsKeyFigures from "@/components/balance-events/layout/tabs/BalanceEventsKeyFigures";

import Total from "@/components/solution/layout/tabs/Total";
import PreCollection from "@/components/solution/layout/tabs/PreCollection";

import Descriptions from "@/components/layout/descriptions/Descriptions";
import CustomReporting from "@/components/layout/custom-reporting/CustomReporting";

export const TABS = {
  apps: [
    {
      items: [
        {
          index: 1,
          tab: "summary",
          path: "summary",
          navPath: "/portfolio-development/summary",
          component: Summary
        },
        {
          index: 1,
          tab: "portfolio",
          path: "portfolio",
          navPath: "/portfolio-development/portfolio",
          component: Portfolio
        },
        {
          index: 1,
          tab: "money-solution",
          path: "money-solution",
          navPath: "/portfolio-development/money-solution",
          component: MoneySolution
        },
        {
          index: 1,
          tab: "item-solution",
          path: "item-solution",
          navPath: "/portfolio-development/item-solution",
          component: ItemSolution
        },
        {
          index: 1,
          tab: "score",
          path: "score",
          navPath: "/portfolio-development/score",
          component: Score
        },
        {
          index: 1,
          tab: "key-figures",
          path: "key-figures",
          navPath: "/portfolio-development/key-figures",
          component: KeyFigures
        },
        {
          index: 1,
          tab: "descriptions",
          path: "descriptions",
          navPath: "/portfolio-development/descriptions",
          component: Descriptions
        },
        {
          index: 1,
          tab: "custom-reporting",
          path: "custom-reporting",
          navPath: "/portfolio-development/custom-reporting",
          component: CustomReporting
        }
      ]
    },
    {
      items: [
        {
          index: 2,
          tab: "summary",
          path: "summary",
          navPath: "/open-cases/summary",
          component: OpenCasesSummary
        },
        {
          index: 2,
          tab: "restructuring",
          path: "restructuring",
          navPath: "/open-cases/restructuring",
          component: Restructuring
        },
        {
          index: 2,
          tab: "international",
          path: "international",
          navPath: "/open-cases/international",
          component: International
        },
        {
          index: 2,
          tab: "descriptions",
          path: "descriptions",
          navPath: "/open-cases/descriptions",
          component: Descriptions
        },
        {
          index: 2,
          tab: "custom-reporting",
          path: "custom-reporting",
          navPath: "/open-cases/custom-reporting",
          component: CustomReporting
        }
      ]
    },
    {
      items: [
        {
          index: 3,
          tab: "summary",
          path: "summary",
          navPath: "/balance-events/summary",
          component: BalanceEventsSummary
        },
        {
          index: 3,
          tab: "balance",
          path: "balance",
          navPath: "/balance-events/balance",
          component: Balance
        },
        {
          index: 3,
          tab: "transactions",
          path: "transactions",
          navPath: "/balance-events/transactions",
          component: Transactions
        },
        {
          index: 3,
          tab: "cases",
          path: "cases",
          navPath: "/balance-events/cases",
          component: Cases
        },
        {
          index: 3,
          tab: "remitted",
          path: "remitted",
          navPath: "/balance-events/remitted",
          component: Remitted
        },
        {
          index: 3,
          tab: "closed",
          path: "closed",
          navPath: "/balance-events/closed",
          component: Closed
        },
        {
          index: 3,
          tab: "legal-actions",
          path: "legal-actions",
          navPath: "/balance-events/legal-actions",
          component: LegalActions
        },
        {
          index: 3,
          tab: "key-figures",
          path: "key-figures",
          navPath: "/balance-events/key-figures",
          component: BalanceEventsKeyFigures
        },
        {
          index: 3,
          tab: "descriptions",
          path: "descriptions",
          navPath: "/balance-events/descriptions",
          component: Descriptions
        },
        {
          index: 3,
          tab: "custom-reporting",
          path: "custom-reporting",
          navPath: "/balance-events/custom-reporting",
          component: CustomReporting
        }
      ]
    },
    {
      items: [
        {
          index: 4,
          tab: "total",
          path: "total",
          navPath: "/solution/total",
          component: Total
        },
        {
          index: 4,
          tab: "pre-collection",
          path: "pre-collection",
          navPath: "/solution/pre-collection",
          component: PreCollection
        }
        // {
        //   index: 4,
        //   tab: "descriptions",
        //   path: "descriptions",
        //   navPath: "/solution/descriptions",
        //   component: Descriptions
        // },
        // {
        //   index: 4,
        //   tab: "custom-reporting",
        //   path: "custom-reporting",
        //   navPath: "/solution/custom-reporting",
        //   component: CustomReporting
        // }
      ]
    }
  ]
};
