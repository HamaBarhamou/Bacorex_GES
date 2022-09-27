/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/09/27 14:15:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/09/27 15:27:19 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from "./pages/Connexion";


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
