import { Routes, Route } from "react-router-dom";
import Landing from "../../Components/Landing/Landing";
import Header from "../../Components/Header/Header";
import Articles from "../../Components/Articles/Articles";
import Schools from "../../Components/Schools/Schools";
import SpecificSchool from "../../Components/Schools/SpecificSchool";
import CategoryArticle from "../../Components/Article/CategoryArticle";
import UserArticle from "../../Components/Article/UserArticle";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="artikelen" element={<Articles />} />
        <Route path="artikelen/scholen" element={<Schools />} />
        <Route path="artikelen/scholen/:name" element={<SpecificSchool />} />
        <Route
          path="artikelen/categorieen/:name"
          element={<CategoryArticle />}
        />
        <Route path="artikelen/mijnartikelen" element={<UserArticle />} />
      </Routes>
    </>
  );
};

export default Home;
