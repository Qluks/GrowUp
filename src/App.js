import React from "react";
import Home from "./pages/home/palmeiras";
import Caeteacu from "./pages/home/caeteacu";
import Mucuge from "./pages/home/mucuge";
import Usuario from "./pages/usuario/index";
import Administrador from "./pages/adm";
import Iraquara from "./pages/home/iraquara";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/home/styles";
import Servico from "./pages/usuario/servico";
import Cadastro from "./pages/cadastro/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caeteacu" element={<Caeteacu />} />
          <Route path="/mucuge" element={<Mucuge />} />
          <Route path="/iraquara" element={<Iraquara />} />
          <Route path="/status" element={<Usuario />} />
          <Route path="/usuario" element={<Servico />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
