import { Routes, Route } from "react-router-dom";
import Landing from "../../Components/Landing/Landing";
import Header from "../../Components/Header/Header";
import Articles from "../../Components/Articles/Articles";
import Schools from "../../Components/Schools/Schools";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="artikelen" element={<Articles />} />
        <Route path="artikelen/scholen" element={<Schools />} />
        <Route path="artikelen/mijnartikelen" element={<Schools />} />
      </Routes>
    </>
  );
};

export default Home;
