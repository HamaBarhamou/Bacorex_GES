
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from "./pages/Connexion";
import Work_page from "./pages/Work_page";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Connexion/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
