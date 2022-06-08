import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/*" element={<Home />}></Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
