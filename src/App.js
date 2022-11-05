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
import Soutosoares from "./pages/home/souto_soares";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caeteacu" element={<Caeteacu />} />
          <Route path="/souto_soares" element={<Soutosoares />} />
          <Route path="/mucuge" element={<Mucuge />} />
          <Route path="/iraquara" element={<Iraquara />} />
          <Route path="/status" element={<Usuario />} />
          <Route path="/usuario" element={<Servico />} />
          <Route path="/administrador" element={<Administrador />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </UserProvider>
  );
}

export default App;
