import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../api/Auth";
import { useBoundStore } from "../store";

export const Home = () => {
  const [name, setName] = useBoundStore((state) => [state.name, state.setName]);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let result = await isAuth();
      if (result.error) {
        navigate("/login");
      } else {
        setName(result.data.name)
      }
    })();
  }, []);
  return <div className="p-3 text-xl">{name ? "Hi " + name : ""}</div>;
};

export default Home;
