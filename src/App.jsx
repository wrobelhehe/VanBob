import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Swinki from "./components/Swinki";
import Mioty from "./components/Mioty";
import Planmioty from "./components/Planmioty";
import Sprzedaz from "./components/Sprzedaz";
import Wystawy from "./components/Wystawy";
import Search from "./components/Search";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home>/</Home>}></Route>
        <Route path="/swinki" element={<Swinki></Swinki>}></Route>
        <Route path="/mioty" element={<Mioty></Mioty>}></Route>
        <Route path="/planmioty" element={<Planmioty></Planmioty>}></Route>
        <Route path="/sprzedaz" element={<Sprzedaz></Sprzedaz>}></Route>
        <Route path="/wystawy" element={<Wystawy></Wystawy>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
