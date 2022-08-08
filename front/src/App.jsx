import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import NavBar from "./components/NavBar/NavBar";
const About = lazy(() => import("./components/About"));
const Faq = lazy(() => import("./components/Faq"));
const Home = lazy(() => import("./components/Home"));
const Table = lazy(() => import("./components/Table"));
const FindProductList = lazy(() => import("./components/FindProductList"));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/product-list">
          <Route path="/" component={FindProductList} />
          <Route path="/:year/:month" component={Table} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
