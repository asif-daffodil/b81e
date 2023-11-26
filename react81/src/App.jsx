import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Manubar from "./Components/Manubar"
import Contact from "./Pages/Contact"



function App() {

  return (
    <>
      <Manubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element="About page" />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
