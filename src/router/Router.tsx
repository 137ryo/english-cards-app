import { BrowserRouter, Route, Switch } from "react-router-dom";

import { TopPageLayout } from "../components/templates/TopPageLayout";
import { CommonLayout } from "../components/templates/CommonLayout";
import { Top } from "../components/pages/Top";
import { Cards } from "../components/pages/Cards";
import { Setting } from "../components/pages/Setting";
//import { HeaderRoutes } from "./HeaderRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPageLayout>
            <Top />
          </TopPageLayout>
        </Route>
        <Route path="/cards">
          <CommonLayout>
            <Cards />
          </CommonLayout>
        </Route>
        <Route path="/setting">
          <CommonLayout>
            <Setting />
          </CommonLayout>
        </Route>
        {/* <Route
          path="/cards"
          render={({ match: { url } }) => (
            <Switch>
              {HeaderRoutes.map((route: any) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};
