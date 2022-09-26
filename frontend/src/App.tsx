import { Route, Routes } from "react-router-dom";

import { Nav } from "./components";
import { Home, Login, PageNotFound } from "./pages";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
