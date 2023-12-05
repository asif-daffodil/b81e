import { Outlet } from "react-router-dom";
import Menubar from "./Components/Menubar";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <div className="overflow-hidden">
      <Menubar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
