import React from "react";
import Home from "./pages/home/palmeiras";
import Caeteacu from "./pages/home/caeteacu";
import Mucuge from "./pages/home/mucuge";
import Usuario from "./pages/usuario";
import Iraquara from "./pages/home/iraquara";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/caeteacu" element={<Caeteacu />} />
        <Route path="/mucuge" element={<Mucuge />} />
        <Route path="/iraquara" element={<Iraquara />} />
      </Routes>
    </Router>
  );
}

export default App;
