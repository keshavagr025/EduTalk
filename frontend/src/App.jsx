import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

import Learn from "./pages/learn/Learn";

import "./App.css"; // Optional global styles
import Profile from "./pages/profile/Profile";
import SideBar from "./pages/sidebar/SideBar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sidebar" element={<SideBar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
