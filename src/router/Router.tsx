import { BrowserRouter, Route, Switch } from "react-router-dom";

import { TopPageLayout } from "../components/templates/TopPageLayout";
import { CommonLayout } from "../components/templates/CommonLayout";
import { Top } from "../components/pages/Top";
import { Cards } from "../components/pages/Cards";
import { Help } from "../components/pages/Help";
import { Page404 } from "../components/pages/Page404";

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
        <Route path="/help">
          <CommonLayout>
            <Help />
          </CommonLayout>
        </Route>
        <Route>
          <TopPageLayout>
            <Page404 />
          </TopPageLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
