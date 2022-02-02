//mport { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
//import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
