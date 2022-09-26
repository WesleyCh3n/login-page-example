import { useBoundStore } from "../store";

export const Home = () => {
  const name = useBoundStore((state) => state.name);
  return <div className="p-3 text-xl">{name ? "Hi " + name : ""}</div>;
};

export default Home;
