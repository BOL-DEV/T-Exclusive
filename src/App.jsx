import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import AppLayout from "./Ui/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
