import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
//Pages
import Home from "./pages/Home.jsx";
import Event from "./pages/Event.jsx";
import Teams from "./pages/Teams.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/**Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;