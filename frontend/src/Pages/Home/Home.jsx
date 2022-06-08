import { Routes, Route } from "react-router-dom";
import Landing from "../../Components/Landing/Landing";
import Header from "../../Components/Header/Header";
import Articles from "../../Components/Articles/Articles";
import Article from "../../Components/Article/Article";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="artikelen" element={<Articles />} />
        <Route path="artikelen/scholen" element={<Articles />} />
        <Route path="artikelen/mijnartikelen" element={<Articles />} />
      </Routes>
    </>
  );
};

export default Home;
