import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Manubar from "./Components/Manubar";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";
import SingleUser from "./Components/SingleUser";

function App() {
  return (
    <>
      <div className="container">
        <Manubar />
        <Routes>
          <Route path="/" element="hOME"></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:id" element={<SingleUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
