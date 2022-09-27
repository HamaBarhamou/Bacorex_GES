/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/09/27 14:15:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/09/27 20:29:09 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
