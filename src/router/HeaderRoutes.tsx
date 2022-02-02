import { Top } from "../components/pages/Top";
import { Cards } from "../components/pages/Cards";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/top",
    exact: false,
    children: <Top />
  },
  {
    path: "/",
    exact: true,
    children: <Cards />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
