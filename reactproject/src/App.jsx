import { Outlet } from "react-router-dom";
import Menubar from "./Components/Menubar";

function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Menubar />
      <Outlet />
    </div>
  );
}

export default App;
