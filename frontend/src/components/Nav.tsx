import { Link, useNavigate } from "react-router-dom";
import { clearAuth } from "../api/Auth";
import { useBoundStore } from "../store";

export const Nav = () => {
  const [name, setName] = useBoundStore((state) => [state.name, state.setName]);
  let navigate = useNavigate();
  let menu;
  if (name === "") {
    menu = <Link to="/login" className="text-xl text-white">Login</Link>;
  } else {
    menu = (
      <button
        className="text-xl text-white"
        onClick={() => {
          clearAuth().then(() => {
            setName("");
            navigate("/login");
          });
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <div className="flex bg-slate-700 py-2 px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl text-white">AsRock</Link>
      </div>
      <div className="flex-none">{menu}</div>
    </div>
  );
};

export default Nav;
