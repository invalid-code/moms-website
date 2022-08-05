import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Table = lazy(() => import("./components/Table"));
const Faq = lazy(() => import("./components/Faq"));
const About = lazy(() => import("./components/About"));
const NavBar = lazy(() => import("./components/NavBar"));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" component={Table}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/faq" component={Faq}></Route>
      </Routes>
    </>
  );
}

export default App;
