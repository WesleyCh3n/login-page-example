import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { isAuth } from "./api/Auth";

import { Nav } from "./components";
import { Home, Login, PageNotFound } from "./pages";
import { useBoundStore } from "./store";

function App() {
  const [name, setName] = useBoundStore((state) => [state.name, state.setName]);

  useEffect(() => {
    (async () => {
      if (name === "") {
        let result = await isAuth();
        if (result.data) {
          setName(result.data.name);
        }
      }
    })();
  });

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
