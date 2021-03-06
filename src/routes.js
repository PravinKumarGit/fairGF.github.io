import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./route.constants";
import Loader from "./components/utility/loader";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("./containers/PersonalLoan/PersonalLoan"))
  },
  {
    path: PUBLIC_ROUTE.BANK_STATEMENT_PAGE,
    exact: true,
    component: lazy(() => import("./containers/PersonalLoan/PersonalLoan"))
  },
  {
    path: PUBLIC_ROUTE.GENERAL_LIVING_PAGE,
    exact: true,
    component: lazy(() => import("./containers/PersonalLoan/PersonalLoan"))
  },
  {
    path: PUBLIC_ROUTE.FINALLY_PAGE,
    exact: true,
    component: lazy(() => import("./containers/PersonalLoan/PersonalLoan"))
  },

  {
    path: PUBLIC_ROUTE.COMING_SOON,
    exact: true,
    component: lazy(() => import("./containers/Pages/ComingSoon"))
  },
  {
    path: PUBLIC_ROUTE.DECLINE,
    exact: true,
    component: lazy(() => import("./containers/Pages/Decline/Decline"))
  },
  {
    path: PUBLIC_ROUTE.PAGE_NOT_FOUND,
    component: lazy(() => import("./containers/Pages/404/404"))
  }
];

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <HashRouter>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </HashRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
